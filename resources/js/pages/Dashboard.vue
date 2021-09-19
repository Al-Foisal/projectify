<template>
    <div class="card text-center">
        <div class="card-header">Dashboard</div>
        <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <p class="card-text">
                You are registered via E-mail <i>{{ user.email }}</i>
            </p>
        </div>
        <div class="card-footer text-muted">{{ formattedDate(user.created_at) }}</div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    data() {
        return {
            user: [],
        };
    },
    mounted() {
        this.user = this.$store.getters['user'];
    },
    methods:{
        formattedDate(date){
            return moment(date, "YYYYMMDD").fromNow();;
        }
    }
};
</script>
