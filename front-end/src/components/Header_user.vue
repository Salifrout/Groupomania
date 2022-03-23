<template>
  <header>
    <div id="logoBar">
      <h1 id="groupomania">Groupomania</h1>
    </div>
    
    <div id="navBar">
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'Signup' }">S'inscrire</router-link>
          </li>
          <br />
          <li>
            <router-link :to="{ name: 'Login' }">Se connecter</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header_user'
}
</script>

<style lang="scss">
header {
  display: flex;
  margin-bottom: 160px;
  height: 120px;
  #logoBar {
    background-color: #fd2d01;
    width: 70%;
    h1 {
      color: #ffd7d7;
      font-weight: 900;
      margin: auto;
      text-align: center;
      margin-top: 35px;
    }
  }
  #navBar {
    background-color: #ffd7d7;
    width: 30%;
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
}
</style>