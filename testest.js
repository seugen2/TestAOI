
let folderId = '14fy6nEbx4H82SKoZA6zdIb_uqBtrM8C6'

function getFrameUrls(folderId) {
    try {
      const folder = DriveApp.getFolderById(folderId);
      const files = folder.getFiles();
      const urls = [];
  
      while (files.hasNext()) {
        const file = files.next();
        if (file.getMimeType().startsWith("image/")) {
          urls.push(file.getDownloadUrl());
        }
      }
      console.log(urls)
      return urls.sort(); // Sort for proper frame sequence
      console.log(urls)
    } catch (e) {
      Logger.log("Error fetching frames: " + e.message);
      return [];
    }
  }

  getFrameUrls()

  