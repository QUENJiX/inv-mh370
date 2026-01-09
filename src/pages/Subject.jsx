import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Shield, User, MapPin, Briefcase, FileText,
    Terminal, Activity, ChevronLeft, ChevronRight, Save,
    AlertTriangle, CheckCircle, Target, Eye, Printer,
    Link2, Clock, Building, ExternalLink, Users
} from 'lucide-react';
import { getSubjectById, SUBJECTS, NATIONALITIES, CLASSIFICATION, GROUPS } from '../data/subjects';

export default function Subject() {
    const { id } = useParams();
    const navigate = useNavigate();
    const subject = getSubjectById(id);

    const [notes, setNotes] = useState('');
    const [classification, setClassification] = useState('');
    const [saved, setSaved] = useState(false);
    const [classificationSaved, setClassificationSaved] = useState(false);

    // Load saved data from localStorage
    useEffect(() => {
        if (subject) {
            const savedNotes = localStorage.getItem(`mh370_notes_${id}`);
            const savedClassification = localStorage.getItem(`mh370_classification_${id}`);

            if (savedNotes) setNotes(savedNotes);
            if (savedClassification) {
                setClassification(savedClassification);
            } else {
                setClassification(subject.classification);
            }
        }
    }, [id, subject]);

    // Auto-save classification immediately when changed
    const handleClassificationChange = (newClassification) => {
        setClassification(newClassification);
        localStorage.setItem(`mh370_classification_${id}`, newClassification);
        setClassificationSaved(true);
        setTimeout(() => setClassificationSaved(false), 1500);
    };

    // Save notes only
    const handleSave = () => {
        localStorage.setItem(`mh370_notes_${id}`, notes);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handlePrint = () => {
        window.print();
    };

    if (!subject) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-white mb-2">Subject Not Found</h2>
                    <p className="text-neutral-500 mb-6">ID #{id} does not exist in the registry</p>
                    <Link to="/subjects" className="text-red-500 hover:text-red-400">
                        Return to Registry
                    </Link>
                </div>
            </div>
        );
    }

    const prevSubject = SUBJECTS.find(s => s.id === subject.id - 1);
    const nextSubject = SUBJECTS.find(s => s.id === subject.id + 1);

    const getClassificationStyle = (classif) => {
        switch (classif) {
            case CLASSIFICATION.PRIORITY:
                return 'bg-red-600 text-white border-red-600';
            case CLASSIFICATION.FLAGGED:
                return 'bg-amber-600 text-white border-amber-600';
            case CLASSIFICATION.CLEARED:
                return 'bg-green-600 text-white border-green-600';
            default:
                return 'bg-neutral-700 text-neutral-300 border-neutral-700';
        }
    };

    // Get all connected subjects
    const connectedSubjects = (subject.connections || []).map(connId => getSubjectById(connId)).filter(Boolean);

    return (
        <div className="relative z-10 min-h-screen">
            {/* Header */}
            <header className="border-b border-neutral-900 sticky top-0 bg-[#020202]/95 backdrop-blur-xl z-50 no-print">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                to="/subjects"
                                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Shield className="w-4 h-4 text-red-600" />
                                    <span className="text-[9px] font-black tracking-[0.4em] text-red-600 uppercase">Subject Dossier</span>
                                </div>
                                <h1 className="text-xl font-black text-white uppercase tracking-tight">
                                    #{String(subject.id).padStart(3, '0')} • {subject.name}
                                </h1>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={handlePrint}
                                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                                title="Print Dossier"
                            >
                                <Printer className="w-5 h-5" />
                            </button>

                            {prevSubject && (
                                <Link
                                    to={`/subject/${prevSubject.id}`}
                                    className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                                    title={`Previous: ${prevSubject.name}`}
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </Link>
                            )}
                            {nextSubject && (
                                <Link
                                    to={`/subject/${nextSubject.id}`}
                                    className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                                    title={`Next: ${nextSubject.name}`}
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">

                        {/* Photo Placeholder */}
                        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
                            <div className="relative w-full aspect-[3/4] bg-neutral-950 border border-neutral-800 rounded-xl flex flex-col items-center justify-center overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-red-500/40 shadow-[0_0_15px_rgba(220,38,38,0.5)] animate-scan"></div>
                                <User className="w-16 h-16 text-neutral-800" />
                                <div className="absolute bottom-3 text-[9px] font-mono text-neutral-600 uppercase">
                                    REF: MH370-{String(subject.id).padStart(3, '0')}
                                </div>
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4">
                            <div className="p-4 bg-neutral-950 rounded-xl">
                                <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-2">Registry Status</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                                    <span className="text-xs font-mono font-bold text-red-500 uppercase">Missing // Inactive</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-neutral-950 rounded-lg text-center">
                                    <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-1">Nationality</span>
                                    <div className="text-lg">{NATIONALITIES[subject.nationality]?.flag}</div>
                                    <span className="text-xs font-bold text-white">{subject.nationality}</span>
                                </div>
                                <div className="p-3 bg-neutral-950 rounded-lg text-center">
                                    <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-1">Age</span>
                                    <div className="text-xl font-bold text-white">{subject.age}</div>
                                </div>
                            </div>

                            <div className="p-3 bg-neutral-950 rounded-lg">
                                <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-1">Seat Assignment</span>
                                <span className="text-sm font-bold text-white">{subject.seat}</span>
                            </div>

                            {subject.employer && (
                                <div className="p-3 bg-neutral-950 rounded-lg">
                                    <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-1">Employer</span>
                                    <span className="text-sm font-bold text-white">{subject.employer}</span>
                                </div>
                            )}

                            {subject.dob && (
                                <div className="p-3 bg-neutral-950 rounded-lg">
                                    <span className="text-[9px] text-neutral-600 font-bold uppercase block mb-1">Date of Birth</span>
                                    <span className="text-sm font-bold text-white">{subject.dob}</span>
                                </div>
                            )}
                        </div>

                        {/* Classification Control */}
                        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 no-print">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] text-neutral-600 font-bold uppercase">Classification</span>
                                {classificationSaved && (
                                    <span className="text-[9px] text-green-500 font-bold uppercase animate-pulse">Saved</span>
                                )}
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {Object.values(CLASSIFICATION).map(classif => (
                                    <button
                                        key={classif}
                                        onClick={() => handleClassificationChange(classif)}
                                        className={`px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all ${classification === classif
                                            ? getClassificationStyle(classif)
                                            : 'bg-neutral-950 text-neutral-500 border-neutral-800 hover:border-neutral-700'
                                            }`}
                                    >
                                        {classif}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* ALL Connections - No limit */}
                        {connectedSubjects.length > 0 && (
                            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Link2 className="w-4 h-4 text-red-600" />
                                    <span className="text-[10px] text-neutral-600 font-bold uppercase">
                                        Known Connections ({connectedSubjects.length})
                                    </span>
                                </div>
                                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                                    {connectedSubjects.map(connSubject => (
                                        <Link
                                            key={connSubject.id}
                                            to={`/subject/${connSubject.id}`}
                                            className="flex items-center gap-3 p-3 bg-neutral-950 rounded-lg hover:bg-neutral-900 transition-colors group"
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center">
                                                <span className="text-xs">{NATIONALITIES[connSubject.nationality]?.flag}</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-[9px] font-mono text-neutral-600 mb-0.5">
                                                    #{String(connSubject.id).padStart(3, '0')}
                                                </div>
                                                <div className="text-xs font-bold text-white truncate group-hover:text-red-400 transition-colors">
                                                    {connSubject.name}
                                                </div>
                                                <div className="text-[9px] text-neutral-600 truncate">
                                                    {connSubject.role}
                                                </div>
                                            </div>
                                            <ExternalLink className="w-3 h-3 text-neutral-700 group-hover:text-red-500 flex-shrink-0" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">

                        {/* Header Info */}
                        <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8">
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="w-4 h-4 text-red-600" />
                                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.4em]">
                                    Classified Personnel Dossier
                                </span>
                            </div>

                            <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">
                                {subject.name}
                            </h2>

                            <div className="flex flex-wrap items-center gap-4">
                                <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${getClassificationStyle(classification)}`}>
                                    {classification}
                                </span>
                                <span className="text-neutral-500 text-xs font-mono uppercase">
                                    Role: {subject.role}
                                </span>
                                <span className="text-neutral-600">|</span>
                                <span className="text-neutral-500 text-xs font-mono uppercase">
                                    Group: {subject.group}
                                </span>
                                {connectedSubjects.length > 0 && (
                                    <>
                                        <span className="text-neutral-600">|</span>
                                        <span className="text-neutral-500 text-xs font-mono uppercase flex items-center gap-1">
                                            <Users className="w-3 h-3" />
                                            {connectedSubjects.length} Connections
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Biography */}
                        <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <FileText className="w-5 h-5 text-red-600" />
                                <h3 className="text-sm font-black text-white uppercase tracking-wider">Biography & Identity</h3>
                            </div>
                            <div className="text-neutral-300 leading-relaxed whitespace-pre-line">
                                {subject.biography}
                            </div>
                        </div>

                        {/* Personal Details */}
                        {subject.personalDetails && (
                            <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <User className="w-5 h-5 text-red-600" />
                                    <h3 className="text-sm font-black text-white uppercase tracking-wider">Personal Details</h3>
                                </div>
                                <div className="text-neutral-300 leading-relaxed whitespace-pre-line">
                                    {subject.personalDetails}
                                </div>
                            </div>
                        )}

                        {/* Investigation Intel */}
                        {subject.investigationIntel && (
                            <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Activity className="w-5 h-5 text-red-600" />
                                    <h3 className="text-sm font-black text-red-500 uppercase tracking-wider">Investigation Intelligence</h3>
                                </div>
                                <div className="text-neutral-300 leading-relaxed whitespace-pre-line font-mono text-sm">
                                    {subject.investigationIntel}
                                </div>
                            </div>
                        )}

                        {/* Flight Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Terminal className="w-4 h-4 text-neutral-600" />
                                    <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Flight Parameters</h4>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-xs border-b border-neutral-800/50 pb-2">
                                        <span className="text-neutral-500 uppercase">Carrier</span>
                                        <span className="font-mono text-white">Malaysia Airlines</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs border-b border-neutral-800/50 pb-2">
                                        <span className="text-neutral-500 uppercase">Flight</span>
                                        <span className="font-mono text-white">MH370</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs border-b border-neutral-800/50 pb-2">
                                        <span className="text-neutral-500 uppercase">Route</span>
                                        <span className="font-mono text-white">KUL → PEK</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs border-b border-neutral-800/50 pb-2">
                                        <span className="text-neutral-500 uppercase">Date</span>
                                        <span className="font-mono text-white">8 MAR 2014</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-neutral-500 uppercase">Aircraft</span>
                                        <span className="font-mono text-white">9M-MRO</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="w-4 h-4 text-neutral-600" />
                                    <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Intelligence Sources</h4>
                                </div>
                                <div className="space-y-2">
                                    {subject.sources?.map((source, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-600/50"></div>
                                            <span className="font-mono">{source}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Investigative Notes */}
                        <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 no-print">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <Eye className="w-5 h-5 text-red-600" />
                                    <h3 className="text-sm font-black text-white uppercase tracking-wider">Investigative Notes</h3>
                                </div>
                                <button
                                    onClick={handleSave}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${saved
                                        ? 'bg-green-600 text-white'
                                        : 'bg-red-600 hover:bg-red-700 text-white'
                                        }`}
                                >
                                    <Save className="w-4 h-4" />
                                    {saved ? 'Saved' : 'Save'}
                                </button>
                            </div>

                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Enter investigative notes for this subject... (auto-saved to local storage)"
                                className="notes-textarea"
                                rows={8}
                            />

                            <div className="mt-4 text-[10px] text-neutral-600 font-mono">
                                Notes are stored locally in your browser. They are not transmitted externally.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Footer */}
            <footer className="border-t border-neutral-900 mt-12 no-print">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center justify-between">
                        {prevSubject ? (
                            <Link
                                to={`/subject/${prevSubject.id}`}
                                className="flex items-center gap-3 text-neutral-500 hover:text-white transition-colors group"
                            >
                                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                <div>
                                    <div className="text-[10px] uppercase tracking-wider text-neutral-600">Previous</div>
                                    <div className="text-sm font-bold">{prevSubject.name}</div>
                                </div>
                            </Link>
                        ) : <div />}

                        <Link to="/subjects" className="text-xs text-neutral-600 hover:text-white uppercase tracking-wider">
                            Back to Registry
                        </Link>

                        {nextSubject ? (
                            <Link
                                to={`/subject/${nextSubject.id}`}
                                className="flex items-center gap-3 text-neutral-500 hover:text-white transition-colors group text-right"
                            >
                                <div>
                                    <div className="text-[10px] uppercase tracking-wider text-neutral-600">Next</div>
                                    <div className="text-sm font-bold">{nextSubject.name}</div>
                                </div>
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            </footer>
        </div>
    );
}
