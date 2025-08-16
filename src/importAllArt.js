function importAllArt(r) {
    return r.keys().map(key => {
      const filenameWithExtension = key.replace('./', '').replace(/\.[^/.]+$/, ''); // Remove './' and file extension
      const parts = filenameWithExtension.split('_'); // Split the filename by underscores
      const filename_name = parts[0] || ''; // Extract the name part
      const filename_medium = parts[1] || ''; // Extract the medium part (like "charcoal", "drawing", etc.)
      const filename_date = parts[2] ? parts[2].replace(/:/g, '/').replace(/-/g, '/') : ''; // Extract the date part and replace colons and hyphens with slashes
      const dateForSorting = parts[2] ? new Date(parts[2].replace(/:/g, '/').replace(/-/g, '/')) : new Date(); // Convert date to Date object for sorting
      return {
        src: r(key),
        name: filename_name,
        medium: filename_medium,
        date: filename_date,
        dateForSorting: dateForSorting
      };
    }).sort((a, b) => a.dateForSorting - b.dateForSorting); // Sort by date
  }
  
  const art = importAllArt(require.context('../public/art', false, /\.(png|jpe?g|svg|HEIC)$/));
  
  export default art; 