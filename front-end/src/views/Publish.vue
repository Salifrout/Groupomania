<template>
<div>
   <Header />
                                        <!--rajouter form dnas les fichiers où c'est oublié !!!-->
    <div id="publishForum">
        <form method="post" action="javascript:void(0);" enctype="multipart/form-data">
            <div id="publishTitle">
                <div id="publishTibleBox">
                    <label for="publishTitle_label" id="publishTitle_label">Titre</label>
                </div>
                <input type="text" size="30" max-length="30" v-model="title" id="publishTitle_input" required autofocus>
            </div>

            <div id="publishMedia">
                <input type="file" id="mediaToUpload" name="image" accept=".jpg,.jpeg,.png">
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
            content: 'Hey, coucou à tous les visiteurs du forum !',
            FormData: new FormData()
        }
    },
    methods: {
        postToForum() {
            if (this.title.length > 2 && this.content.length > 5) {
                /*const user_email = sessionStorage.getItem('Authentification');
                const mediaToUpload = document.getElementById('mediaToUpload');
                const image = mediaToUpload.value ? new FormData('media', mediaToUpload) mediaToUpload.value : null;
                const BODY = image == null ? { 'Gpost_title': this.title, 'Gpost_text': this.content } : { 'Gpost_title': this.title, 'Gpost_text': this.content, 'Gpost_media': image };
                const newPost = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(BODY),
                    redirect: 'follow'
                };*/

                const user_email = sessionStorage.getItem('Authentification');
                /*const mediaToUpload = document.getElementById('mediaToUpload');*/
                const mediaToUpload = document.querySelector("input[name='image']");
                const image = mediaToUpload.files ? mediaToUpload.files[0] : "";
                /*const FormData = new FormData();*/
                const BODY = { 'Gpost_title': this.title, 'Gpost_text': this.content };
                this.FormData.append('Gpost_media', image);
                this.FormData.append('post', JSON.stringify(BODY));

                /*const title = FormData.append('Gpost_title', this.title);
                const text = FormData.append('Gpost_text', this.content);*/

                //mettre name='media' dans type=file, puis copier ce que fait lautre étudiant sur lautre PC

                /*const BODY = image == null ? {title, text} : {title, text, media};*/
                const newPost = {
                    method: 'POST',
                    body: this.FormData
                };


                console.log(user_email + 'test 1');
                console.log(typeof image + 'test 2');
                console.log(image + 'test 3');
                console.log(BODY + 'test 4');
                console.log(JSON.stringify(BODY) + 'test 5');
                console.log(this.FormData + ' test 6');
                console.log(typeof this.FormData + ' test 7');
                console.log(JSON.parse(this.FormData) + ' test 8');
             

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

    //2 possiblités: envoyer soit avec soit sans l'image et mettre les deux dans le BODY
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
</style>