<template>
  <div id="signup">
    <p class="intro">Vous désirez vous créer un compte afin de rejoindre le réseau social groupomania ? Veuillez renseigner les informations suivantes. Si vous vous êtes déjà créé un compte, vous pouvez <router-link :to="{ name: 'Login' }">vous connecter ici.</router-link></p>
    <form method="post">
        <label for="firstname" class="intro" >Veuillez indiquer votre prénom:</label><br />
        <input type="text" id="firstname" autofocus required><br />
        <label for="lastname" class="intro">Veuillez indiquer votre patronyme:</label><br />
        <input type="text" id="lastname" required><br />
        <label for="email" class="intro">Veuillez renseigner votre adresse e-mail:</label><br />
        <input type="email" id="email" pattern="[a-z|1-9]{2,}[@][a-z]{2,}[\.][a-z]{2,3}" required><br />
        <label for="paswword" class="intro">Veuillez vous choisir un mot de passe:</label><br />
        <input type="password" id="password" required><br />
        <p id="admin_ask">Nécessitez-vous un accès administrateur ?<br />
            <input type="radio" name="admin" value=false id="admin_false" checked> 
            <label for="admin" class="intro">Oui</label>
            <input type="radio" name="admin" value=true id="admin_true"> 
            <label for="admin" class="intro">Non</label>
        </p><br /><br />
        <input type="submit" value="Je crée mon compte" id="submit">
    </form>
  </div>
  <!--autofocus, required, regexp, value, size-->
</template>



<script>
export default {
//envoyer les infos au back-end
//alert, le compte a été créé, vous pouvez maintenant vous connecter
}
</script>

<style scoped lang="scss">
#signup {
  margin: auto;
  padding: 8%;
  border: 4mm ridge #fd2d01;
  box-shadow: 8px 3px black, -1em 0 .4em pink;
  width: 75%;
  .intro {
    color: #fd2d01;
    font-weight: bold;
  }
  #submit {
    background-color: black;
    border-color: pink;
    color: pink;
    padding: 10px 20px;
  }
  input {
    margin-bottom: 16px;
  }
}
</style>