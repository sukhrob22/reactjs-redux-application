import { useState } from 'react';
import { icon } from '../constants';
import { Input } from '../ui';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='text-center mt-5'>
            <main class='form-signin w-25 m-auto'>
                <form>
                    <img
                        class='mb-2'
                        src={icon}
                        alt=''
                        width='72'
                        height='60'
                    />
                    <h1 class='h3 mb-3 fw-normal'>Please register</h1>
                    <Input label={'Username'} state={name} setState={setName} />
                    <Input
                        label={'Email address'}
                        state={email}
                        setState={setEmail}
                        type={'email'}
                    />
                    <Input
                        label={'Password'}
                        state={password}
                        setState={setPassword}
                        type={'password'}
                    />
                    <button
                        class='btn btn-primary w-100 py-2 mt-2'
                        type='submit'
                    >
                        Register
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Register;
