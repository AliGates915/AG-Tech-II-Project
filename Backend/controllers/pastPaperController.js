import PastPaper from '../models/PastPaper.js';

// CREATE
export const uploadPastPaper = async (req, res) => {
  try {
    const { subjectName, courseCode, year, universityName, paperUpload, paperThumbnail, paperUnsolved} = req.body;
    console.log("Request sent to the past paper: ",req.body);

    if (!subjectName || !courseCode || !year || !paperThumbnail || !paperUpload || !paperUnsolved || paperUpload.length === 0) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide all required fields!',
      });
    }

    const newPastPaper = await PastPaper.create({
      subjectName,
      courseCode,
      year,
      universityName,
      paperThumbnail,
      paperUpload,
    });

    res.status(201).json({
      status: 'success',
      message: 'Past Paper Uploaded Successfully!',
      data: newPastPaper,
    });

  } catch (error) {
    console.error('Error uploading past paper:', error);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong while uploading!',
    });
  }
};

// READ ALL
export const getAllPastPapers = async (req, res) => {
  try {
    const papers = await PastPaper.find().sort({ createdAt: -1 });
    
    
    res.status(200).json({
      status: 'success',
      results: papers.length,
      data: papers,
    });

  } catch (error) {
    console.error('Error fetching past papers:', error);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong while fetching!',
    });
  }
};

// READ ONE
export const getSinglePastPaper = async (req, res) => {
  try {

    const { id } = req.params;
    const paper = await PastPaper.findById(id);
  
    if (!paper) {
      return res.status(404).json({
        status: 'fail',
        message: 'Past paper not found!',
      });
    }

    res.status(200).json({
      status: 'success',
      data: paper,
    });
  
  } catch (error) {
    console.error('Error fetching past paper:', error);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong while fetching!',
    });
  }
};

// UPDATE
export const updatePastPaper = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedPaper = await PastPaper.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPaper) {
      return res.status(404).json({
        status: 'fail',
        message: 'Past paper not found for update!',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Past Paper Updated Successfully!',
      data: updatedPaper,
    });

  } catch (error) {
    console.error('Error updating past paper:', error);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong while updating!',
    });
  }
};

// DELETE
export const deletePastPaper = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPaper = await PastPaper.findByIdAndDelete(id);

    if (!deletedPaper) {
      return res.status(404).json({
        status: 'fail',
        message: 'Past paper not found for delete!',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Past Paper Deleted Successfully!',
    });

  } catch (error) {
    console.error('Error deleting past paper:', error);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong while deleting!',
    });
  }
};


// Get recently uploaded past papers
export const getRecentPapers = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 6;  // fetch latest 6 by default
    const recentPapers = await PastPaper.find().sort({ createdAt: -1 }).limit(limit);

    res.status(200).json({
      status: "success",
      results: recentPapers.length,
      data: recentPapers,
    });

  } catch (error) {
    console.error("Error fetching recent past papers", error);
    res.status(500).json({ message: error.message });
  }
};

// SEARCH
export const searchPastPapers = async (req, res) => {
  try {
    const { subjectName, courseCode, year } = req.query;

    // Build dynamic filter
    let query = {};
    if (subjectName) {
      query.subjectName = { $regex: new RegExp(subjectName, 'i') }; // case-insensitive
    }
    if (courseCode) {
      query.courseCode = { $regex: new RegExp(courseCode, 'i') };
    }
    if (year) {
      query.year = { $regex: new RegExp(year, 'i') };
    }

    const results = await PastPaper.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      status: 'success',
      results: results.length,
      data: results,
    });

  } catch (error) {
    console.error('Error searching past papers:', error);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong during search!',
    });
  }
};

