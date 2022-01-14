import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Person = db.define('mitarbeiter',{
    vorname:{
        type: DataTypes.STRING(100)
    },
    nachname:{
        type: DataTypes.STRING(100)
    },
    svnr:{
        type: DataTypes.INTEGER(20),
        allowNull: false,
        primaryKey: true,
    },
    tel:{
        type: DataTypes.INTEGER(20)
    },
    email:{
        type: DataTypes.STRING(100)
    },
    funktion:{
        type: DataTypes.STRING(100)
    },
    geburtsdatum:{
        type: DataTypes.DATE
    }
},{
    freezeTableName: true
});
 
export default Person;