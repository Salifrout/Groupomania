<template>
<div id="publishForum">
    <div id="publishTitle">
        <div id="publishTibleBox">
            <label for="publishTitle_label" id="publishTitle_label">Titre</label>
        </div>
        <input type="text" size="30" max-length="30" id="publishTitle_input" placeholder=" Veuillez prévoir un titre pour votre poste..." required autofocus>
    </div>

    <div id="publishMedia">
        <input type="file">
    </div>

    <div id="publishText">
        <textarea id="publishTextArea" required>Hey, coucou à tous les visiteurs du forum !</textarea>
    </div>

    <div id="chooseAct">
        <div id="backForum">
            <router-link :to="{ name: 'Published' }">J'abandonne et retourne sur le forum !</router-link>
        </div>    
        <input type="submit" value="Enregistrer" class="submit">
    </div>
</div>
</template>

<script>
export default {

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