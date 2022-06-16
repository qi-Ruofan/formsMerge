<template>
  <el-form ref="formData" label-width="80px" :model="formData" :rules="formRules" style="width: 450px;">
    <el-form-item label="地址" prop="address">
      <el-input class="f-input" v-model="formData.address"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input class="f-input" v-model="formData.age"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-input class="f-input" v-model="formData.sex"></el-input>
    </el-form-item>
</el-form>
</template>
<script>
  class formData {
    constructor() {
      this.address='';
      this.age = ''; 
      this.sex = ''; 
    }
    static getRule() {
      return {
        address:  [{ required: true, message: '请填写名称', trigger: 'blur' }],
        age: [{ required: true, message: '请填写活动区域', trigger: 'blur' }],
        sex: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
      }
    }
  }
  export default {
    data() {
      return {
        formData: new formData,
        formRules: formData.getRule(),
      };
    },
    methods: {
      getData() {
        // 返回子组件的form
        return this.formData;
      },
    }
  }
</script>
<style scoped>

</style>