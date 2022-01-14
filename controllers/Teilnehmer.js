import Teilnehmer from "../models/teilnehmerModel.js";
 
export const getAllTeilnehmer = async (req, res) => {
    try {
        const teilnehmer = await Teilnehmer.findAll();
        res.json(teilnehmer);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getTeilnehmerById = async (req, res) => {
    try {
        const teilnehmer = await Teilnehmer.findAll({
            where: {
                sitzungID: req.params.sitzungID
            }
        });
        res.json(teilnehmer);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createTeilnehmer = async (req, res) => {
    try {
        await Teilnehmer.create(req.body);
        res.json({
            "message": "Teilnehmer Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateTeilnehmer = async (req, res) => {
    try {
        await Teilnehmer.update(req.body, {
            where: {
                svnr: req.params.svnr,
                sitzungID: req.params.sitzungID
            }
        });
        res.json({
            "message": "Teilnehmer Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteTeilnehmer = async (req, res) => {
    try {
        await Teilnehmer.destroy({
            where: {
                svnr: req.params.svnr,
                sitzungID: req.params.sitzungID
            }
        });
        res.json({
            "message": "Teilnehmer Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}



