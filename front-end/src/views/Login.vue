<template>
  <div id="login">
    <p class="intro">Vous avez déjà un compte Groupomania ? Veuillez entrer vos informations de connexion. Sinon, veuillez d'avord vous <router-link :to="{ name: 'Signup' }">créer un compte.</router-link></p>
    <form method="get">
        <label for="email">Veuillez renseigner votre email:</label>
        <input type="email" id="email">
        <label for="paswword">Veuillez renseigner votre mot de passe:</label>
        <input type="password" id="password">
        <button></button>
    </form>
    <!--<router-view />-->
  </div>
</template>

<script>
/*import Signup from './Signup.vue'

export default {
 name: Login,
 components: Signup
}*/
</script>

<style lang="scss">
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
</style>