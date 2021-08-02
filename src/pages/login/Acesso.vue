<template>

    <div class="login p-5">

        <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">Bem-Vindo!</h1>
        </div>

        <form class="user">

            <div class="form-group mb-3">
                <input type="text" class="form-control form-control-user" id="usuario" placeholder="Digite seu usuário..." autocomplete="off" />
            </div>

            <div class="form-group mb-3">
                <input type="password" class="form-control form-control-user" id="password" placeholder="Digite sua senha..." autocomplete="off" />
            </div>

            <div class="form-group mb-3">
                <div class="custom-control custom-checkbox small">
                    <input type="checkbox" class="custom-control-input" id="customCheck">
                    <label class="custom-control-label ms-2" for="customCheck">Lembrar de mim</label>
                </div>
            </div>

            <router-link to="/painel" class="btn btn-primary btn-user btn-autenticar w-100">ACESSAR</router-link>

            <hr />

            <div class="row">

                <div class="col mb-2">
                    <a href="#!" class="btn btn-google btn-user w-100">
                        <font-awesome-icon :icon="['fab', 'google']" class="fa-fw" /> Autenticar com Google
                    </a>
                </div>

            </div>

            <div class="row">

                <div class="col">
                    <a href="#!" class="btn btn-facebook btn-user w-100">
                        <font-awesome-icon :icon="['fab', 'facebook']" class="fa-fw" />  Autenticar com Facebook
                    </a>
                </div>

            </div>

        </form>

        <hr />

        <div class="text-center">
            <a href="#!" class="small link-login">Esqueceu sua senha?</a>
        </div>

        <div class="text-center">
            <a href="#!" class="small link-login">Crie uma conta!</a>
        </div>

    </div>

</template>

<script>
export default {
	name: 'Acesso'
}
</script>
