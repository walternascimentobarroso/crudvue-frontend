<script>
export default {
  name: 'category-create',
  data () {
    return {
      sub_title: 'Criando conta',
      category: {
        'balance': 0
      }
    }
  },
  template: require('./form.html'),
  methods: {
    save () {
      this.$store.dispatch('newCategory', this.category).then(() => {
        setTimeout(() => {
          this.$router.push('/category')
        }, 100)
      })
    }
  }
}

</script>
