import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'daexycwc7',           // your Cloudinary cloud name
  api_key: '983814875686141',           // replace with your Cloudinary API key
  api_secret: 'j2DASAk5im1oyIwXNd305-9gOBg'      // replace with your Cloudinary API secret
});

export default cloudinary;
