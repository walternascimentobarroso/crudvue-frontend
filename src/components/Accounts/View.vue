<template lang="html">
    <div class="content">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="card-title">Detalhes da categoria</h3>
                        <p><strong>Descrição:</strong> {{ account.body.data.description }} </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2">
                        <a :href="'#/contas/editar/'+account.body.data.id" class="btn btn-warning btn-block">Editar</a>
                    </div>
                    <div class="col-lg-2">
                        <a href="" class="btn btn-danger btn-block" @click.prevent="remove(account.body.data.id)">Excluir</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <a href="#/contas" class="btn btn-info btn-block">Voltar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'accounts-view',
  methods: {
    remove: function (id) {
      this.$store.dispatch('removeAccount', this.$route.params.id)
        .then(() => {
          this.$router.push('/contas')
        })
    }
  },
  computed: {
    account () {
      return this.$store.state.account.accountView || {}
    }
  },
  created () {
    this.$store.dispatch('getAccount', this.$route.params.id)
  }
}
</script>
