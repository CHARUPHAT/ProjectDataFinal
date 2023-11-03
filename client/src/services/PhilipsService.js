import Api from '@/services/Api'
export default {
    index(philips) {
        return Api().get('philipss')
    },
    show(philipsId) {
        return Api().get('philips/' + philipsId)
    },
    post(philips) {
        return Api().post('philips', philips)
    },
    put(philips) {
        return Api().put('philips/' + philips.id, philips)
    },
    delete(philips) {
        return Api().delete('philips/' + philips.id, philips)
    },
}