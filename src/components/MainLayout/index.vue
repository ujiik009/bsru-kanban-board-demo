<template>
  <div class="full-height">
    <!-- nav bar -->
    <div class="topnav">
      <router-link to="/project-list">
        <div class="font-impact logo">BSRU Kanban</div>
      </router-link>

      <div>
        <div>
          <b-avatar
            style="margin-right: 12px; background-color: antiquewhite"
            size="lg"
            variant="primary"
            :text="user_info.full_name.substring(0, 2)"
          ></b-avatar>
          <b-dropdown id="fullname-btn" right :text="user_info.full_name">
            <b-dropdown-item
              class="memu-item"
              @click="go_to('/account/setting')"
            >
              <b-icon icon="gear"></b-icon> Account Setting
            </b-dropdown-item>
            <b-dropdown-item class="memu-item" @click="logout">
              <b-icon icon="box-arrow-right"></b-icon> Logout
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
    <!-- nav bar -->
    <!-- content -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- content -->
  </div>
</template>

<script>
export default {
  created() {
    this.user_info = JSON.parse(localStorage.getItem("user_info"));
  },
  data() {
    return {
      user_info: {},
    };
  },
  methods: {
    go_to(path) {
      this.$router.push(path);
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user_info");
      // redirect to login page
      this.go_to("/")
    },
  },
};
</script>

<style scoped>
.content {
  /* background-color: tomato; */
  height: 92.5%;
}
.logo {
  color: white;
  font-size: 30px;
}
.topnav {
  padding: 20px;
  display: flex;
  background-color: #43435e;
  justify-content: space-between;
}
</style>