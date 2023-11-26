import { Routes, Route } from 'react-router-dom';
import {
    Main,
    Login,
    Register,
    Navbar,
    ArticleDetail,
    CreateArticle,
    EditArticle,
} from './components';
import AuthService from './service/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUserSuccess } from './slice/auth';
import { getItem } from './helpers/persistance-storage';
import ArticleService from './service/article';
import { getArticleStart, getArticleSuccess } from './slice/article';

const App = () => {
    const dispatch = useDispatch();

    const getUser = async () => {
        try {
            const response = await AuthService.getUser();
            dispatch(signUserSuccess(response.user));
            // console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const token = getItem('token');
        if (token) {
            getUser();
        }
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/article/:slug' element={<ArticleDetail />} />
                    <Route path='/create-article' element={<CreateArticle />} />
                    <Route
                        path='/edit-article/:slug'
                        element={<EditArticle />}
                    />
                </Routes>
            </div>
        </div>
    );
};

export default App;
