import axios from 'axios';

const ArticleService = {
    async getArticle() {
        const { data } = await axios.get('/articles');
        return data;
    },
    async getArticleDetail(slug) {
        const { data } = await axios.get(`/articles/${slug}`);
        return data;
    },
    async postArticle(article) {
        const { data } = await axios.post('/articles', { article });
        return data;
    },
    async deletArticle(slug) {
        const { data } = await axios.delete(`/articles/${slug}`);
        return data;
    },
};

export default ArticleService;
