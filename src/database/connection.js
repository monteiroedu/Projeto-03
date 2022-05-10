import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(
    'postgres://jogos_user:p4rnDzE3cvpEGpLKfn8G93g0IqjG4Jia@dpg-c9srdq7d17cd03l5g1c0-a.oregon-postgres.render.com/jogos',
   {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
  }
   )