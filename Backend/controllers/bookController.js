import bookModel from '../models/Books.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

export const uploadBook = async (req, res) => {
  try {
    const { bookName, authorName, relatedCourseName } = req.body;
    const file = req.file;

    if (!file || !bookName || !authorName || !relatedCourseName) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    const fileUrl = `/uploads/books/${file.filename}`;
    console.log("File URL:", fileUrl);

    const newBook = await bookModel.create({
      bookName,
      authorName,
      relatedCourseName,
      bookUpload: fileUrl,
      bookThumbnail: "",
    });

    res.status(201).json({
      status: 'success',
      message: 'Book Uploaded Successfully!',
      data: newBook,
    });
  } catch (error) {
    console.error('File upload error:', error);
    res.status(500).json({ message: error.message });
  }
};


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Get All Books
export const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find();

    // Base URL: change this to match your actual server + port
    const serverUrl = `${req.protocol}://${req.get('host')}`;

    // Update bookUpload field to contain the full URL for the PDFs
    const updatedBooks = books.map(book => {
      // Ensure book.bookUpload is an array (if not, convert it to an array)
      const bookUploads = Array.isArray(book.bookUpload) ? book.bookUpload : [book.bookUpload];

      const pdfUrls = bookUploads.map(filePath => {
        // Concatenate base URL with file path
        return `${serverUrl}${filePath}`;
      });

      return {
        ...book._doc,
        bookUpload: pdfUrls
      };
    });

    res.status(200).json({
      status: 'success',
      results: updatedBooks.length,
      data: updatedBooks
    });
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: error.message });
  }
};

// Get Single Book by ID
export const getSingleBook = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Book by ID
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Book by ID
export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await bookModel.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//Get recently uploaded books

export const getRecentBooks= async(req,res)=>{
  try{
    const limit = parseInt(req.query.limit) || 8;  //fetch latest 8 by default
    const recentBooks = await bookModel.find().sort({createdAt:-1}).limit(limit)

    const serverUrl = `${req.protocol}://${req.get('host')}`;
    const updatedBooks = recentBooks.map(book=>{
      const bookUploads = Array.isArray(book.bookUpload) ? book.bookUpload : [book.bookUpload];
      const pdfUrls = bookUploads.map(filePath=> `${serverUrl}${filePath}`);
      return{
        ...book._doc,
        bookUpload:pdfUrls
      }
    })

    res.status(200).json({
      status:"success",
      results:updatedBooks.length,
      data:updatedBooks
    })


  }catch(error){
    console.error("Error fetching recent books",error);
    res.send(500).json({message:error.message})
  }
}