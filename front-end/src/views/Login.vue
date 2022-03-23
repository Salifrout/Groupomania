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
          /*redirect: 'follow'*/
        };

/*const res = await fetch("http://localhost:3000/api/user/login", Connecting);
        const json = await res.json();
          
                console.log(this.email + 'test 0');
                console.log(res.json() + 'test 1');
                console.log(typeof json + 'test 2');
                console.log(JSON.parse(json) + 'test 3');
                console.log(typeof JSON.parse(json) + 'test 4');
                console.log(BODY + 'test 5');
                console.log(JSON.stringify(BODY) + 'test 6');
          
sessionStorage.clear();
        try {
          
          if (res.ok) {
            sessionStorage.setItem('Authentification', this.email);
            this.$router.push({ name: 'Published' })
          } else {
            console.log( json.message + ' test 143')
            alert('Une erreur vous empêche de vous connecter.')
          }
        }
        catch(err) {
          alert('Un problème est survenu lors de la tentative de connexion: ' + err)
        }*/

       fetch ("http://localhost:3000/api/user/login", Connecting)
        .then(sessionStorage.setItem('Authentification', this.email))
        .then(this.$router.push({ name: 'Published' }))
        /*.then(sessionStorage.setItem('Authentification', this.email))
        .then(this.$router.push({ name: 'Published' }))*/
        /*.then(this.$router.push({ name: 'Published', params: { user_email: this.email } }))*/
        .catch(error => console.log('error', error));
      } else {
        alert('Veuillez remplir les champs requis afin de pouvoir vous connecter.')
      }
    } //empecher la connexion si l'email et le mdp ne correspodent pas !
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