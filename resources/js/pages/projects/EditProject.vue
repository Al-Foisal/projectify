<template>
    <form
        style="width: 50%; float: center; margin: 30px"
        @submit.prevent="submitForm"
    >
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
                >Project Name</label
            >
            <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="projectName"
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
    props: ['project'],
    data() {
        return {
            projectName: this.project.name,
            errorMsg: '',
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.put(
                    'api/projects/' + this.project.id,
                    {
                        name: this.projectName,
                    }
                );

                if (response.data.status == 'ok') {
                    this.projectName = '';
                    this.errorMsg = '';
                    this.$emit('project-edited');
                }
            } catch (e) {
                if (e.response.data.error.projectName[0].length > 0) {
                    this.errorMsg = e.response.data.error.projectName[0];
                }
            }
        },
        cancelForm() {
            this.projectName = '';
            this.errorMsg = '';
            this.$emit('cancel-form');
        },
    },
};
</script>
