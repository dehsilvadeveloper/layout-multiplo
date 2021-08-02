<template>

    <!-- Formulario de Busca -->
    <form class="d-none d-sm-inline-block form-inline me-auto ms-md-3 my-2 my-md-0 mx-100 navbar-search">

        <div class="input-group">
            <input type="text" class="form-control bg-light border-0 small" placeholder="Digite para pesquisar..." aria-label="Search">
            <div class="input-group-append">
                <button class="btn btn-primary btn-search-topbar" type="button">
                    <font-awesome-icon :icon="['fas', 'search']" />
                </button>
            </div>
        </div>

    </form>

</template>

<script>
export default {
    name: 'NavbarSearch'
}
</script>
