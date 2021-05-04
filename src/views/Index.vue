
<template>
  <div>
    <a-descriptions title="User Info" style="margin-top: 50px">
      <a-descriptions-item label="UserName">
        {{ username }}
      </a-descriptions-item>
    </a-descriptions>
    <a-button type="primary" @click="handleClickExit"> 退出 </a-button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  created() {
    this.username = localStorage.curUser;
  },
  methods: {
    handleClickExit() {
      this.$router.push("/login");
      localStorage.clear();
    },
  },
};
</script>
