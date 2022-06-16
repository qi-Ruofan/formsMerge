<template>
  <el-form 
  ref="formData"  
  :model="formData"
  :rules="formRules"
  label-width="80px" 
  style="width: 450px;"
  >
    <el-form-item label="名称" prop="name">
      <el-input class="f-input" v-model="formData.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" prop="region">
      <el-input class="f-input" v-model="formData.region"></el-input>
    </el-form-item>
    <el-form-item label="活动形式" prop="type">
      <el-input class="f-input" v-model="formData.type"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
  class formData {
    constructor() {
      this.name='';
      this.region = ''; 
      this.type = ''; 
    }
    static getRule() {
      return {
        name:  [{ required: true, message: '请填写名称', trigger: 'blur' }],
        region: [{ required: true, message: '请填写活动区域', trigger: 'blur' }],
        type: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
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