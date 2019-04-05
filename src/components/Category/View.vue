<template lang="html">
    <div class="content">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="card-title">Detalhes da categoria</h3>
                        <p><strong>Descrição:</strong> {{ category.body.data.description }} </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2">
                        <a :href="'#/category/editar/'+category.body.data.id" class="btn btn-warning btn-block">Editar</a>
                    </div>
                    <div class="col-lg-2">
                        <a href="" class="btn btn-danger btn-block" @click.prevent="remove(category.body.data.id)">Excluir</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <a href="#/category" class="btn btn-info btn-block">Voltar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'categorys-view',
  methods: {
    remove: function (id) {
      this.$store.dispatch('removeCategory', this.$route.params.id)
        .then(() => {
          setTimeout(() => {
            this.$router.push('/category')
          }, 100)
        })
    }
  },
  computed: {
    category () {
      return this.$store.state.category.categoryView || {}
    }
  },
  created () {
    this.$store.dispatch('getCategory', this.$route.params.id)
  }
}
</script>
