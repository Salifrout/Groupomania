<template>
<div>
    <Header />

    <div id="postForum">
        <div id="postTitle">
            <h2 id="postTitle_h2">
                {{ Posted.Gpost_title }}
            </h2>
        </div>

        <div id="postText">
            <p id="postTextBlock">
                {{ Posted.Gpost_text }}
            </p>
        </div>

        <div id="postInfos">
            <div id="postAuthor">
                <p id="postInfosAuthor">Publié par:     
                    <span id="postInfosFirstname"> {{ Posted.Gpost_firstNameAuthor }} </span>
                    <span id="postInfosLastname"> {{ Posted.Gpost_lastNameAuthor }} </span>
                </p>
            </div>
            <p id="postDate">Enregistré le: 
                <span id="postInfosDate"> {{ Posted.Gpost_date.toLocaleString().slice(0, -14) }} </span>
            </p>
        </div>

        <div id="chooseAct">
            <div id="backForum">
                <router-link :to="{ name: 'Published' }">Je retourne sur le forum !</router-link>
            </div>    
            <input type="submit" value="Supprimer" class="submit" @click="supressPost">
        </div>

        <div id="postComment">
            <input type="text" placeholder="Entrer votre commentaire ici..." v-model="OneComment" id="postComment1" class="intro_input" autofocus><br />
            <input type="submit" value="Valider mon commentaire" id="validateComment1" @click="postComment">
        </div>

        <div class="postedComment" v-if="Comments.length > 0" v-for="(Comment, key) in Comments" :key="key">

            <div class="postedCommentX intro_input" autofocus>
                <div class="postedCommentX_border">
                    <p> {{ Comment.comment_text }} </p> 
                </div>            
            </div>

            <div class="postedCommentXdisplay">
                <div class="postedCommentXAuthor">
                    <p class="postedCommentXInfosAuthor">Publié par:     
                        <span class="postedCommentXInfosFirstname"> {{ Comment.comment_firstname }} </span>
                        <span class="postedCommentXInfosLastname"> {{ Comment.comment_lastname }} </span>
                    </p>
                </div>
                <p class="postedCommentXDate">Enregistré le: 
                    <span class="postedCommentXInfosDate"> {{ Comment.comment_date.toLocaleString().slice(0, -14) }} </span>
                </p>
            </div>

        </div>

        <div class="commentTrash">
            <img src="../assets/Comment_trash.png" :title="warning_trash" v-if="Comments.length > 0" alt="modérer le commentaire" @click="deleteComments">
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
            Posted: [],
            Comments: [],
            OneComment: '',
            warning_trash: "Vous pouvez choisir de supprimer les commentaires de ce post si vous disposez de privilèges administrateurs. Vous pouvez prendre connaissance de vos privilèges en consultant votre page de profil !"
        }
    },
    created() {
        const UrlOfPage = location;
        const Url = new URL(UrlOfPage);
        const thePost = Url.searchParams.get("id");


        const token = sessionStorage.getItem('Authorization').split(':')[2];
        const adToken = token.length - 2;
        const Authing = token.slice(1, adToken);
        const myHeaders = new Headers();
        myHeaders.append('Authorization', Authing);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/api/post/" + thePost, requestOptions)
        .then((response) => response.json())
        .then((json) => {this.Posted = json})
        .catch(error => console.log('error', error));

        fetch("http://localhost:3000/api/comment/" + thePost, requestOptions)
        .then((response) => response.json())
        .then((json) => {this.Comments = json})
        .catch(error => console.log('error', error));
    },
    /*mounted() {
        const user_email = sessionStorage.getItem('Authentification');
        const theComment = this.$refs.commentary;
        const theImage = this.$refs.images;
        const requestOptions = { method: 'DELETE', redirect: 'follow' };
        console.log(theImage + 'test 1');

        for (let I = 0; I < theComment.length; I++) {
            console.log('bonjour !');
            theImage[I].addEventListener('click', function() {
                const comment_id = this.Comments[I].comment_id;


                fetch("http://localhost:3000/api/comment/" + user_email + "/" + comment_id, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            })
        }
    },*/
    methods: {
        postComment() {
            const UrlOfPage = location;
            const Url = new URL(UrlOfPage);
            const thePost = Url.searchParams.get("id");
            const user_email = sessionStorage.getItem('Authentification');
            const token = sessionStorage.getItem('Authorization').split(':')[2];
            const adToken = token.length - 2;
            const Authing = token.slice(1, adToken);
            const BODY = { 'comment_text': this.OneComment, 'Gpost_id': thePost };
            const newPost = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': Authing
                },
                body: JSON.stringify(BODY),
                redirect: 'follow'
            };

            fetch("http://localhost:3000/api/comment/" + user_email, newPost)
            .then(response => response.text())
            .then(result => console.log( result ))
            .then(() => location.reload())
            .catch(error => console.log( error ));
        },
        supressPost() {
            const user_email = sessionStorage.getItem('Authentification');
            const UrlOfPage = location;
            const Url = new URL(UrlOfPage);
            const thePost = Url.searchParams.get("id"); 
            const token = sessionStorage.getItem('Authorization').split(':')[2];
            const adToken = token.length - 2;
            const Authing = token.slice(1, adToken);
            const myHeaders = new Headers();
            myHeaders.append('Authorization', Authing);

            const requestOptions = { method: 'DELETE', headers: myHeaders, redirect: 'follow' };

            fetch("http://localhost:3000/api/post/" + user_email + "/" + thePost, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(this.$router.push({ name: 'Published' }))
            .catch(error => console.log('error', error));
        },
        deleteComments() {
            const user_email = sessionStorage.getItem('Authentification');
            const UrlOfPage = location;
            const Url = new URL(UrlOfPage);
            const thePost = Url.searchParams.get("id");
            const token = sessionStorage.getItem('Authorization').split(':')[2];
            const adToken = token.length - 2;
            const Authing = token.slice(1, adToken);
            const myHeaders = new Headers();
            myHeaders.append('Authorization', Authing);
            const requestOptions = { method: 'DELETE', headers: myHeaders, redirect: 'follow' };

            fetch("http://localhost:3000/api/comment/" + user_email + "/" + thePost, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(() => location.reload())
            .catch(error => console.log('error', error));
        }
        //TESTER LES DEUX FONCTIONS SUPPRIMER LES COMMS ET SUPPRIMER LE POST AVEC UN USER AVEC DROITS ADMIN + SI CA FONCTIONNE METTRE A L1 RELOAD ET A LAUTRE RETOUR FORUM ET ALERT LE POST A ETE SUPPRIME !!!
        /*,
        deleteComment() {
            const id = this.$ref[`comment-${Comment.comment_id}`][0].dataset.txt;
            console.log('element', id);
            const user_email = sessionStorage.getItem('Authentification');
            const comment_id = this.Comments.comment_id;
            console.log(Comment);
            console.log(this.Comments.find(Comment => Comment.comment_id === this.Comments.comment_id));
            const requestOptions = {
                method: 'DELETE',
                redirect: 'follow'
            };

            fetch("http://localhost:3000/api/comment/" + user_email + "/" + comment_id, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

            //essayer la méthode d'Ognimelo sur l'autre ordi sinon demander sur le forum d'openclassrooms
        }*/
    }
}
</script>

