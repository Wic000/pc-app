import { Product, MainCategory, Language } from './types';

export const TRANSLATIONS: Record<Language, any> = {
  uz: {
    all: "Barchasi", laptops: "Noutbuklar", pc: "Kompyuter", accessories: "Aksessuarlar",
    cart: "Savatcha", total: "Jami", payment: "To'lov turi", confirm: "Savatchaga",
    order: "Buyurtma berish", buildPc: "O'z PK-ingizni yig'ing", buildDesc: "Eng sara qismlardan",
    select: "Tanlash", parts: { cpu: "Protsessor", gpu: "Videokarta", ram: "Operativ xotira", storage: "Xotira", psu: "Blok pitaniya" },
    sub: { monitor: "Monitor", case: "Keys", motherboard: "Plata", ups: "UPS", ram: "RAM", psu: "Blok", cooler: "Kuller", gpu: "GPU" }
  },
  ru: {
    all: "Все", laptops: "Ноутбуки", pc: "Компьютер", accessories: "Аксессуары",
    cart: "Корзина", total: "Итого", payment: "Оплата", confirm: "В корзину",
    order: "Заказать", buildPc: "Соберите свой ПК", buildDesc: "Конфигурация мечты",
    select: "Выбрать", parts: { cpu: "Процессор", gpu: "Видеокарта", ram: "ОЗУ", storage: "Накопитель", psu: "Блок питания" },
    sub: { monitor: "Монитор", case: "Кейс", motherboard: "Плата", ups: "ИБП", ram: "Память", psu: "Блок", cooler: "Кулер", gpu: "GPU" }
  },
  en: {
    all: "All", laptops: "Laptops", pc: "Desktop", accessories: "Accessories",
    cart: "Cart", total: "Total", payment: "Payment", confirm: "To Cart",
    order: "Order", buildPc: "Build PC", buildDesc: "Configure your PC",
    select: "Select", parts: { cpu: "CPU", gpu: "GPU", ram: "Memory", storage: "Storage", psu: "PSU" },
    sub: { monitor: "Monitor", case: "Case", motherboard: "Mainboard", ups: "UPS", ram: "RAM", psu: "PSU", cooler: "Cooler", gpu: "GPU" }
  }
};

export const PRODUCTS: Product[] = [
  { id: 'l1', name: { uz: 'MacBook Pro 16" M3', ru: 'MacBook Pro 16" M3', en: 'MacBook Pro 16" M3' }, description: { uz: '16GB RAM, 512GB SSD', ru: '16GB RAM, 512GB SSD', en: '16GB RAM, 512GB SSD' }, price: 2850, mainCategory: MainCategory.LAPTOPS, subCategory: 'all', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=100&w=800' },
  { id: 'pc1', name: { uz: 'Gaming Monitor LG', ru: 'Монитор LG', en: 'LG Monitor' }, description: { uz: '27" 165Hz IPS', ru: '27" 165Hz IPS', en: '27" 165Hz IPS' }, price: 350, mainCategory: MainCategory.PC, subCategory: 'monitor', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=100&w=800' }
];

export const BUILD_OPTIONS = {
  cpu: [{ id: 'c1', name: 'Core i5-13400', price: 220 }, { id: 'c2', name: 'Core i7-14700', price: 410 }],
  gpu: [{ id: 'g1', name: 'RTX 4060 Ti', price: 400 }, { id: 'g2', name: 'RTX 4070 Super', price: 650 }],
  ram: [{ id: 'r1', name: '16GB DDR5', price: 70 }, { id: 'r2', name: '32GB DDR5', price: 130 }],
  storage: [{ id: 's1', name: '512GB SSD', price: 50 }, { id: 's2', name: '1TB SSD', price: 90 }],
  psu: [{ id: 'p1', name: '650W Gold', price: 80 }, { id: 'p2', name: '850W Gold', price: 140 }]
};