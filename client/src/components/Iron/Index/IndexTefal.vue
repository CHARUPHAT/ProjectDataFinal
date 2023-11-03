<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Tefal</span></h1>
        <p><button v-on:click="create">Create Tefal</button></p>
        <div v-for="tefal in tefals" v-bind:key="tefal.id">
            <div><a>ชื่อ:</a> <a1>{{ tefal.name_thai }} {{ tefal.name_eng }}</a1></div>
            <div><a>รุ่น:</a> <a1>{{ tefal.model }}</a1></div>
            <div><a>ราคา:</a> <a1>{{ tefal.price }}</a1></div>
            <p></p>
            <button v-on:click="navigateTo('/tefal/' + tefal.id)">ดูข้อมูลผู้ใช้</button>
            <button v-on:click="navigateTo('/tefal/edit/' + tefal.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteTefal(tefal)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import TefalService from '@/services/TefalService'
export default {
    data() {
        return {
            tefals: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.tefals = (await TefalService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'tefal-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteTefal(tefal) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await TefalService.delete(tefal)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.tefals = (await TefalService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    }
}
</script>
<style scoped></style>