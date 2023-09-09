<script>
export default {
    name: 'AppFooter',

}
</script>

<template>
    <footer>
        <div class="copywriter">
            © 2022 Alfredo Pumilia.
        </div>

        <div class="icone">
            <ul>
                <li><a href="https://www.facebook.com/alfredo.pumilia?locale=it_IT%2F"><i
                            class="fa-brands fa-facebook-f fa-bounce"></i></a></li>
                <li><a href="https://www.instagram.com/alfredo_pumilia/"><i
                            class="fa-brands fa-instagram fa-bounce"></i></a>
                </li>
                <li><a href="https://www.youtube.com/watch?v=9jPcHhuZQ8Q"><i class="fa-brands fa-youtube fa-bounce"></i></a>
                </li>
                <li><a href="https://open.spotify.com/user/1174504297?si=f2b72c67d1d54f02"><i
                            class="fa-brands fa-spotify fa-bounce"></i></a></li>
            </ul>

        </div>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: #f8f8f8;
}

.copywriter {
    margin-left: 40px;
}

ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    margin-right: 100px;
}

li {
    margin-left: 30px;
    color: #666666;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    cursor: pointer;
}

a {
    text-decoration: none;
    color: #666666;
    position: relative;
    cursor: pointer;
}
</style>