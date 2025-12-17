import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

interface ArticlesSectionProps {
  articles: Article[];
}

export default function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
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
  );
}
