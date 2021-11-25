<template>
  <div id="view-content">
    <!-- header -->
    <div class="header">
      <div class="board-label">{{ project_item.name }} Kanban Board</div>
      <div>
        <b-input-group size="sm" class="mb-2">
          <b-form-input type="search" placeholder="Search"></b-form-input>
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>
        </b-input-group>
      </div>
    </div>
    <!-- header -->

    <!-- content -->
    <div class="body-column">
      <div class="lane-column">
        <div class="lane-column-header">
          <span>Todo ({{ tasks.todo.length }})</span>
          <b-button
            size="sm"
            class="create-task-icon"
            @click="create_task_model('todo')"
            ><b-icon icon="plus"></b-icon
          ></b-button>
        </div>
        <div
          @dragenter.prevent="drop_zone_enter"
          @dragover.prevent
          @dragleave.prevent="drop_zone_leave"
          @drop.prevent="drop($event, 'todo')"
          class="drop_zone column-body"
        >
          <Task
            @click="open_task_model(task_item)"
            @dragstart="dragstart(task_item)"
            :task="task_item"
            v-for="task_item in tasks.todo"
            :key="task_item.id"
          />
        </div>
      </div>
      <div class="lane-column">
        <div class="lane-column-header">
          <span>In Progress ({{ tasks.in_progress.length }})</span>
          <b-button
            size="sm"
            class="create-task-icon"
            @click="create_task_model('in_progress')"
            ><b-icon icon="plus"></b-icon
          ></b-button>
        </div>
        <div
          @dragenter.prevent="drop_zone_enter"
          @dragover.prevent
          @dragleave.prevent="drop_zone_leave"
          @drop.prevent="drop($event, 'in_progress')"
          class="column-body drop_zone"
        >
          <Task
            @click="open_task_model(task_item)"
            @dragstart="dragstart(task_item)"
            :task="task_item"
            v-for="task_item in tasks.in_progress"
            :key="task_item.id"
          />
        </div>
      </div>
      <div class="lane-column">
        <div class="lane-column-header">
          <span>Done ({{ tasks.done.length }})</span>
          <b-button size="sm" class="create-task-icon"
            ><b-icon icon="plus"></b-icon
          ></b-button>
        </div>
        <div
          @dragenter.prevent="drop_zone_enter"
          @dragover.prevent
          @dragleave.prevent="drop_zone_leave"
          @drop.prevent="drop($event, 'done')"
          class="drop_zone column-body"
        >
          <Task
            @click="open_task_model(task_item)"
            @dragstart="dragstart(task_item)"
            :task="task_item"
            v-for="task_item in tasks.done"
            :key="task_item.id"
          />
          <div>
            <!-- drop zone -->
          </div>
        </div>
      </div>
    </div>
    <!-- content -->

    <!-- modal open task -->
    <div>
      <b-modal
        v-if="open_task_modal == true"
        v-model="open_task_modal"
        title="Edit Task"
        hide-footer
        size="xl"
      >
        <p class="my-4">
          <TaskContent :task_item="task_item_drag" />
        </p>
      </b-modal>
    </div>
    <!-- modal open task -->
  </div>
</template>

<script>
import Task from "@/components/ProjectContent/components/Task.vue";
import TaskContent from "@/components/ProjectContent/components/TaskContent.vue";
export default {
  components: {
    Task,
    TaskContent,
  },
  data() {
    return {
      open_task_modal: false,
      create_task_modal: false,
      project_item: {
        id: 1,
        name: "Web Desinger Project",
        percent: 50,
        task_count: 50,
        duration: "2020-12-30 00:00:00",
        created_at: "2020-11-01 00:00:00",
      },
      tasks: {
        todo: [
          {
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
        ],
        in_progress: [],
        done: [
          {
            id: 2,
            title: "Create API For Login",
            state: "done",
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
        ],
      },
      task_item_drag: null,
    };
  },
  methods: {
    create_task_model() {},
    open_task_model(task_item) {
      this.task_item_drag = task_item;
      this.open_task_modal = true;
    },
    dragstart(task_item) {
      this.task_item_drag = task_item;
    },
    drop_zone_enter(event) {
      event.target.style.borderStyle = "dotted";
      event.target.style.borderWidth = "1px";
    },
    drop_zone_leave(event) {
      event.target.style.borderStyle = "none";
    },
    drop(event, state) {
      event.target.style.borderStyle = "none";

      if (this.task_item_drag != null) {
        let previous_state = this.task_item_drag.state;
    

        // remove previous_state
        this.tasks[previous_state] = this.tasks[previous_state].filter(
          (x) => x.id != this.task_item_drag.id
        );
        // push to new state
        this.task_item_drag.state = state;
        this.tasks[state].push(this.task_item_drag);

        this.task_item_drag = null;
      }
    },
  },
};
</script>

<style scoped>
.column-body {
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.576);
  height: calc(100% - 50px);
  border-radius: 10px;
  overflow: auto;
  padding: 5px;
}
.lane-column-header {
  position: relative;
}
.create-task-icon {
  float: right;
  color: #43435e;
  border: none;
  background-color: white;
}
#view-content {
  padding: 20px;
  height: calc(100% - 160px);

  overflow-y: auto;
}
.body-column {
  overflow: auto;
}
.lane-column {
  height: 650px;
  width: 300px;
  border-radius: 10px;

  display: inline-block;
  margin: 25px;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(97, 97, 97, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(97, 97, 97, 1);
  box-shadow: 0px 0px 5px 0px rgba(97, 97, 97, 1);
}
.header {
  display: flex;
  justify-content: space-between;
}
.board-label {
  color: #43435e;
  font-size: 30px;
  font-weight: bold;
}
</style>