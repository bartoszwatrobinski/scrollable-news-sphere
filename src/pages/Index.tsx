
import { NewsCard } from "../components/NewsCard";
import { newsData } from "../data/news";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Recommended");
  
  const categories = ["Recommended", "Cryptocurrency", "Technology", "Politics", "Sports", "Lifestyle"];
  
  const filteredNews = selectedCategory === "Recommended" 
    ? newsData 
    : newsData.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12 animate-fade-in space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Latest Tech News</h1>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest in technology and cybersecurity
          </p>
        </header>
        
        <div className="flex justify-center gap-2 flex-wrap mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {filteredNews.map((article) => (
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
