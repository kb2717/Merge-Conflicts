import resumeService from "../services/resume.service.js";

export const uploadResume = async (req, res, next) => {
  try {
    res.json(await resumeService.process(req.body));
  } catch (e) { next(e); }
};