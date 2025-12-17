import { useState } from 'react';
import Header from '@/components/Header';
import CatalogSection from '@/components/CatalogSection';
import AboutSection from '@/components/AboutSection';
import ArticlesSection from '@/components/ArticlesSection';
import ContactsSection from '@/components/ContactsSection';

const categories = [
  { id: 'all', name: 'Все категории' },
  { id: 'bakery', name: 'Домашняя выпечка и кондитерка' },
  { id: 'handmade', name: 'Рукоделие и handmade' },
  { id: 'preserves', name: 'Заготовки и консервация' },
  { id: 'honey', name: 'Мёд и продукты пчеловодства' },
  { id: 'vegetables', name: 'Овощи и зелень' },
  { id: 'crafts', name: 'Керамика и изделия' },
  { id: 'textiles', name: 'Вязаные изделия' }
];

const producers = [
  { id: 1, name: 'Елена Кондитер', region: 'Благовещенск', rating: 4.9, type: 'Самозанятая' },
  { id: 2, name: 'Мария Рукодельница', region: 'Свободный', rating: 4.8, type: 'Домохозяйка' },
  { id: 3, name: 'Ольга Домашние заготовки', region: 'Белогорск', rating: 4.9, type: 'Самозанятая' },
  { id: 4, name: 'Пасека "Амурский нектар"', region: 'Благовещенск', rating: 4.8, type: 'ИП' },
  { id: 5, name: 'Анна Вязаные изделия', region: 'Тында', rating: 4.7, type: 'Домохозяйка' },
  { id: 6, name: 'Светлана Керамика', region: 'Шимановск', rating: 4.6, type: 'Самозанятая' }
];

const products = [
  {
    id: 1,
    name: 'Торт "Наполеон" домашний',
    producer: 'Елена Кондитер',
    producerId: 1,
    category: 'bakery',
    price: 1200,
    unit: '1 кг',
    image: 'https://cdn.poehali.dev/projects/50b02240-049a-43da-8053-74a8af275e8e/files/38d0190d-0f2d-4950-9bf8-77cfc57a0c99.jpg',
    region: 'Благовещенск',
    inStock: true
  },
  {
    id: 2,
    name: 'Вязаный плед из шерсти',
    producer: 'Анна Вязаные изделия',
    producerId: 5,
    category: 'textiles',
    price: 3500,
    unit: 'шт',
    image: 'https://cdn.poehali.dev/projects/50b02240-049a-43da-8053-74a8af275e8e/files/a647e039-5ef7-4ccf-a337-91e2b1c1951b.jpg',
    region: 'Тында',
    inStock: true
  },
  {
    id: 3,
    name: 'Набор домашних солений',
    producer: 'Ольга Домашние заготовки',
    producerId: 3,
    category: 'preserves',
    price: 850,
    unit: '3 банки',
    image: 'https://cdn.poehali.dev/projects/50b02240-049a-43da-8053-74a8af275e8e/files/df688ea1-ead5-46e7-b500-a04275bef06e.jpg',
    region: 'Белогорск',
    inStock: true
  },
  {
    id: 4,
    name: 'Медовик со сметанным кремом',
    producer: 'Елена Кондитер',
    producerId: 1,
    category: 'bakery',
    price: 950,
    unit: '1 кг',
    image: 'https://cdn.poehali.dev/projects/50b02240-049a-43da-8053-74a8af275e8e/files/38d0190d-0f2d-4950-9bf8-77cfc57a0c99.jpg',
    region: 'Благовещенск',
    inStock: true
  },
  {
    id: 5,
    name: 'Брошь ручной работы',
    producer: 'Мария Рукодельница',
    producerId: 2,
    category: 'handmade',
    price: 650,
    unit: 'шт',
    image: 'https://cdn.poehali.dev/projects/50b02240-049a-43da-8053-74a8af275e8e/files/a647e039-5ef7-4ccf-a337-91e2b1c1951b.jpg',
    region: 'Свободный',
    inStock: true
  },
  {
    id: 6,
    name: 'Таёжный мёд липовый',
    producer: 'Пасека "Амурский нектар"',
    producerId: 4,
    category: 'honey',
    price: 850,
    unit: '500 г',
    image: 'https://cdn.poehali.dev/projects/50b02240-049a-43da-8053-74a8af275e8e/files/49f28899-b249-41ca-ac35-0bc6d99ee21b.jpg',
    region: 'Благовещенск',
    inStock: true
  },
  {
    id: 7,
    name: 'Варенье из амурской клубники',
    producer: 'Ольга Домашние заготовки',
    producerId: 3,
    category: 'preserves',
    price: 450,
    unit: '0.5 л',
    image: 'https://cdn.poehali.dev/projects/50b02240-049a-43da-8053-74a8af275e8e/files/df688ea1-ead5-46e7-b500-a04275bef06e.jpg',
    region: 'Белогорск',
    inStock: true
  },
  {
    id: 8,
    name: 'Керамическая тарелка с росписью',
    producer: 'Светлана Керамика',
    producerId: 6,
    category: 'crafts',
    price: 1200,
    unit: 'шт',
    image: 'https://cdn.poehali.dev/projects/50b02240-049a-43da-8053-74a8af275e8e/files/e5b1ff57-4f05-4d78-a255-a8d15930b8b9.jpg',
    region: 'Шимановск',
    inStock: true
  },
  {
    id: 9,
    name: 'Набор вязаных варежек',
    producer: 'Анна Вязаные изделия',
    producerId: 5,
    category: 'textiles',
    price: 800,
    unit: 'пара',
    image: 'https://cdn.poehali.dev/projects/50b02240-049a-43da-8053-74a8af275e8e/files/a647e039-5ef7-4ccf-a337-91e2b1c1951b.jpg',
    region: 'Тында',
    inStock: true
  }
];

