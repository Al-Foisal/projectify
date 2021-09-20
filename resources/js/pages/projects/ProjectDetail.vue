<template>
    <br />
    <h1>Project Details</h1>

    <button @click="showForm = true" type="button" class="btn btn-info">
        Edit Project
    </button>
    <div v-show="showForm">
        <edit-project
            @project-edited="fetchProject"
            @cancel-form="showForm = false"
            :project="project"
        ></edit-project>
    </div>

    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Project Name</th>
                <th scope="col">Number of Projects</th>
                <th scope="col">Created at</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ project.name }}</td>
                <td>{{ project.tasks_count }}</td>
                <td>{{ project.created_at }}</td>
            </tr>
            <hr />
            <h1>Related Project Tasks</h1>
            <hr />
            <tr>
                <td colspan="4">
                    <table class="table mb-0">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Task Name</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Created at</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tasks-item
                                v-for="(task, index) in project.tasks"
                                :key="task.id"
                                :task="task"
                                :counter="index"
                            >
                            </tasks-item>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import TasksItem from './TasksItem.vue';
import EditProject from './EditProject.vue';

export default {
    props: ['id'],
    components: {
        TasksItem,
        EditProject,
    },
    data() {
        return {
            project: [],
            showForm: false,
        };
    },
    methods: {
        fetchProject() {
            this.showForm = false;
            axios
                .get('api/projects/' + this.id)
                .then((res) => (this.project = res.data.data));
        },
    },
    mounted() {
        this.fetchProject();
    },
};
</script>
