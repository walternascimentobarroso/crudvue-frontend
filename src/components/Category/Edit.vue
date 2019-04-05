<script>
export default {
  name: 'category-edit',
  data () {
    return {
      sub_title: 'Editando conta'
    }
  },
  template: require('./form-edit.html'),
  methods: {
    save () {
      var params = {
        id: this.$route.params.id,
        data: {
          description: this.category.body.data.description
        }
      }
      this.$store.dispatch('updateCategory', params).then(() => {
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
