const { Otto } = require('../models')

module.exports = {

    async index(req, res) {
        try {
            const ottos = await Otto.findAll()
            res.send(ottos)
        } catch (err) {
            res.status(500).send({
                error: 'The Otto information was incorrect'
            })
        }
    },

    async create(req, res) {
        try {
            const otto = await Otto.create(req.body)
            res.send(otto.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Otto incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Otto.update(req.body, {
                where: {
                    id: req.params.ottoId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Otto incorrect'
            })
        }

    },

    async delete(req, res) {
        try {
            const otto = await Otto.findOne({
                where: {
                    id: req.params.ottoId
                }
            })
            if (!otto) {
                return res.status(403).send({
                    error: 'The Otto information was incorrect'
                })
            }
            await otto.destroy()
            res.send(otto)
        } catch (err) {
            res.status(500).send({
                error: 'The Otto information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const otto = await Otto.findByPk(req.params.ottoId)
            res.send(otto)
        } catch (err) {
            res.status(500).send({
                error: 'The Otto information was incorrect'
            })
        }
    },

    

}