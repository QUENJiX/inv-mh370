/**
 * MH370 FLIGHT DATA - COMPREHENSIVE TIMELINE
 * Royal Intelligence Corps (KRR)
 * Every detail from first second to vanishing
 */

export const FLIGHT_INFO = {
    callsign: "MH370 / MAS370",
    aircraft: {
        type: "Boeing 777-200ER",
        registration: "9M-MRO",
        manufacturer: "Boeing",
        serialNumber: "28420",
        lineNumber: "404",
        firstFlight: "2002-05-14",
        delivered: "2002-05-31",
        engines: "2x Rolls-Royce Trent 892",
        totalFlightHours: "53,465.21",
        totalCycles: "7,525",
        livery: "Malaysia Airlines standard livery",
        capacity: "282 passengers (35 Business, 247 Economy)"
    },
    route: {
        origin: {
            code: "KUL",
            name: "Kuala Lumpur International Airport",
            city: "Kuala Lumpur",
            country: "Malaysia",
            coordinates: { lat: 2.7456, lng: 101.7072 },
            terminal: "Main Terminal",
            gate: "C1"
        },
        destination: {
            code: "PEK",
            name: "Beijing Capital International Airport",
            city: "Beijing",
            country: "China",
            coordinates: { lat: 40.0799, lng: 116.6031 },
            terminal: "Terminal 2"
        },
        plannedDistance: "2,700 nm (5,000 km)",
        plannedDuration: "5 hours 34 minutes",
        flightLevel: "FL350 (35,000 feet)",
        plannedRoute: "KUL → IGARI → BITOD → SUKET → PIBOS → TASEK → PEK"
    },
    people: {
        passengers: 227,
        crew: 12,
        total: 239,
        nationalities: 14
    },
    fuel: {
        loaded: "49,100 kg",
        requiredForFlight: "37,200 kg",
        reserve: "11,900 kg",
        estimatedEndurance: "7 hours 31 minutes"
    }
};

/**
 * COMPREHENSIVE TIMELINE - EVERY KNOWN DETAIL
 */
