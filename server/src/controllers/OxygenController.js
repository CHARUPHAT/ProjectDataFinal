const { Oxygen } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const oxygens = await Oxygen.findAll()
            res.send(oxygens)
        } catch (err) {
            res.status(500).send({
                error: 'the Oxygen information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const oxygen = await Oxygen.create(req.body)
            res.send(oxygen.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Oxygen incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Oxygen.update(req.body, {
                where: {
                    id: req.params.oxygenId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Oxygen incorrect'
            })
        }
    },

    async delete(req, res) {
        try {
            const oxygen = await Oxygen.findOne({
                where: {
                    id: req.params.oxygenId
                }
            })
            if (!oxygen) {
                return res.status(403).send({
                    error: 'The Oxygen information was incorrect'
                })
            }
            await oxygen.destroy()
            res.send(oxygen)
        } catch (err) {
            res.status(500).send({
                error: 'The Oxygen information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const oxygen = await Oxygen.findByPk(req.params.oxygenId)
            res.send(oxygen)
        } catch (err) {
            res.status(500).send({
                error: 'The Oxygen information was incorrect'
            })
        }
    },
}