const { Oven } = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        try {
            const ovens = await Oven.findAll()
            res.send(ovens)
        } catch (err) {
            res.status(500).send({
                error: 'the Oven information was incorrect'
            })
        }
    },


    // create user
    async create(req, res) {
        try {
            const oven = await Oven.create(req.body)
            res.send(oven.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Oven incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Oven.update(req.body, {
                where: {
                    id: req.params.ovenId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Oven incorrect'
            })
        }
    },

    // delete electrolux
    async delete(req, res) {
        try {
            const oven = await Oven.findOne({
                where: {
                    id: req.params.ovenId
                }
            })
            if (!oven) {
                return res.status(403).send({
                    error: 'The Oven information was incorrect'
                })
            }
            await oven.destroy()
            res.send(oven)
        } catch (err) {
            res.status(500).send({
                error: 'The Oven information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const oven = await Oven.findByPk(req.params.ovenId)
            res.send(oven)
        } catch (err) {
            res.status(500).send({
                error: 'The Oven information was incorrect'
            })
        }
    },
}