import React from 'react';
import { Input, TextArea } from '../ui';
import { useSelector } from 'react-redux';

const ArticleFrom = (props) => {
    const { isLoading } = useSelector((state) => state.article);
    const {
        title,
        setTitle,
        description,
        setDescription,
        body,
        setBody,
        formSubmit,
    } = props;
    return (
        <form onSubmit={formSubmit}>
            <Input label={'Title'} state={title} setState={setTitle} />
            <TextArea
                label={'Description'}
                state={description}
                setState={setDescription}
            />
            <TextArea
                label={'Body'}
                state={body}
                setState={setBody}
                height='250px'
            />
            <button
                className='btn btn-primary w-100 py-2 mt-2'
                disabled={isLoading}
                type='submit'
            >
                {isLoading ? 'Loading...' : 'Create'}
            </button>
        </form>
    );
};

export default ArticleFrom;
