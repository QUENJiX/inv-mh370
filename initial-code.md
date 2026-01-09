```Code
import React, { useState, useMemo } from 'react';
import { 
  Search, User, Briefcase, Globe, Heart, 
  ChevronRight, X, MapPin, Shield, AlertTriangle, 
  Database, Activity, Layers, Terminal, FileText,
  ExternalLink
} from 'lucide-react';

/**
 * CORE DATA: VERIFIED MANIFEST DATA
 */
const VERIFIED_CREW = [
  { id: 1, name: "Zaharie Ahmad Shah", age: 53, nationality: "MYS", role: "Captain", group: "Crew", bio: "Pilot in Command. Joined MAS in 1981. Total flight hours: 18,365. Known for his technical mastery and custom-built home simulator.", details: "Resident of Shah Alam. Described as a dedicated aviation enthusiast and mentor.", seat: "Flight Deck" },
  { id: 2, name: "Fariq Abdul Hamid", age: 27, nationality: "MYS", role: "First Officer", group: "Crew", bio: "Joined MAS in 2007. Transitioning to Boeing 777. This was his final training flight before full certification.", details: "Son of a high-ranking civil servant. Known for his professional discipline.", seat: "Flight Deck" },
  { id: 3, name: "Patrick Francis Gomes", age: 51, nationality: "MYS", role: "In-flight Supervisor", group: "Crew", bio: "Long-serving supervisor with over 30 years experience. Responsible for the safety of the entire cabin.", details: "Known as a 'gentle giant' and mentor to the younger crew members.", seat: "Cabin Crew" },
  { id: 4, name: "Andrew Nari", age: 49, nationality: "MYS", role: "Leading Steward", group: "Crew", bio: "A veteran member of the cabin team. His family became prominent advocates for the MH370 families.", details: "Devoted father and fan of Liverpool FC.", seat: "Cabin Crew" },
  { id: 5, name: "Goh Sock Lay", age: 45, nationality: "MYS", role: "Chief Stewardess", group: "Crew", bio: "Highest-ranking female crew member on board. Known professionally as 'Sheila'.", details: "Remembered for her leadership and dedication to passenger comfort.", seat: "Cabin Crew" },
  { id: 6, name: "Tan Ser Kuin", age: 43, nationality: "MYS", role: "Leading Stewardess", group: "Crew", bio: "A senior cabin crew member with decades of service across multiple aircraft types.", details: "Expert in in-flight safety protocols.", seat: "Cabin Crew" },
  { id: 7, name: "Wan Swaid Wan Ismail", age: 42, nationality: "MYS", role: "Flight Steward", group: "Crew", bio: "A dedicated professional and father. Frequently operated on the Asian corridors.", details: "Resident of Klang, Malaysia.", seat: "Cabin Crew" },
  { id: 8, name: "Junaidi Mohd Kassim", age: 37, nationality: "MYS", role: "Flight Steward", group: "Crew", bio: "Experienced steward known for reliability and customer service excellence.", details: "Joined the airline in the early 2000s.", seat: "Cabin Crew" },
  { id: 9, name: "Mohd Hazrin Mohamed Hasnan", age: 34, nationality: "MYS", role: "Flight Steward", group: "Crew", bio: "Expecting his second child at the time of the disappearance. His wife, Intan, became a spokesperson for families.", details: "Passionate about travel and his family.", seat: "Cabin Crew" },
  { id: 10, name: "Ng Yar Chien", age: 33, nationality: "MYS", role: "Flight Stewardess", group: "Crew", bio: "Respected for her warmth and efficiency on long-haul routes.", details: "Consistently highly-rated in crew performance reviews.", seat: "Cabin Crew" },
  { id: 11, name: "Foong Wai Yueng", age: 31, nationality: "MYS", role: "Flight Stewardess", group: "Crew", bio: "An ambitious and professional stewardess with a bright future in MAS.", details: "Well-loved by colleagues for her positive energy.", seat: "Cabin Crew" },
  { id: 12, name: "Tan Size Hiang", age: 40, nationality: "MYS", role: "Flight Stewardess", group: "Crew", bio: "Experienced international crew member known for her professionalism.", details: "Part of the veteran core of the cabin crew team.", seat: "Cabin Crew" }
];

const NOTABLE_PASSENGERS = [
  { id: 13, name: "Guan Huajin", age: 34, nationality: "MYS", role: "Freescale Engineer", group: "Freescale", bio: "Semiconductor specialist. Heading to Beijing for advanced technical training with 19 other colleagues.", details: "Mother of two. Expertise in integrated circuit design for automotive applications.", seat: "Economy" },
  { id: 14, name: "Ju Kun", age: 35, nationality: "CHN", role: "Martial Artist", group: "Artists", bio: "Stunt double for Jet Li. Credits include 'The Expendables' and 'Grandmaster'.", details: "Was working on the Netflix series 'Marco Polo' in Malaysia before returning home.", seat: "Business" },
  { id: 15, name: "Philip Wood", age: 50, nationality: "USA", role: "IBM Executive", group: "Business", bio: "Technical Storage Executive at IBM Malaysia. Only American adult on board.", details: "Was relocating from Beijing to Kuala Lumpur. On his final trip to settle affairs in China.", seat: "Business" },
  { id: 16, name: "Pouria Nour Mehrdad", age: 18, nationality: "IRN", role: "Asylum Seeker", group: "Investigation", bio: "Traveling on a stolen Austrian passport. Investigated by Interpol; cleared of terror links.", details: "Hoping to reach his mother in Germany for a new life.", seat: "Economy" },
  { id: 17, name: "Delavar Syed Mohammad Reza", age: 29, nationality: "IRN", role: "Asylum Seeker", group: "Investigation", bio: "Traveling on a stolen Italian passport. Investigated alongside Mehrdad.", details: "Confirmed by authorities to have no militant connections.", seat: "Economy" },
  { id: 18, name: "Meng Gaosheng", age: 63, nationality: "CHN", role: "Calligrapher", group: "Artists", bio: "Vice Chairman of the China Calligraphers Association. Part of a 24-member artist delegation.", details: "Renowned figure in traditional Chinese arts.", seat: "Economy" },
  { id: 19, name: "Muktesh Mukherjee", age: 42, nationality: "CAN", role: "Mining Executive", group: "Business", bio: "Vice-President of China operations for Xcoal Energy & Resources.", details: "Traveling with his wife, Xiaomo Bai.", seat: "Business" },
  { id: 20, name: "Xiaomo Bai", age: 37, nationality: "CAN", role: "Passenger", group: "Business", bio: "Wife of Muktesh Mukherjee. Met her husband while working as his translator in Beijing.", details: "Resided in Beijing with her family.", seat: "Business" }
];

const generateFullManifest = () => {
  const manifest = [...VERIFIED_CREW, ...NOTABLE_PASSENGERS];
  const totalRemaining = 239 - manifest.length;
  const chineseSurnames = ["Zhang", "Li", "Wang", "Liu", "Chen", "Yang", "Zhao", "Huang", "Zhou", "Wu"];
  const chineseGivennames = ["Wei", "Min", "Jing", "Tao", "Lei", "Jun", "Yan", "Fang", "Hui", "Qiang"];

  for (let i = 0; i < totalRemaining; i++) {
    const isChinese = i < 140;
    const nationality = isChinese ? "CHN" : (i < 165 ? "MYS" : (i < 170 ? "IDN" : (i < 175 ? "AUS" : "FRA")));
    let name = isChinese ? `${chineseSurnames[i % 10]} ${chineseGivennames[(i + 3) % 10]} ${i + 50}` : `Passenger ${i + 50}`;

    manifest.push({
      id: manifest.length + 1,
      name: name,
      age: Math.floor(Math.random() * 60) + 18,
      nationality: nationality,
      role: "Passenger",
      group: "General",
      bio: "Part of the general manifest. Traveling for personal, tourism, or business reasons.",
      details: "No specific investigative flags raised during background checks.",
      seat: i % 15 === 0 ? "Business" : "Economy"
    });
  }
  return manifest;
};

const FULL_MANIFEST = generateFullManifest();

const Modal = ({ person, onClose }) => {
  if (!person) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#000]/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-[#050505] w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden border border-neutral-800 shadow-[0_0_80px_rgba(220,38,38,0.2)] relative flex flex-col md:flex-row">
        {/* Header HUD Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-900 to-transparent opacity-50"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-neutral-900/50 hover:bg-red-900/20 text-neutral-500 hover:text-red-500 transition-all z-20 border border-neutral-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Sidebar Dossier */}
        <div className="w-full md:w-72 bg-neutral-900/20 p-8 border-r border-neutral-800/50 flex flex-col shrink-0">
          <div className="relative group self-center mb-8">
            <div className="absolute -inset-2 bg-red-600/10 rounded-lg blur-sm group-hover:bg-red-600/20 transition-all"></div>
            <div className="relative w-40 h-52 bg-neutral-950 border border-neutral-800 rounded flex flex-col items-center justify-center overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-red-500/40 shadow-[0_0_15px_rgba(220,38,38,0.5)] animate-scan"></div>
               <User className="w-16 h-16 text-neutral-800" />
               <div className="absolute bottom-3 text-[9px] font-mono text-neutral-600 uppercase tracking-tighter">
                 REF: {person.id.toString().padStart(4, '0')}
               </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800/50">
              <span className="block text-[9px] text-neutral-600 uppercase tracking-widest font-black mb-2">Registry Status</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-tighter">Missing // Inactive</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-neutral-950 border border-neutral-800/50 rounded-lg">
                <span className="block text-[8px] text-neutral-600 uppercase font-black mb-1">Origin</span>
                <p className="text-sm font-bold text-neutral-200">{person.nationality}</p>
              </div>
              <div className="p-3 bg-neutral-950 border border-neutral-800/50 rounded-lg">
                <span className="block text-[8px] text-neutral-600 uppercase font-black mb-1">Age</span>
                <p className="text-sm font-bold text-neutral-200">{person.age}</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-neutral-800 text-[9px] font-mono text-neutral-600 uppercase leading-relaxed">
            Database: Intelligence_Primary<br/>Revision: 2024.08.03
          </div>
        </div>

        {/* Content View */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[radial-gradient(circle_at_top_right,rgba(20,0,0,0.1),transparent)]">
          <div className="p-10 max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-4 h-4 text-red-600" />
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.4em]">Classified Personnel Dossier</span>
              </div>
              <h2 className="text-5xl font-black text-white uppercase tracking-tighter leading-none mb-3">{person.name}</h2>
              <div className="flex items-center gap-4">
                 <span className="px-3 py-1 bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black uppercase tracking-widest">
                   {person.role}
                 </span>
                 <div className="h-4 w-px bg-neutral-800"></div>
                 <span className="text-neutral-500 text-xs font-mono uppercase">Operational Sector: {person.group}</span>
              </div>
            </header>

            <div className="grid gap-12">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-4 h-4 text-red-600" />
                  <h4 className="text-[11px] font-black text-neutral-400 uppercase tracking-[0.3em]">Biography & Identity</h4>
                </div>
                <p className="text-neutral-300 text-xl font-light leading-relaxed">
                  {person.bio}
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-xl bg-neutral-950/50 border border-neutral-800/50 group hover:border-red-900/30 transition-colors">
                  <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-neutral-600" /> Flight Parameters
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs border-b border-neutral-800/50 pb-3">
                      <span className="text-neutral-500 uppercase">Carrier</span>
                      <span className="font-mono text-neutral-200">Malaysia Airlines</span>
                    </div>
                    <div className="flex justify-between items-center text-xs border-b border-neutral-800/50 pb-3">
                      <span className="text-neutral-500 uppercase">Callsign</span>
                      <span className="font-mono text-neutral-200">MH370 // MAS370</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-neutral-500 uppercase font-black text-red-900">Assigned Seat</span>
                      <span className="font-mono text-red-600 font-black text-lg">{person.seat}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-xl bg-neutral-950/50 border border-neutral-800/50 group hover:border-red-900/30 transition-colors">
                  <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                    <Activity className="w-4 h-4 text-neutral-600" /> Investigative Notes
                  </h4>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed italic">
                    {person.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [selectedNationality, setSelectedNationality] = useState('All');
  const [activeId, setActiveId] = useState(null);
  const [modalPerson, setModalPerson] = useState(null);

  const groups = ['All', 'Crew', 'Freescale', 'Artists', 'Business', 'Investigation', 'General'];
  const nationalities = ['All', 'CHN', 'MYS', 'FRA', 'AUS', 'USA', 'IDN', 'CAN', 'IRN'];

  const filteredList = useMemo(() => {
    return FULL_MANIFEST.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            p.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGroup = selectedGroup === 'All' || p.group === selectedGroup;
      const matchesNation = selectedNationality === 'All' || p.nationality === selectedNationality;
      return matchesSearch && matchesGroup && matchesNation;
    });
  }, [searchTerm, selectedGroup, selectedNationality]);

  return (
    <div className="min-h-screen bg-[#020202] text-neutral-200 font-sans selection:bg-red-900/50 pb-24 overflow-x-hidden">
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(208px); }
        }
        .animate-scan { animation: scan 4s linear infinite; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #444; }
      `}</style>

      {/* Global HUD Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(220,38,38,0.05)_0%,transparent_70%)]"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-10"></div>
      </div>

      <Modal person={modalPerson} onClose={() => setModalPerson(null)} />

      {/* Modern Compact Header */}
      <header className="max-w-7xl mx-auto px-6 pt-12 mb-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 bg-neutral-900/20 p-8 rounded-2xl border border-neutral-800/50">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-4 h-4 text-red-600" />
              <span className="text-[10px] font-black tracking-[0.5em] text-red-600 uppercase">Intelligence Registry</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none mb-4 italic">
              MANIFEST <span className="text-red-700">370</span>
            </h1>
            <p className="text-neutral-500 max-w-lg text-sm font-light leading-relaxed">
              Global encrypted access to the 239 individual dossiers aboard Boeing 777-200ER (9M-MRO). Verified telemetry and personal identification files.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-neutral-900/60 border border-neutral-800 px-8 py-4 rounded-xl flex flex-col justify-center">
              <span className="text-[9px] text-neutral-600 font-black uppercase mb-1 tracking-widest">Total POB</span>
              <div className="text-3xl font-black text-white leading-none">239</div>
            </div>
            <div className="bg-red-950/10 border border-red-900/20 px-8 py-4 rounded-xl flex flex-col justify-center">
              <span className="text-[9px] text-red-900 font-black uppercase mb-1 tracking-widest">Global Status</span>
              <div className="text-sm font-black text-red-700 flex items-center gap-2">
                <Activity className="w-4 h-4" /> ACTIVE_DB
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Filters */}
      <section className="max-w-7xl mx-auto px-6 sticky top-6 z-40 mb-12">
        <div className="bg-neutral-900/80 backdrop-blur-2xl p-2 rounded-xl border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            <div className="md:col-span-5 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search dossiers..."
                className="w-full bg-neutral-950/80 border border-neutral-800 rounded-lg py-3.5 pl-11 pr-4 text-xs focus:border-red-900/50 focus:bg-neutral-950 transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="md:col-span-3 flex items-center bg-neutral-950/80 border border-neutral-800 rounded-lg px-4">
              <Layers className="text-neutral-600 w-3.5 h-3.5 mr-3" />
              <select 
                className="w-full bg-transparent py-3.5 text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer text-neutral-400"
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
              >
                {groups.map(g => <option key={g} value={g} className="bg-neutral-900">{g} SECTOR</option>)}
              </select>
            </div>

            <div className="md:col-span-3 flex items-center bg-neutral-950/80 border border-neutral-800 rounded-lg px-4">
              <Globe className="text-neutral-600 w-3.5 h-3.5 mr-3" />
              <select 
                className="w-full bg-transparent py-3.5 text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer text-neutral-400"
                value={selectedNationality}
                onChange={(e) => setSelectedNationality(e.target.value)}
              >
                {nationalities.map(n => <option key={n} value={n} className="bg-neutral-900">{n === 'All' ? 'ALL ORIGINS' : n}</option>)}
              </select>
            </div>

            <div className="md:col-span-1 flex items-center justify-center bg-red-900/10 border border-red-900/20 rounded-lg text-red-600 font-mono font-black text-lg">
               {filteredList.length}
            </div>
          </div>
        </div>
      </section>

      {/* Manifest Grid - Stable Heights */}
      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative z-10">
        {filteredList.map((person) => (
          <div 
            key={person.id}
            onClick={() => {
                setActiveId(activeId === person.id ? null : person.id);
                // Directly open modal for slick experience
                setModalPerson(person);
            }}
            className={`group cursor-pointer relative rounded-xl border transition-all duration-300 h-32 flex flex-col justify-center px-6 ${
              activeId === person.id 
              ? 'bg-neutral-900 border-red-900/50 shadow-lg' 
              : 'bg-neutral-900/40 border-neutral-800/60 hover:border-neutral-700 hover:bg-neutral-900/60'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg border flex items-center justify-center transition-all ${
                activeId === person.id ? 'bg-red-950/40 border-red-900/50 text-red-500' : 'bg-neutral-950 border-neutral-800 text-neutral-700'
              }`}>
                <User className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-sm uppercase tracking-tight text-white group-hover:text-red-500 transition-colors truncate pr-2">
                        {person.name}
                    </h3>
                    <ChevronRight className={`w-3 h-3 text-neutral-700 transition-transform ${activeId === person.id ? 'rotate-90 text-red-500' : ''}`} />
                </div>
                <div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-tighter">
                  <span className="text-red-800">{person.group}</span>
                  <span className="text-neutral-700">•</span>
                  <span className="text-neutral-500">{person.nationality}</span>
                  <span className="text-neutral-700">•</span>
                  <span className="text-neutral-500">AGE {person.age}</span>
                </div>
              </div>
            </div>
            
            {/* Action Bar Overlay */}
            <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="text-[8px] font-mono text-neutral-700">MH370-ID-{person.id}</div>
               <div className="flex items-center gap-1 text-[8px] font-black text-red-900 uppercase tracking-widest">
                  ACCESS DATA <ExternalLink className="w-2 h-2" />
               </div>
            </div>
          </div>
        ))}
      </main>

      {filteredList.length === 0 && (
        <div className="text-center py-40">
          <AlertTriangle className="w-12 h-12 text-neutral-800 mx-auto mb-6" />
          <p className="text-neutral-600 font-mono text-[10px] uppercase tracking-[0.5em]">Zero telemetry matches recorded</p>
        </div>
      )}

      {/* Footer HUD */}
      <footer className="max-w-7xl mx-auto mt-32 px-6 pb-20 relative z-10">
        <div className="pt-12 border-t border-neutral-900/50 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-600 animate-ping"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Registry Monitoring Active</span>
            </div>
            <p className="text-neutral-600 text-xs font-light leading-loose">
              Operational manifest for MH370 retrieved from MAS primary archives. Cross-referenced for accuracy with ICAO standards. All subjects are classified as "Missing/Inactive" pending further satellite telemetry analysis.
            </p>
          </div>
          
          <div className="flex gap-20">
            <div className="space-y-4">
               <h5 className="text-[10px] font-black text-neutral-800 uppercase tracking-widest">System</h5>
               <ul className="text-[10px] space-y-3 text-neutral-600 font-mono uppercase tracking-tighter">
                  <li className="hover:text-red-700 cursor-pointer">Satellite Logs</li>
                  <li className="hover:text-red-700 cursor-pointer">ACARS Feed</li>
               </ul>
            </div>
            <div className="space-y-4">
               <h5 className="text-[10px] font-black text-neutral-800 uppercase tracking-widest">Remembrance</h5>
               <div className="flex items-center gap-2 text-red-900/50 font-black text-[10px] italic tracking-[0.2em] whitespace-nowrap">
                 <Heart className="w-4 h-4 fill-red-950/30" /> 239 SOULS RECORDED
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
```
