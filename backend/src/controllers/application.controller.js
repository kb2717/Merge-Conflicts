// src/controllers/application.controller.js

export const createApplication = async (req, res) => {
  try {
    res.status(201).json({
      message: "Application created (dummy response)",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    res.status(200).json({
      message: "Application status updated (dummy response)",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserApplications = async (req, res) => {
  try {
    res.status(200).json([]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};