import Person from "../models/personModel.js";
 
export const getAllPersons = async (req, res) => {
    try {
        const persons = await Person.findAll();
        res.json(persons);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getPersonById = async (req, res) => {
    try {
        const persons = await Person.findAll({
            where: {
                svnr: req.params.svnr
            }
        });
        res.json(persons[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createPerson = async (req, res) => {
    try {
        await Person.create(req.body);
        res.json({
            "message": "Person Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updatePerson = async (req, res) => {
    try {
        await Person.update(req.body, {
            where: {
                svnr: req.params.svnr
            }
        });
        res.json({
            "message": "Person Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deletePerson = async (req, res) => {
    try {
        await Person.destroy({
            where: {
                svnr: req.params.svnr
            }
        });
        res.json({
            "message": "Person Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}



