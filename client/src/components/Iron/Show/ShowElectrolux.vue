<template>
    <div>
        <h1><span>Electrolux</span></h1>
        <div>id: <a1>{{ electrolux.id }}</a1></div>
        <div>ชื่อ: <a1>{{ electrolux.name_thai }} {{ electrolux.name_eng }}</a1></div>        
        <div>รุ่น: <a1>{{ electrolux.model }}</a1></div>
        <div>ประเภท: <a1>{{ electrolux.category }}</a1></div>
        <div>รายละเอียด: <a1>{{ electrolux.detail }}</a1></div>
        <div>ราคา: <a1>{{ electrolux.price }}</a1></div>
        <p></p>
        <button v-on:click="navigateTo('/electroluxs')">กลับ</button>
        <hr>
    </div>
</template>
<script>
import ElectroluxService from '@/services/ElectroluxService'

export default {
    data() {
        return {
            electrolux:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let electroluxId = this.$route.params.electroluxId
            this.electrolux = (await ElectroluxService.show(electroluxId)).data
            console.log(this.electrolux)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   