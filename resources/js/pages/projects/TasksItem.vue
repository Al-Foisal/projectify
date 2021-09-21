<template>
    <tr
        :class="{ 'alert alert-dark': task.priority === 'High' }"
        :role="{ alert: task.priority === 'High' }"
    >
        <td>{{ 1 + counter }}</td>
        <td>{{ task.name }}</td>
        <td>{{ task.due_date }}</td>
        <td>{{ task.created_at }}</td>
        <td>
            <button type="button" class="btn btn-primary">View</button>

            <button
                @click="this.$emit('delete-task', task.id)"
                type="button"
                class="btn btn-danger"
            >
                Delete
            </button>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['task', 'counter'],
};
</script>
