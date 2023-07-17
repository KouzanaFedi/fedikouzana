import { getAllProjectsAlias } from "@/cms";
import { DOMAIN_NAME } from "../utils/settings";

function generateSiteMap(aliasList: { alias: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${DOMAIN_NAME}</loc>
       <changefreq>monthly</changefreq>
       <priority>1</priority>
     </url>
     <url>
       <loc>${DOMAIN_NAME}projects</loc>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     ${aliasList
       .map(({ alias }) => {
         return `
       <url>
           <loc>${`${DOMAIN_NAME}projects/${alias}`}</loc>
           <changefreq>monthly</changefreq>
           <priority>0.6</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const aliasList = await getAllProjectsAlias();
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(aliasList);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
