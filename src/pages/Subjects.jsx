import { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
    Search, Users, Globe, ChevronRight, ArrowLeft,
    Target, AlertTriangle, CheckCircle, Eye, Filter,
    Shield, User, ChevronDown, X, Layers
} from 'lucide-react';
import { SUBJECTS, NATIONALITIES, CLASSIFICATION, GROUPS } from '../data/subjects';

// Custom Dropdown Component
function FilterDropdown({ value, onChange, options, label, icon: Icon }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(o => o.value === value);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-left hover:border-neutral-700 transition-colors"
            >
                <Icon className="w-4 h-4 text-neutral-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                    <span className="text-[9px] text-neutral-600 font-bold uppercase tracking-wider block mb-0.5">{label}</span>
                    <span className="text-sm font-bold text-white truncate block">
                        {selectedOption?.label || 'All'}
                    </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            {open && (
                <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl overflow-hidden max-h-[300px] overflow-y-auto">
                    {options.map(option => (
                        <button
                            key={option.value}
                            onClick={() => {
                                onChange(option.value);
                                setOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${value === option.value
                                ? 'bg-red-600/20 text-red-400'
                                : 'hover:bg-neutral-800 text-neutral-300'
                                }`}
                        >
                            {option.flag && <span className="text-lg">{option.flag}</span>}
                            <span className="text-sm font-medium">{option.label}</span>
                            {value === option.value && (
                                <CheckCircle className="w-4 h-4 text-red-500 ml-auto" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Subjects() {
    const [searchParams] = useSearchParams();
    const initialGroup = searchParams.get('group') || 'All';
    const initialClassification = searchParams.get('classification') || 'All';
    const initialNationality = searchParams.get('nationality') || 'All';

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGroup, setSelectedGroup] = useState(initialGroup);
    const [selectedNationality, setSelectedNationality] = useState(initialNationality);
    const [selectedClassification, setSelectedClassification] = useState(initialClassification);

    // Filter out "Investigation Flagged" from groups since it's covered by classification filter
    const groupOptions = [
        { value: 'All', label: 'All Groups' },
        ...Object.values(GROUPS)
            .filter(g => g !== GROUPS.INVESTIGATION)
            .map(g => ({ value: g, label: g }))
    ];

    const nationalityOptions = [
        { value: 'All', label: 'All Nationalities', flag: '🌐' },
        ...Object.entries(NATIONALITIES).map(([code, nat]) => ({
            value: code,
            label: nat.name,
            flag: nat.flag
        }))
    ];

    const classificationOptions = [
        { value: 'All', label: 'All Classifications' },
        { value: CLASSIFICATION.PRIORITY, label: 'Priority', color: 'red' },
        { value: CLASSIFICATION.FLAGGED, label: 'Flagged', color: 'amber' },
        { value: CLASSIFICATION.CLEARED, label: 'Cleared', color: 'green' },
        { value: CLASSIFICATION.UNREVIEWED, label: 'Unreviewed', color: 'gray' }
    ];

    // Helper to get saved classification from localStorage (or fallback to original)
    const getSubjectClassification = (subject) => {
        const savedClassification = localStorage.getItem(`mh370_classification_${subject.id}`);
        return savedClassification || subject.classification;
    };

    const filteredSubjects = useMemo(() => {
        return SUBJECTS.filter(subject => {
            const matchesSearch =
                subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                subject.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                String(subject.id).includes(searchTerm);
            const matchesGroup = selectedGroup === 'All' || subject.group === selectedGroup;
            const matchesNationality = selectedNationality === 'All' || subject.nationality === selectedNationality;
            const effectiveClassification = getSubjectClassification(subject);
            const matchesClassification = selectedClassification === 'All' || effectiveClassification === selectedClassification;

            return matchesSearch && matchesGroup && matchesNationality && matchesClassification;
        });
    }, [searchTerm, selectedGroup, selectedNationality, selectedClassification]);

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedGroup('All');
        setSelectedNationality('All');
        setSelectedClassification('All');
    };

    const hasActiveFilters = searchTerm || selectedGroup !== 'All' || selectedNationality !== 'All' || selectedClassification !== 'All';

    const getClassificationBadge = (classification) => {
        switch (classification) {
            case CLASSIFICATION.PRIORITY:
                return <span className="badge-priority px-2 py-0.5 rounded text-[9px] font-bold uppercase">Priority</span>;
            case CLASSIFICATION.FLAGGED:
                return <span className="badge-flagged px-2 py-0.5 rounded text-[9px] font-bold uppercase">Flagged</span>;
            case CLASSIFICATION.CLEARED:
                return <span className="badge-cleared px-2 py-0.5 rounded text-[9px] font-bold uppercase">Cleared</span>;
            default:
                return <span className="badge-unreviewed px-2 py-0.5 rounded text-[9px] font-bold uppercase">Unreviewed</span>;
        }
    };

    return (
        <div className="relative z-10 pb-20">
            {/* Header */}
            <header className="border-b border-neutral-900 sticky top-0 bg-[#020202]/95 backdrop-blur-xl z-40">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <Link
                                to="/"
                                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Shield className="w-4 h-4 text-red-600" />
                                    <span className="text-[9px] font-black tracking-[0.4em] text-red-600 uppercase">KRR Database</span>
                                </div>
                                <h1 className="text-2xl font-black text-white uppercase tracking-tight">
                                    Subject Registry
                                </h1>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {hasActiveFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors text-xs font-bold uppercase"
                                >
                                    <X className="w-3 h-3" />
                                    Clear Filters
                                </button>
                            )}
                            <div className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-center">
                                <span className="text-xl font-black text-red-500">{filteredSubjects.length}</span>
                                <span className="text-[9px] text-neutral-600 font-bold uppercase block">
                                    / {SUBJECTS.length}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="mb-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search by name, role, or ID..."
                                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-12 pr-4 text-base focus:border-red-900/50 focus:bg-neutral-950 transition-all outline-none text-white placeholder:text-neutral-600"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-white"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <FilterDropdown
                            value={selectedGroup}
                            onChange={setSelectedGroup}
                            options={groupOptions}
                            label="Group"
                            icon={Layers}
                        />
                        <FilterDropdown
                            value={selectedNationality}
                            onChange={setSelectedNationality}
                            options={nationalityOptions}
                            label="Nationality"
                            icon={Globe}
                        />
                        <FilterDropdown
                            value={selectedClassification}
                            onChange={setSelectedClassification}
                            options={classificationOptions}
                            label="Classification"
                            icon={Target}
                        />
                    </div>
                </div>
            </header>

            {/* Subject Grid */}
            <main className="max-w-7xl mx-auto px-6 py-8">
                {filteredSubjects.length === 0 ? (
                    <div className="text-center py-20">
                        <Eye className="w-12 h-12 text-neutral-800 mx-auto mb-4" />
                        <p className="text-neutral-600 text-sm uppercase tracking-wider mb-4">No subjects match your criteria</p>
                        <button
                            onClick={clearFilters}
                            className="text-red-500 hover:text-red-400 text-sm font-bold uppercase"
                        >
                            Clear all filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredSubjects.map(subject => {
                            const effectiveClassification = getSubjectClassification(subject);
                            return (
                                <Link
                                    key={subject.id}
                                    to={`/subject/${subject.id}`}
                                    className="subject-card bg-neutral-900/60 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 group"
                                >
                                    <div className="flex items-start justify-between gap-3 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${effectiveClassification === CLASSIFICATION.PRIORITY
                                                ? 'bg-red-950/40 border-red-900/50 text-red-500'
                                                : effectiveClassification === CLASSIFICATION.FLAGGED
                                                    ? 'bg-amber-950/40 border-amber-900/50 text-amber-500'
                                                    : effectiveClassification === CLASSIFICATION.CLEARED
                                                        ? 'bg-green-950/40 border-green-900/50 text-green-500'
                                                        : 'bg-neutral-950 border-neutral-800 text-neutral-600'
                                                }`}>
                                                <User className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-mono text-neutral-600">
                                                    #{String(subject.id).padStart(3, '0')}
                                                </span>
                                            </div>
                                        </div>
                                        {getClassificationBadge(effectiveClassification)}
                                    </div>

                                    <h3 className="font-bold text-white text-sm mb-2 group-hover:text-red-400 transition-colors line-clamp-1">
                                        {subject.name}
                                    </h3>

                                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-3 line-clamp-1">
                                        {subject.role}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs text-neutral-600">
                                            <span>{NATIONALITIES[subject.nationality]?.flag}</span>
                                            <span>{subject.nationality}</span>
                                            <span>•</span>
                                            <span>Age {subject.age}</span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-neutral-700 group-hover:text-red-500 transition-colors" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
}
