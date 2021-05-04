<template>
  <div>
    <a-result status="error" title="登录失败" sub-title="用户名或密码错误">
    </a-result>
    <a-button type="primary" @click="handleClickBack"> Back</a-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClickBack() {
      history.back();
    },
  },
};
</script>

