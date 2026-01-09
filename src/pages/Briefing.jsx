import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Shield, Activity, Database, AlertTriangle, Users,
    Plane, Clock, MapPin, ChevronRight, FileText,
    Target, Eye, Radio, Navigation, Radar, Wifi,
    ChevronDown, ChevronUp, MessageSquare, AlertCircle
} from 'lucide-react';
import { SUBJECTS, getNationalityStats, getGroupStats, NATIONALITIES, CLASSIFICATION } from '../data/subjects';
import { FLIGHT_INFO, TIMELINE, INVESTIGATION_SUMMARY, KEY_LOCATIONS, FLIGHT_PATH } from '../data/flight';
import FlightMap from '../components/FlightMap';

export default function Briefing() {
    const [expandedTimeline, setExpandedTimeline] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const nationalityStats = getNationalityStats();
    const groupStats = getGroupStats();

    const prioritySubjects = SUBJECTS.filter(s => s.classification === CLASSIFICATION.PRIORITY);
    const flaggedSubjects = SUBJECTS.filter(s => s.classification === CLASSIFICATION.FLAGGED);

    const timelineCategories = ['All', ...new Set(TIMELINE.map(t => t.category))];
    const filteredTimeline = selectedCategory === 'All'
        ? TIMELINE
        : TIMELINE.filter(t => t.category === selectedCategory);

    const getTimelineIcon = (type) => {
        switch (type) {
            case 'departure': return <Plane className="w-3 h-3" />;
            case 'communication': return <MessageSquare className="w-3 h-3" />;
            case 'data': return <Activity className="w-3 h-3" />;
            case 'military': return <Radar className="w-3 h-3" />;
            case 'satellite': return <Wifi className="w-3 h-3" />;
            case 'radar': return <Target className="w-3 h-3" />;
            case 'system': return <AlertCircle className="w-3 h-3" />;
            default: return <Clock className="w-3 h-3" />;
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'departure': return 'text-green-500 bg-green-500/20';
            case 'communication': return 'text-blue-500 bg-blue-500/20';
            case 'data': return 'text-purple-500 bg-purple-500/20';
            case 'military': return 'text-orange-500 bg-orange-500/20';
            case 'satellite': return 'text-cyan-500 bg-cyan-500/20';
            case 'radar': return 'text-yellow-500 bg-yellow-500/20';
            case 'system': return 'text-red-500 bg-red-500/20';
            default: return 'text-neutral-500 bg-neutral-500/20';
        }
    };

    return (
        <div className="relative z-10 pb-20">
            {/* Header */}
            <header className="border-b border-neutral-900">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="w-5 h-5 text-red-600" />
                                <span className="text-[10px] font-black tracking-[0.5em] text-red-600 uppercase">
                                    Kor Risik Diraja • Intelligence Registry
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
                                OPERATION <span className="text-red-600">MH370</span>
                            </h1>
                            <p className="text-neutral-500 mt-4 text-sm max-w-xl">
                                Classified investigation platform. {SUBJECTS.length} subjects under analysis.
                                All data cross-referenced with ICAO standards and verified intelligence sources.
                            </p>
                        </div>

                        <div className="hidden md:flex gap-4">
                            <div className="bg-neutral-900/60 border border-neutral-800 px-6 py-4 rounded-xl text-center">
                                <span className="block text-[9px] text-neutral-600 font-black uppercase tracking-widest mb-1">Subjects</span>
                                <div className="text-3xl font-black text-white">{SUBJECTS.length}</div>
                            </div>
                            <div className="bg-red-950/20 border border-red-900/30 px-6 py-4 rounded-xl text-center">
                                <span className="block text-[9px] text-red-900 font-black uppercase tracking-widest mb-1">Status</span>
                                <div className="text-sm font-black text-red-600 flex items-center gap-2">
                                    <Activity className="w-4 h-4" />
                                    ACTIVE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Quick Stats */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6">
                        <Target className="w-5 h-5 text-red-600 mb-3" />
                        <div className="text-2xl font-black text-red-500">{prioritySubjects.length}</div>
                        <span className="text-[10px] text-red-800 font-bold uppercase tracking-wider">Priority</span>
                    </div>
                    <div className="bg-amber-950/20 border border-amber-900/30 rounded-xl p-6">
                        <AlertTriangle className="w-5 h-5 text-amber-600 mb-3" />
                        <div className="text-2xl font-black text-amber-500">{flaggedSubjects.length}</div>
                        <span className="text-[10px] text-amber-800 font-bold uppercase tracking-wider">Flagged</span>
                    </div>
                    <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6">
                        <Users className="w-5 h-5 text-neutral-500 mb-3" />
                        <div className="text-2xl font-black text-white">{Object.keys(nationalityStats).length}</div>
                        <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-wider">Nationalities</span>
                    </div>
                    <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6">
                        <Database className="w-5 h-5 text-neutral-500 mb-3" />
                        <div className="text-2xl font-black text-white">{Object.keys(groupStats).length}</div>
                        <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-wider">Groups</span>
                    </div>
                </div>
            </section>

            {/* Flight Brief with Map */}
            <section className="max-w-7xl mx-auto px-6 mb-8">
                <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Plane className="w-5 h-5 text-red-600" />
                        <h2 className="text-sm font-black text-white uppercase tracking-wider">Flight Brief & Route Analysis</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Flight Details */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-neutral-950 rounded-xl p-4">
                                    <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-1">Callsign</span>
                                    <span className="text-lg font-bold text-white">{FLIGHT_INFO.callsign}</span>
                                </div>
                                <div className="bg-neutral-950 rounded-xl p-4">
                                    <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-1">Aircraft</span>
                                    <span className="text-sm font-bold text-white">{FLIGHT_INFO.aircraft.type}</span>
                                </div>
                                <div className="bg-neutral-950 rounded-xl p-4">
                                    <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-1">Registration</span>
                                    <span className="text-lg font-bold text-red-500">{FLIGHT_INFO.aircraft.registration}</span>
                                </div>
                                <div className="bg-neutral-950 rounded-xl p-4">
                                    <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-1">Date</span>
                                    <span className="text-lg font-bold text-white">8 MAR 2014</span>
                                </div>
                            </div>

                            {/* Route Diagram */}
                            <div className="bg-neutral-950 rounded-xl p-6">
                                <div className="flex items-center justify-between">
                                    <div className="text-center">
                                        <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-1">Origin</span>
                                        <span className="text-3xl font-black text-white">{FLIGHT_INFO.route.origin.code}</span>
                                        <span className="text-xs text-neutral-500 block">{FLIGHT_INFO.route.origin.city}</span>
                                    </div>
                                    <div className="flex-1 px-6">
                                        <div className="relative">
                                            <div className="h-px bg-gradient-to-r from-green-500 via-red-600 to-neutral-600"></div>
                                            <Plane className="w-5 h-5 text-red-500 absolute left-1/3 top-1/2 -translate-y-1/2 rotate-180" />
                                            <div className="absolute left-1/3 top-4 text-[8px] text-red-600 font-mono whitespace-nowrap">
                                                DEVIATION POINT
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center opacity-40">
                                        <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-1">Destination</span>
                                        <span className="text-3xl font-black text-neutral-600 line-through">{FLIGHT_INFO.route.destination.code}</span>
                                        <span className="text-xs text-neutral-600 block">{FLIGHT_INFO.route.destination.city}</span>
                                        <span className="text-[10px] text-red-600 font-black uppercase tracking-wider mt-1 block">NEVER ARRIVED</span>
                                    </div>
                                </div>
                            </div>

                            {/* Critical Flight Data */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-neutral-950 rounded-xl p-4">
                                    <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-2">Fuel Loaded</span>
                                    <span className="text-lg font-bold text-white">{FLIGHT_INFO.fuel.loaded}</span>
                                    <span className="text-[9px] text-neutral-600 block">Est. Endurance: {FLIGHT_INFO.fuel.estimatedEndurance}</span>
                                </div>
                                <div className="bg-neutral-950 rounded-xl p-4">
                                    <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-2">Flight Level</span>
                                    <span className="text-lg font-bold text-white">{FLIGHT_INFO.route.flightLevel}</span>
                                    <span className="text-[9px] text-neutral-600 block">Planned: {FLIGHT_INFO.route.plannedDuration}</span>
                                </div>
                            </div>

                            {/* Additional Critical Info */}
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-red-950/30 border border-red-900/30 rounded-xl p-3">
                                    <span className="text-[8px] text-red-800 font-bold uppercase block mb-1">Last Contact</span>
                                    <span className="text-sm font-bold text-red-500">01:19 MYT</span>
                                    <span className="text-[8px] text-red-800/70 block">IGARI Waypoint</span>
                                </div>
                                <div className="bg-yellow-950/30 border border-yellow-900/30 rounded-xl p-3">
                                    <span className="text-[8px] text-yellow-800 font-bold uppercase block mb-1">Last Radar</span>
                                    <span className="text-sm font-bold text-yellow-500">02:22 MYT</span>
                                    <span className="text-[8px] text-yellow-800/70 block">200nm NW Penang</span>
                                </div>
                                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3">
                                    <span className="text-[8px] text-neutral-600 font-bold uppercase block mb-1">Final Signal</span>
                                    <span className="text-sm font-bold text-neutral-400">08:19 MYT</span>
                                    <span className="text-[8px] text-neutral-600 block">7th Arc Ping</span>
                                </div>
                            </div>

                            {/* Crew Info */}
                            <div className="bg-neutral-950 rounded-xl p-4">
                                <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-3">Flight Crew</span>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center">
                                            <Users className="w-4 h-4 text-red-500" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-white block">Capt. Zaharie Ahmad Shah</span>
                                            <span className="text-[9px] text-neutral-600">PIC • 18,365 hrs</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-orange-900/30 flex items-center justify-center">
                                            <Users className="w-4 h-4 text-orange-500" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-white block">FO Fariq Abdul Hamid</span>
                                            <span className="text-[9px] text-neutral-600">SIC • 2,763 hrs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Flight Path Map */}
                        <FlightMap />
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column - Timeline & Subjects */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Comprehensive Timeline */}
                        <section className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-red-600" />
                                    <h2 className="text-sm font-black text-white uppercase tracking-wider">Comprehensive Timeline</h2>
                                    <span className="text-[10px] text-neutral-600 font-mono">({TIMELINE.length} events)</span>
                                </div>
                                <button
                                    onClick={() => setExpandedTimeline(!expandedTimeline)}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 text-xs font-bold uppercase transition-colors"
                                >
                                    {expandedTimeline ? 'Collapse' : 'Expand All'}
                                    {expandedTimeline ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                </button>
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {timelineCategories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-colors ${selectedCategory === cat
                                            ? 'bg-red-600 text-white'
                                            : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <div className={`space-y-3 ${expandedTimeline ? '' : 'max-h-[600px] overflow-y-auto pr-2'}`}>
                                {filteredTimeline.map((event, idx) => (
                                    <div
                                        key={event.id || idx}
                                        className={`p-4 rounded-xl transition-all ${event.critical
                                            ? 'bg-red-950/30 border border-red-900/40'
                                            : 'bg-neutral-950/50 border border-neutral-800/50'
                                            }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${getTypeColor(event.type)}`}>
                                                {getTimelineIcon(event.type)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="text-[10px] font-mono text-red-600">
                                                        {event.localTime?.split(' ')[1] || event.time}
                                                    </span>
                                                    <span className="text-[9px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-500 uppercase">
                                                        {event.category}
                                                    </span>
                                                    {event.critical && (
                                                        <span className="text-[9px] px-2 py-0.5 rounded bg-red-900/50 text-red-400 uppercase">
                                                            Critical
                                                        </span>
                                                    )}
                                                </div>
                                                <h4 className="text-sm font-bold text-white mb-1">{event.event}</h4>
                                                {event.details && (
                                                    <p className="text-xs text-neutral-400 leading-relaxed">{event.details}</p>
                                                )}
                                                {event.transcript && (
                                                    <div className="mt-3 p-3 bg-neutral-900/50 rounded-lg border-l-2 border-blue-600">
                                                        <span className="text-[9px] text-blue-500 font-bold uppercase block mb-1">Transcript</span>
                                                        <pre className="text-[11px] text-neutral-300 font-mono whitespace-pre-wrap">{event.transcript}</pre>
                                                    </div>
                                                )}
                                                {event.analysisNotes && (
                                                    <div className="mt-2 text-[10px] text-amber-600 italic">
                                                        📌 {event.analysisNotes}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Priority Subjects */}
                        <section className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <Target className="w-5 h-5 text-red-600" />
                                    <h2 className="text-sm font-black text-white uppercase tracking-wider">Priority Subjects</h2>
                                </div>
                                <Link
                                    to="/subjects?classification=PRIORITY"
                                    className="text-xs text-red-600 hover:text-red-500 font-bold uppercase tracking-wider flex items-center gap-1"
                                >
                                    View All <ChevronRight className="w-3 h-3" />
                                </Link>
                            </div>

                            <div className="space-y-3">
                                {prioritySubjects.map(subject => (
                                    <Link
                                        key={subject.id}
                                        to={`/subject/${subject.id}`}
                                        className="block bg-red-950/20 border border-red-900/30 rounded-xl p-4 hover:bg-red-950/30 transition-all group"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="text-xs font-mono text-red-700">#{String(subject.id).padStart(3, '0')}</span>
                                                    <span className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                                                        {subject.name}
                                                    </span>
                                                </div>
                                                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                                                    {subject.role} • {NATIONALITIES[subject.nationality]?.flag} {subject.nationality}
                                                </div>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-red-800 group-hover:text-red-500 transition-colors" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Flagged Subjects */}
                        <section className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                                    <h2 className="text-sm font-black text-white uppercase tracking-wider">Flagged Subjects</h2>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {flaggedSubjects.map(subject => (
                                    <Link
                                        key={subject.id}
                                        to={`/subject/${subject.id}`}
                                        className="block bg-amber-950/20 border border-amber-900/30 rounded-xl p-4 hover:bg-amber-950/30 transition-all group"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="text-xs font-mono text-amber-700">#{String(subject.id).padStart(3, '0')}</span>
                                                    <span className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                                                        {subject.name}
                                                    </span>
                                                </div>
                                                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                                                    {subject.role} • {NATIONALITIES[subject.nationality]?.flag} {subject.nationality}
                                                </div>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-amber-800 group-hover:text-amber-500 transition-colors" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Key Questions */}
                        <section className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Eye className="w-5 h-5 text-red-600" />
                                <h2 className="text-sm font-black text-white uppercase tracking-wider">Key Investigation Questions</h2>
                            </div>

                            <ul className="space-y-3">
                                {INVESTIGATION_SUMMARY.keyQuestions.map((question, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-400">
                                        <span className="flex-shrink-0 w-6 h-6 rounded bg-red-950/50 text-red-600 font-mono text-xs flex items-center justify-center">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <span className="pt-0.5">{question}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Right Column - Stats */}
                    <div className="space-y-8">

                        {/* Subject Access - Primary CTA */}
                        <Link
                            to="/subjects"
                            className="flex items-center justify-between bg-red-600 hover:bg-red-700 text-white rounded-xl p-4 transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                                <Database className="w-5 h-5" />
                                <span className="font-bold uppercase text-sm tracking-wider">Access All {SUBJECTS.length} Subjects</span>
                            </div>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        {/* Nationality Breakdown */}
                        <section className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <MapPin className="w-5 h-5 text-red-600" />
                                <h2 className="text-sm font-black text-white uppercase tracking-wider">By Nationality</h2>
                            </div>

                            <div className="space-y-2">
                                {Object.entries(nationalityStats)
                                    .sort((a, b) => b[1] - a[1])
                                    .map(([nat, count]) => (
                                        <Link
                                            key={nat}
                                            to={`/subjects?nationality=${nat}`}
                                            className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-neutral-800/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-2">
                                                <span>{NATIONALITIES[nat]?.flag || '🏳️'}</span>
                                                <span className="text-neutral-400">{NATIONALITIES[nat]?.name || nat}</span>
                                            </div>
                                            <span className="font-mono font-bold text-white">{count}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                        </section>

                        {/* Search Efforts */}
                        <section className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <Radar className="w-5 h-5 text-red-600" />
                                <h2 className="text-sm font-black text-white uppercase tracking-wider">Search Efforts</h2>
                            </div>

                            <div className="space-y-3">
                                {INVESTIGATION_SUMMARY.searchEfforts.map((effort, idx) => (
                                    <div key={idx} className="p-3 bg-neutral-950/50 rounded-lg">
                                        <div className="text-xs font-bold text-white mb-1">{effort.phase}</div>
                                        <div className="text-[10px] text-neutral-600 mb-1">{effort.period}</div>
                                        <div className="text-[10px] text-neutral-500">{effort.result}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Debris Found */}
                        <section className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <FileText className="w-5 h-5 text-red-600" />
                                <h2 className="text-sm font-black text-white uppercase tracking-wider">Confirmed Debris</h2>
                            </div>

                            <div className="space-y-3">
                                {INVESTIGATION_SUMMARY.debrisFound.slice(0, 5).map((debris, idx) => (
                                    <div key={idx} className="p-3 bg-neutral-950/50 rounded-lg border-l-2 border-green-600">
                                        <div className="text-xs font-bold text-white mb-1">{debris.item}</div>
                                        <div className="text-[10px] text-neutral-500">{debris.location} • {debris.date}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-neutral-900">
                <div className="flex items-center justify-between text-[10px] text-neutral-700 font-mono uppercase">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                        <span>System Active • Last Sync: {new Date().toISOString()}</span>
                    </div>
                    <div>KRR Intelligence Platform v2.0</div>
                </div>
            </footer>
        </div>
    );
}
