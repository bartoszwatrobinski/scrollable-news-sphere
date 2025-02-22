
import { useParams } from "react-router-dom";
import { newsData } from "../data/news";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";

export const ArticlePage = () => {
  const { id } = useParams();
  const article = newsData.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">Article not found</h1>
          <Button asChild variant="link">
            <Link to="/">Return to News Feed</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <Button
        asChild
        variant="ghost"
        className="mb-6 gap-2"
      >
        <Link to="/">
          <ChevronLeft className="h-4 w-4" />
          Back to News Feed
        </Link>
      </Button>
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex items-center gap-4">
            <time className="text-muted-foreground">{article.date}</time>
            <Badge variant="secondary">{article.category}</Badge>
          </div>
          <h1 className="text-4xl font-bold">{article.title}</h1>
        </CardHeader>
        <CardContent className="space-y-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {article.content}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
