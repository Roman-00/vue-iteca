import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        products: {},
    },
    mutations: {
        /**
         * Записать значения в стейт
         * @param {Object} state
         * @param {Object} response
         */
        setProductsToState(state, response) {
            state.products = response;
        },
    },
    actions: {
        /**
         * Получаем продукты
         */
        getProducts({ commit }) {
            return axios('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
            })
                .then((response) => {
                    commit('setProductsToState', response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    getters: {
        products(state) {
            return state.products;
        },
    },
});
