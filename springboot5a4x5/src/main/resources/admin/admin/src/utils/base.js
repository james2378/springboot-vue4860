const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot5a4x5/",
            name: "springboot5a4x5",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "医院病历管理系统"
        } 
    }
}
export default base
