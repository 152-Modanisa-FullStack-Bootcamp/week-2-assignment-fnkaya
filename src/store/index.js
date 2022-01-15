import Vue from "vue";
import Vuex from "vuex";
import {LOCAL_STORAGE_FAVORITES} from "@/constants";

Vue.use(Vuex);

const ADD_TO_FAVORITES = 'addToFavorites';
const REMOVE_FROM_FAVORITES = 'removeFromFavorites';

const store = new Vuex.Store({
    state: {
        favorites: JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVORITES)) || [],
    },
    getters: {
        getFavoritesCount: (state) => {
            return state.favorites.length;
        },
        getFavorites: (state) => {
            return state.favorites;
        },
        isFavorite: (state) => (payload) => {
            return state.favorites.some(favorite => favorite.id === payload.id);
        },
    },
    mutations: {
        [ADD_TO_FAVORITES](state, payload) {
            state.favorites = [ ...state.favorites, payload ];
        },
        [REMOVE_FROM_FAVORITES](state, payload) {
            state.favorites = [ ...state.favorites.filter(favorite => favorite.id !== payload.id) ];
        },
    },
    actions: {
        toggleFavorite: ({commit, state, getters}, payload) => {
            const isFavorite = getters.isFavorite(payload);
            isFavorite ? commit(REMOVE_FROM_FAVORITES, payload) : commit(ADD_TO_FAVORITES, payload);
            localStorage.setItem(LOCAL_STORAGE_FAVORITES, JSON.stringify(state.favorites));
        },
    },
});

export default store;