import axios from 'axios';
const state = {
    user: null,
    posts: null
};

const getters = {
    isAuthenticated: state => !!state.user,
    StatePosts: state => !!state.posts,
    StateUser: state => !!state.user
};

const actions = {
    async Register({dispatch}, form) {
        await axios.post('register', form)
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('email', form.email)
        UserForm.append('password', form.password)
        await dispatch.login('LogIn', UserForm)
    }, 
    async Login({commit}, User) {
        axios.post('login', User)
        await commit('setUser', User.get('username'))
    },
    async CreatePost({dispatch}, post) {
        await axios.post('post', post)
        await dispatch('GetPosts')
    },  
    async GetPosts({commit}) {
        let response = await axios.get('posts')
        commit('setPosts', response.data)
    },
    async LogOut({commit}) {
        let user = null
        commit('logout', user)
    }
};

const mutations = {
    setUser(state, username){
        state.user = username
    },
    setPosts(state, posts){
        state.posts = posts
    },
    LogOut(state){
        state.user = null,
        state.posts = null
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}