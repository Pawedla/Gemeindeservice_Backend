import express from "express";
 
import { 
    getAllBeschluesse,
    createBeschluss,
    getBeschlussById,
    updateBeschluss,
    deleteBeschluss
} from "../controllers/Beschluesse.js";

const router = express.Router();
 
router.get('/', getAllBeschluesse);
router.get('/:sitzungID', getBeschlussById);
router.post('/', createBeschluss);
router.put('/:id', updateBeschluss);
router.delete('/:id', deleteBeschluss);

export default router;