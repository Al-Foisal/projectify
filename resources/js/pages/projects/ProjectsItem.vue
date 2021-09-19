<template>
    <tr>
        <th scope="row">{{ 1 + counter }}</th>
        <td>{{ project.name }}</td>
        <td>{{ project.tasks_count }}</td>
        <td>Action</td>
    </tr>
</template>

<script>
export default {
    props: ['project', 'counter'],
};
</script>
