import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import BuildPC from './components/BuildPC';
import { Product, CartItem, Language, MainCategory } from './types';
import { PRODUCTS, TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('uz');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mainCat, setMainCat] = useState<MainCategory>(MainCategory.LAPTOPS);
  const [view, setView] = useState<'store' | 'checkout'>('store');
  const [exchangeRate] = useState(12950);
  const t = TRANSLATIONS[lang];
  const tg = window.Telegram?.WebApp;

  useEffect(() => { if (tg) { tg.ready(); tg.expand(); } }, [tg]);

  const totalUSD = useMemo(() => cart.reduce((acc, item) => acc + item.price * item.quantity, 0), [cart]);

  useEffect(() => {
    if (!tg) return;
    if (cart.length > 0) {
      tg.MainButton.setText(view === 'store' ? `${t.confirm} ($${totalUSD})` : t.order);
      tg.MainButton.show();
      const click = () => view === 'store' ? setView('checkout') : (tg.sendData(JSON.stringify(cart)), tg.close());
      tg.MainButton.onClick(click);
      return () => tg.MainButton.offClick(click);
    } else tg.MainButton.hide();
  }, [cart, view, totalUSD, t, tg]);

  const addToCart = (p: Product) => setCart(prev => {
    const ex = prev.find(i => i.id === p.id);
    return ex ? prev.map(i => i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i) : [...prev, { ...p, quantity: 1 }];
  });

  return (
    <div className="pb-32 pt-40 px-5">
      <Header lang={lang} setLang={setLang} exchangeRate={exchangeRate} />
      {view === 'store' ? (
        <>
          <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
            {Object.values(MainCategory).map(cat => (
              <button key={cat} onClick={() => setMainCat(cat)} className={`px-5 py-3 rounded-2xl text-[10px] font-black uppercase transition-all ${mainCat === cat ? 'bg-slate-900 text-white' : 'ultra-glass text-slate-500'}`}>{t[cat]}</button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {PRODUCTS.filter(p => p.mainCategory === mainCat).map(p => (
              <ProductCard key={p.id} product={p} lang={lang} onAddToCart={addToCart} count={cart.find(i => i.id === p.id)?.quantity || 0} />
            ))}
          </div>
          <BuildPC lang={lang} onConfirm={(p, c) => { addToCart({ id: 'b', name: { uz: 'Custom PC', ru: 'Custom PC', en: 'Custom PC' }, price: p, mainCategory: MainCategory.PC, subCategory: 'all', description: { uz: 'Custom', ru: 'Custom', en: 'Custom' }, image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6' }); setView('checkout'); }} />
        </>
      ) : (
        <div className="animate-in slide-in-from-right duration-300">
           <button onClick={() => setView('store')} className="mb-4 text-blue-600 font-bold text-xs">← Orqaga</button>
           <h2 className="text-2xl font-black mb-6">{t.cart}</h2>
           <div className="space-y-3">
             {cart.map(i => (
               <div key={i.id} className="ultra-glass p-4 rounded-[2rem] flex items-center justify-between">
                 <div className="flex items-center gap-3"><img src={i.image} className="w-10 h-10 object-contain" /><span>{i.name[lang]}</span></div>
                 <span className="font-black">${i.price * i.quantity}</span>
               </div>
             ))}
           </div>
           <div className="mt-8 p-6 ultra-glass rounded-[2rem]"><div className="flex justify-between font-black text-xl"><span>{t.total}</span><span>${totalUSD}</span></div></div>
        </div>
      )}
    </div>
  );
};
export default App;