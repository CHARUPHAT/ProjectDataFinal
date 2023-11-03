<template>
    <div>
        <h1><span>Xiaomi</span></h1>
        <div>id: <a1>{{ xiaomi.id }}</a1></div>
        <div>ชื่อ: <a1>{{ xiaomi.name_thai }} {{ xiaomi.name_eng }}</a1></div>
        <div>รุ่น: <a1>{{ xiaomi.model }}</a1></div>
        <div>ประเภท: <a1>{{ xiaomi.category }}</a1></div>
        <div>รายละเอียด: <a1>{{ xiaomi.detail }}</a1></div>
        <div>ราคา: <a1>{{ xiaomi.price }}</a1></div>
        <p></p>
        <div><button v-on:click="navigateTo('/xiaomis')">กลับ</button></div>
        <hr>
    </div>
</template>
<script>
import XiaomiService from '@/services/XiaomiService'

export default {
    data() {
        return {
            xiaomi:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let xiaomiId = this.$route.params.xiaomiId
            this.xiaomi = (await XiaomiService.show(xiaomiId)).data
            console.log(this.xiaomi)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   