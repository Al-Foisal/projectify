<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Projectify</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-if="isLogin">
                        <router-link
                            :to="{ name: 'dashboard' }"
                            class="nav-link"
                            >Dashboard</router-link
                        >
                    </li>
                    <li class="nav-item" v-if="isLogin">
                        <router-link :to="{ name: 'projects' }" class="nav-link"
                            >Projects</router-link
                        >
                    </li>
                    <li class="nav-item" v-if="!isLogin">
                        <router-link :to="{ name: 'login' }" class="nav-link"
                            >Login</router-link
                        >
                    </li>
                    <li class="nav-item" v-if="isLogin">
                        <a href="#" class="nav-link" @click="logout()"
                            >Logout</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['isLogin']),
    },
    methods: {
        async logout() {
            await this.$store.dispatch('logout');
            this.$router.replace({ name: 'login' });
        },
    },
};
</script>
