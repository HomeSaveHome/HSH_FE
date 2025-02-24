import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Article {
    id: number;
    title: string;
    content: string;
}

const ArticleList = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const navigate = useNavigate(); // ✅ Add navigation hook

    useEffect(() => {
        fetch("http://localhost:8080/api/articles")
            .then((res) => res.json())
            .then((data) => setArticles(data))
            .catch((err) => console.error("Error fetching articles:", err));
    }, []);

    return (
        <div>
            <h1>Bulletin Board</h1>
            <ul>
                {articles.map((article) => (
                    <li
                        key={article.id}
                        onClick={() => navigate(`/articles/${article.id}`)} // ✅ Navigate to detail page
                        style={{ cursor: "pointer", marginBottom: "10px" }}
                    >
                        <strong>{article.title}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;
