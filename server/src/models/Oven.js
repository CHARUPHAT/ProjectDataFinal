module.exports = (sequelize, DataTypes) => {
    const Oven = sequelize.define('Oven', {
        name_eng: DataTypes.STRING,
        size: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        watt : DataTypes.INTEGER
    })
    return Oven
}