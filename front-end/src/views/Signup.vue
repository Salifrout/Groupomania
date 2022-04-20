<template>
  <div>
    <Header />

    <div id="signup">
      <p class="intro">Vous désirez vous créer un compte afin de rejoindre le réseau social Groupomania ? Veuillez renseigner les informations suivantes.<br />
      Si vous vous êtes déjà créé un compte, vous pouvez <router-link :to="{ name: 'Login' }">vous connecter ici.</router-link></p>
      <form method="post">
        <label for="firstname" class="intro_label" >Veuillez indiquer votre prénom:</label><br />
        <input type="text" id="firstname" class="intro_input" v-model="firstname" autofocus required><br />
        <label for="lastname" class="intro_label">Veuillez indiquer votre patronyme:</label><br />
        <input type="text" id="lastname" class="intro_input" v-model="lastname" required><br />
        <label for="email" class="intro_label">Veuillez renseigner votre adresse e-mail:</label><br />
        <input type="email" id="email" class="intro_input" v-model="email" pattern="[a-z|0-9]{2,}[@][a-z]{2,}[\.][a-z]{2,3}" required><br />
        <span v-if="!/[a-z|1-9]{2,}[@][a-z]{2,}[\.][a-z]{2,3}/.test(email) && email.length > 0">Cette adresse email n'est pas valide.</span><br />
        <label for="paswword" class="intro_label">Veuillez vous choisir un mot de passe:</label><br />
        <input type="password" id="password" class="intro_input" pattern=".{12,30}" v-model="password" required><br />
        <span v-if="!password">Votre mot de passe doit contenir entre 12 et 30 caractères.</span><br />
        <p id="admin_ask">Nécessitez-vous un accès administrateur ?<br />
            <input type="radio" name="admin" :value="false" id="admin_false" v-model="admin" checked> 
            <label for="admin" class="intro_label">Non</label>
            <input type="radio" name="admin" :value="true" id="admin_true" v-model="admin"> 
            <label for="admin" class="intro_label">Oui</label>
        </p><br /><br />
        <input type="submit" value="Je crée mon compte" class="submit" @click="sendForm">
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
      firstname: '',
      lastname: '',
      admin: false
    }
  },
  created() {
    sessionStorage.clear();
  },
  methods: {
    sendForm() {
      if (this.firstname && this.lastname && this.email && this.password.length > 12 && this.password.length < 30) {
        const BODY = {
            'user_email': this.email,
            'user_password': this.password,
            'user_firstname': this.firstname,
            'user_lastname': this.lastname,
            'user_admin': this.admin
          };
        const newAccount = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(BODY)
        };
        fetch("http://localhost:3000/api/user/signup", newAccount)
        .then(response => response.text())
        .then(result => console.log( result ))
        .then(this.email = '', this.password = '', this.firstname = '', this.lastname = '')
        .then(alert('Votre compte a pu être créé. Vous pouvez maintenant tenter de vous connecter.'))
        .catch(error => console.log( error ));
      } else {
        alert('Votre compte ne peut être enregistré. Veuillez vérifier vos informations.')
      }
    }
  },
}
</script>

<style scoped lang="scss">
#signup {
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

span {
  margin-top: -20px;
}
</style>