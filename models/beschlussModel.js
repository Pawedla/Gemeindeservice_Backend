import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Beschluss = db.define('beschluesse',{
    id:{
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    sitzungID:{
        type: DataTypes.STRING(100)
    },
    text:{
        type: DataTypes.TEXT(100)
    }
},{
    freezeTableName: true
});
 
export default Beschluss;