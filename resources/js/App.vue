<template>
    <div class="card">
        <div class="card-body">
            <the-header></the-header>
            <router-view></router-view>
            <the-footer></the-footer>
        </div>
    </div>
</template>

<script>
import TheHeader from './pages/partials/TheHeader.vue';
import TheFooter from './pages/partials/TheFooter.vue';

export default {
    components: {
        TheHeader,
        TheFooter,
    },
};
</script>
