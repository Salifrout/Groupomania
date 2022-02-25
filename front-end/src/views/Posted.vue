<template>
  <div id="postForum">
    <div id="postTitle">
        <h2 id="postTitle_h2">
            TITRE
        </h2>
    </div>

    <div id="postMedia">
        <img src="http://www.snut.fr/wp-content/uploads/2015/12/image-de-nature-9.jpg" alt="">
    </div>

    <div id="postText">
        <p id="postTextBlock">
            UN LONG TEXTE
        </p>
    </div>

    <div id="postInfos">
        <div id="postAuthor">
            <p id="postInfosAuthor">Publié par:     
                <span id="postInfosFirstname">PRENOM</span>
                <span id="postInfosLastname">PATRONYME</span>
            </p>
        </div>
        <p id="postDate">Enregistré le: 
            <span id="postInfosDate">DATE</span>
        </p>
    </div>

    <div id="chooseAct">
        <div id="backForum">
            <router-link :to="{ name: 'Published' }">Je retourne sur le forum !</router-link>
        </div>    
        <input type="submit" value="Supprimer" class="submit">
    </div>

    <div id="postComment">
        <input type="text" placeholder="Entrer votre commentaire ici..." id="postComment1" class="intro_input" autofocus><br />
        <input type="submit" value="Valider mon commentaire" id="validateComment1">
    </div>

    <div id="postedComment">

        <div id="postedCommentX" class="intro_input" autofocus>
            <div id="postedCommentX_border">
               <p>COMMENTAIRE</p> 
            </div>            
        </div>

        <div id="postedCommentXdisplay">
            <div id="postedCommentXAuthor">
                <p id="postedCommentXInfosAuthor">Publié par:     
                    <span id="postedCommentXInfosFirstname">PRENOM</span>
                    <span id="postedCommentXInfosLastname">PATRONYME</span>
                </p>
            </div>
            <p id="postedCommentXDate">Enregistré le: 
                <span id="postedCommentXInfosDate">DATE</span>
            </p>
        </div>

        <div id="commentTrash">
            <img src="../assets/Comment_trash.png" alt="modérer le commentaire">
        </div>

    </div>

</div>





</template>



retourner au forum
supprimer

commentaire
ajouter un commentaire
commentaire : nom prénom date texte supprimer

<script>
export default {

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
        &Area {
            width: 98%;
            height: 120px;
            border: 2px solid purple;
        }
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
        &Author {
            display: flex;
        }
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
</style>