import api from "./api";

export const createApplication = (data) =>
  api.post("/applications", data);

export const getApplications = () =>
  api.get("/applications");