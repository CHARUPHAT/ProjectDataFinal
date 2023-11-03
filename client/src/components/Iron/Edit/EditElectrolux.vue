<template>
    <div>
        <h1><span>Edit Electrolux</span></h1>
        <form v-on:submit.prevent="editElectrolux">
            <p>ชื่อ: <input type="text" v-model="electrolux.name_thai"></p>
            <p>name: <input type="text" v-model="electrolux.name_eng"></p>
            <p>รุ่น: <input type="text" v-model="electrolux.model"></p>
            <p>ประเภท: <input type="text" v-model="electrolux.category"></p>
            <p>รายละเอียด: <input type="text" v-model="electrolux.detail"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ electrolux.name_thai }}</a1></p>
            <p><a>name:</a> <a1>{{ electrolux.name_eng }}</a1></p>
            <p><a>รุ่น:</a> <a1>{{ electrolux.model }}</a1></p>
            <p><a>ประเภท:</a> <a1>{{ electrolux.category }}</a1></p>
            <p><a>รายละเอียด:</a> <a1>{{ electrolux.detail }}</a1></p>
            <p></p>
        </div>

    </div>
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
            }
        }
    },
    methods: {
        async editElectrolux() {
            try {
                await ElectroluxService.put(this.electrolux)
                this.$router.push({
                    name: 'electroluxs'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let electroluxId = this.$route.params.electroluxId
            this.electrolux = (await ElectroluxService.show(electroluxId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>