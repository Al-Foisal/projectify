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
            <button type="button" class="btn btn-danger">Delete</button>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['project', 'counter'],
};
</script>
