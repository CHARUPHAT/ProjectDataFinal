<template>
    <div>
        <h1><span>Tefal</span></h1>
        <div>id: <a1>{{ tefal.id }}</a1></div>
        <div>ชื่อ: <a1>{{ tefal.name_thai }} {{ tefal.name_eng }}</a1></div>
        <div>รุ่น: <a1>{{ tefal.model }}</a1></div>
        <div>ประเภท: <a1>{{ tefal.category }}</a1></div>
        <div>รายละเอียด: <a1>{{ tefal.detail }}</a1></div>
        <div>ราคา: <a1>{{ tefal.price }}</a1></div>
        <p></p>
        <div><button v-on:click="navigateTo('/tefals')">กลับ</button></div>
        <hr>
    </div>
</template>
<script>
import TefalService from '@/services/TefalService'

export default {
    data() {
        return {
            tefal:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let tefalId = this.$route.params.tefalId
            this.tefal = (await TefalService.show(tefalId)).data
            console.log(this.tefal)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   