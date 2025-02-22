
import { useParams } from "react-router-dom";
import { newsData } from "../data/news";
import { Link } from "react-router-dom";

export const ArticlePage = () => {
  const { id } = useParams();
  const article = newsData.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
          <Link to="/" className="text-blue-500 hover:underline">
            Return to News Feed
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <Link
        to="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        ← Back to News Feed
      </Link>
      <article>
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <time className="text-gray-600">{article.date}</time>
            <span className="px-3 py-1 text-sm font-semibold bg-gray-100 rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
        </header>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />
        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed text-gray-700">
            {article.content}
          </p>
        </div>
      </article>
    </div>
  );
};
