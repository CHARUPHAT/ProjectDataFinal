<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create Electrolux</span></h1>
                <form class="register-form" v-on:submit.prevent="createElectrolux">
                    <input type="text" placeholder="ชื่อ *" v-model="electrolux.name_thai" required>
                    <input type="text" placeholder="name" v-model="electrolux.name_eng">
                    <input type="text" placeholder="รุ่น *" v-model="electrolux.model" required>
                    <input type="text" placeholder="ประเภท" v-model="electrolux.category">
                    <input type="text" placeholder="รายละเอียด" v-model="electrolux.detail">
                    <input type="text" placeholder="ราคา *" v-model="electrolux.price" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/electroluxs')">กลับ</button>
                </form>
            </div>
        </div>
    </div2>
</template>
<script>
import ElectroluxService from '@/services/ElectroluxService'
export default {
    data() {
        return {
            electrolux: {
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
        async createElectrolux() {
            try {
                await ElectroluxService.post(this.electrolux)
                this.$router.push({
                    name: 'electroluxs'
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
   