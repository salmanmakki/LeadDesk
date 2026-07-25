const { Router } = require('express');
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const leadController = require('../controllers/leadController');

const router = Router();

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required.').escape(),
    body('email').isEmail().withMessage('Invalid email address.').normalizeEmail(),
    body('budget')
      .trim()
      .isIn(['Under $1,000', '$1,000–$5,000', '$5,000–$10,000', 'Over $10,000'])
      .withMessage('Please select a valid budget range.'),
    body('message').trim().isLength({ max: 1000 }).withMessage('Message cannot exceed 1000 characters.').escape(),
    validate,
  ],
  leadController.createLead
);

router.get('/', auth, leadController.getLeads);
router.get('/stats', auth, leadController.getLeadStats);
router.patch('/:id/status', auth, leadController.updateLeadStatus);

module.exports = router;
