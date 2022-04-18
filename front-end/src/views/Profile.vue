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
                <input type="submit" value="Supprimer mon compte" class="submit" @click="toDelete">
                <input type="submit" value="Me déconnecter" class="submit" @click="disconnect">
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
            user: []
        }
    },
    created() {
        const auth = JSON.parse(sessionStorage.getItem('Authorization'));
        const myHeaders = new Headers();
        myHeaders.append('Authorization', auth.token);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/api/user/access/" + auth.userId, requestOptions)
        .then((response) => response.json())
        .then((json) => {this.user = json})
    },
    methods : {
        disconnect() {
            const auth = JSON.parse(sessionStorage.getItem('Authorization'));
            const myHeaders = new Headers();
            myHeaders.append('Authorization', auth.token);
            const toQuit = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("http://localhost:3000/api/user/logout", toQuit)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(sessionStorage.clear())
            .then(this.$router.push({ name: 'Login' }))
            .catch(error => console.log('error', error));
        },
        toDelete() {
            const myHeaders = new Headers();
            myHeaders.append('Authorization', auth.token);
            const requestOptions = { method: 'DELETE', headers: myHeaders, redirect: 'follow' };

            fetch("http://localhost:3000/api/user/" + auth.userId, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(sessionStorage.clear())
            .then(this.$router.push({ name: 'Login' }))
            .catch(error => console.log('error', error));
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



