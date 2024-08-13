const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Define your routes here
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/faces', changefreq: 'weekly', priority: 0.8 },
  { url: '/photos', changefreq: 'weekly', priority: 0.8 },
  { url: '/press', changefreq: 'weekly', priority: 0.8 },
  { url: '/books', changefreq: 'weekly', priority: 0.8 },
  { url: '/quotes', changefreq: 'weekly', priority: 0.8 },
  { url: '/questions', changefreq: 'weekly', priority: 0.8 },
  { url: '/archive', changefreq: 'weekly', priority: 0.8 },
  // Add more URLs if needed
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://www.charlotterosario.com' }); // Replace with your domain

// Return a promise that resolves with your XML string
streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    // Write the sitemap to a file
    fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), data.toString());
    console.log('Sitemap generated successfully!');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });
