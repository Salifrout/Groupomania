<template>
<div>
<header>
  <!--<div id="topBar">-->
    <div id="logoBar">
      <h1 id="groupomania">Groupomania</h1>
    </div>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <div id="navBar"></div>
  <!--</div>-->
</header>

<!--

<footer>
  <div id="botBar">

  </div>
</footer>-->

  <router-view /></div>
</template>

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
  #navBar {
    background-color: #ffd7d7;
    color: #fd2d01;
    text-decoration: underline;
    width: 30%;
    height: 120px;
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
</style>
