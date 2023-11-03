<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Philips</span></h1>
        <p><button v-on:click="create">Create Philips</button></p>
        <div v-for="philips in philipss" v-bind:key="philips.id">
            <div><a>ชื่อ:</a> <a1>{{ philips.name_thai }} {{ philips.name_eng }}</a1></div>
            <div><a>รุ่น:</a> <a1>{{ philips.model }}</a1></div>
            <div><a>ราคา:</a> <a1>{{ philips.price }}</a1></div>
            <p></p>
            <button v-on:click="navigateTo('/philips/' + philips.id)">ดูข้อมูลผู้ใช้</button>
            <button v-on:click="navigateTo('/philips/edit/' + philips.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deletePhilips(philips)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import PhilipsService from '@/services/PhilipsService'
export default {
    data() {
        return {
            philipss: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.philipss = (await PhilipsService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'philips-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deletePhilips(philips) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await PhilipsService.delete(philips)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.philipss = (await PhilipsService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    }
}
</script>
<style scoped></style>