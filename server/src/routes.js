const OvenController = require('./controllers/OvenController')
// const OttoController = require('./controllers/OttoController')
// const OxygenController = require('./controllers/OxygenController')
// const SmarthomeController = require('./controllers/SmarthomeController')

module.exports = (app) => {
    /* RESFUL Api for users management */

    // Oven
    app.get('/ovens', OvenController.index)
    
    app.post('/oven', OvenController.create)
    
    app.put('/oven/:ovenId', OvenController.put)
    
    app.delete('/oven/:ovenId', OvenController.delete)
    
    app.get('/oven/:ovenId', OvenController.show)

    
    // // Philips
    // // get all philips
    // app.get('/ottos', OttoController.index)
    
    // // create philips
    // app.post('/otto', OttoController.create)
    
    // // edit philips, suspend, active
    // app.put('/otto/:ottoId', OttoController.put)

    // // delete philips
    // app.delete('/otto/:ottoId', OttoController.delete)
    
    // // get philips by id
    // app.get('/otto/:ottoId', OttoController.show)

    
    // // Tefal
    // app.get('/oxygens', OxygenController.index)
    
    // app.post('/oxygen', OxygenController.create)
    
    // app.put('/oxygen/:oxygenId', OxygenController.put)
    
    // app.delete('/oxygen/:oxygenId', OxygenController.delete)
    
    // app.get('/oxygen/:oxygenId', OxygenController.show)


    // // Xiaomi
    // app.get('/smarthomes', SmarthomeController.index)
    
    // app.post('/smarthome', SmarthomeController.create)
    
    // app.put('/smarthome/:smarthomeId', SmarthomeController.put)
    
    // app.delete('/smarthome/:smarthomeId', SmarthomeController.delete)
    
    // app.get('/smarthome/:smarthomeId', SmarthomeController.show)
}