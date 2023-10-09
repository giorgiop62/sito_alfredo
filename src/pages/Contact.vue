<script>
export default {
    name: "Contact",
};
</script>

<template>
    <div class="container-1">
        <ul class="list-contacts">
            <li class="media-4">
                <i class="fa-solid fa-phone m-3"></i>
                <div class="media-body text-center">
                    <p> +39 392 922 0639</p>
                </div>
            </li>

            <li class="media-4">
                <i class="fas fa-envelope m-3"></i>
                <div class="media-body text-center">
                    <a href="mailto:alfredo@gmail.com">alfredopumilia@gmail.com</a>
                </div>
            </li>

            <li class="media-4">
                <i class="fa-solid fa-location-dot m-3"></i>
                <div class="media-body text-center">
                    <address>Napoli</address>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.container-1 {
    background-image: url('../assets/notte.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    color: white;
    font-size: 23px;
    text-align: center;
}

a {
    text-decoration: none;
    color: white;
}
</style>