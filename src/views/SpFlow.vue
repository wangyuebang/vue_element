<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="id"
                    label="编号"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="200">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
<!--                    <el-button type="text" size="small">编辑</el-button>-->
                    <el-button @click="deleteFlow(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                page-size="2"
                :total="total"
                @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            deleteFlow(row){
                const _this = this
                axios.delete("http://localhost:8181/SpFlow/delete/"+row.id).then(function (res) {
                    _this.$alert('《'+row.name+'》删除成功！', '消息', {
                        confirmButtonText: '确定',
                        callback: action => {
                            window.location.reload()
                        }
                    })
                })
            },
            edit(row) {
                this.$router.push({
                    path: '/updateSpFlow',
                    query:{
                        id:row.id
                    }
                })
                // row.id
            },
            page(currentPage) {
                const _this = this;
                axios.get("http://localhost:8181/SpFlow/findAll/"+currentPage+"/3").then(function (res) {
                    _this.tableData = res.data.content;
                    _this.total = res.date.totalElements;
                })
            },
        },
        created() {
            const _this = this;
            axios.get("http://localhost:8181/SpFlow/findAll/1/3").then(function (res) {
                // console.log(res.data)
                _this.tableData = res.data.content;
                _this.total = res.data.totalElements;
            })
        },
        data() {
            return {
                total :null,
                tableData: null
            }
        }
    }
</script>

<style scoped>

</style>