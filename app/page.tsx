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
  FileText,
  X,
  Camera,
  Phone,
  ArrowLeft,
  Mail,
  Globe,
  LogOut,
  LayoutDashboard,
  ClipboardList,
  Contact2,
  Info,
  CalendarCheck2,
  ArrowUpRight,
  Plus,
} from "lucide-react";

// --- Institutional Theme Configuration ---
const THEME = {
  primary: "#1E4BB2", // Royal Blue
  primaryDark: "#163a8a",
  bg: "#f3f4f6",      // Light Gray
  surface: "#FFFFFF",
  text: "#1e293b",
  muted: "#64748B",
};

export default function InstitutionalParentPortal() {
  const [activeView, setActiveView] = useState("dashboard"); // dashboard, challans, contact, notifications, ...
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const proposalData = {
      student: {
        name: "Amad Khan",
        id: "173419",
        campus: "Walton Campus, Lahore",
        class: "Class 6",
        section: "Silver",
        avatar: "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?w=400&h=400&fit=crop",
      },
      attendance: {
        percentage: 92,
        totalDays: 120,
        present: 110,
        absent: 6,
        leave: 4,
        monthly: [
          { day: 1, status: "P" }, { day: 2, status: "P" }, { day: 3, status: "A" },
          { day: 4, status: "P" }, { day: 5, status: "P" }, { day: 6, status: "L" },
          { day: 7, status: "P" }, { day: 8, status: "P" }, { day: 9, status: "P" },
          { day: 10, status: "P" }, { day: 11, status: "P" }, { day: 12, status: "P" },
          { day: 13, status: "A" }, { day: 14, status: "P" }, { day: 15, status: "P" },
          { day: 16, status: "P" }, { day: 17, status: "P" }, { day: 18, status: "P" },
        ]
      },
      testSeries: [
        { id: 1, subject: "Mathematics", topic: "Algebra & Logic", date: "15 Mar", score: "92/100", status: "Completed" },
        { id: 2, subject: "Physics", topic: "Thermal Energy", date: "18 Mar", score: "Pending", status: "Upcoming" },
        { id: 3, subject: "English", topic: "Creative Writing", date: "10 Mar", score: "85/100", status: "Completed" },
        { id: 4, subject: "Chemistry", topic: "Mole Concept", date: "22 Mar", score: "N/A", status: "Scheduled" },
      ],
      diary: [
        { id: 1, date: "13 Mar", subject: "Mathematics", content: "Solve Exercise 4.2 (Q1 to Q5)", priority: "High" },
        { id: 2, date: "13 Mar", subject: "Physics", content: "Read Chapter 3: Energy Sources", priority: "Medium" },
        { id: 3, date: "12 Mar", subject: "English", content: "Essay writing: 'Digital Education'", priority: "Low" },
      ],
      timeTable: [
        { day: "Monday", slots: [{ time: "08:00 - 09:00", subject: "Maths" }, { time: "09:00 - 10:00", subject: "Physics" }, { time: "10:30 - 11:30", subject: "English" }] },
        { day: "Tuesday", slots: [{ time: "08:00 - 09:00", subject: "Chemistry" }, { time: "09:00 - 10:00", subject: "Biology" }, { time: "10:30 - 11:30", subject: "Computer" }] },
        { day: "Wednesday", slots: [{ time: "08:00 - 09:00", subject: "Maths" }, { time: "09:00 - 10:00", subject: "Art" }, { time: "10:30 - 11:30", subject: "History" }] },
      ],
      notices: [
        { id: 1, date: "12 Mar", title: "Annual Sports Gala", content: "Scheduled for upcoming Saturday.", type: "Event" },
        { id: 2, date: "10 Mar", title: "Fee Deadline Extension", content: "Last date for March fees is now 15th.", type: "Urgent" },
      ],
      progress: {
        gpa: "3.85",
        rank: "5th",
        subjects: [
          { name: "Maths", percentage: 95 },
          { name: "Physics", percentage: 88 },
          { name: "Chemistry", percentage: 82 },
          { name: "English", percentage: 90 },
        ]
      },
      notifications: [
        { id: 1, date: "07 Mar", title: "Dear Parents, Finale of Track...", type: "SMS", read: false },
        { id: 2, date: "03 Mar", title: "Dear Parents, This is to inform...", type: "SMS", read: true },
        { id: 3, date: "25 Feb", title: "Dispatch SMS Sent", type: "Notification", read: true },
        { id: 4, date: "23 Feb", title: "Dear Parents, This is to remin...", type: "SMS", read: true },
        { id: 5, date: "17 Feb", title: "Dear Parents, It has been noti...", type: "SMS", read: true },
      ],
      currentChallans: [
        { id: 1, month: "Mar 2022 - Mar 2022", amount: "930", status: "Amount Payable" },
      ],
      pastChallans: [
        { id: 3, date: "15 Feb", amount: "1,030", period: "Feb 2022 - Feb 2022", paidOn: "15-Feb-2022" },
        { id: 4, date: "12 Jan", amount: "930", period: "Jan 2022 - Jan 2022", paidOn: "12-Jan-2022" },
      ],
      leaves: [
        { id: 1, type: "Sick Leave", date: "05 Mar", days: 1, status: "Approved", reason: "Fever" },
        { id: 2, type: "Casual Leave", date: "10 Mar", days: 2, status: "Approved", reason: "Family Event" },
      ]
    };
    setData(proposalData);
  }, []);

  if (!data) return <div className="h-screen bg-white flex items-center justify-center text-primary font-bold animate-pulse">LOADING...</div>;

  // --- Shared Header Component ---
  const Header = ({ title, showBack = false }: { title?: string, showBack?: boolean }) => (
    <div className="relative bg-[#1E4BB2] pt-12 pb-24 px-6 rounded-b-[40px] shadow-lg">
      <div className="flex items-center justify-between text-white mb-4">
        {showBack ? (
          <button onClick={() => setActiveView("dashboard")} className="p-1">
            <ArrowLeft size={24} />
          </button>
        ) : (
          <div className="w-6"></div>
        )}
        <h1 className="text-lg font-bold">{title || "Student Profile"}</h1>
        {!showBack && (
          <button onClick={() => setIsMenuOpen(true)} className="p-1">
            <Menu size={24} />
          </button>
        )}
        {showBack && <div className="w-6"></div>}
      </div>
      
      {activeView === "dashboard" && (
        <div className="absolute -bottom-16 left-6 right-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4 border border-gray-100">
          <div className="relative">
            <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-[#1E4BB2]">
              <img src={data.student.avatar} alt="Student" className="w-full h-full object-cover" />
            </div>
            <button className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md border border-gray-100 text-[#1E4BB2]">
              <Camera size={14} />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-[#1E4BB2]">{data.student.name}</h2>
            <div className="space-y-0.5">
              <p className="text-[12px] font-bold text-gray-500">{data.student.id}</p>
              <p className="text-[12px] text-gray-400 font-medium">{data.student.campus}</p>
              <p className="text-[12px] text-gray-400 font-medium">{data.student.class} - {data.student.section}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // --- Side Menu Component ---
  const SideMenu = () => (
    <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
      <div className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transition-transform duration-300 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-[#1E4BB2]">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-400">
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-80px)] py-4">
          {[
            { id: "dashboard", label: "Home", icon: LayoutDashboard },
            { id: "attendance", label: "Attendance", icon: CalendarCheck2 },
            { id: "testSeries", label: "Test Series", icon: ClipboardList },
            { id: "diary", label: "Diary", icon: BookOpen },
            { id: "timeTable", label: "Time Table", icon: Clock },
            { id: "noticeBoard", label: "Notice Board", icon: Bell },
            { id: "leaves", label: "Leaves", icon: CalendarDays },
            { id: "challans", label: "Challans", icon: CreditCard },
            { id: "progress", label: "Progress", icon: TrendingUp },
            { id: "contact", label: "Contact Us", icon: Phone },
            { id: "logout", label: "Logout", icon: LogOut, color: "text-red-500" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id !== "logout") setActiveView(item.id);
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors ${item.color || "text-gray-600"}`}
            >
              <item.icon size={20} className={activeView === item.id ? "text-[#1E4BB2]" : ""} />
              <span className={`text-sm font-medium ${activeView === item.id ? "text-[#1E4BB2] font-bold" : ""}`}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // --- Feature Pages ---
  const Dashboard = () => (
    <div className="pb-24">
      <Header />
      <div className="px-6 pt-20 space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Features</h3>
          <div className="relative group">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-6 px-6 snap-x snap-mandatory">
              {[
                { id: "attendance", label: "Attendance", icon: CalendarDays },
                { id: "testSeries", label: "Test Series", icon: ClipboardList },
                { id: "diary", label: "Diary", icon: BookOpen },
                { id: "timeTable", label: "Time Table", icon: Clock },
                { id: "noticeBoard", label: "Notice Board", icon: Bell },
                { id: "leaves", label: "Leaves", icon: CalendarDays },
                { id: "challans", label: "Challans", icon: FileText },
                { id: "progress", label: "Progress", icon: TrendingUp },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveView(btn.id)}
                  className="flex flex-col items-center gap-2 min-w-[100px] snap-center group"
                >
                  <div className="w-full aspect-square bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center p-6 active:scale-95 transition-transform group-hover:border-primary/20">
                    <btn.icon size={36} className="text-[#1E4BB2]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 group-hover:text-[#1E4BB2] transition-colors">{btn.label}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-center gap-1.5 mt-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-[#1E4BB2] w-4" : "bg-gray-200"}`}></div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#1E4BB2] pb-2">
            <h3 className="text-sm font-bold text-[#1E4BB2]">Recent Notifications</h3>
            <button onClick={() => setActiveView("notifications")} className="text-[12px] font-bold text-[#1E4BB2] flex items-center gap-1">
              View All <ChevronRight size={14} />
            </button>
          </div>
          <div className="space-y-0 divide-y divide-gray-100">
            {data.notifications.slice(0, 3).map((n: any) => (
              <button key={n.id} className="w-full flex items-center gap-4 py-4 group" onClick={() => setActiveView("notifications")}>
                <div className="w-12 h-12 rounded-full border border-[#1E4BB2] flex flex-col items-center justify-center min-w-[48px] group-hover:bg-[#1E4BB2] group-hover:text-white transition-colors duration-300">
                  <span className="text-[9px] font-bold uppercase">{n.date.split(' ')[0]}</span>
                  <span className="text-[9px] font-bold">{n.date.split(' ')[1]}</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-gray-700 line-clamp-1">{n.title}</p>
                </div>
                <ChevronRight size={18} className="text-[#1E4BB2] opacity-50" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const AttendancePage = () => (
    <div className="pb-24">
      <Header title="Attendance" showBack />
      <div className="px-6 pt-20 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Rate</p>
            <p className="text-2xl font-bold text-[#1E4BB2]">{data.attendance.percentage}%</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Absents</p>
            <p className="text-2xl font-bold text-red-500">{data.attendance.absent}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
           <h3 className="text-lg font-bold mb-6">March 2026</h3>
           <div className="grid grid-cols-7 gap-4">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => <span key={d} className="text-[10px] font-bold text-gray-300 text-center">{d}</span>)}
              {data.attendance.monthly.map((m: any) => (
                <div key={m.day} className="flex flex-col items-center gap-1">
                  <span className="text-[9px] font-bold text-gray-300">{m.day}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${m.status === 'P' ? 'bg-[#1E4BB2]/10 text-[#1E4BB2]' : 'bg-red-50 text-red-500'}`}>
                    {m.status}
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );

  const TestSeriesPage = () => (
    <div className="pb-24">
      <Header title="Test Series" showBack />
      <div className="px-6 pt-20 space-y-4">
        {data.testSeries.map((t: any) => (
          <div key={t.id} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-[#1E4BB2]">{t.date}</p>
              <h4 className="text-lg font-bold text-gray-800">{t.subject}</h4>
              <p className="text-xs text-gray-400 font-medium">{t.topic}</p>
            </div>
            <div className="text-right">
              <span className={`px-2 py-1 rounded-lg text-[9px] font-bold uppercase ${t.status === 'Completed' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-primary'}`}>{t.status}</span>
              <p className="text-lg font-bold text-gray-800 mt-1">{t.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const DiaryPage = () => (
    <div className="pb-24">
      <Header title="Diary" showBack />
      <div className="px-6 pt-20 space-y-4">
        {data.diary.map((d: any) => (
          <div key={d.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${d.priority === 'High' ? 'bg-red-500' : 'bg-[#1E4BB2]'}`}></div>
            <p className="text-xs font-bold text-[#1E4BB2] mb-1">{d.date} • {d.subject}</p>
            <p className="text-sm text-gray-600 italic">"{d.content}"</p>
          </div>
        ))}
      </div>
    </div>
  );

  const TimeTablePage = () => (
    <div className="pb-24">
      <Header title="Time Table" showBack />
      <div className="px-6 pt-20 space-y-8">
        {data.timeTable.map((day: any) => (
          <div key={day.day} className="space-y-4">
            <h3 className="text-sm font-bold text-[#1E4BB2] border-b-2 border-[#1E4BB2] pb-1 inline-block">{day.day}</h3>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
               {day.slots.map((s: any, i: number) => (
                  <div key={i} className="p-4 flex justify-between items-center border-b border-gray-50 last:border-0">
                    <div>
                      <p className="text-sm font-bold text-gray-800">{s.subject}</p>
                      <p className="text-xs text-gray-400">{s.time}</p>
                    </div>
                    <Clock size={16} className="text-gray-200" />
                  </div>
               ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const NoticeBoardPage = () => (
    <div className="pb-24">
      <Header title="Notice Board" showBack />
      <div className="px-6 pt-20 space-y-4">
        {data.notices.map((n: any) => (
          <div key={n.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <span className={`text-[9px] font-bold px-2 py-1 rounded-lg uppercase ${n.type === 'Urgent' ? 'bg-red-50 text-red-500' : 'bg-primary/10 text-primary'}`}>{n.type}</span>
            <h4 className="text-md font-bold text-gray-800 mt-2">{n.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{n.content}</p>
            <p className="text-[10px] text-gray-300 mt-4 font-bold">{n.date}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const ProgressPage = () => (
    <div className="pb-24">
      <Header title="Progress" showBack />
      <div className="px-6 pt-20 space-y-6">
        <div className="bg-linear-to-r from-[#1E4BB2] to-[#163a8a] p-8 rounded-[40px] text-white shadow-xl flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase opacity-70">Current Performance</p>
            <h4 className="text-4xl font-bold">{data.progress.gpa} GPA</h4>
            <p className="text-sm opacity-80 mt-1">Rank: {data.progress.rank}</p>
          </div>
          <TrendingUp size={48} className="opacity-20" />
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-[#1E4BB2]">Subject Analysis</h3>
          {data.progress.subjects.map((s: any) => (
            <div key={s.name} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
               <div className="flex justify-between text-sm font-bold mb-2">
                 <span>{s.name}</span>
                 <span>{s.percentage}%</span>
               </div>
               <div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
                 <div className="h-full bg-[#1E4BB2]" style={{ width: `${s.percentage}%` }}></div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const LeavesPage = () => (
    <div className="pb-24">
      <Header title="Leaves" showBack />
      <div className="px-6 pt-20 space-y-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-800">Apply for Leave</h3>
            <p className="text-xs text-gray-400">Request permission online</p>
          </div>
          <button onClick={() => alert("Leave applied!")} className="w-12 h-12 bg-[#1E4BB2] text-white rounded-2xl flex items-center justify-center">
            <Plus size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-[#1E4BB2]">Leave History</h3>
          {data.leaves.map((l: any) => (
            <div key={l.id} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-[#1E4BB2]">{l.type}</p>
                <h4 className="text-lg font-bold text-gray-800">{l.date}</h4>
                <p className="text-xs text-gray-400">{l.reason}</p>
              </div>
              <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-lg">{l.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const NotificationsPage = () => (
    <div className="pb-24">
      <Header title="Notifications" showBack />
      <div className="px-6 pt-20 space-y-4">
        {data.notifications.map((n: any) => (
          <div key={n.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
             <div className="text-xs font-bold text-[#1E4BB2] min-w-[50px]">{n.date}</div>
             <div className="flex-1">
               <p className="text-sm font-medium text-gray-700">{n.title}</p>
               <p className="text-[10px] text-gray-400">{n.type}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ChallansPage = () => (
    <div className="pb-24">
      <Header title="Challans" showBack />
      <div className="px-6 pt-20 space-y-8">
        <div className="bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4 border border-gray-100">
          <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-[#1E4BB2]">
            <img src={data.student.avatar} alt="Student" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-[#1E4BB2]">{data.student.name}</h2>
            <p className="text-[12px] font-bold text-gray-500">{data.student.id}</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-bold text-[#1E4BB2] mb-4">Current Monthly Fee</h3>
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
             <div>
               <p className="text-xl font-bold text-gray-800">Rs {data.currentChallans[0].amount}/-</p>
               <p className="text-xs text-gray-400">{data.currentChallans[0].month}</p>
             </div>
             <button className="bg-[#1E4BB2] text-white px-4 py-2 rounded-xl text-xs font-bold">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="pb-24">
      <Header title="Contact Us" showBack />
      <div className="px-6 pt-20 space-y-6">
        <div className="bg-white p-6 rounded-[32px] border border-gray-100 space-y-4">
          <input className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 text-sm" placeholder="Subject" />
          <textarea className="w-full bg-gray-50 border-0 rounded-2xl px-6 py-4 text-sm min-h-[150px]" placeholder="Your remarks here..." />
          <button className="w-full bg-[#1E4BB2] text-white py-4 rounded-2xl font-bold">Submit Complaint</button>
        </div>
      </div>
    </div>
  );

  const BottomNav = () => (
    <div className="fixed bottom-6 left-6 right-6 z-50">
      <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-2 flex items-center justify-between">
        {[
          { id: "notifications", label: "Alerts", icon: Bell },
          { id: "dashboard", label: "Profile", icon: User, special: true },
          { id: "contact", label: "Contact", icon: Phone },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`flex flex-col items-center justify-center transition-all duration-300 ${item.special ? "-top-6 relative" : "flex-1"}`}
          >
            {item.special ? (
              <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform ${activeView === "dashboard" ? "bg-[#1E4BB2] text-white scale-110" : "bg-white text-gray-400"}`}>
                <item.icon size={32} />
              </div>
            ) : (
              <div className={`flex flex-col items-center ${activeView === item.id ? "text-[#1E4BB2]" : "text-gray-400"}`}>
                <item.icon size={22} />
                <span className="text-[9px] font-bold mt-1">{item.label}</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 flex flex-col relative overflow-x-hidden text-gray-900 font-sans">
      <SideMenu />
      <main className="flex-1 overflow-y-auto scrollbar-hide">
        {activeView === "dashboard" && <Dashboard />}
        {activeView === "attendance" && <AttendancePage />}
        {activeView === "testSeries" && <TestSeriesPage />}
        {activeView === "diary" && <DiaryPage />}
        {activeView === "timeTable" && <TimeTablePage />}
        {activeView === "noticeBoard" && <NoticeBoardPage />}
        {activeView === "progress" && <ProgressPage />}
        {activeView === "leaves" && <LeavesPage />}
        {activeView === "challans" && <ChallansPage />}
        {activeView === "contact" && <ContactPage />}
        {activeView === "notifications" && <NotificationsPage />}
      </main>
      <BottomNav />
    </div>
  );
}
