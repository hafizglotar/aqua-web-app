/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s3.amazonaws.com'], // Allow images from Amazon S3
    },
};  
export default nextConfig;
  