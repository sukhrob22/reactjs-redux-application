import { useEffect, useState } from 'react';
import ArticleFrom from './article-form';
import { useDispatch } from 'react-redux';
import {
    getArticleDetailFailure,
    getArticleDetailStart,
    getArticleDetailSuccess,
    postArticleFailure,
    postArticleStart,
    postArticleSuccess,
} from '../slice/article';
import ArticleService from '../service/article';
import { useNavigate, useParams } from 'react-router-dom';

const EditArticle = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart());
            try {
                const response = await ArticleService.getArticleDetail(slug);
                setTitle(response.article.title);
                setDescription(response.article.description);
                setBody(response.article.body);
                dispatch(getArticleDetailSuccess(response.article));
                // console.log(response);
            } catch (error) {
                // console.log(error);
                dispatch(getArticleDetailFailure());
            }
        };

        getArticleDetail();
    }, []);

    const formSubmit = async (e) => {
        e.preventDefault();
        const article = { title, description, body };
        dispatch(postArticleStart());
        try {
            await ArticleService.editArticle(slug, article);
            // console.log(arr);
            dispatch(postArticleSuccess());
            navigate('/');
            // console.log(response);
        } catch (error) {
            dispatch(postArticleFailure());
            console.log(error);
        }
    };

    const formProps = {
        title,
        setTitle,
        description,
        setDescription,
        body,
        setBody,
        formSubmit,
    };

    return (
        <div className='text-center'>
            <h1 className='fs-2'> Edit article</h1>
            <div className='w-75 mx-auto'>
                <ArticleFrom {...formProps} />
            </div>
        </div>
    );
};
export default EditArticle;
