<template>
  <div>
    <Header />
    <div id="login">
    <p class="intro">Vous avez déjà un compte Groupomania ? Veuillez entrer vos informations de connexion. Sinon, veuillez d'abord vous <router-link :to="{ name: 'Signup' }">créer un compte.</router-link></p>
    <form action="javascript:void(0);" method="post">
        <label for="e-mail" class="intro_label">Veuillez renseigner votre email:</label><br />
        <input type="email" id="e-mail" class="intro_input" v-model="email" autofocus required><br />
        <label for="pass-wword" class="intro_label">Veuillez renseigner votre mot de passe:</label><br />
        <input type="password" id="pass-word" class="intro_input" v-model="password" required><br /><br />
        <input type="submit" value="Je me connecte" class="submit" @click="toConnect">
    </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header_user.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  created() {
    sessionStorage.clear();
  },
  methods: {
    async toConnect() {
      if (this.email.length > 1 && this.password.length > 1) {
        const Connecting = {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({'user_email' : this.email, 'user_password' : this.password}),
          redirect: 'follow'
        };

        fetch ("http://localhost:3000/api/user/login", Connecting)
        .then(function(response) { return response.json()})
        .then(function(value) { if (value.token) {sessionStorage.setItem('Authorization', JSON.stringify(value)); /*sessionStorage.setItem('Authentification', this.email); console.log('Ca marche !'); this.$router.push({ name: 'Published' })*/}})
        .then(function() { console.log('Ca marche tres bien !')})
        .then(this.$router.push({ name: 'Published' }))
        .catch(function(error) { console.log('Une erreur est survenue. Veuillez vérifier vos informations de connexion: ' + error)});
      } else {
        alert('Veuillez remplir les champs requis afin de pouvoir vous connecter.')
      }
    }
  }
}
</script>

<style scoped lang="scss">
#login {
  margin: auto;
  padding: 8%;
  border: 4mm ridge #fd2d01;
  box-shadow: 8px 3px black, -1em 0 .4em pink;
  width: 50%;
  .submit {
    background-color: black;
    border-color: pink;
    color: pink;
    padding: 10px 20px;
  }
}
</style>