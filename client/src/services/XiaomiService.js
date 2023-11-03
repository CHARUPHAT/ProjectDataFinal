import Api from '@/services/Api'
export default {
    index(xiaomi) {
        return Api().get('xiaomis')
    },
    show(xiaomiId) {
        return Api().get('xiaomi/' + xiaomiId)
    },
    post(xiaomi) {
        return Api().post('xiaomi', xiaomi)
    },
    put(xiaomi) {
        return Api().put('xiaomi/' + xiaomi.id, xiaomi)
    },
    delete(xiaomi) {
        return Api().delete('xiaomi/' + xiaomi.id, xiaomi)
    },
}