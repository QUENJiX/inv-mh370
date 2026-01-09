import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Navigation, Move, ZoomIn, MousePointer, Database, RotateCcw } from 'lucide-react';

// Fix for default marker icons in Leaflet with Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom marker icons
const createIcon = (color, size = 12) => {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
      width: ${size}px;
      height: ${size}px;
      background-color: ${color};
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 0 10px ${color}, 0 2px 4px rgba(0,0,0,0.5);
    "></div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
    });
};

const createCrashIcon = () => {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
      width: 20px;
      height: 20px;
      border: 3px dashed #dc2626;
      border-radius: 50%;
      animation: pulse 2s infinite;
      box-shadow: 0 0 15px rgba(220, 38, 38, 0.6);
    "></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
    });
};

const createAircraftIcon = () => {
    return L.divIcon({
        className: 'aircraft-marker',
        html: `<div style="
      font-size: 24px;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
      transform: rotate(225deg);
    ">✈️</div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
    });
};

// Waypoint data with precise coordinates and times
const waypoints = [
    {
        id: 'kul',
        name: 'KUL - Kuala Lumpur International Airport',
        description: 'Departure from Gate C1. Takeoff from Runway 32R with 239 souls aboard.',
        position: [2.7456, 101.7072],
        color: '#22c55e',
        type: 'departure',
        time: '00:41 MYT (16:41 UTC)',
        timeLabel: 'TAKEOFF'
    },
    {
        id: 'igari',
        name: 'IGARI Waypoint',
        description: 'CRITICAL: Last ATC contact. First Officer Fariq: "Good night, Malaysian Three Seven Zero." Transponder disabled shortly after.',
        position: [6.9367, 103.585],
        color: '#ef4444',
        type: 'critical',
        time: '01:19 MYT (17:19 UTC)',
        timeLabel: 'LAST ATC CONTACT'
    },
    {
        id: 'kota-bharu',
        name: 'Kota Bharu Coastline',
        description: 'Aircraft tracked by military radar crossing east coast of Malaysia heading west.',
        position: [6.1664, 102.2931],
        color: '#f97316',
        type: 'deviation',
        time: '~01:30 MYT (17:30 UTC)',
        timeLabel: 'COAST CROSSING'
    },
    {
        id: 'penang',
        name: 'Penang Island',
        description: "CRITICAL: Captain Zaharie's hometown. First Officer Fariq's mobile phone detected by Penang cell tower - phone was ON.",
        position: [5.4164, 100.3327],
        color: '#f97316',
        type: 'critical',
        time: '01:52 MYT (17:52 UTC)',
        timeLabel: 'PHONE DETECTION'
    },
    {
        id: 'vampi',
        name: 'VAMPI Waypoint',
        description: 'Military radar tracked aircraft past this standard aviation waypoint in Strait of Malacca. Altitude between 29,500-35,000 ft.',
        position: [5.8833, 98.8167],
        color: '#f97316',
        type: 'deviation',
        time: '~02:02 MYT (18:02 UTC)',
        timeLabel: 'MILITARY RADAR'
    },
    {
        id: 'last-radar',
        name: 'Last Military Radar Contact',
        description: 'CRITICAL: Final confirmed radar position - 200 nautical miles northwest of Penang Island over the Andaman Sea.',
        position: [6.65, 97.75],
        color: '#eab308',
        type: 'critical',
        time: '02:22 MYT (18:22 UTC)',
        timeLabel: 'FINAL RADAR'
    },
    {
        id: 'sat-reconnect',
        name: 'Satellite Reconnection',
        description: 'Aircraft SDU (Satellite Data Unit) unexpectedly reconnects to Inmarsat-3 F1 satellite, indicating power restoration or manual restart.',
        position: [5.5, 96.0],
        color: '#06b6d4',
        type: 'satellite',
        time: '02:25 MYT (18:25 UTC)',
        timeLabel: 'SDU LOG-ON'
    },
    {
        id: 'pek',
        name: 'PEK - Beijing Capital International Airport',
        description: 'Intended destination - NEVER REACHED. Scheduled arrival was 06:30 MYT. Families waited at arrival gate.',
        position: [40.0799, 116.6031],
        color: '#6b7280',
        type: 'destination',
        time: '06:30 MYT (22:30 UTC)',
        timeLabel: 'SCHEDULED ARRIVAL'
    },
    {
        id: '7th-arc',
        name: '7th Arc - Estimated Crash Zone',
        description: 'CRITICAL: Final partial satellite handshake at 00:19 UTC consistent with fuel exhaustion, APU auto-start, then total power loss. Aircraft presumed to have crashed in this area.',
        position: [-38.0, 87.0],
        color: '#dc2626',
        type: 'crash',
        time: '08:19 MYT (00:19 UTC +1 day)',
        timeLabel: 'FINAL SIGNAL'
    }
];

// Planned route (KUL to Beijing)
const plannedRoute = [
    [2.7456, 101.7072],   // KUL
    [6.9367, 103.585],    // IGARI
    [10.5, 106.5],        // Vietnam coast
    [15.0, 108.5],        // South China Sea
    [22.0, 112.5],        // Approaching China
    [30.0, 114.5],        // Central China
    [40.0799, 116.6031]   // PEK Beijing
];

// Actual route (deviation)
const actualRoute = [
    [2.7456, 101.7072],   // KUL - Departure
    [6.9367, 103.585],    // IGARI - Last civilian radar, turn point
    [6.1664, 102.2931],   // Kota Bharu - crosses coast
    [5.4164, 100.3327],   // Penang - Captain's hometown
    [5.8833, 98.8167],    // VAMPI waypoint
    [6.65, 97.75],        // Last radar contact
    [5.0, 95.0],          // Andaman Sea
    [0.0, 93.0],          // Equator crossing
    [-10.0, 91.0],        // South Indian Ocean
    [-20.0, 89.0],        // Further south
    [-30.0, 88.0],        // Deep south
    [-38.0, 87.0]         // 7th arc - estimated crash
];

// Map bounds controller
function MapController({ bounds }) {
    const map = useMap();

    useEffect(() => {
        if (bounds) {
            map.fitBounds(bounds, { padding: [30, 30] });
        }
    }, [map, bounds]);

    return null;
}

export default function FlightMap() {
    const mapRef = useRef(null);

    // Initial view centered on the flight area
    const center = [5, 95];
    const zoom = 4;

    // Bounds to show the full route
    // Bounds to show the full route (Optimized)
    const bounds = [
        [-40, 85],   // Southwest corner (Southern Indian Ocean)
        [42, 118]    // Northeast corner (Beijing/China)
    ];

    const resetMap = () => {
        if (mapRef.current) {
            mapRef.current.fitBounds(bounds, { padding: [30, 30] });
        }
    };

    return (
        <div className="bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-900/50">
                <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-red-500" />
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-wider">
                        Interactive Flight Path Map
                    </span>
                </div>
                <div className="flex items-center gap-3 text-[9px] text-neutral-500">
                    <div className="flex items-center gap-1">
                        <Move className="w-3 h-3" />
                        <span>Pan</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <ZoomIn className="w-3 h-3" />
                        <span>Zoom</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MousePointer className="w-3 h-3" />
                        <span>Click</span>
                    </div>
                    <button
                        onClick={resetMap}
                        className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors ml-1"
                    >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                    </button>
                </div>
            </div>

            {/* Map Container */}
            <div style={{ height: '500px', width: '100%' }}>
                <MapContainer
                    center={center}
                    zoom={zoom}
                    style={{ height: '100%', width: '100%', background: '#0a1628' }}
                    ref={mapRef}
                    scrollWheelZoom={true}
                    doubleClickZoom={true}
                    dragging={true}
                    zoomControl={true}
                >
                    {/* Dark themed map tiles */}
                    <TileLayer
                        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    />

                    {/* Planned Route - dashed gray line */}
                    <Polyline
                        positions={plannedRoute}
                        pathOptions={{
                            color: '#6b7280',
                            weight: 2,
                            dashArray: '10, 10',
                            opacity: 0.5
                        }}
                    />

                    {/* Actual Route - solid red line with glow effect */}
                    <Polyline
                        positions={actualRoute}
                        pathOptions={{
                            color: '#dc2626',
                            weight: 4,
                            opacity: 0.3
                        }}
                    />
                    <Polyline
                        positions={actualRoute}
                        pathOptions={{
                            color: '#ef4444',
                            weight: 2,
                            opacity: 1
                        }}
                    />

                    {/* Waypoint Markers */}
                    {waypoints.map((wp) => (
                        <Marker
                            key={wp.id}
                            position={wp.position}
                            icon={wp.type === 'crash' ? createCrashIcon() : createIcon(wp.color, wp.type === 'critical' || wp.type === 'satellite' ? 14 : 10)}
                        >
                            <Popup className="custom-popup">
                                <div style={{
                                    background: '#1a1a1a',
                                    color: 'white',
                                    padding: '14px',
                                    borderRadius: '8px',
                                    minWidth: '260px',
                                    border: `2px solid ${wp.color}`
                                }}>
                                    <h3 style={{
                                        margin: '0 0 8px 0',
                                        fontSize: '13px',
                                        fontWeight: 'bold',
                                        color: wp.color
                                    }}>
                                        {wp.name}
                                    </h3>
                                    <p style={{
                                        margin: '0 0 10px 0',
                                        fontSize: '11px',
                                        lineHeight: '1.5',
                                        color: '#a3a3a3'
                                    }}>
                                        {wp.description}
                                    </p>
                                    <div style={{
                                        padding: '10px',
                                        background: '#0a0a0a',
                                        borderRadius: '6px',
                                        fontSize: '10px',
                                        fontFamily: 'monospace'
                                    }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                            <span style={{ color: '#525252' }}>COORDINATES:</span>
                                            <span style={{ color: '#22c55e' }}>
                                                {wp.position[0] >= 0 ? wp.position[0].toFixed(4) + '°N' : Math.abs(wp.position[0]).toFixed(4) + '°S'}, {wp.position[1].toFixed(4)}°E
                                            </span>
                                        </div>
                                        {wp.time && (
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ color: '#525252' }}>{wp.timeLabel}:</span>
                                                <span style={{ color: '#fbbf24' }}>{wp.time}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    ))}

                    {/* Aircraft icon at deviation point */}
                    <Marker
                        position={[6.9367, 103.585]}
                        icon={createAircraftIcon()}
                    >
                        <Popup>
                            <div style={{
                                background: '#1a1a1a',
                                color: 'white',
                                padding: '14px',
                                borderRadius: '8px',
                                minWidth: '260px',
                                border: '2px solid #ef4444'
                            }}>
                                <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold', color: '#ef4444' }}>
                                    ✈️ DEVIATION POINT - IGARI
                                </h3>
                                <p style={{ margin: '0 0 10px 0', fontSize: '11px', lineHeight: '1.5', color: '#a3a3a3' }}>
                                    Aircraft executed sharp 180° turn west after final ATC contact. Transponder disabled. Beginning of unexplained deviation from planned route.
                                </p>
                                <div style={{
                                    padding: '10px',
                                    background: '#0a0a0a',
                                    borderRadius: '6px',
                                    fontSize: '10px',
                                    fontFamily: 'monospace'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                        <span style={{ color: '#525252' }}>COORDINATES:</span>
                                        <span style={{ color: '#22c55e' }}>6.9367°N, 103.5850°E</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: '#525252' }}>TIME:</span>
                                        <span style={{ color: '#fbbf24' }}>01:21 MYT (17:21 UTC)</span>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>

                    <MapController bounds={bounds} />
                </MapContainer>
            </div>

            {/* Legend */}
            <div className="px-4 py-3 border-t border-neutral-800 bg-neutral-900/50">
                <div className="flex items-center justify-between gap-4">
                    {/* Left: Routes & Markers in two rows */}
                    <div className="flex flex-col gap-2">
                        {/* Row 1: Routes */}
                        <div className="flex items-center gap-4">
                            <span className="text-[9px] text-neutral-600 font-bold uppercase w-14">Routes:</span>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-[2px]" style={{ background: 'repeating-linear-gradient(90deg, #6b7280 0, #6b7280 3px, transparent 3px, transparent 6px)' }}></div>
                                <span className="text-[10px] text-neutral-400">Planned (KUL→PEK)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-[2px] bg-red-500 rounded"></div>
                                <span className="text-[10px] text-red-400">Actual Deviation</span>
                            </div>
                        </div>

                        {/* Row 2: Markers */}
                        <div className="flex items-center gap-4">
                            <span className="text-[9px] text-neutral-600 font-bold uppercase w-14">Markers:</span>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-[10px] text-neutral-400">Departure</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <span className="text-[10px] text-neutral-400">Critical</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <span className="text-[10px] text-neutral-400">Deviation</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                <span className="text-[10px] text-neutral-400">Satellite</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Data Source */}
                    <div className="flex items-center gap-2 text-[9px] text-neutral-600 flex-shrink-0">
                        <Database className="w-3 h-3" />
                        <span className="font-mono">ICAO | ATSB | DCA</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
