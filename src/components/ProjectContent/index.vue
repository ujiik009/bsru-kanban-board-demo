<template>
  <div class="content-page">
    <div class="content-body">
      <b-tabs content-class="mt-3">
        <b-tab title="Kanban Board" active>
          <div>
            <KanbanBoard />
          </div>
        </b-tab>
        <b-tab title="Members">
          <div>Member Content</div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import KanbanBoard from "@/components/ProjectContent/components/KanbanBoard.vue";
export default {
  components: {
    KanbanBoard,
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