import axios from './api';

const AuthService = {
    async userRegister(user) {
        return (await axios.post('/users', { user })).data;
    },

    async userLogin(user) {
        const { data } = await axios.post('/users/login', { user });
        return data;
    },

    async getUser() {
        const { data } = await axios.get('/user');
        return data;
    },
};

export default AuthService;
