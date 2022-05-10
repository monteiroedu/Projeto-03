import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'

export const jogos = connection.define('jogos', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true 
    }, 
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    ano: {
        type: Sequelize.STRING,
        allowNull: false
    },
    desenvolvido: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    plataforma: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    iframe: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    feezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
})

//function iniTable() {
  //  jogos.async()
//}

//iniTable()

const initTable = async () => {
    await jogos.sync()
}

initTable();