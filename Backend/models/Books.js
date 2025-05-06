import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: [true, 'Subject Name is required'],
  },
  authorName: {
    type: String,
    required: [true, 'Course Code is required'],
  },
  relatedCourseName: {
    type: String,
  },
  bookUpload: {
    type: [String], // Array of Cloudinary URLs
    required: [true, 'At least one paper must be uploaded'],
  },
  bookThumbnail: {
    type: String, // Array of Cloudinary URLs
   
  },
}, { timestamps: true });

const bookModel = mongoose.model('Books', bookSchema);

export default bookModel;