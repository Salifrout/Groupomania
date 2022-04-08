<template>
<div>
    <Header />

    <div id="profilMine">
        <div id="profilBar">
            <div id="profilFirstname">
                <p class="info">Mon prénom: {{ user.user_firstname }}</p>
                <p class="enter"></p>
            </div>
            <div id="profilLastname">
                <p class="info">Mon patronyme: {{ user.user_lastname }}</p>
                <p class="enter"></p>
            </div>
            <div id="profilAdmin">
                <p v-if="user.user_admin == 1 || user.user_admin == true" class="info">Accès administrateur: oui</p>
                <p v-else class="info">Accès administrateur: non</p>
                <p class="enter"></p>
            </div>    
        </div>     
    
        <img src="../../public/logo.jpg">

        <div id="profilTools">
            <input type="submit" value="Supprimer mon compte" class="submit" @click.stop="delete">
            <input type="submit" value="Me déconnecter" class="submit" @click.stop="disconnect">
        </div>
    </div>

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
    },
    data() {
        return {
            user : []
        }
    },
    created() {
        fetch("http://localhost:3000/api/user/access/" + sessionStorage.getItem('Authentification'))
        .then((response) => response.json())
        .then((json) => {this.user = json})
    },
    methods : {
        disconnect() {
            const toQuit = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://localhost:3000/api/user/logout", toQuit)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(sessionStorage.clear())
            .then(this.$router.push({ name: 'Login' }))
            .catch(error => console.log('error', error));
        },
        delete() {
            fetch("http:localhost:3000/api/user/delete/" + sessionStorage.getItem('Authentification'))
            .then

            sessionStorage.clear()
        }
    }
}
</script>

<style scoped lang="scss">
#profil {
    &Mine {
        width: 50%;
        border: 4mm ridge #ffd7d7;
        margin: auto;
        padding: 8%;
        box-shadow: 4px 2px orange;  
        img {
            display: block;
            width: 100%;
        }
    }
    &Bar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 50px;
        .info {
            font-weight: 900;
        }
    }
    &Tools {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 20px;
        .submit {
            background-color: black;
            border-color: orangered;
            color: orangered;
            padding: 10px 20px;
        }
    }
}
</style>



