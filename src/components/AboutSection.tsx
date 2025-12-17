import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
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
  );
}
