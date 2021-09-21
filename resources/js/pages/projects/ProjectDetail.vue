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

            <button
                @click="showTaskForm = true"
                type="button"
                class="btn btn-info"
            >
                Add Task
            </button>
            <div v-show="showTaskForm">
                <add-task
                    @task-added="fetchProject"
                    @cancel-form="showTaskForm = false"
                    :project-id="project.id"
                ></add-task>
            </div>

            <div v-show="showEditTaskForm">
                <edit-task
                    @task-edited="fetchProject"
                    @cancel-form="showEditTaskForm = false"
                    :task="task"
                ></edit-task>
            </div>

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
                                @delete-task="deleteTask"
                                @edit-task="editTask"
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
import AddTask from './AddTask.vue';
import EditTask from './EditTask.vue';

export default {
    props: ['id'],
    components: {
        TasksItem,
        EditProject,
        AddTask,
        EditTask,
    },
    data() {
        return {
            project: [],
            task: {
                id: 0,
                name: '',
                project_id: 0,
                due_date: null,
            },
            showForm: false,
            showTaskForm: false,
            showEditTaskForm: false,
        };
    },
    methods: {
        fetchProject() {
            this.showForm = false;
            this.showTaskForm = false;
            this.showEditTaskForm = false;

            axios
                .get('api/projects/' + this.id)
                .then((res) => (this.project = res.data.data));
        },
        editTask(id) {
            const task = this.project.tasks.filter((i) => i.id == id);
            this.showEditTaskForm = true;
            this.task.id = task[0].id;
            this.task.name = task[0].name;
            this.task.project_id = task[0].project_id;
            this.task.due_date = task[0].due_date;
        },
        deleteTask(id) {
            axios.delete('api/tasks/' + id).then((res) => {
                const index = this.project.tasks.map((i) => i.id).indexOf(id);
                this.project.tasks.splice(index, 1);
            });
        },
    },
    mounted() {
        this.fetchProject();
    },
};
</script>
