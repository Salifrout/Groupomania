<template>
<div>
    <Header />

    <div id="rules">
        <h1>Les règles de votre réseau social Groupomania</h1>

        <p>Le réseau social privé groupomania est une plateforme virtuelle de publication et de partage de contenus. Les membres de ce réseau peuvent y produire ou y consulter des articles, mais s'engagent à respecter le réglement suivant.</p>
        <br />

        <h2>1. Partage et consultation de contenus publiés</h2>

        <p><strong>1.1. </strong>Le réseau social groupomania est une plateforme de partage d'articles. Tous les membres du réseau peuvent librement publier et consulter des articles.</p>
        <p><strong>1.2. </strong>Les membres du groupe peuvent réagir aux contenus publiés en postant des commentaires en dessous de chaque post d'article.</p>
        <p><strong>1.3. </strong>Seuls les employés du groupe Groupomania peuvent créer un compte, se connecter, publier et consulter des articles ou des commentaires.</p>
        <p><strong>1.4. </strong>Les publications peuvent porter sur n'importe quel sujet, relevant du domaine professionnel ou non.</p>
        <p><strong>1.5. </strong>Les publicateurs s'engagent à ne pas poster de contenus injurieux, diffamatoires, ou non conformes à la législation en vigueur.</p>
        <p><strong>1.6. </strong>Toute publication est soumise à la modération des administrateurs du réseau social. Dans le cas où un post serait sujet à une censure légitime, les modérateurs disposent du droit de supprimer le post, ou à minima l'ensemble de ses commentaires, sans aucun droit à révision de la part des publicateurs.</p>
        <br />

        <h2>2. Responsabilité des membres du réseau social privé</h2>

        <p><strong>2.1. </strong>Le réseau social privé Groupomania exige et s'appuie sur la responsabilité de chacun. Les membres du groupe groupomania ne sont pas obligés de rejoindre le groupe social mais ceux qui y adhèrent doivent suivre sans réserve les régles qui y sont posées.</p>
        <p><strong>2.2. </strong>Un minimum d'informations est attendu de la part des souscripteurs du réseau social afin de vérifier qu'il s'agit bien de personnes employées par le groupe Groupomania. Les souscripteurs ne sont pas autorisés à fournir d'informations erronées lors de la création de leurs comptes.</p>
        <p><strong>2.3. </strong>Il est possible pour les souscripteurs de supprimer leurs comptes à leurs bons vouloirs et sans avoir à se justifier. Néanmoins, il n'existe pour eux aucun droit à ce que leurs publications (articles ou commentaires) soient également supprimés sauf à ce que les modérateurs du groupe en décident autrement.</p>
        <p><strong>2.4. </strong>Il n'existe aucun droit à une modification des informations du profil. Le statut et les accès aux privilèges administrateurs ne peuvent être modifiés sur un compte déjà enregistré.</p>
        <p><strong>2.5. </strong>Le réseau social est destiné à prendre en importance dans l'avenir. Les membres de la plateforme sont invités à remonter auprès de leurs supérieurs directs en entreprise leurs observations afin que le réseau social puisse évoluer et bénéficier davantage aux interactions et prises de confiance des employés au sein de l'entreprise.</p>
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




<style scoped>
#rules {
    margin-right: 4%;
    margin-left: 4%;
}

p {
    margin-bottom: 40px;
    text-align: justify;
}

h1 {
    color: purple;
    /*border-bottom: 1px dashed orange*/
    text-decoration: underline;
}

h2 {
    color: purple;
    text-decoration: underline;
}
</style>