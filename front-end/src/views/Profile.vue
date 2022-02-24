<template>
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
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
#navBar_ {
    &register {
        display: none;
    }
    &navigate {
        background-color: #ffd7d7;
        width: 30%;
        height: 120px;
        ul {
            padding: 10px;
            a {
            text-decoration: none;
            color: #fff;
            font-weight: 900;
            font-size: large;
            }
        }
    }
}

#profil {
    &Mine {
        width: 50%;
        border: 4mm ridge #ffd7d7;
        margin: auto;
        padding: 8%;
        box-shadow: 4px 2px orange;  
        img {
            display: block;
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



