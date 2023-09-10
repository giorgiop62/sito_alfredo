<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="left">
            <div class="list">
                <ul>
                    <li>
                        <h1>Alfredo Pumilia</h1>
                    </li>
                    <li><a href="/accueil">ACCUEIL</a></li>
                    <li><a href="/projets">PROJETS</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                </ul>
            </div>

        </div>
        <div class="right">
            <ul>
                <li><a href="https://www.facebook.com/alfredo.pumilia?locale=it_IT%2F"><i
                            class="fa-brands fa-facebook-f fa-bounce"></i></a></li>
                <li><a href="https://www.instagram.com/alfredo_pumilia/"><i
                            class="fa-brands fa-instagram fa-bounce"></i></a></li>
                <li><a href="https://www.youtube.com/watch?v=9jPcHhuZQ8Q"><i class="fa-brands fa-youtube fa-bounce"></i></a>
                </li>
                <li><a href="https://open.spotify.com/user/1174504297?si=f2b72c67d1d54f02"><i
                            class="fa-brands fa-spotify fa-bounce"></i></a></li>
            </ul>

        </div>
    </header>
</template>

<style scoped>
ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    margin-right: 100px;
}

li {
    margin-left: 30px;
    color: #666666;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    cursor: pointer;
}

a {
    text-decoration: none;
    color: #666666;
    position: relative;
    cursor: pointer;
}

a::after {
    content: '';
    /* Aggiunge un contenuto vuoto per creare la linea */
    position: absolute;
    /* Imposta la posizione assoluta per la linea */
    left: 0;
    /* Allinea la linea con il bordo sinistro del link */
    bottom: -3px;
    /* Sposta la linea sotto il testo del link */
    width: 100%;
    /* La linea si estende per tutta la larghezza del link */
    height: 2px;
    /* Altezza della linea */
    background-color: #666666;
    /* Colore della linea */
    transform: scaleX(0);
    /* La linea è inizialmente nascosta (scala in x a 0) */
    transform-origin: 0% 50%;
    /* L'animazione inizia dalla sinistra */
    transition: transform 0.3s ease;
}


a:hover::after {
    transform: scaleX(1);
}


header {
    height: 100px;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: space-between;

}
</style>