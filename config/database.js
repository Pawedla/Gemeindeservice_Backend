import { Sequelize } from "sequelize";

 
const db = new Sequelize('d3oscl2chjcn92', 'vpkpxwnhmhottt', '63bface740f1c18598e8340e61d8aeb09df0945a8525df08ab4e7aab954e7ea0', {
    host: "ec2-23-23-133-10.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
      },
    port: 5432,
    define: {
        timestamps: false
    }
});
 
export default db;