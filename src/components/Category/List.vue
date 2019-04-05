<template>
    <div class="content">
      <div class="box">
              <div class="card-action">
        <a class="btn btn-success btn-lg btn-block" href="#/category/novo">Nova Categoria</a>
      </div>
            <div class="box-header">
              <h3 class="box-title">Lista de Categorias</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Descrição</th>
                      <th scope="col">Ver</th>
                    </tr>
                     </thead>
                <tbody>
                <tr v-for="category in categories.data" :key="category.id" @click="goTo(category.id)">
                  <th>{{ category.id }}</th>
                  <th>{{ category.description }}</th>
                  <th> <i class="fa fa-eye"></i> </th>
                </tr>
                 </tbody>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
    </div>
</template>

<script>
export default {
  name: 'categorys',
  methods: {
    goTo: function (id) {
      this.$router.push('/category/' + id)
    }
  },
  computed: {
    categories () {
      return this.$store.state.category.categoryList
    }
  },
  created () {
    this.$store.dispatch('getCategories')
  }
}
</script>

<style>
tbody tr {
  cursor: pointer;
}
</style>
