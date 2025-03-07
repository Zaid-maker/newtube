/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://newtube-cyan.vercel.app/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "ia_archiver",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/private/"],
      },
    ],
  },
};
