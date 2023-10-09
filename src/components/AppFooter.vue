<script>
export default {
    name: 'AppFooter',

}
</script>

<template>
    <footer class="bg-light text-dark py-3">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="mb-0">Andrea Pumilia</p>
                </div>
                <div class="col-md-6 text-end">
                    <a href="#"><i class="fa-brands fa-facebook-f text-dark"></i></a>
                    <a href="#"><i class="fab fa-instagram text-dark mr-3"></i></a>
                    <a href="#"><i class="fab fa-youtube text-dark"></i></a>
                    <a href="http://"><i class="fab fa-spotify text-dark"></i></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
a {
    margin-left: 20px;
}
</style>