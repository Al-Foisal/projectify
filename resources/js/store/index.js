import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isLogin: false,
            user: null,
        };
    },
    mutations: {
        setLogin(state, payload) {
            state.isLogin = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        async setLogin({ commit }, payload) {
            try {
                await axios.get('/sanctum/csrf-cookie');
                const res = await axios.post('/api/authenticate', payload);
                if (!res.data.success) {
                    throw res.message;
                }
                await axios
                    .get('/api/user')
                    .then((res) => {
                        commit('setLogin', true);
                        commit('setUser', res.data);
                    })
                    .catch(() => {
                        commit('setLogin', false);
                        commit('setUser', null);
                    });
            } catch (error) {
                throw 'Authentication failed.';
            }
        },
    },
    getters: {
        isLogin(state) {
            return state.isLogin;
        },
        user(state) {
            return state.user;
        },
    },
});

export default store;
