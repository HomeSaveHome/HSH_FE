import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";  // Your backend API

export const getArticles = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/articles`);
        return response.data;
    } catch (error) {
        console.error("Error fetching articles:", error);
        return [];
    }
};
