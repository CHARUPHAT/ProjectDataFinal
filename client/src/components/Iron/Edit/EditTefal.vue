<template>
    <div>
        <h1><span>Edit Tefal</span></h1>
        <form v-on:submit.prevent="editTefal">
            <p>ชื่อ: <input type="text" v-model="tefal.name_thai"></p>
            <p>name: <input type="text" v-model="tefal.name_eng"></p>
            <p>รุ่น: <input type="text" v-model="tefal.model"></p>
            <p>ประเภท: <input type="text" v-model="tefal.category"></p>
            <p>รายละเอียด: <input type="text" v-model="tefal.detail"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ tefal.name_thai }}</a1></p>
            <p><a>name:</a> <a1>{{ tefal.name_eng }}</a1></p>
            <p><a>รุ่น:</a> <a1>{{ tefal.model }}</a1></p>
            <p><a>ประเภท:</a> <a1>{{ tefal.category }}</a1></p>
            <p><a>รายละเอียด:</a> <a1>{{ tefal.detail }}</a1></p>
            <p></p>
        </div>
    </div>
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
            }
        }
    },
    methods: {
        async editTefal() {
            try {
                await TefalService.put(this.tefal)
                this.$router.push({
                    name: 'tefals'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let tefalId = this.$route.params.tefalId
            this.tefal = (await TefalService.show(tefalId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>