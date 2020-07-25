const express = require('express');
const router = express.Router();
const tourControllers = require('../controllers/tourControllers');

// router.param('id', tourControllers.checkId);

router.route('/').post(tourControllers.createTour);
//   .get(tourControllers.getAllTours);

// router
//   .route('/:id')
//   .get(tourControllers.getTour)
//   .patch(tourControllers.updateTour)
//   .delete(tourControllers.deleteTour);

module.exports = router;
