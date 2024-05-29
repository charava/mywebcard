// importAll.js
function importAll(r) {
    return r.keys().map(key => {
      const filenameWithExtension = key.replace('./', '').replace(/\.[^/.]+$/, ''); // Remove './' and file extension
      const filename = filenameWithExtension.split('_')[0]; // Take only the part before the underscore
      return {
        src: r(key),
        filename: filename
      };
    });
  }
  
  const images = importAll(require.context('../public/face-drawings', false, /\.(png|jpe?g|svg)$/));
  
  export default images;
  