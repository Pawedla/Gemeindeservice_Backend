import { Sequelize } from "sequelize";

 
const db = new Sequelize('damu6qlav34ufh', 'eqxexbcwuesifh', '8a6d434ab72b3ea6a2c06dfacc7ca01a61861a52e6bf32d1f0f0fa1ab0526ee1', {
    host: "ec2-54-220-223-3.eu-west-1.compute.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
    port: 5432,
    define: {
        timestamps: false
    }
});
 
export default db;