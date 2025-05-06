import express from 'express';
import upload from '../utils/fileUpload.js';
import {
  uploadBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook
} from '../controllers/bookController.js';

const router = express.Router();

router.post('/', upload.single('file'), (req, res, next) => {
  console.log('Received file:', req.file);
  console.log('Body:', req.body);
  next();
}, uploadBook);
router.get('/', getAllBooks);
router.get('/:id', getSingleBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;