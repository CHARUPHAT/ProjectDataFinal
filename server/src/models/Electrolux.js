module.exports = (sequelize, DataTypes) => {
    const Electrolux = sequelize.define('Electrolux', {
        name_eng: DataTypes.STRING,
        model: DataTypes.STRING,
        type: DataTypes.STRING,
        size: DataTypes.INTEGER,
        detail: DataTypes.STRING,
        price: DataTypes.INTEGER
    })
    return Electrolux
}