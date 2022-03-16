<template>
    <div>
        <Header />

        <div class="postForum">
            <div class="postTitle">
                <h2 class="postTitle_h2">
                TITRE
                </h2>
            </div>

            <div class="postMedia">
                <img src="http://www.snut.fr/wp-content/uploads/2015/12/image-de-nature-9.jpg" alt="">
            </div>

            <div class="postText">
                <p class="postTextBlock">
                UN LONG TEXTE
                </p>
            </div>

            <div class="postInfos">
                <div class="postAuthor">
                    <p class="postInfosAuthor">Publié par:     
                        <span class="postInfosFirstname">PRENOM</span>
                        <span class="postInfosLastname">PATRONYME</span>
                    </p>
                </div>
                <p class="postDate">Enregistré le: 
                <span class="postInfosDate">DATE</span>
                </p>
            </div>

            <router-link :to="{ name: 'Posted' }">Accéder aux commentaires</router-link>
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
.post {
    &Forum {
    margin: auto;
    padding: 12px;
    border: 4mm ridge blueviolet;
    box-shadow: 8px 3px orange, -1em 0 .4em plum;
    width: 75%;
    margin-bottom: 30px;
    }
    &Title {
        margin-bottom: 20px;
        border: 2px solid purple;   
        background-color: plum;
        color: #fff;
        font-weight: 900;
        text-align: center;
        &Box {
        border: 1mm solid peru;
        background-color: maroon;
        margin: 4px;
        display: flex;
        flex-wrap: wrap;
        }
        &_label {
            font-weight: 900;
        }
    }
    &Text {
        margin-top: 15px;
        margin-bottom: 5px;
        &Block {
            display: inline-block;
            width: 100%;
            text-align: justify;
        }
    }
    &Media {
        img {
            width: 100%;
        }
    }
    &Author {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &Infos {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &Author {
        display: flex;
        flex-wrap: wrap;
        font-weight: 700;
        }
        &Firstname, &Lastname, &Date {
            font-weight: normal;
        }
    }
    &Date {
        font-weight: 700;
    }
}
</style>