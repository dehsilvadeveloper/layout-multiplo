<template>

    <!-- [Inicio] Brand -->
    <router-link to="/painel" class="sidebar-brand d-flex align-items-center justify-content-center">
        <div class="sidebar-brand-icon rotate-n-15">
            <font-awesome-icon :icon="['fas', 'registered']" size="xs" />
        </div>
        <div class="sidebar-brand-text mx-3">System <sup>Plus</sup></div>
    </router-link>
    <!-- [Fim] Brand -->

</template>

<script>
export default {
    name: 'Brand'
}
</script>
