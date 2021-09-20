<template>
    <tr>
        <th scope="row">{{ 1 + counter }}</th>
        <td>{{ project.name }}</td>
        <td>{{ project.tasks_count }}</td>
        <td>
            <router-link
                :to="{ name: 'project-detail', params: { id: project.id } }"
            >
                <button type="button" class="btn btn-primary">View</button>
            </router-link>
            <button
                type="button"
                class="btn btn-danger"
                @click="deleteProject(project.id)"
            >
                Delete
            </button>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['project', 'counter'],
    // emits: ['delete-projects'],
    methods: {
        deleteProject(id) {
            axios.delete('api/projects/' + id).then((res) => {
                this.$emit('delete-projects');
            });
        },
    },
};
</script>
