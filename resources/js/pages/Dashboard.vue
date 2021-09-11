<template>
    {{ user }}
</template>

<script>
export default {
    data() {
        return {
            user: null,
        };
    },
    created() {
        axios.get('/api/user').then((res) => (this.user = res.data));
    },
};
</script>