<style scoped lang="scss">
#post {
    &Forum {
    margin: auto;
    padding: 12px;
    border: 4mm ridge red;
    box-shadow: 8px 3px yellow, -1em 0 .4em plum;
    width: 75%;
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

#chooseAct {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 2px solid purple;   
    background-color: plum;
    #backForum {
        border: 4px solid purple;
        margin: 4px;
        background-color: #fff;
        padding: 4px;
    }
    .submit {
        background-color: black;
        border-color: pink;
        color: pink;
        padding: 10px 20px;
    }
}

#postComment {
    margin-top: 24px;
    border: 6px solid maroon;
    &1{
        margin: 8px;
        width: 90%;
        height: 35px;
    }
}

#validateComment1 {
    margin: 8px;
}

.postedComment {
    margin-top: 0;
    border: 4px solid greenyellow;
    &X {
        margin: 8px;
        width: 90%;
        height: 45px;
        &display {
            display: flex;
            margin-left: 8px;
            margin-right: 10%;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        &_border {
            border: 1px solid black;
            padding: 2px;
        }
        &Author {
            display: flex;
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
}

.commentTrash {
    width: 8%;
    position: relative;
    bottom: -10px;
    left: 46%;
    img {
        width: 100%;
    }
}

span {
    margin-left: 4px;
}
</style>