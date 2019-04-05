<script>
export default {
  name: 'account-create',
  data () {
    return {
      sub_title: 'Criando conta',
      account: {
        'balance': 0
      }
    }
  },
  template: require('./form.html'),
  methods: {
    save () {
      this.$store.dispatch('newAccount', this.account).then(() => {
        this.$router.push('/contas')
      })
    }
  }
}

</script>
