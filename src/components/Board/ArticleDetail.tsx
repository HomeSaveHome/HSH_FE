import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommentList from "./CommentList";

interface Article {
    id: number;
    title: string;
    content: string;
}

const ArticleDetail = () => {
    const { articleId } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/articles/${articleId}`)
            .then((res) => res.json())
            .then((data) => setArticle(data))
            .catch((err) => console.error("Error fetching article:", err));
    }, [articleId]);

    return (
        <div>
            <button onClick={() => navigate("/")}>← Back</button>
            {article ? (
                <>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                    <CommentList articleId={article.id} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ArticleDetail;
