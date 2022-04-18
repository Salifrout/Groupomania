<template>
    <div>
        <Header />

        <p id="warning" v-if="Forum.length < 1"> Aucun poste n'a encore été partagé. Soyez le premier à publier sur Groupomania !</p>

        <div class="postForum" v-else v-for="Fors in Forum" :key="Fors.Gpost_id">
            <div class="postTitle">
                <h2 class="postTitle_h2">
                {{ Fors.Gpost_title }}
                </h2>
            </div>

            <div class="postText">
                <p class="postTextBlock">
                {{ Fors.Gpost_text }}
                </p>
            </div>

            <div class="postInfos">
                <div class="postAuthor">
                    <p class="postInfosAuthor">Publié par:     
                        <span class="postInfosFirstname"> {{ Fors.Gpost_firstNameAuthor }} </span>
                        <span class="postInfosLastname"> {{ Fors.Gpost_lastNameAuthor }} </span>
                    </p>
                </div>
                <p class="postDate">Enregistré le: 
                <span class="postInfosDate"> {{ Fors.Gpost_date.toLocaleString().slice(0, -14) }} </span>
                </p>
            </div>

            <router-link :to="{ name: 'Posted', query: { id: Fors.Gpost_id }}">Accéder aux commentaires</router-link>
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
            Forum: {}
        }
    },
    mounted() {
        const auth = JSON.parse(sessionStorage.getItem('Authorization'));
        const myHeaders = new Headers();
        myHeaders.append('Authorization', auth.token);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        fetch("http://localhost:3000/api/post", requestOptions)
        .then((response) => response.json())
        .then((json) => {this.Forum = json})
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
            width: 90%;
            text-align: justify;
            word-break: break-word;
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

#warning {
    text-align: center;
    margin-top: 300px;
    margin-bottom: 300px;
}

span {
    margin-left: 4px;
}
</style>