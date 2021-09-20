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
                v-model="name"
            />
            <div id="emailHelp" class="form-text" v-if="errorMsg.length">
                {{ errorMsg }}
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
        <button  type="button" class="btn btn-danger">
            Cancel
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            errorMsg: '',
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post('api/projects', {
                    name: this.name,
                });

                if (response.data.status == 'ok') {
                    this.name = '';
                    this.errorMsg = '';
                    this.$emit('project-added');
                }
            } catch (e) {
                if (e.response.data.error.name[0].length > 0) {
                    this.errorMsg = e.response.data.error.name[0];
                }
            }
        },
        // cancelForm() {
        //     this.name = '';
        //     this.errorMsg = '';
        //     this.$emit('cancel-form');
        // },
    },
};
</script>
