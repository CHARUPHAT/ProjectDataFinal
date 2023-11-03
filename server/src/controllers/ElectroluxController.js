const { Electrolux } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const electroluxs = await Electrolux.findAll()
            res.send(electroluxs)
        } catch (err) {
            res.status(500).send({
                error: 'the Electrolux information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const electrolux = await Electrolux.create(req.body)
            res.send(electrolux.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Electrolux incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Electrolux.update(req.body, {
                where: {
                    id: req.params.electroluxId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Electrolux incorrect'
            })
        }
    },

    // delete electrolux
    async delete(req, res) {
        try {
            const electrolux = await Electrolux.findOne({
                where: {
                    id: req.params.electroluxId
                }
            })
            if (!electrolux) {
                return res.status(403).send({
                    error: 'The Electrolux information was incorrect'
                })
            }
            await electrolux.destroy()
            res.send(electrolux)
        } catch (err) {
            res.status(500).send({
                error: 'The Electrolux information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const electrolux = await Electrolux.findByPk(req.params.electroluxId)
            res.send(electrolux)
        } catch (err) {
            res.status(500).send({
                error: 'The Electrolux information was incorrect'
            })
        }
    },
}