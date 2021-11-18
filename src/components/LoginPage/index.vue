<template>
  <div id="backgroud">
    <div id="login-box" class="shadow">
      <div class="title font-impact text-center">BSRU</div>
      <div class="sub-title text-center">Kanban Board Project Management</div>

      <div class="text-center" style="margin-top: 25px; font-size: 32px">
        Welcome Back!
      </div>
      <div style="padding:50px;">
        <div class="login-form">
          <label>Email</label>
          <input v-model="email" class="input-custom" type="text" />
          <label>Password</label>
          <input v-model="password" class="input-custom" type="password" />
        </div>
        <div style="margin-top: 40px">
          <button
            type="button"
            @click="sing_in"
            class="btn btn-sign-in btn-lg btn-block"
            style="width: 100%"
          >
            Sign in
          </button>
          <div
            class="text-center"
            style="margin-top: 10px; margin-bottom: 10px"
          >
            OR
          </div>
          <router-link to="/create-account">
          <button
            type="button"
            class="btn btn-create-account btn-lg btn-block"
            style="width: 100%"
          >
            Create an account
          </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    sing_in() {
      alert(555);
      //TODO: 1. have to do connect to API server for login page here
      console.log(this.email, this.password);
    },
  },
};
</script>
 

<style lang="css" scoped>
.input-custom {
  /* position: relative; */
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-bottom: 2px solid white;
  background: rgba(255, 255, 255, 0);
  color: white;
}

#backgroud {
  background-color: #43435e;
  height: inherit;
  position: relative;
}

.text-center {
  text-align: center;
}

#login-box {
  min-width: 30vw;
  min-height: 50vh;
  background-color: #43435e;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 50px;
  padding: 50px;
}

.shadow {
  box-shadow: 10px 4px 37px 0px rgba(0, 0, 0, 0.71);
  -webkit-box-shadow: 10px 4px 37px 0px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 10px 4px 37px 0px rgba(0, 0, 0, 0.71);
  color: white;
}

.title {
  font-size: 4em;
}

.sub-title {
  font-size: 2em;
}

.btn-sign-in {
  background-color: #7742a0;
  color: white;
}

.btn-create-account {
  background-color: #1c1c1c;
  color: white;
}
</style>