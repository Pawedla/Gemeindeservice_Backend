import express from "express";
 
import { 
    getAllPersons,
    createPerson,
    getPersonById,
    updatePerson,
    deletePerson
} from "../controllers/Persons.js";

const router = express.Router();
 
router.get('/', getAllPersons);
router.get('/:svnr', getPersonById);
router.post('/', createPerson);
router.put('/:svnr', updatePerson);
router.delete('/:svnr', deletePerson);

export default router;