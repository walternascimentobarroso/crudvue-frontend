<script>
export default {
  name: 'account-edit',
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
          description: this.account.body.data.description
        }
      }
      this.$store.dispatch('updateAccount', params).then(() => {
        setTimeout(() => {
          this.$router.push('/contas')
        }, 100)
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
