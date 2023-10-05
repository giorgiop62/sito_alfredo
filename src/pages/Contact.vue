<script>
export default {
    name: "Contact",
};
</script>

<template>
    <div class="contact">
        <h1>Contatti</h1>
        <div class="list">
            <i class="fa-solid fa-location-dot"></i>
            <address>Napoli</address>
            <i class="fa-sharp fa-solid fa-phone" style="color: #dee0e3;"></i>
            <p>Numero: +39 3929220639</p>
            <i class="fa-solid fa-envelope"></i>
            <p>email: alfredopumilia@gmail.com</p>


        </div>
    </div>
</template>

<style lang="scss" scoped>
.contact {
    background-image: url(../assets/notte.jpg);
    height: 100vh;
    background-size: cover;
    color: white;
}

h1 {
    text-align: center;
}

.list {
    width: 500px;
    height: 300px;
    text-align: center;
    margin: 0 auto;
    font-size: 23px;
}

.fa-solid {
    margin-top: 50px;
}

address {
    margin-top: 20px;
}

//resposive
@media only screen and (max-width: 600px) {
    .list {
        width: 100%;
        margin: 0 auto
    }

    ;
}
</style>