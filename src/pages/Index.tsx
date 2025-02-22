
import { NewsCard } from "../components/NewsCard";
import { newsData } from "../data/news";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12 animate-fade-in space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Latest Tech News</h1>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest in technology and cybersecurity
          </p>
        </header>
        <div className="max-w-4xl mx-auto space-y-6">
          {newsData.map((article) => (
            <div key={article.id} className="animate-slide-up">
              <NewsCard {...article} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
