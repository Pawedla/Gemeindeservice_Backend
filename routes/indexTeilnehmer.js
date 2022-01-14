import express from "express";
 
import { 
    getAllTeilnehmer,
    createTeilnehmer,
    getTeilnehmerById,
    updateTeilnehmer,
    deleteTeilnehmer
} from "../controllers/Teilnehmer.js";
 
const router = express.Router();
 
router.get('/', getAllTeilnehmer);
router.get('/:sitzungID', getTeilnehmerById);
router.post('/', createTeilnehmer);
router.put('/:svnr/:sitzungID', updateTeilnehmer);
router.delete('/:svnr/:sitzungID', deleteTeilnehmer);
 
export default router;