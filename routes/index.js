const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('pages/index', { title: 'DGIS Energies official website' });
});
router.get('/about', (req, res, next) => {
  res.render('pages/about', { title: 'DGIS Energies - About' });
});
router.get('/services', (req, res, next) => {
  res.render('pages/services', { title: 'DGIS Energies - Services' });
});
router.get('/careers', (req, res, next) => {
  res.render('pages/careers', { title: 'DGIS Energies - Careers' });
});
router.get('/careers/openings', (req, res, next) => {
  res.render('pages/openings', { title: 'DGIS Energies - Job Openings' });
});
router.get('/portfolio', (req, res, next) => {
  res.render('pages/portfolio', { title: 'DGIS Energies - Portfolio' });
});
router.get('/contactus', (req, res, next) => {
  res.render('pages/contact', { title: 'DGIS Energies - Contact' });
});
router.get('/products', (req, res, next) => {
  res.render('pages/products', { title: 'DGIS Energies - Products' });
});
router.get('/packages', (req, res, next) => {
  res.render('pages/packages', { title: 'DGIS Energies - Packages' });
});
router.get('/packages', (req, res, next) => {
  res.render('pages/packages', { title: 'DGIS Energies - Packages' });
});
router.get('/admin', (req, res, next) => {
  res.render('admin/login', { title: 'DGIS Energies - Admin' });
});
router.get('/admin/dashboard', (req, res, next) => {
  res.render('admin/dashboard', { title: 'DGIS Energies - Dashboard' });
});

module.exports = router;
