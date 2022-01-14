import Beschluss from "../models/beschlussModel.js";
 
export const getAllBeschluesse = async (req, res) => {
    try {
        const beschluesse = await Beschluss.findAll();
        res.json(beschluesse);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getBeschlussById = async (req, res) => {
    try {
        const beschluesse = await Beschluss.findAll({
            where: {
                sitzungID: req.params.sitzungID
            }
        });
        res.json(beschluesse);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createBeschluss = async (req, res) => {
    try {
        await Beschluss.create(req.body);
        res.json({
            "message": "Beschluss Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateBeschluss = async (req, res) => {
    try {
        await Beschluss.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Beschluss Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteBeschluss = async (req, res) => {
    try {
        await Beschluss.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Beschluss Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}



