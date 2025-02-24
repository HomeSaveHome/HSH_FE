import { useState } from "react";

interface Post {
    author: string;
    content: string;
}

const BulletinBoard = () => {
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState<Post[]>([]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!author.trim() || !content.trim()) return;

        const newPost: Post = { author, content };
        setPosts([newPost, ...posts]);

        // Clear inputs
        setAuthor("");
        setContent("");
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Bulletin Board</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    style={styles.input}
                />
                <textarea
                    placeholder="Write your post here"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    style={styles.textarea}
                ></textarea>
                <button type="submit" style={styles.button}>Submit</button>
            </form>
            <div>
                {posts.map((post, index) => (
                    <div key={index} style={styles.post}>
                        <strong>{post.author}</strong>: {post.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: { fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "auto", padding: "20px" },
    heading: { textAlign: "center" as const },
    form: { marginBottom: "20px" },
    input: { display: "block", width: "100%", marginBottom: "10px", padding: "8px" },
    textarea: { display: "block", width: "100%", marginBottom: "10px", padding: "8px", height: "80px" },
    button: { padding: "8px 12px", cursor: "pointer" },
    post: { marginBottom: "20px", border: "1px solid #ccc", padding: "10px" },
};

export default BulletinBoard;
