import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  producer: string;
  producerId: number;
  category: string;
  price: number;
  unit: string;
  image: string;
  region: string;
  inStock: boolean;
}

interface Category {
  id: string;
  name: string;
}

interface Producer {
  id: number;
  name: string;
  region: string;
  rating: number;
  type: string;
}

interface CatalogSectionProps {
  categories: Category[];
  producers: Producer[];
  products: Product[];
  selectedCategory: string;
  selectedProducer: string;
  searchQuery: string;
  onCategoryChange: (value: string) => void;
  onProducerChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onAddToCart: (productId: number) => void;
}

export default function CatalogSection({
  categories,
  producers,
  products,
  selectedCategory,
  selectedProducer,
  searchQuery,
  onCategoryChange,
  onProducerChange,
  onSearchChange,
  onAddToCart
}: CatalogSectionProps) {
  return (
    <>
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
              onChange={(e) => onSearchChange(e.target.value)}
              className="md:col-span-1"
            />
            
            <Select value={selectedCategory} onValueChange={onCategoryChange}>
              <SelectTrigger>
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedProducer} onValueChange={onProducerChange}>
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
            {products.map((product, index) => (
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
                    onClick={() => onAddToCart(product.id)}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Package" size={64} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">Товары не найдены</p>
              <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить параметры фильтрации</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
