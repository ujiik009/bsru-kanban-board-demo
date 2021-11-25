<template>
  <div
    id="task"
    draggable
    @click="$emit('click')"
    @dragstart="$emit('dragstart')"
  >
    <div class="body-task">
      <div class="task-title">
        {{ task.title }}
      </div>
      <div class="task-description">
        {{ task.description }}
      </div>
    </div>
    <div class="footer-task">
      <div>
        <b-avatar
          class="avatar"
          v-b-tooltip.hover
          :title="task.assign_to.fullname"
          size="30"
          variant="info"
          :src="task.assign_to.image_profile"
        ></b-avatar>
      </div>
      <div>
        <b-icon
          @click="show_comment"
          icon="chat-dots"
          class="comment-icon"
        ></b-icon>
      </div>
    </div>
    <div class="color-label" :style="`background-color:${task.color}`"></div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  methods: {
    show_comment() {
      alert(this.task.id);
    },
  },
};
</script>

<style scoped>
#task {
  cursor: pointer;
  margin-top: 10px;
  position: relative;
  background-color: white;
  border-radius: 10px;
  min-height: 180px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(97, 97, 97, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(97, 97, 97, 1);
  box-shadow: 0px 0px 5px 0px rgba(97, 97, 97, 1);
}
.comment-icon {
  font-size: 24px;
  color: #43435e;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
}
.avatar {
  margin-left: 5px;
  margin-bottom: 5px;
}
.task-title {
  color: #43435e;
  font-weight: bold;
  margin-bottom: 5px;
}
.body-task {
  padding: 10px;
  top: 0;
  height: calc(100% - 10px);
  width: 100%;
}
.task-description {
  font-size: 14px;
  color: #797988;
  height: 100px;
  overflow-y: auto;
  margin-bottom: 50px;
}
.footer-task {
  display: flex;
  justify-content: space-between;
  height: auto;
  width: 100%;
  position: absolute;
  bottom: 10px;
}
.color-label {
  height: 10px;
  position: absolute;
  bottom: 0;

  width: 100%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
</style>