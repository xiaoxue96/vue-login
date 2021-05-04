<template>
  <div class="container">
    <a-card title="用户登录" :hoverable="true" style="width: 350px">
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        @submit="handleSubmit"
        @submit.native.prevent
      >
        <a-form-model-item prop="username">
          <a-input v-model="form.username" placeholder="Username">
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="password">
          <a-input
            v-model="form.password"
            :type="isVisible ? 'text' : 'password'"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
            <a-icon
              v-if="isVisible"
              type="eye"
              slot="suffix"
              @click="toggleIsVisble"
            />
            <a-icon
              v-else
              type="eye-invisible"
              slot="suffix"
              @click="toggleIsVisble"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="primary" html-type="submit" block> 登录 </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</template>

<script>
import userServices from "../services/user";

export default {
  data() {
    const validateUser = (rule, value, callback) => {
      const re = /^\w{3,6}$/;
      if (value === "") {
        callback(new Error("请输入账号"));
      } else if (!re.test(value)) {
        callback(new Error("3至6位，限数字、字母、下划线"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      const re = /^\w{3,6}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!re.test(value)) {
        callback(new Error("3至6位，限数字、字母、下划线"));
      } else {
        callback();
      }
    };

    return {
      form: {
        username: "",
        password: "",
      },
      isVisible: false,
      rules: {
        username: [{ validator: validateUser, trigger: "change" }],
        password: [{ validator: validatePass, trigger: "change" }],
      },
    };
  },
  methods: {
    handleSubmit() {
      //表单验证
      new Promise((resolved) => {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) resolved();
        });
      }).then(() => {
        const status = userServices.login(this.form);
        if (status) {
          localStorage.isAuth = true;
          localStorage.curUser = this.form.username;
          this.$router.push({ path: "/index" });
        } else {
          this.$router.push({ path: "/error" });
        }
      });
    },
    // 切换密码是否可见
    toggleIsVisble() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style>
.container {
  background: #fafafa;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>