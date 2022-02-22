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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>