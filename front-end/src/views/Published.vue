<template>
    <div>
        <Header />

        <!--<div class="postForum" v-for="for of Forum" :key="for.Gpost_id">
            <div class="postTitle">
                <h2 class="postTitle_h2">
                {{ for.Gpost_title }}
                </h2>
            </div>

            <div v-if="for.Gpost_media" class="postMedia">
                <img :src="for.Gpost_media" alt="image privée du réseau social groupomania">
            </div>

            <div class="postText">
                <p class="postTextBlock">
                {{ for.Gpost_text }}
                </p>
            </div>

            <div class="postInfos">
                <div class="postAuthor">
                    <p class="postInfosAuthor">Publié par:     
                        <span class="postInfosFirstname"> {{ for.Gpost_firstNameAuthor }} </span>
                        <span class="postInfosLastname"> {{ for.Gpost_lastNameAuthor }} </span>
                    </p>
                </div>
                <p class="postDate">Enregistré le: 
                <span class="postInfosDate"> {{ for.Gpost_date }} </span>
                </p>
            </div>

            <router-link :to="{ name: 'Posted' }">Accéder aux commentaires</router-link>
        </div> -->
        <!--rajouter le paramètre de la route juste en haut ! -->

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
            Forum : []
        }
    },
    created() {
        fetch("http://localhost:3000/api/post")
        .then((lou) => alert(lou))
        .then((json) => {this.Forum = json})
        .then(console.log(this.Forum.length))
        .catch(error => console.log('error', error));
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

span {
    margin-left: 4px;
}
</style>