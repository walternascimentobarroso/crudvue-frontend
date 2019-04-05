import Vue from 'vue'

export default {
  state: {
    categoryList: [],
    categoryView: {}
  },
  mutations: {
    updateCategoryList (state, data) {
      state.categoryList = data
    },
    updateCategoryView (state, data) {
      state.categoryView = data
    }
  },
  actions: {
    getCategories (context) {
      Vue.http.get('http://localhost:8000/api/category').then(response => {
        context.commit('updateCategoryList', response.data)
      })
    },
    getCategory (context, id) {
      Vue.http.get('http://localhost:8000/api/category/' + id).then(response => {
        context.commit('updateCategoryView', response)
      })
    },
    newCategory (context, data) {
      Vue.http.post('http://localhost:8000/api/category', data)
    },
    updateCategory (context, params) {
      Vue.http.put('http://localhost:8000/api/category/' + params.id, params.data)
    },
    removeCategory (context, id) {
      Vue.http.delete('http://localhost:8000/api/category/' + id)
    }
  }
}
