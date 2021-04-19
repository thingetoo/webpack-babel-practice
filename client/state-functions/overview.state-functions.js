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

