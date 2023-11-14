<template>
    <div class="container-fluid">
        <h1 class="text-center p-3">Contatti</h1>
        <div class="row">
            <div class="col-md-6">
                <img src="../assets/06_Alfredo e Vincenzo.jpg" alt="Alfredo Pumilia" class="img-fluid" />
            </div>
            <div class="col-md-6">
                <div class="contatti">
                    <ul class="list-unstyled">
                        <li><i class="fa-solid fa-house"></i> Napoli</li>
                        <li><i class="fa-solid fa-phone"></i> <a href="+393929220639">+39 3929220639</a></li>
                        <li><i class="fa-solid fa-envelope"></i> <a
                                href="alfredopumilia@gmail.com">alfredopumilia@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
.container-fluid {
    background-color: black;
    color: white;
    padding: 20px;
}

img {
    filter: grayscale(100%);
}

.contatti {
    font-size: 30px;
    margin-top: 20px;
    font-family: 'Times New Roman', Times, serif;
}

ul {
    list-style-type: none;
    padding-left: 0;
}

li {
    margin-bottom: 20px;
}

a {
    color: white;
    text-decoration: none;
}

/* Aggiungi spazio tra icone e testi */
.fa-house,
.fa-phone,
.fa-envelope {
    margin-right: 10px;
}

@media (max-width: 412px) {
    .contatti {
        font-size: 27px;
    }
}
</style>
  
  