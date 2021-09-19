<template>
    <div class="card">
        <div class="card-header">All Projects</div>
        <p v-if="isLoading">Loading...</p>
        <div class="card-body" v-else>
            <blockquote class="blockquote mb-0">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Project Name</th>
                            <th scope="col">Number of Task</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <projects-item
                            v-for="(project, index) in projects"
                            :key="project.id"
                            :project="project"
                            :counter="index"
                        >
                        </projects-item>
                    </tbody>
                </table>
            </blockquote>
        </div>
    </div>
</template>

<script>
import ProjectsItem from './ProjectsItem.vue';

export default {
    components: {
        ProjectsItem,
    },
    data() {
        return {
            projects: [],
            isLoading: false,
        };
    },
    mounted() {
        this.isLoading = true;
        axios.get('/api/projects').then((res) => {
            this.projects = res.data.data;
            this.isLoading = false;
        });
    },
};
</script>
