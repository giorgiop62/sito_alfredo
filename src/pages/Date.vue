<script>
export default {
    name: "Date",
};
</script>

<template>
    <div class="container">
        <h1>DATE</h1>
        <div class="list-date">
            <ul>
                <li>22/05/2009</li>
                <li>22/05/2009</li>
                <li>22/05/2009</li>
                <li>22/05/2009</li>
                <li>22/05/2009</li>

            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100vh;
    background-image: url("../assets/notte-20.JPG");
    background-size: cover;
    color: white;
}

h1 {
    margin-left: 60px;
}

ul {
    font-size: 20px;
    margin: 20px;
}

li {
    margin: 20px;
}
</style>