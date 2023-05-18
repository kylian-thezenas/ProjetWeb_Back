const router = require('express').Router();
const favorisController = require('../controllers/favorisController');

router.get('/api/favoris/', favorisController.allFavoris);
router.post('/api/favoris/', favorisController.addFavoris);
router.get('/api/favoris/:name', favorisController.getFavoris);
router.delete('/api/favoris/:userName/:pokemonName', favorisController.deleteFavoris);

module.exports = router;