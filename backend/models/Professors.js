module.exports = function(sequelize, DataTypes) {
    var Professors = sequelize.define("professors", {
        professorId: DataTypes.INTEGER,
        professorName: DataTypes.STRING,
        professorEmail: DataTypes.STRING,
        professorUsername: DataTypes.STRING,
        professorPassword: DataTypes.STRING
    });
    return Professors
}