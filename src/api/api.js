import axios from "./config";

export const getAllFolder = () => {
  return axios.get("me/projects");
};

export const getAllVideosByFolderId = projectId => {
  return axios.get(`me/projects/${projectId}/videos`);
};
