import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  return (
    <>
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
    </>
  );
}
