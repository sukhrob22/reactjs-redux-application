import { useState } from 'react';
import ArticleFrom from './article-form';
import ArticleService from '../service/article';
import { useDispatch } from 'react-redux';
import {
    postArticleFailure,
    postArticleStart,
    postArticleSuccess,
} from '../slice/article';
import { useNavigate } from 'react-router-dom';

const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formSubmit = async (e) => {
        e.preventDefault();
        const article = { title, description, body };
        dispatch(postArticleStart());
        try {
            await ArticleService.postArticle(article);
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
            <h1 className='fs-2'> Create article</h1>
            <div className='w-75 mx-auto'>
                <ArticleFrom {...formProps} />
            </div>
        </div>
    );
};

export default CreateArticle;