export const TIMELINE = [
    // PRE-FLIGHT
    {
        id: 1,
        time: "2014-03-07 14:21 UTC",
        localTime: "2014-03-07 22:21 MYT",
        event: "Aircraft arrives at gate from previous flight",
        details: "9M-MRO arrives at KUL gate C1 from previous domestic rotation",
        type: "ground",
        category: "Pre-Flight"
    },
    {
        id: 2,
        time: "2014-03-07 14:50 UTC",
        localTime: "2014-03-07 22:50 MYT",
        event: "Crew checks in for duty",
        details: "Captain Zaharie and First Officer Fariq report for duty. Cabin crew of 10 also check in",
        type: "ground",
        category: "Pre-Flight"
    },
    {
        id: 3,
        time: "2014-03-07 15:27 UTC",
        localTime: "2014-03-07 23:27 MYT",
        event: "Passenger boarding begins",
        details: "227 passengers begin boarding at Gate C1, KLIA Main Terminal",
        type: "ground",
        category: "Pre-Flight"
    },
    {
        id: 4,
        time: "2014-03-07 15:52 UTC",
        localTime: "2014-03-07 23:52 MYT",
        event: "All passengers boarded, doors close",
        details: "Aircraft doors closed. Final headcount: 227 passengers, 12 crew = 239 souls",
        type: "ground",
        category: "Pre-Flight"
    },
    {
        id: 5,
        time: "2014-03-07 16:15 UTC",
        localTime: "2014-03-08 00:15 MYT",
        event: "Pushback and engine start",
        details: "Aircraft pushes back from gate C1. Both Rolls-Royce Trent 892 engines started",
        type: "ground",
        category: "Pre-Flight"
    },

    // DEPARTURE
    {
        id: 6,
        time: "2014-03-07 16:27 UTC",
        localTime: "2014-03-08 00:27 MYT",
        event: "Scheduled departure time",
        details: "Original scheduled departure time for MH370",
        type: "schedule",
        category: "Departure"
    },
    {
        id: 7,
        time: "2014-03-07 16:40 UTC",
        localTime: "2014-03-08 00:40 MYT",
        event: "Taxi clearance received",
        details: "Ground Control clears MH370 to taxi to Runway 32R",
        type: "communication",
        category: "Departure",
        transcript: "Ground Control: 'Malaysian 370, taxi to holding point Alpha 10, Runway 32R'"
    },
    {
        id: 8,
        time: "2014-03-07 16:41 UTC",
        localTime: "2014-03-08 00:41 MYT",
        event: "TAKEOFF - Runway 32R",
        details: "MH370 becomes airborne from KUL Runway 32R. Weight: approximately 228,900 kg",
        type: "departure",
        category: "Departure",
        critical: true,
        transcript: "Tower: 'Malaysian 370, cleared for takeoff Runway 32R'\nMH370: 'Cleared for takeoff 32R, Malaysian 370'"
    },

    // CLIMB & CRUISE
    {
        id: 9,
        time: "2014-03-07 16:42 UTC",
        localTime: "2014-03-08 00:42 MYT",
        event: "Contact Kuala Lumpur Approach",
        details: "MH370 transfers to Lumpur Approach frequency 119.45",
        type: "communication",
        category: "Climb",
        transcript: "Tower: 'Malaysian 370, contact Lumpur Approach 119.45'\nMH370: '119.45, Malaysian 370'"
    },
    {
        id: 10,
        time: "2014-03-07 16:46 UTC",
        localTime: "2014-03-08 00:46 MYT",
        event: "Passing 18,000 feet",
        details: "Aircraft climbing through FL180. Speed: 280 knots",
        type: "flight",
        category: "Climb"
    },
    {
        id: 11,
        time: "2014-03-07 16:50 UTC",
        localTime: "2014-03-08 00:50 MYT",
        event: "Contact Lumpur Radar",
        details: "MH370 contacts Kuala Lumpur Area Control Centre (ACC)",
        type: "communication",
        category: "Climb",
        transcript: "Lumpur Radar: 'Malaysian 370, Lumpur Radar, identified. Climb FL350'\nMH370: 'Flight level 350, Malaysian 370'"
    },
    {
        id: 12,
        time: "2014-03-07 17:01 UTC",
        localTime: "2014-03-08 01:01 MYT",
        event: "ACARS sends routine position report",
        details: "Aircraft Communications Addressing and Reporting System (ACARS) transmits scheduled data burst to Malaysia Airlines operations center",
        type: "data",
        category: "Cruise",
        critical: true
    },
    {
        id: 13,
        time: "2014-03-07 17:07 UTC",
        localTime: "2014-03-08 01:07 MYT",
        event: "LAST ACARS DATA TRANSMISSION",
        details: "Final automatic ACARS report transmitted. Reports all systems normal. This is the last data received from aircraft systems. Next scheduled ACARS transmission at 01:37 MYT never occurs",
        type: "data",
        category: "Cruise",
        critical: true,
        systemData: {
            altitude: "35,000 ft",
            speed: "471 knots",
            fuelRemaining: "43,800 kg",
            position: "5.65°N, 102.01°E"
        }
    },
    {
        id: 14,
        time: "2014-03-07 17:08 UTC",
        localTime: "2014-03-08 01:08 MYT",
        event: "Aircraft enters Vietnamese FIR boundary zone",
        details: "MH370 approaching handoff point to Ho Chi Minh Area Control",
        type: "flight",
        category: "Cruise"
    },

    // CRITICAL HANDOFF
    {
        id: 15,
        time: "2014-03-07 17:19 UTC",
        localTime: "2014-03-08 01:19 MYT",
        event: "LAST VERBAL COMMUNICATION - 'Good night Malaysian Three Seven Zero'",
        details: "Final voice contact with any ATC facility. First Officer Fariq Abdul Hamid acknowledges handoff instruction. At this moment, ACARS was already disabled (manually or system failure)",
        type: "communication",
        category: "Critical",
        critical: true,
        transcript: "Lumpur Radar: 'Malaysian 370, contact Ho Chi Minh 120.9, good night'\nMH370 (FO Fariq): 'Good night, Malaysian Three Seven Zero'",
        analysisNotes: "Voice analysis confirmed this was First Officer Fariq Abdul Hamid speaking. Tone described as normal, no signs of distress"
    },
    {
        id: 16,
        time: "2014-03-07 17:20 UTC",
        localTime: "2014-03-08 01:20 MYT",
        event: "Expected contact with Ho Chi Minh ATC - DOES NOT OCCUR",
        details: "MH370 fails to check in with Ho Chi Minh ATC on 120.9 MHz as instructed. Vietnamese controllers wait for contact",
        type: "communication",
        category: "Critical",
        critical: true
    },
    {
        id: 17,
        time: "2014-03-07 17:21 UTC",
        localTime: "2014-03-08 01:21 MYT",
        event: "TRANSPONDER STOPS TRANSMITTING",
        details: "Aircraft's Mode S transponder (code: 2157) stops transmitting. Aircraft disappears from secondary radar. Last position near waypoint IGARI (6°56'12\"N, 103°35'6\"E)",
        type: "system",
        category: "Critical",
        critical: true,
        coordinates: { lat: 6.9367, lng: 103.585 }
    },
    {
        id: 18,
        time: "2014-03-07 17:21 UTC",
        localTime: "2014-03-08 01:21 MYT",
        event: "Aircraft disappears from civilian radar",
        details: "MH370 vanishes from Malaysian civilian ATC radar screens near waypoint IGARI in South China Sea",
        type: "radar",
        category: "Critical",
        critical: true
    },

    // DEVIATION
    {
        id: 19,
        time: "2014-03-07 17:22 UTC",
        localTime: "2014-03-08 01:22 MYT",
        event: "AIRCRAFT TURNS WESTWARD",
        details: "Military radar later reveals aircraft executed sharp left turn, deviating from planned route. New heading approximately 270° (due west). Turn executed near waypoint IGARI",
        type: "military",
        category: "Deviation",
        critical: true
    },
    {
        id: 20,
        time: "2014-03-07 17:30 UTC",
        localTime: "2014-03-08 01:30 MYT",
        event: "Ho Chi Minh ATC attempts contact",
        details: "Vietnamese controllers attempt to contact MH370 multiple times. No response",
        type: "communication",
        category: "Deviation",
        transcript: "Ho Chi Minh: 'Malaysian 370, Ho Chi Minh'\n[No response]\nHo Chi Minh: 'Malaysian 370, Ho Chi Minh, do you read?'\n[No response]"
    },
    {
        id: 21,
        time: "2014-03-07 17:36 UTC",
        localTime: "2014-03-08 01:36 MYT",
        event: "Ho Chi Minh contacts Kuala Lumpur",
        details: "Vietnamese ATC contacts Kuala Lumpur ACC to inquire about MH370 which has not established contact",
        type: "communication",
        category: "Deviation"
    },
    {
        id: 22,
        time: "2014-03-07 17:37 UTC",
        localTime: "2014-03-08 01:37 MYT",
        event: "Scheduled ACARS transmission - DOES NOT OCCUR",
        details: "ACARS half-hourly report scheduled for this time does not transmit. Confirms ACARS has been disabled",
        type: "data",
        category: "Deviation",
        critical: true
    },
    {
        id: 23,
        time: "2014-03-07 17:37 UTC",
        localTime: "2014-03-08 01:37 MYT",
        event: "Aircraft tracked by military radar crossing peninsula",
        details: "Royal Malaysian Air Force radar at Butterworth detects unidentified primary return crossing west coast of Malay Peninsula",
        type: "military",
        category: "Deviation",
        critical: true
    },
    {
        id: 24,
        time: "2014-03-07 17:52 UTC",
        localTime: "2014-03-08 01:52 MYT",
        event: "AIRCRAFT PASSES OVER PENANG ISLAND",
        details: "Military radar shows aircraft flying over/near Penang Island - Captain Zaharie's hometown. Altitude between 29,500-35,000 ft. First Officer Fariq's mobile phone detected by Penang cell tower (registered with network but no calls made)",
        type: "military",
        category: "Deviation",
        critical: true,
        coordinates: { lat: 5.4164, lng: 100.3327 },
        analysisNotes: "Mobile phone detection classified info - reportedly withheld from public safety report"
    },
    {
        id: 25,
        time: "2014-03-07 18:02 UTC",
        localTime: "2014-03-08 02:02 MYT",
        event: "Aircraft turns northwest",
        details: "Military radar shows aircraft executing turn to northwest heading, proceeding toward Andaman Sea",
        type: "military",
        category: "Deviation"
    },
    {
        id: 26,
        time: "2014-03-07 18:15 UTC",
        localTime: "2014-03-08 02:15 MYT",
        event: "Last definitive military radar contact",
        details: "Aircraft tracked approximately 10 nautical miles past waypoint VAMPI in Strait of Malacca",
        type: "military",
        category: "Deviation",
        critical: true
    },
    {
        id: 27,
        time: "2014-03-07 18:22 UTC",
        localTime: "2014-03-08 02:22 MYT",
        event: "FINAL MILITARY RADAR CONTACT",
        details: "Last primary radar contact - 200 nautical miles northwest of Penang Island over Andaman Sea. Aircraft heading northwest. This is the final confirmed radar position",
        type: "military",
        category: "Deviation",
        critical: true,
        coordinates: { lat: 6.65, lng: 97.75 }
    },

    // SATELLITE COMMUNICATIONS
    {
        id: 28,
        time: "2014-03-07 18:25 UTC",
        localTime: "2014-03-08 02:25 MYT",
        event: "SATCOM LOG-ON - Satellite Data Unit reconnects",
        details: "Aircraft's Satellite Data Unit (SDU) unexpectedly reconnects to Inmarsat-3 F1 satellite (Indian Ocean Region). This indicates either SDU power was restored or it was deliberately restarted. Creates first satellite 'handshake'",
        type: "satellite",
        category: "Satellite",
        critical: true,
        analysisNotes: "Power interruption to SDU could indicate electrical system reconfiguration"
    },
    {
        id: 29,
        time: "2014-03-07 18:28 UTC",
        localTime: "2014-03-08 02:28 MYT",
        event: "Ground-to-air call attempt #1",
        details: "Malaysia Airlines Operations Center attempts to contact aircraft via satellite phone. Call not answered (unanswered ring)",
        type: "satellite",
        category: "Satellite"
    },
    {
        id: 30,
        time: "2014-03-07 19:41 UTC",
        localTime: "2014-03-08 03:41 MYT",
        event: "Satellite handshake #2",
        details: "Automatic hourly handshake with Inmarsat satellite. Burst Timing Offset analysis indicates aircraft on southern corridor",
        type: "satellite",
        category: "Satellite",
        critical: true
    },
    {
        id: 31,
        time: "2014-03-07 20:41 UTC",
        localTime: "2014-03-08 04:41 MYT",
        event: "Satellite handshake #3",
        details: "Third automated handshake. Doppler analysis confirms southerly track",
        type: "satellite",
        category: "Satellite"
    },
    {
        id: 32,
        time: "2014-03-07 21:41 UTC",
        localTime: "2014-03-08 05:41 MYT",
        event: "Satellite handshake #4",
        details: "Fourth hourly handshake recorded",
        type: "satellite",
        category: "Satellite"
    },
    {
        id: 33,
        time: "2014-03-07 22:30 UTC",
        localTime: "2014-03-08 06:30 MYT",
        event: "SCHEDULED ARRIVAL BEIJING - MISSED",
        details: "MH370 was scheduled to land at Beijing Capital International Airport. Obviously never arrived. Passengers' families begin inquiring at arrival gate",
        type: "schedule",
        category: "Aftermath",
        critical: true
    },
    {
        id: 34,
        time: "2014-03-07 22:41 UTC",
        localTime: "2014-03-08 06:41 MYT",
        event: "Satellite handshake #5",
        details: "Fifth hourly handshake. Aircraft continuing on southern track",
        type: "satellite",
        category: "Satellite"
    },
    {
        id: 35,
        time: "2014-03-07 23:14 UTC",
        localTime: "2014-03-08 07:14 MYT",
        event: "Ground-to-air call attempt #2",
        details: "Second attempt by Malaysia Airlines to contact MH370 via satellite phone. Phone rings but not answered. Call duration: 2 rings (unanswered)",
        type: "satellite",
        category: "Satellite",
        critical: true,
        analysisNotes: "The fact that phone rang indicates SDU and satellite phone systems operational. Question: why no answer?"
    },
    {
        id: 36,
        time: "2014-03-07 23:41 UTC",
        localTime: "2014-03-08 07:41 MYT",
        event: "Satellite handshake #6",
        details: "Sixth hourly handshake with Inmarsat satellite",
        type: "satellite",
        category: "Satellite"
    },
    {
        id: 37,
        time: "2014-03-08 00:11 UTC",
        localTime: "2014-03-08 08:11 MYT",
        event: "Satellite handshake #7 (FINAL COMPLETE)",
        details: "Seventh and final complete hourly handshake. Aircraft position calculated to be along 7th arc in southern Indian Ocean",
        type: "satellite",
        category: "Satellite",
        critical: true
    },
    {
        id: 38,
        time: "2014-03-08 00:19 UTC",
        localTime: "2014-03-08 08:19 MYT",
        event: "FINAL PARTIAL HANDSHAKE - END OF FLIGHT",
        details: "Partial satellite handshake detected at 00:19:29 UTC followed by fragment at 00:19:37 UTC. Indicates power interruption consistent with fuel exhaustion, APU auto-start, then total power loss. This is the final electronic signal from MH370",
        type: "satellite",
        category: "End",
        critical: true,
        analysisNotes: "Partial handshake pattern consistent with: (1) Fuel exhaustion (2) APU auto-starting from fuel in feeder line (3) APU running briefly then flaming out (4) Complete electrical failure. Estimated position: Southern Indian Ocean, 7th arc, approximately S38° E87°"
    }
];

