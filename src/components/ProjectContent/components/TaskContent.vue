<template>
  <div>
    <b-form>
      <b-form-group
        label="Task Name"
        label-for="input-1"
        style="margin-bottom: 10px"
      >
        <b-form-input
          id="input-1"
          v-model="task.name"
          type="text"
          placeholder="Enter you task name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Description" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="task.description"
          placeholder="Enter something..."
          rows="6"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-row style="margin-top: 10px">
        <b-col>
          <b-form-group label="Assign to">
            <b-form-select
              v-model="task.assign_to"
              class="select-custom"
              :options="members"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Color">
            <b-form-input
              class="select-custom"
              type="color"
              v-model="task.color"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Due Date">
            <b-form-datepicker
              id="example-datepicker"
              class="mb-2"
              v-model="task.due_date"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <div style="text-align: right">
      <b-button style="margin-right: 10px">Cancel</b-button>
      <b-button class="btn-primary" @click="submit_update_task"
        >Update</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.task = JSON.parse(JSON.stringify(this.task_item));
  },
  props: {
    task_item: Object,
    members: Array,
  },
  data() {
    return {
      task: {
        id: 0,
        title: "Create Login Page",
        state: "todo",
        description:
          "Login Page UI : You have to make prototype for you Developer and let them Coding Mockup follow you prototype",
        color: "#AFE4AE",
        assign_to: null,
      },
    };
  },
  methods: {
    submit_update_task() {
      this.$emit("submit", this.task);
    },
  },
};
</script>

<style scoped>
.select-custom {
  /* padding: 5px; */
  height: 36px;
  width: 100%;
}
.btn-primary {
  background-color: #7741a0;
}
</style>