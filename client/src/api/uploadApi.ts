import axios from "axios";

const API = "http://localhost:5000/api/upload";

export const uploadPDF = async (file: File) => {
  const formData = new FormData();

  formData.append("pdf", file);

  const response = await axios.post(API, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};