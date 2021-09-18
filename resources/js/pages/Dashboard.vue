<template>
    {{ user }}
</template>

<script>
export default {
    data() {
        return {
            user: [],
        };
    },
    mounted() {
        this.user = this.$store.getters['user'];
    },
};
</script>
