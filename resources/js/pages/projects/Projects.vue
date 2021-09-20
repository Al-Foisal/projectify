<template>
    <p v-if="isLoading">Loading...</p>
    <div class="card" v-else>
        <div class="card-header">All Projects</div>

        <div class="card-body">
            <button @click="showForm = true" type="button" class="btn btn-info">
                Add Project
            </button>
            <div v-show="showForm">
                <add-project
                    @project-added="fetchProjects"
                    @cancel-form="showForm = false"
                ></add-project>
            </div>

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
                            @delete-projects="fetchProjects"
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
import AddProject from './AddProject.vue';

export default {
    components: {
        ProjectsItem,
        AddProject,
    },
    data() {
        return {
            projects: [],
            isLoading: false,
            showForm: false,
        };
    },
    methods: {
        fetchProjects() {
            this.showForm = false;
            axios.get('/api/projects').then((res) => {
                this.projects = res.data.data;
            });
        },
    },
    mounted() {
        this.isLoading = true;
        this.fetchProjects();
        this.isLoading = false;
    },
};
</script>
