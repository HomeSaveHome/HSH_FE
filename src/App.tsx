import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticleList from "./components/Board/ArticleList";
import ArticleDetail from "./components/Board/ArticleDetail";
import Main from "./pages/Main";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:articleId" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
}

export default App
