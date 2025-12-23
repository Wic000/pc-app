import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, BUILD_OPTIONS } from '../constants';

interface Props { lang: Language; onConfirm: (total: number, config: any) => void; }

const BuildPC: React.FC<Props> = ({ lang, onConfirm }) => {
  const t = TRANSLATIONS[lang];
  const [config, setConfig] = useState<any>({ cpu: BUILD_OPTIONS.cpu[0], gpu: BUILD_OPTIONS.gpu[0], ram: BUILD_OPTIONS.ram[0], storage: BUILD_OPTIONS.storage[0], psu: BUILD_OPTIONS.psu[0] });
  const total = Object.values(config).reduce<number>((acc, curr: any) => acc + (curr?.price || 0), 0);

  return (
    <div className="mt-8 ultra-glass rounded-[2.5rem] p-6 border-white">
      <h3 className="text-lg font-black text-slate-900 mb-4">{t.buildPc}</h3>
      <div className="space-y-4">
        {Object.entries(BUILD_OPTIONS).map(([key, parts]: [string, any]) => (
          <div key={key}>
            <p className="text-[9px] font-black uppercase text-slate-400 mb-2 tracking-widest">{t.parts[key as keyof typeof t.parts]}</p>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {parts.map((p: any) => (
                <button key={p.id} onClick={() => setConfig({ ...config, [key]: p })} className={`px-3 py-2 rounded-xl whitespace-nowrap text-[10px] font-bold border ${config[key].id === p.id ? 'bg-slate-900 text-white' : 'bg-white/50 text-slate-600'}`}>
                  {p.name} (+${p.price})
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xl font-black">${total}</span>
        <button onClick={() => onConfirm(total, config)} className="px-6 py-3 bg-blue-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-lg">Tanlash</button>
      </div>
    </div>
  );
};
export default BuildPC;