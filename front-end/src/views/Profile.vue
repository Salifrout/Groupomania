<template>
<div>
    <Header />

    <div id="profilMine">
        <div id="profilBar">
            <div id="profilFirstname">
                <p class="info">Mon prénom: </p>
                <p class="enter"></p>
            </div>
            <div id="profilLastname">
                <p class="info">Mon patronyme: </p>
                <p class="enter"></p>
            </div>
            <div id="profilAdmin">
                <p class="info">Accès administrateur: </p>
                <p class="enter"></p>
            </div>    
        </div>     
    
        <img src="favicon.ico">

        <div id="profilTools">
            <input type="submit" value="Supprimer mon compte" class="submit">
            <input type="submit" value="Me déconnecter" class="submit">
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



