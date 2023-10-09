<script>
export default {
    name: "Home",
};
</script>

<template>
    <div class="container-img">
        <img src="../assets/Pumiliani-33.JPG" class="img-fluid" alt="alfredo pumilia">
    </div>
    <div class="descrizione">
        Musicista e compositore napoletano, classe 1990, inizia ad approcciare alla musica all’età di 11 anni studiando il
        flauto traverso, successivamente inizia lo studio della chitarra, approfondendola nel jazz per poi diplomarsi al
        conservatorio di Napoli S. Pietro a Majella in violino classico, sotto la guida del M° Antonio Colica.

        Il primo approccio al violino è avvenuto grazie all’incontro con il rumeno Illie Pipica, che lo ha spinto ad
        incuriosirsi ed appassionarsi ai vari linguaggi dell’est Europa, mantenendo sempre vivo lo studio della musica
        classica.

        Durante i suoi studi classici continua a dedicarsi lo studio del jazz, frequentando la MAD SCHOOL e girando l’Europa
        seguendo diversi stage per violino jazz, primo fra tutti lo stage con il violinista Didier Lockwood al CMDL (Centre
        des musiques Didier Lockwood).


        -Nel 2016 con gli Araputo zen pubblicano il loro primo disco “Hydruntum”
        -Nel 2021 sempre con Araputo zen esce il secondo Album “Majacosajusta”

        Attualmente sta Lavorando al suo disco “Miradöis”.
        <hr>

        BAND:
        Araputo Zen
        Zygrya sting trio
        <div class="band">
            <img class="band-img" src="../assets/10_Araputi B&W.jpg" alt="">
        </div>

    </div>
</template>

<style lang="scss" scoped>
.container-img {
    width: 100%;

}

.img-fluid {
    max-width: 100%;
    height: auto;
}

.descrizione {
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-style: italic;
    padding: 20px;
}

.band-img {

    max-width: 70%;
    height: auto;
    padding: 20px;
}
</style>