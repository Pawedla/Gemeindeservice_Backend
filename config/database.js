import { Sequelize } from "sequelize";

 
const db = new Sequelize('se_react', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false
    }
});
 
export default db;