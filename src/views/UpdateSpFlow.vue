<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="id" prop="id">
            <el-input v-model="ruleForm.id" readOnly></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="test()">test</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    id:'',
                    name: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入名称', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            test(){
                console.log(this.ruleForm)
            },
            submitForm(formName) {
                const _this = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.put("http://localhost:8181/SpFlow/update",this.ruleForm).then(function (res) {
                            _this.$alert('《'+_this.ruleForm.name+'》修改成功！', '消息', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    _this.$router.push('/spFlow')
                                }
                            })
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created() {
            const _this = this
            axios.get("http://localhost:8181/SpFlow/findSpById/"+this.$route.query.id).then(function (res) {
                _this.ruleForm = res.data
            })
        }
    }
</script>

<style scoped>

</style>