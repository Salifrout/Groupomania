<template>
<div>
   <Header />
                                    
    <div id="publishForum">
        <form method="post" action="javascript:void(0);">
            <div id="publishTitle">
                <div id="publishTibleBox">
                    <label for="publishTitle_label" id="publishTitle_label">Titre</label>
                </div>
                <input type="text" size="30" max-length="30" v-model="title" id="publishTitle_input" required autofocus>
            </div>

            <div id="publishText">
                <textarea id="publishTextArea" v-model="content" required></textarea>
            </div>

            <div id="chooseAct">
                <div id="backForum">
                    <router-link :to="{ name: 'Published' }">J'abandonne et retourne sur le forum !</router-link>
                </div>    
                <input type="submit" value="Enregistrer" class="submit" @click="postToForum">
            </div>
        </form>
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
            title: 'Veuillez prévoir un titre pour votre poste...',
            content: 'Hey, coucou à tous les visiteurs du forum !'
        }
    },
    methods: {
        postToForum() {
            if (this.title.length > 2 && this.content.length > 5) {
                const user_email = sessionStorage.getItem('Authentification');
                const BODY = { 'Gpost_title': this.title, 'Gpost_text': this.content };
                const token = sessionStorage.getItem('Authorization').split(':')[2];
                const adToken = token.length - 2;
                const Authing = token.slice(1, adToken);
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

                fetch("http://localhost:3000/api/post/" + user_email, newPost)
                .then(response => response.text())
                .then(result => console.log( result ))
                .then(alert('Votre poste a été enregistré.'))
                .catch(error => console.log( error ));
            } else {
                alert('Vous ne pouvez pas publier de poste sans un titre ou un message d\'une longueur minimale.')
            }
        }
    }
}
</script>

<style scoped lang="scss">
#publish {
    &Forum {
    margin: auto;
    padding: 12px;
    border: 4mm ridge red;
    box-shadow: 8px 3px yellow, -1em 0 .4em plum;
    width: 50%;
    }
    &Title {
        margin-bottom: 20px;
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
        &_input {
            width: 90%;
        }
    }
    &Text {
        margin-top: 15px;
        margin-bottom: 5px;
        &Area {
            width: 98%;
            height: 120px;
            border: 2px solid purple;
        }
    }
    &Media {
        width: 100%;
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
</style>