module.exports = (sequelize, DataTypes) => {

    const Registers = sequelize.define("Registers", {
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Sobrenome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Telefone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return Registers;
};