const articles = [
  {
    id: 1,
    title: 'История Елены: от хобби к бизнесу',
    excerpt: 'Как домохозяйка из Благовещенска открыла домашнюю кондитерскую и зарабатывает на любимом деле',
    date: '15 декабря 2024',
    image: 'https://cdn.poehali.dev/projects/50b02240-049a-43da-8053-74a8af275e8e/files/38d0190d-0f2d-4950-9bf8-77cfc57a0c99.jpg'
  },
  {
    id: 2,
    title: 'Рукоделие как источник дохода',
    excerpt: 'Самозанятые мастерицы Амурской области делятся опытом продажи handmade изделий',
    date: '10 декабря 2024',
    image: 'https://cdn.poehali.dev/projects/50b02240-049a-43da-8053-74a8af275e8e/files/a647e039-5ef7-4ccf-a337-91e2b1c1951b.jpg'
  },
  {
    id: 3,
    title: 'Домашние заготовки: традиции и современность',
    excerpt: 'Почему покупатели выбирают консервацию от местных производителей',
    date: '5 декабря 2024',
    image: 'https://cdn.poehali.dev/projects/50b02240-049a-43da-8053-74a8af275e8e/files/df688ea1-ead5-46e7-b500-a04275bef06e.jpg'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProducer, setSelectedProducer] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesProducer = selectedProducer === 'all' || product.producerId.toString() === selectedProducer;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.producer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesProducer && matchesSearch;
  });

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cart.length} />
      
      <CatalogSection
        categories={categories}
        producers={producers}
        products={filteredProducts}
        selectedCategory={selectedCategory}
        selectedProducer={selectedProducer}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onProducerChange={setSelectedProducer}
        onSearchChange={setSearchQuery}
        onAddToCart={addToCart}
      />

      <AboutSection />
      
      <ArticlesSection articles={articles} />
      
      <ContactsSection />
    </div>
  );
}
