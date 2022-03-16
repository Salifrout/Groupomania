<template>
  <div>
    <Header />
    <div id="login">
    <p class="intro">Vous avez déjà un compte Groupomania ? Veuillez entrer vos informations de connexion. Sinon, veuillez d'abord vous <router-link :to="{ name: 'Signup' }">créer un compte.</router-link></p>
    <form method="get">
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
  methods: {
    async toConnect() {
      // écrire la fonction => if(email et password vides...) + requete fetch + renvoyer vers page du forum + vérifier dans cours vuejs 3 comment empecher accès a certains composants si user n'a pas accès
      //auth sur toutes les routes exceptées inscription et connexion côté back
      if (this.email.length > 1 || this.password.length > 1) {
        const BODY = {
          'user_email' : this.email,
          'user_password' : this.password
        };
        const Connecting = {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(BODY),
          redirect: 'follow'
        };
        await fetch ("http://localhost:3000/api/user/login", Connecting)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(router.push(ETC. ...))
        .catch(error => console.log('error', error));
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