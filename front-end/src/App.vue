<template>
<div>
  
  <router-view />
 
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

.intro {
  text-align: justify;
  &_label {
    color: #fd2d01;
    font-weight: bold;
    margin-top: 25px;
  }
  &_input {
    margin-bottom: 16px;
  }
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
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>
