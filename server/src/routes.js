const ElectroluxController = require('./controllers/ElectroluxController')
const OttoController = require('./controllers/OttoController')
const OxygenController = require('./controllers/OxygenController')
const SmarthomeController = require('./controllers/SmarthomeController')

module.exports = (app) => {
    /* RESFUL Api for users management */

    // Electrolux
    app.get('/electroluxs', ElectroluxController.index)
    
    app.post('/electrolux', ElectroluxController.create)
    
    app.put('/electrolux/:electroluxId', ElectroluxController.put)
    
    app.delete('/electrolux/:electroluxId', ElectroluxController.delete)
    
    app.get('/electrolux/:electroluxId', ElectroluxController.show)

    
    // Philips
    // get all philips
    app.get('/ottos', OttoController.index)
    
    // create philips
    app.post('/otto', OttoController.create)
    
    // edit philips, suspend, active
    app.put('/otto/:ottoId', OttoController.put)

    // delete philips
    app.delete('/otto/:ottoId', OttoController.delete)
    
    // get philips by id
    app.get('/otto/:ottoId', OttoController.show)

    
    // Tefal
    app.get('/oxygens', OxygenController.index)
    
    app.post('/oxygen', OxygenController.create)
    
    app.put('/oxygen/:oxygenId', OxygenController.put)
    
    app.delete('/oxygen/:oxygenId', OxygenController.delete)
    
    app.get('/oxygen/:oxygenId', OxygenController.show)


    // Xiaomi
    app.get('/smarthomes', SmarthomeController.index)
    
    app.post('/smarthome', SmarthomeController.create)
    
    app.put('/smarthome/:smarthomeId', SmarthomeController.put)
    
    app.delete('/smarthome/:smarthomeId', SmarthomeController.delete)
    
    app.get('/smarthome/:smarthomeId', SmarthomeController.show)
}