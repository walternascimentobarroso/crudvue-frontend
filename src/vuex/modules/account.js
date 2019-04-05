import Vue from 'vue'

export default {
  state: {
    accountList: [],
    accountView: {}
  },
  mutations: {
    updateAccountList (state, data) {
      state.accountList = data
    },
    updateAccountView (state, data) {
      state.accountView = data
    }
  },
  actions: {
    getAccounts (context) {
      Vue.http.get('http://localhost:8000/api/category').then(response => {
        context.commit('updateAccountList', response.data)
      })
    },
    getAccount (context, id) {
      Vue.http.get('http://localhost:8000/api/category/' + id).then(response => {
        context.commit('updateAccountView', response.data)
      })
    },
    newAccount (context, data) {
      Vue.http.post('http://localhost:8000/api/category/', data)
    },
    updateAccount (context, params) {
      Vue.http.put('http://localhost:8000/api/category/' + params.id, params.data)
    },
    removeAccount (context, id) {
      Vue.http.delete('http://localhost:8000/api/category/' + id)
    }
  }
}
