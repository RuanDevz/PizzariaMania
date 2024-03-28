module.exports = (sequelize, DataTypes) => {

    const Logins = sequelize.define("Logins", {
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return Logins;
};
