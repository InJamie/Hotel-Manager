<template>
	<div class="main j-c">
		<div class="login">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
					<el-form-item label="账号" prop="account">
						<el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="pass">
						<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
					</el-form-item>
			</el-form>
		</div>
		
		
	</div>
</template>

<script>
	export default {
    data() {
      var checkAccount = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }else callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else callback(); 
      };
      return {
        ruleForm: {
          account: '',
          pass: ''
        },
        rules: {
          account: [
            { validator: checkAccount, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 进行表格校验成功的操作
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss">
.main{
	display: flex;
	justify-self: center;
	align-items: center;
	height: 100vh;
	.login{
			width: 400px;
			height: 180px;
			border: 1px solid #ccc;
			padding: 20px;
	}
}
</style>
