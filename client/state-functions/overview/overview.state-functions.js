import axios from 'axios';

export function onArrowDownClick(thumbnails, thumbnailsShown) {
  if (thumbnailsShown[1] < thumbnails.length) {
    const diff = thumbnails.length - thumbnailsShown[1];
      thumbnailsShown = [diff, thumbnailsShown[1] + diff]
  }
  return thumbnailsShown;
}

export function onArrowUpClick(thumbnails, thumbnailsShown) {
  if (thumbnailsShown[0] > 0) {
    const diff = thumbnails.length - thumbnailsShown[0];
      thumbnailsShown = [0, diff]
  }
  return thumbnailsShown;
}

export function onArrowLeftClick(currentThumbnail) {
  const prevThumbnail = currentThumbnail - 1;
  if (currentThumbnail > 0) {
    currentThumbnail = prevThumbnail
  }
  return currentThumbnail;
}

export function onArrowRightClick(currentThumbnail, thumbnails) {
  const nextThumbnail = currentThumbnail + 1;
  if (currentThumbnail < thumbnails.length - 1) {
    currentThumbnail = nextThumbnail
  }
  return currentThumbnail;
}

export async function fetchThumbnails() {
  const productId = 19089
  axios.get(`/product/${productId}/styles`).then(async response => {
    return await response.data
  }).catch(err => console.log(err));
}
Try importing the class's functions and testing them within the testing suite.
