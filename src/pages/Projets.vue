<script>
export default {
    name: "Projets",
};
</script>

<template>
    <h1>Discografia</h1>
    <div class="container">

        <div class="box_1">

        </div>
        <div class="box_2">

        </div>

    </div>
</template>

<style lang="scss" scoped>
img {
    width: 200px;
}

.container {
    text-align: center;
    font-size: 30px;
    background-image: url('../assets/bianco.jpg');
    height: 100vh;
    color: white;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
}

h1 {
    text-align: center;
    font-size: 50px;
}

.box_1 {
    background-image: url('../assets/album1.png');
    background-repeat: no-repeat;
    height: 200px;
    width: 200px;

}

.box_2 {
    background-image: url('../assets/album2.png');
    background-repeat: no-repeat;
    height: 200px;
    width: 200px;
    margin-left: 30px;
}
</style>