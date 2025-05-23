import bookModel from '../models/Books.js';

export const uploadBook = async (req, res) => {
  try {
    const { bookName, authorName, relatedCourseName, bookUpload, bookThumbnail } = req.body;

    // Validation: required fields
    if (!bookName || !authorName || !relatedCourseName || !bookUpload) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    const newBook = await bookModel.create({
      bookName,
      authorName,
      relatedCourseName,
      bookUpload,        // Cloudinary URL from frontend
      bookThumbnail: bookThumbnail || "", // Optional thumbnail
    });

    res.status(201).json({
      status: 'success',
      message: 'Book Uploaded Successfully!',
      data: newBook,
    });
  } catch (error) {
    console.error('Error uploading book:', error);
    res.status(500).json({
      status: 'error',
      message: error.message || 'Something went wrong while uploading!',
    });
  }
};


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
