import Sitzung from "../models/sitzungModel.js";
 
export const getAllSitzungen = async (req, res) => {
    try {
        const sitzungen = await Sitzung.findAll();
        res.json(sitzungen);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getSitzungById = async (req, res) => {
    try {
        const sitzungen = await Sitzung.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(sitzungen[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createSitzung = async (req, res) => {
    try {
        await Sitzung.create(req.body);
        res.json({
            "message": "Sitzung Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateSitzung = async (req, res) => {
    try {
        await Sitzung.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Sitzung Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteSitzung = async (req, res) => {
    try {
        await Sitzung.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Sitzung Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}



