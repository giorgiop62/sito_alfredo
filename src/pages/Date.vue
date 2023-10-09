<script>
export default {
    name: "Date",
};
</script>

<template>
    <div class="bg-img">
        <h1>Date</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-6 container-alt">
                    <div class="container-alt-1">
                        <ul>
                            <div class="date">
                                <li>1/20/05</li>
                                <address> <i class="fa-solid fa-location-dot"></i> Napoli</address>
                            </div>
                            <div class="date">
                                <li>1/20/05</li>
                                <address> <i class="fa-solid fa-location-dot"></i> Milano</address>
                            </div>
                            <div class="date">
                                <li>1/20/05</li>
                                <address> <i class="fa-solid fa-location-dot"></i> Amalfi</address>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg-img {
    background-image: url('../assets/notte-20.JPG');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
}

h1 {
    text-align: center;
    color: white;
}

.date {}

.container-alt-1 {
    color: white;
    font-size: 20px;
}
</style>