export const KEY_LOCATIONS = [
    {
        id: 1,
        name: "Kuala Lumpur (KUL)",
        type: "departure",
        description: "Departure airport - Gate C1, Runway 32R",
        coordinates: { lat: 2.7456, lng: 101.7072 }
    },
    {
        id: 2,
        name: "IGARI Waypoint",
        type: "critical",
        description: "Planned route waypoint - last civilian radar contact, start of deviation",
        coordinates: { lat: 6.9367, lng: 103.585 }
    },
    {
        id: 3,
        name: "BITOD Waypoint",
        type: "planned",
        description: "Planned route waypoint - never reached",
        coordinates: { lat: 8.75, lng: 106.0 }
    },
    {
        id: 4,
        name: "Kota Bharu",
        type: "deviation",
        description: "Aircraft passed near here during westward deviation",
        coordinates: { lat: 6.1664, lng: 102.2931 }
    },
    {
        id: 5,
        name: "Penang Island",
        type: "critical",
        description: "Captain's hometown - aircraft flew over, FO phone detected by cell tower",
        coordinates: { lat: 5.4164, lng: 100.3327 }
    },
    {
        id: 6,
        name: "VAMPI Waypoint",
        type: "deviation",
        description: "Aircraft tracked past this waypoint in Strait of Malacca",
        coordinates: { lat: 5.8833, lng: 98.8167 }
    },
    {
        id: 7,
        name: "Last Radar Point",
        type: "critical",
        description: "Final military radar contact - 200nm NW of Penang",
        coordinates: { lat: 6.65, lng: 97.75 }
    },
    {
        id: 8,
        name: "7th Arc Search Zone",
        type: "search",
        description: "Final satellite ping arc - fuel exhaustion calculated here",
        coordinates: { lat: -38.0, lng: 87.0 }
    },
    {
        id: 9,
        name: "Beijing (PEK)",
        type: "destination",
        description: "Intended destination - never reached",
        coordinates: { lat: 40.0799, lng: 116.6031 }
    }
];

