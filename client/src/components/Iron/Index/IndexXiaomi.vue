<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Xiaomi</span></h1>
        <p><button v-on:click="create">Create Xiaomi</button></p>
        <div v-for="xiaomi in xiaomis" v-bind:key="xiaomi.id">
            <div><a>ชื่อ:</a> <a1>{{ xiaomi.name_thai }} {{ xiaomi.name_eng }}</a1></div>
            <div><a>รุ่น:</a> <a1>{{ xiaomi.model }}</a1></div>
            <div><a>ราคา:</a> <a1>{{ xiaomi.price }}</a1></div>
            <p></p>
            <button v-on:click="navigateTo('/xiaomi/' + xiaomi.id)">ดูข้อมูลผู้ใช้</button>
            <button v-on:click="navigateTo('/xiaomi/edit/' + xiaomi.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteXiaomi(xiaomi)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import XiaomiService from '@/services/XiaomiService'
export default {
    data() {
        return {
            xiaomis: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.xiaomis = (await XiaomiService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'xiaomi-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteXiaomi(xiaomi) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await XiaomiService.delete(xiaomi)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.xiaomis = (await XiaomiService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    }
}
</script>
<style scoped></style>