import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

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
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Store" size={32} className="text-secondary" />
              <div>
                <h1 className="text-2xl font-bold">Локальный рынок</h1>
                <p className="text-sm opacity-90">Амурская область</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#catalog" className="hover:text-secondary transition-colors">Каталог</a>
              <a href="#about" className="hover:text-secondary transition-colors">О платформе</a>
              <a href="#articles" className="hover:text-secondary transition-colors">Статьи</a>
              <a href="#contacts" className="hover:text-secondary transition-colors">Контакты</a>
              <Button variant="secondary" size="sm" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-accent">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold text-primary mb-6">
              Поддержите самозанятых и домашних мастеров
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Домашняя выпечка, рукоделие, заготовки от домохозяек и самозанятых Амурской области. 
              Уникальные товары с душой — прямо от мастера к вам домой.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Icon name="ArrowDown" size={20} className="mr-2" />
              Перейти к каталогу
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">Каталог товаров</h2>
            <p className="text-muted-foreground text-lg">
              Более 200 товаров от {producers.length} проверенных производителей
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              placeholder="Поиск товаров или производителей..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="md:col-span-1"
            />
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedProducer} onValueChange={setSelectedProducer}>
              <SelectTrigger>
                <SelectValue placeholder="Производитель" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все производители</SelectItem>
                {producers.map(prod => (
                  <SelectItem key={prod.id} value={prod.id.toString()}>
                    {prod.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
                    {product.inStock && (
                      <Badge variant="secondary" className="text-xs whitespace-nowrap">В наличии</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Icon name="Store" size={14} />
                    {product.producer}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="MapPin" size={12} />
                    {product.region}
                  </p>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <span className="text-sm text-muted-foreground">/ {product.unit}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90"
                    onClick={() => addToCart(product.id)}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Package" size={64} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">Товары не найдены</p>
              <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить параметры фильтрации</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">О платформе</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <Icon name="Heart" size={32} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Наша миссия</h3>
                    <p className="text-muted-foreground">
                      Помочь самозанятым, домохозяйкам и домашним мастерам зарабатывать на любимом деле, 
                      продавая свои товары напрямую покупателям Амурской области.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Icon name="Users" size={32} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Для самозанятых и мастеров</h3>
                    <p className="text-muted-foreground">
                      Выпекаете торты? Вяжете? Делаете заготовки? Регистрируйтесь, 
                      добавляйте товары и получайте заказы от местных покупателей.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Icon name="ShoppingBag" size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Для покупателей</h3>
                    <p className="text-muted-foreground">
                      Покупайте свежую выпечку, handmade изделия и домашние заготовки 
                      напрямую у мастеров. Товары с душой и доставкой по области.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <Icon name="Award" size={32} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Качество</h3>
                    <p className="text-muted-foreground">
                      Все производители проходят проверку. Система рейтингов и отзывов 
                      помогает выбирать лучшие товары.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Начните продавать или покупать сегодня</h3>
              <p className="mb-6 opacity-90">
                Регистрация бесплатная. Личный кабинет с историей заказов и управлением товарами.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Я мастер / самозанятый
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                  <Icon name="User" size={20} className="mr-2" />
                  Я покупатель
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="articles" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">Истории успеха</h2>
          <p className="text-center text-muted-foreground mb-12">
            Как самозанятые и домохозяйки Амурской области превращают хобби в доход
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={14} />
                    {article.date}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{article.title}</h3>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">Контакты и доставка</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6">
                <Icon name="Phone" size={32} className="mx-auto text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (4162) 123-456</p>
              </Card>

              <Card className="p-6">
                <Icon name="Mail" size={32} className="mx-auto text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@local-market.ru</p>
              </Card>

              <Card className="p-6">
                <Icon name="MapPin" size={32} className="mx-auto text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Благовещенск</p>
              </Card>
            </div>

            <Card className="p-8 text-left">
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                <Icon name="Truck" size={24} className="text-accent" />
                Доставка по Амурской области
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={20} className="text-secondary mt-0.5" />
                  <span>Бесплатная доставка по Благовещенску при заказе от 2000 ₽</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={20} className="text-secondary mt-0.5" />
                  <span>Доставка в города области: Белогорск, Свободный, Тында, Шимановск</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={20} className="text-secondary mt-0.5" />
                  <span>Самовывоз из пунктов выдачи производителей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={20} className="text-secondary mt-0.5" />
                  <span>Сроки доставки: 1-3 дня в зависимости от региона</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Store" size={28} className="text-secondary" />
              <div>
                <h3 className="font-bold text-lg">Локальный рынок</h3>
                <p className="text-sm opacity-75">Поддержим местных вместе</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm opacity-75">© 2024 Локальный рынок. Амурская область</p>
              <p className="text-sm opacity-75">Платформа для малых производителей</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}