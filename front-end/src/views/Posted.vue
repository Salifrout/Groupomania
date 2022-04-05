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
            <span id="postInfosDate"> {{ Posted.Gpost_date }} </span>
        </p>
    </div>

    <div id="chooseAct">
        <div id="backForum">
            <router-link :to="{ name: 'Published' }">Je retourne sur le forum !</router-link>
        </div>    
        <input type="submit" value="Supprimer" class="submit">
    </div>

    <div id="postComment">
        <input type="text" placeholder="Entrer votre commentaire ici..." v-model="OneComment" id="postComment1" class="intro_input" autofocus><br />
        <input type="submit" value="Valider mon commentaire" id="validateComment1" @click="postComment">
    </div>

    <div id="postedComment" v-if="Comments.length > 0" v-for="(Comment, key) in Comments" :key="key">

        <div id="postedCommentX" class="intro_input" autofocus>
            <div id="postedCommentX_border">
               <p> {{ Comment.comment_text }} </p> 
            </div>            
        </div>

        <div id="postedCommentXdisplay">
            <div id="postedCommentXAuthor">
                <p id="postedCommentXInfosAuthor">Publié par:     
                    <span id="postedCommentXInfosFirstname"> {{ Comment.comment_firstname }} </span>
                    <span id="postedCommentXInfosLastname"> {{ Comment.comment_lastname }} </span>
                </p>
            </div>
            <p id="postedCommentXDate">Enregistré le: 
                <span id="postedCommentXInfosDate"> {{ Comment.comment_date }} </span>
            </p>
        </div>

        <div id="commentTrash">
            <img src="../assets/Comment_trash.png" alt="modérer le commentaire" @click="deleteComment">
        </div>

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
            OneComment: ''   
        }
    },
    created() {
        const UrlOfPage = location;
        const Url = new URL(UrlOfPage);
        const thePost = Url.searchParams.get("id");

        fetch("http://localhost:3000/api/post/" + thePost)
        .then((response) => response.json())
        .then((json) => {this.Posted = json})
        .catch(error => console.log('error', error));

        fetch("http://localhost:3000/api/comment/" + thePost)
        .then((response) => response.json())
        .then((json) => {this.Comments = json})
        .catch(error => console.log('error', error));
    },
    methods: {
        postComment() {
            const UrlOfPage = location;
            const Url = new URL(UrlOfPage);
            const thePost = Url.searchParams.get("id");
            const user_email = sessionStorage.getItem('Authentification');

            const BODY = { 'comment_text': this.OneComment, 'Gpost_id': thePost };
            const newPost = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
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
        deleteComment() {

        }
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
            width: 100%;
            text-align: justify;
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
        a {
            color: blue;
        }
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

#postedComment {
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

#commentTrash {
    width: 5%;
    position: relative;
    bottom: 90px;
    left: 93%;
    img {
        width: 100%;
    }
}

span {
    margin-left: 4px;
}
</style>