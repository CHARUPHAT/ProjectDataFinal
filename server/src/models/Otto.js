module.exports = (sequelize, DataTypes) => {
    const Otto = sequelize.define('Otto', {
        name_eng: DataTypes.STRING,
        model: DataTypes.STRING,
        type: DataTypes.STRING,
        size: DataTypes.INTEGER,
        detail: DataTypes.STRING,
        price: DataTypes.INTEGER
    })
    return Otto
}