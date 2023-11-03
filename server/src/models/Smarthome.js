module.exports = (sequelize, DataTypes) => {
    const Smarthome = sequelize.define('Smarthome', {
        name_eng: DataTypes.STRING,
        model: DataTypes.STRING,
        type: DataTypes.STRING,
        size: DataTypes.INTEGER,
        detail: DataTypes.STRING,
        price: DataTypes.INTEGER
    })
    return Smarthome
}