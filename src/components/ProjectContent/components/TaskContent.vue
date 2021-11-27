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
          v-model="task.title"
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
      <b-row style="margin-top:10px;">
        <b-col >
          <b-form-group label="Assign to">
            <b-form-select
              class="select-custom"
              :options="options"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Color">
            <b-form-select
              class="select-custom"
              :options="options"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Due Date">
            <b-form-datepicker
              id="example-datepicker"
              class="mb-2"
              v-model="task_item.due_date"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <div style="text-align: right">
      {{task_item.due_date}}
      <b-button style="margin-right: 10px">Cancel</b-button>
      <b-button class="btn-primary">Update</b-button>
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
  },
  data() {
    return {
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      task: {
        id: 0,
        title: "Create Login Page",
        state: "todo",
        description:
          "Login Page UI : You have to make prototype for you Developer and let them Coding Mockup follow you prototype",
        color: "#AFE4AE",
        assign_to: {
          id: 0,
          fullname: "Jennifer S. Byrd",
          image_profile:
            "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg",
        },
      },
    };
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