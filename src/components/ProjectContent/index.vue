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
import axios from "axios";
export default {
  components: {
    KanbanBoard,
    Member,
  },
  async created() {
    await this.get_project_by_id();
  },
  data() {
    return {
      project_id: this.$route.params.project_id,
      project: {
        id: "",
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        created_at: "",
        creator: "",
      },
    };
  },
  methods: {
    get_project_by_id() {
      axios
        .get(
          process.env.VUE_APP_API +
            "/api_kanban_board/service/projects/get_project.php?id=" +
            this.project_id,
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          if (res.data.status == true) {
            this.project = res.data.data;
          } else {
            alert(res.data.message);
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
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