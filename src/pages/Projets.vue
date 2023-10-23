<script>
export default {
    name: "Projets",
};
</script>

<template>
    <div class="bg-img">
        <h1>Discografia</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-12 container-alt">
                    <div class="container-alt-1">
                        <img src="../assets/album1.png" alt="Majacosajusta">
                        <h4>Majacosajusta</h4>
                        <data value="">2021</data>
                    </div>
                </div>
                <div class="col-md-12 container-alt">
                    <div class="container-alt-2">
                        <img src="../assets/album2.png" alt="Hydruntum">
                        <h4>
                            Hydruntum
                        </h4>
                        <data value="">2016</data>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg-img {
    background-image: url('../assets/bianco.JPG');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
}

h1 {
    color: white;
    text-align: center;
}

h4,
data {
    color: white;
}

.container-alt-1 {
    height: auto;
}

.container-alt-2 {
    height: auto;
}

.container-alt {
    padding: 20px;
    text-align: center;
}
</style>