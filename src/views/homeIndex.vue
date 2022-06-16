<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="form1" name="first">
        <form-comp-one ref="formComp1" />
      </el-tab-pane>
      <el-tab-pane label="form2" name="second">
        <form-comp-two ref="formComp2" />
      </el-tab-pane>
    </el-tabs>
    <el-button class="submit-btn" size="small" @click="submit">提交</el-button>
  </div>
</template>
<script>
import FormCompOne from '@/components/FormCompOne.vue';
import FormCompTwo from '@/components/FormCompTwo.vue';
export default {
  components: {
    FormCompOne,
    FormCompTwo
  },
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submit() {
      const _this = this
      const formData1 = _this.$refs.formComp1.$refs.formData
      const formData2 = _this.$refs.formComp2.$refs.formData
       Promise.all([formData1,formData2].map(_this.getFormPromise)).then(res => {
         console.log(res)
           const validateResult = res.every(item => !!item);
           if(validateResult) {
             const params = {
              ..._this.$refs.formComp1.getData(),
              ..._this.$refs.formComp2.getData(),
             }
             console.log(params)
              alert('提交成功')
           } else {
             alert('必填内容未填写')
           }
       })
    },
    getFormPromise(form) {
      return new Promise(resolve => {
        form.validate(res => {
          resolve(res);
        })
      })
    },
  }
};
</script>
<style>
.submit-btn {
  position: absolute;
  right: 10px;
  top: 60px
}
</style>