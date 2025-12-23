import React from 'react';
import { Product, Language } from '../types';

interface Props { product: Product; lang: Language; onAddToCart: (p: Product) => void; count: number; }

const ProductCard: React.FC<Props> = ({ product, lang, onAddToCart, count }) => {
  return (
    <div className="ultra-glass rounded-[2.5rem] p-3 flex flex-col border-white/80 animate-card tap-scale">
      <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-3 bg-white/50 border border-white/50 shadow-inner">
        <img src={product.image} className="w-full h-full object-contain p-2" loading="lazy" />
        {count > 0 && <div className="absolute top-2 right-2 bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black">{count}</div>}
      </div>
      <h3 className="text-[13px] font-black text-slate-900 leading-tight mb-1 line-clamp-1">{product.name[lang]}</h3>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-[14px] font-black text-slate-900">${product.price}</span>
        <button onClick={() => onAddToCart(product)} className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-lg border border-white hover:bg-blue-600 hover:text-white transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </div>
    </div>
  );
};
export default ProductCard;