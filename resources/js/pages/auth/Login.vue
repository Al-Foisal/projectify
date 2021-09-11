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
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            isLoading: false,
            error: '',
        };
    },
    methods: {
        submitForm() {
            axios.get('/sanctum/csrf-cookie').then((response) => {
                axios
                    .post('/api/authenticate', {
                        email: this.email,
                        password: this.password,
                    })
                    .then((response) => {
                        console.log(response.data);
                        if (response.data.success) {
                            this.$router.push({ name: 'dashboard' });
                        } else {
                            this.error = response.data.message;
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            });
        },
    },
};
</script>
