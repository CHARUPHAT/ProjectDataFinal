import Api from '@/services/Api'
export default {
    index(electrolux) {
        return Api().get('electroluxs')
    },
    show(electroluxId) {
        return Api().get('electrolux/' + electroluxId)
    },
    post(electrolux) {
        return Api().post('electrolux', electrolux)
    },
    put(electrolux) {
        return Api().put('electrolux/' + electrolux.id, electrolux)
    },
    delete(electrolux) {
        return Api().delete('electrolux/' + electrolux.id, electrolux)
    },
}