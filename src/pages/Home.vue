<script>
export default {
    name: "Home",
};
</script>

<template>
    <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/05_Araputi.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item change">
                    <img src="../assets/Araputo-Zen-01.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item change">
                    <img src="../assets/compagnia.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="description">
            <p>Musicista e compositore napoletano, classe 1990, inizia ad approcciare alla musica all’età di 11 anni
                studiando il flauto traverso, successivamente inizia lo studio della chitarra, approfondendola nel jazz per
                poi diplomarsi al conservatorio di Napoli S. Pietro a Majella in violino classico, sotto la guida del M°
                Antonio Colica.

                Il primo approccio al violino è avvenuto grazie all’incontro con il rumeno Illie Pipica, che lo ha spinto ad
                incuriosirsi ed appassionarsi ai vari linguaggi dell’est Europa, mantenendo sempre vivo lo studio della
                musica classica.

                Durante i suoi studi classici continua a dedicarsi lo studio del jazz, frequentando la MAD SCHOOL e girando
                l’Europa seguendo diversi stage per violino jazz, primo fra tutti lo stage con il violinista Didier Lockwood
                al CMDL (Centre des musiques Didier Lockwood).
                <hr>


                -Nel 2016 con gli Araputo zen pubblicano il loro primo disco “Hydruntum”
                -Nel 2021 sempre con Araputo zen esce il secondo Album “Majacosajusta”

                Attualmente sta Lavorando al suo disco “Miradöis”.

                BAND:
                Araputo Zen
                Zygrya sting trio
            </p>
            <div class="trio text-center">
                <img src="../assets/images.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 80%;
}

p {
    margin-top: 20px;
}

img {
    height: 50%;
}

.trio {
    margin-bottom: 20px;
}
</style>