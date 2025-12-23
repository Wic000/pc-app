import React from 'react';
import { Language } from '../types';

interface HeaderProps { lang: Language; setLang: (l: Language) => void; exchangeRate: number; }

const Header: React.FC<HeaderProps> = ({ lang, setLang, exchangeRate }) => {
  const tg = window.Telegram?.WebApp;
  const user = tg?.initDataUnsafe?.user;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 pt-4 pb-2">
      <div className="ultra-glass rounded-[2rem] px-5 py-4 flex flex-col gap-3 border-white/80">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex items-baseline select-none">
              <span className="text-2xl font-[900] tracking-tighter bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">PC</span>
              <span className="text-2xl font-[900] tracking-tighter text-[#001d4a] ml-1">App</span>
            </div>
            <div className="ml-3 h-6 w-[1px] bg-slate-900/10"></div>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">Store</span>
          </div>
          <div className="bg-white/60 px-3 py-1.5 rounded-2xl border border-white/50 shadow-sm">
            <span className="text-[10px] font-black text-slate-800 tracking-tighter">$1 = {exchangeRate}</span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-slate-900/5 pt-3">
          <div className="flex gap-1.5">
            {['uz', 'ru', 'en'].map((l: any) => (
              <button key={l} onClick={() => setLang(l)} className={`w-8 h-8 rounded-xl text-[9px] font-black uppercase ${lang === l ? 'bg-slate-900 text-white' : 'bg-white/40 text-slate-500'}`}>{l}</button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-slate-900">{user?.first_name || 'Guest'}</span>
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white font-bold">{user?.first_name?.[0] || 'G'}</div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;