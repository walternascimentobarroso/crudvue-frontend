<template>
    <div class="content">
      <div class="box">
              <div class="card-action">
        <a class="btn btn-success btn-lg btn-block" href="#/contas/novo">Nova Categoria</a>
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
                <tr v-for="account in accounts.data" :key="account.id" @click="goTo(account.id)">
                  <th>{{ account.id }}</th>
                  <th>{{ account.description }}</th>
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
  name: 'accounts',
  methods: {
    goTo: function (id) {
      this.$router.push('/contas/' + id)
    }
  },
  computed: {
    accounts () {
      return this.$store.state.account.accountList
    }
  },
  created () {
    this.$store.dispatch('getAccounts')
  }
}
</script>

<style>
tbody tr {
  cursor: pointer;
}
</style>
