import { Routes, Route } from 'react-router-dom';
import Briefing from './pages/Briefing';
import Subject from './pages/Subject';
import Subjects from './pages/Subjects';

function App() {
  return (
    <div className="min-h-screen bg-[#020202]">
      {/* Global HUD Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(220,38,38,0.03)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-[0.03]"></div>
      </div>

      <Routes>
        <Route path="/" element={<Briefing />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/subject/:id" element={<Subject />} />
      </Routes>
    </div>
  );
}

export default App;
