<script>
export default {
    name: "Projets",
};
</script>

<template>
    <div class="discografia">
        <h1>Discografia</h1>
        <div class="box">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/album1.png" alt="album 1">
                <div class="card-body">
                    <h5 class="card-title">Majacosajusta</h5>
                    <p class="card-text">2021</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/album2.png" alt="album 1">
                <div class="card-body">
                    <h5 class="card-title">Hydruntum</h5>
                    <p class="card-text">2016</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.discografia {
    background-image: url('../assets/bianco.JPG');
    background-repeat: no-repeat;
    height: 100vh;
    background-size: contain;
    color: white;
}

h1 {
    text-align: center;
}

.box {
    display: flex;
    justify-content: center;
    height: 600px;
    align-items: center;
}

p,
h5 {
    font-size: 18px;
}
</style>