<template>
  <div id="login">
    <p class="intro">Vous avez déjà un compte Groupomania ? Veuillez entrer vos informations de connexion. Sinon, veuillez d'abord vous <router-link :to="{ name: 'Signup' }">créer un compte.</router-link></p>
    <form method="get">
        <label for="e-mail" class="intro_label">Veuillez renseigner votre email:</label><br />
        <input type="email" id="e-mail" class="intro_input" autofocus required><br />
        <label for="pass-wword" class="intro_label">Veuillez renseigner votre mot de passe:</label><br />
        <input type="password" id="pass-word" class="intro_input" required><br /><br />
        <input type="submit" value="Je me connecte" class="submit">
    </form>
  </div>
</template>

<script>
/*import Signup from './Signup.vue'

export default {
 name: Login,
 components: Signup
}*/
</script>

<style scoped lang="scss">
#navBar_ {
  &register {
    background-color: #ffd7d7;
    width: 30%;
    height: 120px;
    ul {
      padding: 10px;
      a {
        text-decoration: none;
        color: #fff;
        font-weight: 900;
        font-size: large;
        }
      }
    }
  &navigate {
    display: none;
  }
}

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