export const INVESTIGATION_SUMMARY = {
    status: "UNRESOLVED",
    lastUpdated: "2024",
    officialConclusion: "Aircraft presumed to have crashed in southern Indian Ocean with no survivors. Cause undetermined.",
    primaryTheories: [
        {
            theory: "Pilot Action (Deliberate)",
            proponents: "Simon Hardy, Larry Vance, multiple analysts",
            evidence: "Flight simulator route, deliberate ACARS/transponder disabling, complex diversion maneuver, Penang overflight",
            status: "Leading theory among independent investigators"
        },
        {
            theory: "Mechanical Failure / Fire",
            proponents: "Some aviation experts",
            evidence: "Potential electrical fire causing incapacitation",
            status: "Considered but inconsistent with deliberate maneuvers"
        },
        {
            theory: "Hijacking / Third Party",
            proponents: "Initial investigation focus",
            evidence: "Iranian passport holders (cleared), no credible claim",
            status: "Ruled unlikely by investigators"
        }
    ],
    searchEfforts: [
        {
            phase: "Phase 1 - South China Sea",
            period: "March 8-15, 2014",
            area: "South China Sea, Gulf of Thailand",
            result: "No debris - wrong search area",
            cost: "~$30M"
        },
        {
            phase: "Phase 2 - Andaman Sea",
            period: "March 15-28, 2014",
            area: "Andaman Sea, Bay of Bengal",
            result: "No debris found",
            cost: "~$50M"
        },
        {
            phase: "Phase 3 - Southern Indian Ocean Surface",
            period: "March 28 - April 28, 2014",
            area: "Southern Indian Ocean",
            result: "Bluefin-21 AUV deployed, no wreckage",
            cost: "~$90M"
        },
        {
            phase: "Phase 4 - Underwater Search",
            period: "October 2014 - January 2017",
            area: "120,000 sq km of seabed along 7th arc",
            result: "No wreckage found despite exhaustive search",
            cost: "~$150M (Australia, Malaysia, China joint funding)"
        },
        {
            phase: "Ocean Infinity (Private)",
            period: "January - May 2018",
            area: "Additional 25,000 sq km north of previous zone",
            result: "No wreckage found",
            cost: "No-find, no-fee basis"
        }
    ],
    debrisFound: [
        {
            item: "Flaperon (Right Wing)",
            location: "Réunion Island, France",
            date: "2015-07-29",
            confirmed: true,
            notes: "First confirmed debris. Barnacle analysis consistent with Indian Ocean drift"
        },
        {
            item: "Wing Fragment with Stencil",
            location: "Mauritius",
            date: "2016-05-13",
            confirmed: true,
            notes: "MAS maintenance stencil visible"
        },
        {
            item: "Horizontal Stabilizer",
            location: "Mozambique",
            date: "2015-12-30",
            confirmed: true,
            notes: "Matched Boeing 777 part number"
        },
        {
            item: "Engine Cowling",
            location: "South Africa",
            date: "2016-03-22",
            confirmed: true,
            notes: "Rolls-Royce Trent 800 series"
        },
        {
            item: "Interior Panel",
            location: "Madagascar",
            date: "2016-06-16",
            confirmed: true,
            notes: "Closure panel from cabin"
        },
        {
            item: "Multiple Fragments",
            location: "Tanzania, Madagascar coast",
            date: "2016-2017",
            confirmed: "Partial - some confirmed, some probable",
            notes: "Various structural and interior pieces"
        }
    ],
    keyQuestions: [
        "Who disabled the transponder and ACARS, and when exactly?",
        "Why did the aircraft make a 180° turn back across Malaysia?",
        "What was the purpose of flying over/near Penang Island?",
        "Was the cabin depressurized to incapacitate passengers and crew?",
        "What is the significance of the home flight simulator route matching the crash path?",
        "Why was First Officer Fariq's phone detected by Penang cell tower?",
        "Why didn't anyone answer the two satellite phone calls?",
        "What happened in the cockpit between 01:07 and 01:19 MYT?",
        "Was there a struggle in the cockpit?",
        "Where exactly is the main wreckage?"
    ]
};

/**
 * Flight path coordinates for map visualization
 */
export const FLIGHT_PATH = {
    planned: [
        { lat: 2.7456, lng: 101.7072 },  // KUL
        { lat: 6.9367, lng: 103.585 },   // IGARI
        { lat: 8.75, lng: 106.0 },       // BITOD
        { lat: 15.0, lng: 113.0 },       // Waypoint
        { lat: 25.0, lng: 116.0 },       // Waypoint
        { lat: 40.0799, lng: 116.6031 }  // PEK
    ],
    actual: [
        { lat: 2.7456, lng: 101.7072 },  // KUL - Departure
        { lat: 6.9367, lng: 103.585 },   // IGARI - Last civilian radar
        { lat: 6.1664, lng: 102.2931 },  // Turn point
        { lat: 5.4164, lng: 100.3327 },  // Penang
        { lat: 5.8833, lng: 98.8167 },   // VAMPI
        { lat: 6.65, lng: 97.75 },       // Last radar
        { lat: 0.0, lng: 93.0 },         // Estimated waypoint
        { lat: -15.0, lng: 90.0 },       // Estimated position
        { lat: -38.0, lng: 87.0 }        // 7th arc - estimated crash
    ]
};
