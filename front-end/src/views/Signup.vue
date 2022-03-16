<template>
  <div>
    <Header />

    <div id="signup">
      <p class="intro">Vous désirez vous créer un compte afin de rejoindre le réseau social Groupomania ? Veuillez renseigner les informations suivantes.<br />
      Si vous vous êtes déjà créé un compte, vous pouvez <router-link :to="{ name: 'Login' }">vous connecter ici.</router-link></p>
      <form action="javascript:void(0);" method="post">
        <label for="firstname" class="intro_label" >Veuillez indiquer votre prénom:</label><br />
        <input type="text" id="firstname" class="intro_input" v-model="firstname" autofocus required><br />
        <label for="lastname" class="intro_label">Veuillez indiquer votre patronyme:</label><br />
        <input type="text" id="lastname" class="intro_input" v-model="lastname" required><br />
        <label for="email" class="intro_label">Veuillez renseigner votre adresse e-mail:</label><br />
        <input type="email" id="email" class="intro_input" v-model="email" pattern="[a-z|0-9]{2,}[@][a-z]{2,}[\.][a-z]{2,3}" required><br />
        <!--<span v-if="/[a-z|1-9]{2,}[@][a-z]{2,}[\.][a-z]{2,3}/.test(email)">Cette adresse email n\'est pas valide.</span><br />-->
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
      admin : false,
      /*errors: {}*/
    }
  },
  methods: {
//envoyer la requête + alert compte créé
//effacer les données dans le formulaire une fois le compte créé + envisager le e.prevenDefault + alert('le compte a été créé')

    async sendForm() {
      console.log(typeof this.firstname, typeof this.lastname, typeof this.email, typeof this.password, typeof this.admin, typeof "0");

      if (this.firstname && this.lastname && this.email && this.password.length > 12 && this.password.length < 30) {
        console.log(this.firstname, this.lastname, this.email, this.password, this.admin, "1");
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
        await fetch("http://localhost:3000/api/user/signup", newAccount)
        .then(response => response.text())
        .then(result => console.log(result + 'voici le BODY: ' + JSON.stringify(BODY) + 'qui est un '+ typeof BODY))
        .catch(error => console.log('error', error + 'Le back-end ne fonctionne toujours pas!'));
        /*
        try {
          const res = await fetch('http://localhost:3000/api/user/signup', newAccount);
          const json = await res.json();
          console.log(newAccount);
          console.log(typeof BODY + 'réponse au serveur 3' + BODY);
          console.log(typeof newAccount + 'réponse serveur 1');
          console.log(typeof newAccount.body + 'rponse serveur 2' + newAccount.body);
          if (res.ok) {
            console.log(json.message);
            alert('Votre compte a pu être créé. Vous pouvez maintenant tenter de vous connecter.')
          } else {
            console.log('bien le bonjour!');
          }
        } catch {
          console.log(json.message);
          alert('Un problème est survenu.')
        }*/
      }/* if (!firstname) {
        console.log(this.firstname, this.lastname, this.email, this.password, this.admin, "1");
      } if (!lastname) {
        console.log(this.firstname, this.lastname, this.email, this.password, this.admin, "2");
      } if (!email) {
        console.log(this.firstname, this.lastname, this.email, this.password, this.admin, "3");
      } if (!password.length > 12) {
        console.log(this.firstname, this.lastname, this.email, this.password, this.admin, "4");
      } if (!password.length < 30) {
        console.log(this.firstname, this.lastname, this.email, this.password, this.admin, "5");
      }*/
      else {
        /*alert('Votre compte ne peut être enregistré. Veuillez vérifier vos informations.')*/
        console.log('Bonjour')
      }

      /*const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const firstname = document.getElementById("firstname").value;
      const lastname = document.getElementById("lastname").value;
      const admin = document.querySelector('input[name="admin"]:checked').value;

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestBody = JSON.stringify({
        "email": this.email,
        "password": this.password,
        "firstname": this.firstname,
        "lastname": this.lastname,
        "admin": this.admin
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: requestBody,
        //redirect: follow de postman + console.log valeurs de firstanem_user etc + regarder autre étudiant openclassrooms sur l'autre pc
      };

      fetch("http://localhost:3000/api/user/signup", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));*/
    }
    /*sendForm() {
      gdgdgd
    }*/
  },
  /*watch : {
    email(newValue) {
      if (/[a-z|1-9]{2,}[@][a-z]{2,}[\.][a-z]{2,3}/.test(newValue)) {
        this.errors['email'] = '';
      } else {
        this.errors['email'] = 'Cette adresse email n\'est pas valide.';
      }
    },
    password(newValue) {
      if (newValue.length < 12 || newValue.length > 30) {
        this.errors['password'] = 'Votre mot de passe doit contenir entre 12 et 30 caractères.';
      } else {
        this.errors['password'] = '';
      }
    }
  }*/
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