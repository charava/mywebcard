// importAll.js
function importAllPhotos(r) {
    return r.keys().map(key => {
      const filenameWithExtension = key.replace('./', '').replace(/\.[^/.]+$/, ''); // Remove './' and file extension
      const filename = filenameWithExtension.split('_')[0]; // Take only the part before the underscore
      return {
        src: r(key),
        filename: filename
      };
    });
  }
  
  const photos = importAllPhotos(require.context('../public/photo-blog', false, /\.(png|jpe?g|svg)$/));
  
  export default photos;
  