
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
}

export const NewsCard = ({ id, title, category, image, excerpt }: NewsCardProps) => {
  return (
    <Link to={`/article/${id}`} className="block no-underline">
      <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden mb-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4 mb-2">
                <Badge variant="secondary" className="rounded-full">
                  {category}
                </Badge>
              </div>
              <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {title}
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
            </CardContent>
          </div>
        </div>
      </Card>
    </Link>
  );
};
