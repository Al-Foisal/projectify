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
    mounted() {
        this.user = this.$store.getters['user'];
    },
};
</script>
