<script>
export default {
    name: 'AppFooter',

}
</script>

<template>
    <footer class="bg-light text-dark py-3 d-flex">
        <h6>Alfredo Pumilia ©</h6>
        <div class="icon">
            <ul class="d-flex">

                <li class="nav-item">
                    <a class="nav-link" href="https://www.facebook.com/alfredo.pumilia?locale=it_IT%2F"><i
                            class="fa-brands fa-facebook-f"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.instagram.com/alfredo_pumilia/"><i
                            class="fa-brands fa-instagram"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.youtube.com/watch?v=9jPcHhuZQ8Q"><i
                            class="fa-brands fa-youtube"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://open.spotify.com/user/1174504297?si=f2b72c67d1d54f02"><i
                            class="fa-brands fa-spotify"></i></a>
                </li>
            </ul>
            <p>realizzato da Giorgio Perez</p>
        </div>
        <a class="login" href="http://">Accedi</a>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    justify-content: space-between;
    align-items: center;
}

.nav-item {
    margin-right: 20px;
}

li {
    list-style-type: none;
}

p {
    font-size: 60%;
    margin-left: 35px;
}

.login {
    text-decoration: none;
    color: black;
    cursor: pointer;

}
</style>