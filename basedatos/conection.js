import Sequelize from "sequelize";

//const host = '18.117.253.213'
const host = 'localhost' //127.0.0.1

export const sequelize = new Sequelize(
  //Para la base de datos externa
  /*"testdb", // db name,
  "postgres", // username
  "Postgres321.", // password
  {
    host: "3.144.70.37",
    dialect: "postgres",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }*/


  //Base datos local Nixon
  "dbtest", // db name,
  //"dbtest_1", // db name,
  "postgres", // username
  //"wretopro", // password
  "1234", // password
  {
    host: host, 
    dialect: "postgres",
  }



);


export const estadoBD = async (sequelize) => {
  try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.');
      return true
  } catch (error) {
      console.error('Unable to connect to the database:', error);
      return false
  }
}


/*const { Sequelize } = require('sequelize');
require('./models/models.js')

async function connect(){
    // Option 1: Passing a connection URI
    const sequelize = new Sequelize('postgres://postgres:postgres@18.117.253.213:5432/testdb') // Example for postgres
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');
        return true
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false
    }
}


module.exports = connect*/
