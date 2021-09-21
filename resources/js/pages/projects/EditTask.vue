<template>
    <form
        style="width: 50%; float: center; margin: 30px"
        @submit.prevent="submitForm"
    >
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
                >Task Name=={{ name }}</label
            >
            <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="name"
            />

            <label for="exampleInputEmail1" class="form-label"
                >Task Due Date</label
            >
            <input
                type="date"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="due_date"
            />
            <div id="emailHelp" class="form-text" v-if="errorMsg.length">
                {{ errorMsg }}
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
        <button @click="cancelForm" type="button" class="btn btn-danger">
            Cancel
        </button>
    </form>
</template>

<script>
export default {
    props: ['task'],
    data() {
        return {
            name: this.task.name,
            due_date: this.task.due_date,
            errorMsg: '',
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.put('api/tasks/' + this.task.id, {
                    name: this.name,
                    due_date: this.due_date,
                    project_id: this.task.project_id,
                });
                if (response.data.status == 'ok') {
                    // this.task = {};
                    this.errorMsg = '';
                    this.$emit('task-edited');
                }
            } catch (e) {
                this.errorMsg = e;
            }
        },
        cancelForm() {
            // this.name = '';
            this.errorMsg = '';
            this.$emit('cancel-form');
        },
    },
};
</script>
