<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create Tefal</span></h1>
                <form class="register-form" v-on:submit.prevent="createTefal">
                    <input type="text" placeholder="ชื่อ *" v-model="tefal.name_thai" required>
                    <input type="text" placeholder="name" v-model="tefal.name_eng">
                    <input type="text" placeholder="รุ่น *" v-model="tefal.model" required>
                    <input type="text" placeholder="ประเภท" v-model="tefal.category">
                    <input type="text" placeholder="รายละเอียด" v-model="tefal.detail">
                    <input type="text" placeholder="ราคา *" v-model="tefal.price" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/electroluxs')">กลับ</button>                </form>
            </div>
        </div>
    </div2>
</template>
<script>
import TefalService from '@/services/TefalService'
export default {
    data() {
        return {
            tefal: {
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
        async createTefal() {
            try {
                await TefalService.post(this.tefal)
                this.$router.push({
                    name: 'tefals'
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
   