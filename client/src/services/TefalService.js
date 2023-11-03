import Api from '@/services/Api'
export default {
    index(tefal) {
        return Api().get('tefals')
    },
    show(tefalId) {
        return Api().get('tefal/' + tefalId)
    },
    post(tefal) {
        return Api().post('tefal', tefal)
    },
    put(tefal) {
        return Api().put('tefal/' + tefal.id, tefal)
    },
    delete(tefal) {
        return Api().delete('tefal/' + tefal.id, tefal)
    },
}