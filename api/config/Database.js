import { Sequelize } from "sequelize";

const db = new Sequelize('rental_kamera','root','',{
  host:'localhost',
  dialect:'mysql'
})

export default db;