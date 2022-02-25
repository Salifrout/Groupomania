<template>
<div>
  <header>
    <div id="logoBar">
      <h1 id="groupomania">Groupomania</h1>
    </div>
    
    <div id="navBar_register">
      <!--<nav>-->
        <ul>
          <li>
            <router-link :to="{ name: 'Signup' }">S'inscrire</router-link>
          </li>
          <br />
          <li>
            <router-link :to="{ name: 'Login' }">Se connecter</router-link>
          </li>
        </ul>
      <!--</nav>-->
    </div>

    <div id="navBar_navigate">
      <!--<nav>-->
        <ul>
          <li>
            <router-link :to="{ name: 'Profile' }">Mon profil</router-link>
          </li>
          <br />
          <li>
            <router-link :to="{ name: 'Published' }">Forum</router-link>
          </li>
          <br />
          <li>
            <router-link :to="{ name: 'Publish' }">Publier</router-link>
          </li>
        </ul>
      <!--</nav>-->
    </div>
  </header>

  <router-view />

  <footer>
  </footer>
 
</div>
</template>

<script>
/*import Signup from './views/Signup.vue'
import Login from './views/Login.vue'

export default {
  name: 'App',
  components: {
    Signup,
    Login
  }
}*/
</script>

<style lang="scss">
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/

header {
  display: flex;
  margin-bottom: 160px;
  #logoBar {
    background-color: #fd2d01;
    height: 120px;
    width: 70%;
    & h1 {
      color: #ffd7d7;
      font-weight: 900;
      margin: auto;
      padding: 40px 35%;
    }
  }  
}

.intro {
  text-align: justify;
  &_label {
    color: #fd2d01;
    font-weight: bold;
  }
  &_input {
    margin-bottom: 16px;
  }
}

footer {
  margin: 0;
  margin-top: 160px;
  background-color: #fd2d01;
  height: 80px;
}
/*
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
* {
  list-style: none;
}

</style>
