import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../ui';
import { getArticleStart, getArticleSuccess } from '../slice/article';
import ArticleService from '../service/article';
import ArticleCard from './article-card';

const Main = () => {
    const { articles, isLoading } = useSelector((state) => state.article);
    const dispatch = useDispatch();

    const getArticles = async () => {
        dispatch(getArticleStart());
        try {
            const response = await ArticleService.getArticle();
            dispatch(getArticleSuccess(response.articles));
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <div className='container'>
            {isLoading && <Loader />}
            <div className='album py-5 '>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    {articles.map((item) => (
                        <ArticleCard item={item} getArticles={getArticles} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;
