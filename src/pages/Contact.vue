<script>
export default {
    name: "Contact",
};
</script>

<template>
    <div class="contact">
        <h1>Contacts</h1>
        <div class="list">
            <i class="fa-solid fa-location-dot"></i>
            <address>Napoli,sanità</address>
            <i class="fa-sharp fa-solid fa-phone" style="color: #dee0e3;"></i>
            <p>Numero:3505255178</p>
            <i class="fa-solid fa-envelope"></i>
            <p>email: andrea@gmail.com</p>


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
    font-size: 50px;
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
</style>