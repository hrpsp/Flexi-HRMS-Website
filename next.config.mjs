/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow the Flexi logo SVG through next/image. Safe because we only
    // serve local, author-controlled SVGs from /public/brand/.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
