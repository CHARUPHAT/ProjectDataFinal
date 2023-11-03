<template>
    <div>
        <h1><span>Philips</span></h1>
        <div>id: <a1>{{ philips.id }}</a1></div>
        <div>ชื่อ: <a1>{{ philips.name_thai }} {{ philips.name_eng }}</a1></div>
        <div>รุ่น: <a1>{{ philips.model }}</a1></div>
        <div>ประเภท: <a1>{{ philips.category }}</a1></div>
        <div>รายละเอียด: <a1>{{ philips.detail }}</a1></div>
        <div>ราคา: <a1>{{ philips.price }}</a1></div>
        <p></p>
        <div><button v-on:click="navigateTo('/philipss')">กลับ</button></div>
        <hr>
    </div>
</template>
<script>
import PhilipsService from '@/services/PhilipsService'

export default {
    data() {
        return {
            philips:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let philipsId = this.$route.params.philipsId
            this.philips = (await PhilipsService.show(philipsId)).data
            console.log(this.philips)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   