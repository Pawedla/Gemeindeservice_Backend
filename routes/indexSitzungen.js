import express from "express";
 
import { 
    getAllSitzungen,
    createSitzung,
    getSitzungById,
    updateSitzung,
    deleteSitzung
} from "../controllers/Sitzungen.js";
 
const router = express.Router();
 
router.get('/', getAllSitzungen);
router.get('/:id', getSitzungById);
router.post('/', createSitzung);
router.put('/:id', updateSitzung);
router.delete('/:id', deleteSitzung);
 
export default router;