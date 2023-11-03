<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create Xiaomi</span></h1>
                <form class="register-form" v-on:submit.prevent="createXiaomi">
                    <input type="text" placeholder="ชื่อ *" v-model="xiaomi.name_thai" required>
                    <input type="text" placeholder="name" v-model="xiaomi.name_eng">
                    <input type="text" placeholder="รุ่น *" v-model="xiaomi.model" required>
                    <input type="text" placeholder="ประเภท" v-model="xiaomi.category">
                    <input type="text" placeholder="รายละเอียด" v-model="xiaomi.detail">
                    <input type="text" placeholder="ราคา *" v-model="xiaomi.price" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/electroluxs')">กลับ</button>                </form>
            </div>
        </div>
    </div2>
</template>
<script>
import XiaomiService from '@/services/XiaomiService'
export default {
    data() {
        return {
            xiaomi: {
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
        async createXiaomi() {
            try {
                await XiaomiService.post(this.xiaomi)
                this.$router.push({
                    name: 'xiaomis'
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