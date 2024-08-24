import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (file: string) => {
  try {
    if (!file) return null;
    const response = await cloudinary.uploader.upload(file, {
      folder: "Notemate/avatar",
    });
    return response;
  } catch (error) {
    return null;
  }
};

export { uploadOnCloudinary };
