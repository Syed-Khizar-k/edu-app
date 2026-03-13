"use client";

import React, { useState, useEffect } from "react";
import { 
  BarChart3, 
  Calendar, 
  BookOpen, 
  CreditCard, 
  Bell, 
  ChevronRight, 
  Download, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  User,
  ShieldCheck,
  ArrowRight,
  MoreVertical,
  Settings2,
  CalendarDays,
  Menu,
  FileText
} from "lucide-react";

// --- Institutional Theme Configuration ---
const THEME = {
  primary: "#0F172A", // Deep Navy
  accent: "#D97706",  // Amber Gold
  bg: "#F8FAFC",      // Ghost White
  surface: "#FFFFFF",
  muted: "#64748B",   // Slate Gray
  brand: "Elite Digital Campus"
};

export default function InstitutionalParentPortal() {
  const [activeView, setActiveView] = useState("home"); // home, attendance, diary, fees, results, notices
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Institutional Data Schema reflecting the Proposal
    const proposalData = {
      student: {
        name: "Ali Ahmed",
        id: "EIS-102-2024",
        class: "Grade 8",
        section: "A-Blue",
        avatar: "https://i.pravatar.cc/150?u=ali_ahmed",
        institution: "High School & College"
      },
      attendance: {
        presentDays: 22,
        absentDays: 2,
        stats: [
          { day: 1, status: 'present' }, { day: 2, status: 'present' }, { day: 3, status: 'absent' },
          { day: 4, status: 'present' }, { day: 5, status: 'present' }, { day: 6, status: 'weekend' },
          { day: 7, status: 'weekend' }, { day: 8, status: 'present' }, { day: 9, status: 'present' },
          { day: 10, status: 'present' }, { day: 11, status: 'present' }, { day: 12, status: 'absent' },
          { day: 13, status: 'present' }, { day: 14, status: 'weekend' }, { day: 15, status: 'weekend' },
        ]
      },
      diary: [
        { subject: "Mathematics", task: "Solve Exercise 4.2 (Q1 to Q5)", due: "Tomorrow", priority: "High" },
        { subject: "Physics", task: "Read Chapter 3: Energy Sources", due: "Wed, 15th Mar", priority: "Normal" },
        { subject: "English", task: "Essay writing: 'Digital Education'", due: "Fri, 17th Mar", priority: "Normal" }
      ],
      fees: {
        status: "Pending",
        pkr: "5,000",
        month: "March 2026",
        dueDate: "15-Mar-2026",
        history: [
          { month: "February", pkr: "5,000", status: "Paid", date: "05-Feb" },
          { month: "January", pkr: "5,000", status: "Paid", date: "10-Jan" }
        ]
      },
      results: [
        { subject: "Math", marks: 92, grade: "A+", avg: 72 },
        { subject: "Physics", marks: 88, grade: "A", avg: 75 },
        { subject: "Chemistry", marks: 85, grade: "A", avg: 68 },
        { subject: "Computer", marks: 95, grade: "A+", avg: 70 }
      ],
      noticeboard: [
        { id: 1, title: "Annual Sports Gala", date: "12 Mar", content: "Scheduled for upcoming Saturday.", type: "Event" },
        { id: 2, title: "Fee Deadline Extension", date: "10 Mar", content: "Last date for March fees is now 15th.", type: "Urgent" },
        { id: 3, title: "Morning Assembly Change", date: "08 Mar", content: "Assembly time changed to 7:45 AM.", type: "Announcement" }
      ]
    };
    setData(proposalData);
  }, []);

  if (!data) return <div className="h-screen bg-slate-900 flex items-center justify-center text-white font-light tracking-widest">ENCRYPTED LOGIN...</div>;

  // --- Header Component (Section 4) ---
  const Header = () => (
    <div className="bg-white px-6 pt-8 pb-6 rounded-b-[40px] shadow-sm border-b border-slate-100 flex items-center gap-5 relative z-20">
      <div className="relative">
        <div className="w-20 h-20 rounded-3xl border-4 border-slate-50 overflow-hidden shadow-xl shadow-slate-200 ring-1 ring-slate-100">
          <img src={data.student.avatar} alt="Profile" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-500 rounded-2xl flex items-center justify-center text-white border-4 border-white shadow-lg">
          <ShieldCheck size={16} />
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-black text-slate-950 tracking-tight">{data.student.name}</h2>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
          <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md uppercase tracking-wide">{data.student.class}</span>
          <span className="text-[11px] font-medium text-slate-400">Sec: {data.student.section}</span>
          <span className="text-[11px] font-medium text-slate-400">ID: {data.student.id}</span>
        </div>
        <p className="text-[10px] items-center gap-1 font-bold text-amber-600 uppercase mt-2 opacity-80 flex">
          <MapPin size={10} /> {data.student.institution}
        </p>
      </div>
      <button className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:text-slate-900 transition-colors">
        <Settings2 size={24} />
      </button>
    </div>
  );

  // --- View Components ---
  const HomeView = () => (
    <div className="p-6 space-y-8 animate-in fade-in duration-500">
      {/* 4 Large Primary Grid Buttons (Section 4) */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { id: 'attendance', label: 'Attendance', icon: CalendarDays, color: 'emerald', detail: '94% Presence' },
          { id: 'diary', label: 'Daily Diary', icon: BookOpen, color: 'indigo', detail: '3 Tasks Pending' },
          { id: 'fees', label: 'Fee Status', icon: CreditCard, color: 'rose', detail: 'PKR 5,000 Due' },
          { id: 'results', label: 'Results', icon: BarChart3, color: 'amber', detail: 'Term 2 Active' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className="bg-white p-5 rounded-[32px] border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all group flex flex-col items-start text-left active:scale-[0.98]"
          >
            <div className={`p-3 rounded-2xl mb-4 group-hover:scale-110 transition-transform bg-${item.color}-50 text-${item.color}-600`}>
              <item.icon size={28} />
            </div>
            <p className="font-black text-slate-900 text-sm tracking-tight">{item.label}</p>
            <p className={`text-[10px] font-bold text-${item.color}-600/70 mt-1 uppercase tracking-wider`}>{item.detail}</p>
          </button>
        ))}
      </div>

      {/* Quick Live Preview: Transparency Focus */}
      <div className="bg-slate-950 rounded-[40px] p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Institutional Sync</h3>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
              <Clock size={24} className="text-amber-500" />
            </div>
            <div>
              <p className="text-xl font-black text-white">08:12 AM</p>
              <p className="text-xs text-slate-400 font-medium tracking-wide">Campus Entry Logged • North Gate</p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
             <div className="flex-1 bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                <p className="text-[10px] text-slate-500 uppercase font-black">Next Class</p>
                <p className="text-xs font-bold mt-1">Physics (Lab)</p>
             </div>
             <div className="flex-1 bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                <p className="text-[10px] text-slate-500 uppercase font-black">Teacher</p>
                <p className="text-xs font-bold mt-1">Mr. Ali Khan</p>
             </div>
          </div>
        </div>
        {/* Aesthetic Gradients */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );

  const AttendanceView = () => (
    <div className="p-6 space-y-6 animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-center justify-between">
         <button onClick={() => setActiveView("home")} className="p-2 text-slate-400 bg-white rounded-xl shadow-sm border border-slate-100">
            <ChevronRight size={20} className="rotate-180" />
         </button>
         <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Attendance Registry</h3>
         <div className="w-10"></div>
      </div>
      
      {/* Calendar Grid with Dots (Section 4) */}
      <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg font-black text-slate-900">March 2026</p>
          <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
             <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Present</div>
             <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> Absent</div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-y-4 gap-x-2">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
            <span key={d} className="text-[10px] font-black text-slate-300 text-center uppercase">{d}</span>
          ))}
          {data.attendance.stats.map((day: any) => (
            <div key={day.day} className="flex flex-col items-center gap-1.5">
               <span className="text-xs font-bold text-slate-400">{day.day}</span>
               <div className={`w-2.5 h-2.5 rounded-full ${day.status === 'present' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]' : day.status === 'absent' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.3)]' : 'bg-slate-100 opacity-0'}`}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
         <div className="bg-emerald-50 p-5 rounded-3xl border border-emerald-100">
            <p className="text-[10px] font-black text-emerald-900 uppercase">Total Present</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">{data.attendance.presentDays}</p>
         </div>
         <div className="bg-rose-50 p-5 rounded-3xl border border-rose-100">
            <p className="text-[10px] font-black text-rose-900 uppercase">Total Bunks/Absents</p>
            <p className="text-2xl font-black text-rose-600 mt-1">{data.attendance.absentDays}</p>
         </div>
      </div>
    </div>
  );

  const FeesView = () => (
    <div className="p-6 space-y-6 animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-center justify-between mb-2">
         <button onClick={() => setActiveView("home")} className="p-2 text-slate-400 bg-white rounded-xl shadow-sm border border-slate-100">
            <ChevronRight size={20} className="rotate-180" />
         </button>
         <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Financial Portal</h3>
         <div className="w-10"></div>
      </div>

      {/* Bold Fee Status Card (Section 4) */}
      <div className="bg-rose-600 rounded-[40px] p-8 text-white shadow-2xl shadow-rose-200 relative overflow-hidden">
        <div className="relative z-10">
           <div className="flex justify-between items-start mb-4">
              <span className="bg-white/20 backdrop-blur-md text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">Action Required</span>
              <FileText size={24} className="opacity-70" />
           </div>
           <p className="text-xs font-bold text-rose-200 uppercase tracking-wider">{data.fees.month} Tuition Fee</p>
           <h4 className="text-5xl font-black mt-2 tracking-tighter">PKR {data.fees.pkr}</h4>
           <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-rose-200 opacity-80 uppercase">Due Date</p>
                <p className="text-sm font-black">{data.fees.dueDate}</p>
              </div>
              <button className="bg-white text-rose-600 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all">
                Pay Now
              </button>
           </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <button className="w-full flex items-center justify-between bg-white px-6 py-5 rounded-3xl border border-slate-100 shadow-sm group">
         <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-950 text-white rounded-2xl group-hover:rotate-12 transition-transform">
               <Download size={20} />
            </div>
            <p className="font-black text-slate-900 text-sm">Download Challan Voucher</p>
         </div>
         <ChevronRight size={20} className="text-slate-300" />
      </button>

      <div className="space-y-4 pt-4">
         <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2">Recent Transactions</h4>
         {data.fees.history.map((h: any, idx: number) => (
           <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-50 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center">
                    <CheckCircle2 size={20} />
                 </div>
                 <div>
                    <p className="text-xs font-black text-slate-900">{h.month} Fee</p>
                    <p className="text-[10px] text-slate-400 font-medium">Cleared on {h.date}</p>
                 </div>
              </div>
              <p className="text-xs font-black text-slate-600">PKR {h.pkr}</p>
           </div>
         ))}
      </div>
    </div>
  );

  const ResultsView = () => (
    <div className="p-6 space-y-6 animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-center justify-between">
         <button onClick={() => setActiveView("home")} className="p-2 text-slate-400 bg-white rounded-xl shadow-sm border border-slate-100">
            <ChevronRight size={20} className="rotate-180" />
         </button>
         <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Academic Transcript</h3>
         <div className="w-10"></div>
      </div>

      <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm text-center">
         <TrendingUp size={32} className="mx-auto text-amber-500 mb-2" />
         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Status</p>
         <h4 className="text-2xl font-black text-slate-950 mt-1">Exceptional Growth</h4>
      </div>

      <div className="space-y-4">
        {data.results.map((r: any, idx: number) => (
          <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-100 flex flex-col gap-4">
             <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-slate-950 text-white rounded-xl flex items-center justify-center font-black text-sm">{r.subject[0]}</div>
                   <p className="text-sm font-black text-slate-900">{r.subject}</p>
                </div>
                <div className="bg-slate-50 px-3 py-1 rounded-lg">
                   <p className="text-lg font-black text-slate-950">{r.marks}<span className="text-[10px] text-slate-300 ml-1">/100</span></p>
                </div>
             </div>
             <div className="space-y-2">
                <div className="flex justify-between text-[9px] font-black uppercase text-slate-400">
                   <span>Performance Index</span>
                   <span>Grade: {r.grade}</span>
                </div>
                <div className="relative h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="absolute top-0 left-0 bottom-0 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(217,119,6,0.2)]" style={{ width: `${r.marks}%` }}></div>
                   <div className="absolute top-0 bottom-0 w-0.5 bg-slate-300 z-10" style={{ left: `${r.avg}%` }}></div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );

  // --- Announcements Tab (Section 4) ---
  const NoticesView = () => (
    <div className="p-6 space-y-6 animate-in fade-in duration-500">
      <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-4">Chronological Feed</h3>
      <div className="space-y-6">
        {data.noticeboard.map((n: any) => (
          <div key={n.id} className="relative pl-8 border-l-2 border-slate-100 group">
             <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white shadow-md ${n.type === 'Urgent' ? 'bg-rose-500' : 'bg-slate-950'}`}></div>
             <div className="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
               <div className="flex justify-between items-start mb-2">
                  <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${n.type === 'Urgent' ? 'bg-rose-50 text-rose-600' : 'bg-slate-100 text-slate-500'}`}>
                    {n.type}
                  </span>
                  <p className="text-[10px] font-bold text-slate-400">{n.date}</p>
               </div>
               <h4 className="text-sm font-black text-slate-950">{n.title}</h4>
               <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">{n.content}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto h-screen bg-[#F8FAFC] flex flex-col relative overflow-hidden text-slate-950 selection:bg-amber-100">
      {/* Device Top Bar Mock */}
      <div className="h-10 bg-white flex justify-between items-center px-8 z-30">
        <span className="text-[12px] font-black tracking-tighter">09:41</span>
        <div className="flex gap-1.5 items-center">
          <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
          <div className="w-4 h-2 bg-slate-900 rounded-[2px]"></div>
        </div>
      </div>

      {activeView === "home" && <Header />}

      <main className="flex-1 overflow-y-auto pb-32 scrollbar-hide">
        {activeView === "home" && <HomeView />}
        {activeView === "attendance" && <AttendanceView />}
        {activeView === "fees" && <FeesView />}
        {activeView === "results" && <ResultsView />}
        {activeView === "notices" && <NoticesView />}
        
        {/* Placeholder for Diary items in the special view */}
        {activeView === "diary" && (
          <div className="p-6 space-y-6 animate-in slide-in-from-right-4 duration-500">
            <div className="flex items-center justify-between">
              <button onClick={() => setActiveView("home")} className="p-2 text-slate-400 bg-white rounded-xl shadow-sm border border-slate-100">
                  <ChevronRight size={20} className="rotate-180" />
              </button>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Digital Diary</h3>
              <div className="w-10"></div>
            </div>
            
            <div className="space-y-4">
              {data.diary.map((d: any, idx: number) => (
                <div key={idx} className="bg-white p-5 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden group">
                   <div className={`absolute top-0 left-0 bottom-0 w-1.5 ${d.priority === 'High' ? 'bg-rose-500' : 'bg-indigo-500'}`}></div>
                   <div className="flex justify-between items-start mb-3">
                      <p className="text-xs font-black text-slate-900 uppercase tracking-wider">{d.subject}</p>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter flex items-center gap-1">
                        <Clock size={10} /> Due: {d.due}
                      </span>
                   </div>
                   <p className="text-sm text-slate-600 font-medium leading-relaxed">{d.task}</p>
                   <div className="mt-4 flex gap-2">
                       <button className="flex-1 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">Done</button>
                       <button className="px-4 py-2 border border-slate-100 rounded-xl text-slate-400"><MoreVertical size={16} /></button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* --- Bespoke Bottom Indicator (Section 4) --- */}
      <footer className="absolute bottom-8 left-8 right-8 z-50">
        <div className="bg-slate-950 rounded-[35px] grid grid-cols-3 p-2 shadow-2xl border border-white/5">
          {[
            { id: "home", label: "Dashboard", icon: BarChart3 },
            { id: "notices", label: "Notices", icon: Bell },
            { id: "profile", label: "Student", icon: User }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id === "profile" ? "home" : item.id)}
              className={`flex flex-col items-center justify-center py-2.5 rounded-[28px] transition-all duration-500 ${activeView === item.id || (item.id === 'home' && (activeView === 'home' || activeView === 'attendance' || activeView === 'diary' || activeView === 'fees' || activeView === 'results')) ? 'bg-white text-slate-950 shadow-xl' : 'text-slate-500 hover:text-white'}`}
            >
              <item.icon size={20} strokeWidth={2.5} />
              <span className="text-[9px] font-black uppercase mt-1 tracking-tighter">{item.label}</span>
            </button>
          ))}
        </div>
      </footer>

      {/* Modern Device Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white rounded-b-[20px] shadow-sm z-40 border-x border-b border-slate-50 flex items-center justify-center px-4">
         <div className="w-1.5 h-1.5 rounded-full bg-slate-100 mr-auto"></div>
         <div className="w-10 h-1 rounded-full bg-slate-100"></div>
         <div className="w-1.5 h-1.5 rounded-full bg-slate-100 ml-auto"></div>
      </div>
    </div>
  );
}
