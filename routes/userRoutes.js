import express from 'express';

import {
  getAllUsers,
  getUser,
  newUser,
  updateUser,
  deleteUser,
} from '../controller/adminController.js';

const router = express.Router();
router.route('/').get(getAllUsers).post(newUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export default router;
