<template>
    <div>
        <Header />

        <img alt="Cette page n'existe pas" src="../assets/NotFound.png">
        <p>Désolé, il semble que la page demandée n'existe pas. Vous pouvez rejoindre le forum <router-link :to="{ name: 'Published' }">ici !</router-link> !</p>
        
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header_forum.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {
        Header,
        Footer
    }
}
</script>


<style scoped>
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
    p {
        margin: auto;
        font-size: 80%;
        width: 20%;
        font-weight: bold;
    }
</style>
