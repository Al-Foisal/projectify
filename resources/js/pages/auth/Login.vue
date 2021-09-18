<template>
    <div>
        <form style="width: 18rem; margin: auto" @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                >
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                    v-model="email"
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                >
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="*******"
                    v-model="password"
                />
            </div>
            <p v-if="!!error">{{ error }}</p>
            <button type="submit" :disabled="isLoading" class="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            email: '',
            password: '',
            isLoading: false,
            error: null,
        };
    },
    methods: {
        async submitForm() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('setLogin', {
                    email: this.email,
                    password: this.password,
                });
                this.$router.replace({ name: 'dashboard' });
                this.isLoading = false;
            } catch (err) {
                this.error = err;
                this.isLoading = false;
            }
        },
    },
    computed: {
        ...mapGetters(['isLogin']),
    },
    mounted() {
        if (this.isLogin) {
            this.$router.push({ name: 'dashboard' });
        }
    },
};
</script>
