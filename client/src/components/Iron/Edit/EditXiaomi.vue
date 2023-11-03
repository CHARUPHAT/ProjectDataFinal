<template>
    <div>
        <h1><span>Edit Xiaomi</span></h1>
        <form v-on:submit.prevent="editXiaomi">
            <p>ชื่อ: <input type="text" v-model="xiaomi.name_thai"></p>
            <p>name: <input type="text" v-model="xiaomi.name_eng"></p>
            <p>รุ่น: <input type="text" v-model="xiaomi.model"></p>
            <p>ประเภท: <input type="text" v-model="xiaomi.category"></p>
            <p>รายละเอียด: <input type="text" v-model="xiaomi.detail"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ xiaomi.name_thai }}</a1></p>
            <p><a>name:</a> <a1>{{ xiaomi.name_eng }}</a1></p>
            <p><a>รุ่น:</a> <a1>{{ xiaomi.model }}</a1></p>
            <p><a>ประเภท:</a> <a1>{{ xiaomi.category }}</a1></p>
            <p><a>รายละเอียด:</a> <a1>{{ xiaomi.detail }}</a1></p>
            <p></p>
        </div>

    </div>
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
            }
        }
    },
    methods: {
        async editXiaomi() {
            try {
                await XiaomiService.put(this.xiaomi)
                this.$router.push({
                    name: 'xiaomis'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let xiaomiId = this.$route.params.xiaomiId
            this.xiaomi = (await XiaomiService.show(xiaomiId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>