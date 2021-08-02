<template>

    <!-- [Inicio] Outer Row -->
    <div class="row justify-content-center me-0">

        <div class="col-xl-6 col-lg-12 col-md-9">

            <!-- [Inicio] Card -->
            <div class="card o-hidden border-0 shadow-lg my-5">

                <!-- [Inicio] Card Body -->
                <div class="card-body p-0">

                    <!-- [Inicio] Nested Row -->
                    <div class="row">

                        <!-- Imagem Ilustrativa -->
                        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>

                        <!-- Espaço do conteúdo -->
                        <div class="col-lg-6">

                            <router-view />

                        </div>

                    </div>
                    <!-- [Fim] Nested Row -->

                </div>
                <!-- [Fim] Card Body -->

            </div>
            <!-- [Fim] Card -->

        </div>

    </div>
    <!-- [Fim] Outer Row -->

</template>

<script>
export default {
	name: 'LoginLayout',
    mounted () {

        // Adiciono class indicadora do layout em uso no elemento body
        document.body.classList.add('login-layout');

    },
    unmounted () {

        // Adiciono class indicadora do layout em uso no elemento body
        document.body.classList.remove('login-layout');

    }
}
</script>

<style lang="scss">
@import '@/assets/layouts/login/scss/main.scss';
</style>
