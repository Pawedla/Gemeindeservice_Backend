import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Teilnehmer = db.define('teilnehmer',{
    svnr:{
        type: DataTypes.INTEGER(20),
        allowNull: false,
        primaryKey: true,
    },
    sitzungID:{
        type: DataTypes.STRING(100),
        primaryKey: true,
    }
},{
    freezeTableName: true
});
 
export default Teilnehmer;