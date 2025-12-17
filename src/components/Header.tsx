import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  return (
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
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-accent">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
