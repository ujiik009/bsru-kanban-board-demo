<template>
  <div>
    <div
      @click="open_project(project.id)"
      class="list-item-project"
      v-for="(project, index) in projects"
      :key="index"
    >
      <div class="container-item">
        <div class="center-vertical name-project-text">{{ project.name }}</div>
      </div>
      <div class="container-item">
        <div class="center-vertical">
          <div style="font-weight: bold">Created at</div>
          <div>{{ show_created_at(project.created_at) }}</div>
        </div>
      </div>
      <div class="container-item">
        <div class="center-vertical">
          <div style="font-weight: bold">Task Count</div>
          <div style="text-align: center">
            <b-badge class="badge-label-task-list">{{
              project.task_count
            }}</b-badge>
          </div>
        </div>
      </div>
      <div class="container-item" style="display: flex">
        <div
          class="center-vertical right"
          style="font-size: 20px; font-weight: bold"
        >
          Progress
        </div>
      </div>
      <div class="container-item">
        <div class="center-vertical">
          <CircularProgress :size="100" :percent="project.percent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import CircularProgress from "@/components/ProjectList/components/CircularProgress.vue";
export default {
  components: {
    CircularProgress,
  },
  props: {
    projects: Array,
  },
  methods: {
    show_created_at(date) {
      return moment(date, "YYYY-MM-DD HH:mm:ss").format("MMM DD YYYY HH:mm:ss");
    },
    open_project(project_id) {
      this.$router.push(`/project/content/${project_id}`);
    },
  },
};
</script>

<style>
.badge-label-task-list {
  border-radius: 20px;
  font-size: 20px;
  background-color: #b6ecf8 !important;
  color: #23c3e7;
}
.name-project-text {
  font-weight: bold;
}
.container-item {
  position: relative;
  padding: 10px;
  height: 100%;
  width: 100%;
}
.center-vertical {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.right {
  position: absolute;
  right: 0%;
}
.list-item-project {
  cursor: pointer;
  color: #43435e;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-top: 20px;
  height: 150px;
  background-color: #dbf6fd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
}
</style>