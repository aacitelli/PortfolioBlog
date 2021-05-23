import React from "react";
import getSlugs from '@utils/getSlugs'
const fs = require("fs")

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
    const baseUrl = {
      development: "http://localhost:3000",
      production: "https://andenacitelli.com",
    }[process.env.NODE_ENV];
  
    const staticPages = fs
      .readdirSync("pages")
      .filter((staticPage) => {
        return ![
          "_app.js",
          "_document.js",
          "_error.js",
          "sitemap.xml.js",
          "blog.js"
        ].includes(staticPage);
      })
      .map((staticPagePath) => {
        return `${baseUrl}/${staticPagePath}`;
      });

    // Dynamic pages 
    const slugs = ((context) => {
        return getSlugs(context)
      })(require.context('../posts', true, /\.md$/))
    const dynamicPages = slugs.map((dynamicPagePath) => {
        return `${baseUrl}/blog/${dynamicPagePath}`;
    })

    const pages = staticPages.concat(dynamicPages);
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((url) => {
            return `
              <url>
                <loc>${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
          })
          .join("")}
      </urlset>
    `;
  
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  };

export default Sitemap;