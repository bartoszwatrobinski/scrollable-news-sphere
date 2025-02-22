
import { Link } from "react-router-dom";

interface NewsCardProps {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}

export const NewsCard = ({ id, title, date, category, image, excerpt }: NewsCardProps) => {
  return (
    <Link to={`/article/${id}`} className="block">
      <article className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden mb-6 animate-fade-in">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 h-48 md:h-auto relative">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-sm text-gray-600">{date}</span>
              <span className="px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full">
                {category}
              </span>
            </div>
            <h2 className="text-xl font-semibold mb-3 group-hover:text-gray-700 transition-colors">
              {title}
            </h2>
            <p className="text-gray-600 line-clamp-2">{excerpt}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
