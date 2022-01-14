import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Sitzung = db.define('sitzung',{
    id:{
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    datum:{
        type: DataTypes.DATE
    },
    beschreibung:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName: true
});
 
export default Sitzung;