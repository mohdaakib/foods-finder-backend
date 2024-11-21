import express from 'express';
import searchController from '../controllers/searchController.js';

const router = express.Router();

router.get('/pizza', searchController.searchPizza);
router.get('/juice', searchController.searchJuice);
router.get('/combo', searchController.searchCombo);

export default router;
