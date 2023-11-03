const { Smarthome } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const smarthomes = await Smarthome.findAll()
            res.send(smarthomes)
        } catch (err) {
            res.status(500).send({
                error: 'the Smarthome information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const smarthome = await Smarthome.create(req.body)
            res.send(smarthome.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Smarthome incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Smarthome.update(req.body, {
                where: {
                    id: req.params.smarthomeId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Smarthome incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const smarthome = await Smarthome.findOne({
                where: {
                    id: req.params.smarthomeId
                }
            })
            if (!smarthome) {
                return res.status(403).send({
                    error: 'The Smarthome information was incorrect'
                })
            }
            await smarthome.destroy()
            res.send(smarthome)
        } catch (err) {
            res.status(500).send({
                error: 'The Smarthome information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const smarthome = await Smarthome.findByPk(req.params.tefalId)
            res.send(smarthome)
        } catch (err) {
            res.status(500).send({
                error: 'The Smarthome information was incorrect'
            })
        }
    },
}