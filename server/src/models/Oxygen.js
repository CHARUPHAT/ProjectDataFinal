module.exports = (sequelize, DataTypes) => {
    const Oxygen = sequelize.define('Oxygen', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        model: DataTypes.STRING,
        type: DataTypes.STRING,
        size: DataTypes.INTEGER,
        detail: DataTypes.STRING,
        price: DataTypes.INTEGER
    })
    return Oxygen
}