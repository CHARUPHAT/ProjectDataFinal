<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create Philips</span></h1>
                <form class="register-form" v-on:submit.prevent="createPhilips">
                    <input type="text" placeholder="ชื่อ *" v-model="philips.name_thai" required>
                    <input type="text" placeholder="name" v-model="philips.name_eng">
                    <input type="text" placeholder="รุ่น *" v-model="philips.model" required>
                    <input type="text" placeholder="ประเภท" v-model="philips.category">
                    <input type="text" placeholder="รายละเอียด" v-model="philips.detail">
                    <input type="text" placeholder="ราคา *" v-model="philips.price" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/electroluxs')">กลับ</button>                </form>
            </div>
        </div>
    </div2>
</template>
<script>
import PhilipsService from '@/services/PhilipsService'
export default {
    data() {
        return {
            philips: {
                name_thai: '',
                name_eng: '',
                model: '',
                category: '',
                detail: '',
                price: '',
            }
        }
    }, 
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        async createPhilips() {
            try {
                await PhilipsService.post(this.philips)
                this.$router.push({
                    name: 'philipss'
                })
            } catch (err) {
                console.log(err)
            }
        },
        navigateTo(route){
            this.$router.push(route)
        }
    },
   
}
</script>
<style scoped></style>
   