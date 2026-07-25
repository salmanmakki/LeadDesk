const { Router } = require('express');
const { body } = require('express-validator');
const rateLimit = require('express-rate-limit');
const validate = require('../middleware/validate');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

const router = Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: 'Too many attempts. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post(
  '/login',
  authLimiter,
  [
    body('email').isEmail().withMessage('Invalid email address.').normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required.'),
    validate,
  ],
  authController.login
);

router.post('/logout', authController.logout);
router.get('/me', auth, authController.me);

module.exports = router;
