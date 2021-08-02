<template>

    <!-- Div Error Box -->
    <div id="error-box">

        <!-- Div Not Found -->
        <div class="notfound">

            <!-- Imagem Ilustrativa -->
            <div class="notfound-404"></div>

            <h1>404</h1>

            <h2>Oops! Página Não Encontrada</h2>

            <p>A página que você procura não foi localizada. Talvez você tenha se perdido no caminho...</p>

            <a href="javascript:;" @click="$router.go(-1)">&larr; Retornar</a>

        </div>

    </div>

</template>

<script>
export default {
    name: 'PaginaNaoEncontrada'
}
</script>

<style lang="css">
@import '~@/assets/css/pagina-nao-encontrada.css';
</style>
