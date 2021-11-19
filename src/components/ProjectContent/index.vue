<template>
  <div class="content-page">
    <div class="content-body">
      <b-tabs content-class="mt-3">
        <b-tab title="Kanban Board" active>
          <div>
            <KanbanBoard :project="project" :project_id="project_id" />
          </div>
        </b-tab>
        <b-tab title="Members">
          <div>
            <Member :project="project" :project_id="project_id" />
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import KanbanBoard from "@/components/ProjectContent/components/KanbanBoard.vue";
import Member from "@/components/ProjectContent/components/Member.vue";
export default {
  components: {
    KanbanBoard,
    Member,
  },
  data() {
    return {
      project_id: this.$route.params.project_id,
      project: {
        id: 1,
        name: "Web Desinger Project",
        percent: 50,
        task_count: 50,
        duration: "2020-12-30 00:00:00",
        created_at: "2020-11-01 00:00:00",
      },
    };
  },
};
</script>

<style>
.content-page {
  height: 100%;
  overflow-y: auto;
  background-color: #e7e7e7;
  padding-left: 20px;
  padding-right: 20px;
}
.content-body {
  margin: 20px;
  background-color: white;
  height: inherit;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
}
</style>