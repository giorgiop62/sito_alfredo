<script>
export default {
    name: "Date",
};
</script>

<template>
    <div class="container">
        <h1>Date</h1>
        <div class="list-date">
            <ul>
                <li>1/10/2022</li>
                <li>1/10/2022</li>
                <li>1/10/2022</li>
                <li>1/10/2022</li>
                <li>1/10/2022</li>
                <li>1/10/2022</li>

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
    background-repeat: no-repeat;
}

h1 {
    text-align: center;
}

li {
    font-size: 20px;
    margin-top: 10px;
}
</style>