/* eslint-disable no-undef */
import { onArrowDownClick, onArrowUpClick, onArrowLeftClick, onArrowRightClick } from '../client/state-functions/overview/overview.state-functions.js'


describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
})

describe('On thumbnail on arrow down click', () => {
  test('increases the thumbnails shown state if the length is greater than 7', () => {
    const thumbnailsShown = [0, 7];
    const thumbnails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const finState = onArrowDownClick(thumbnails, thumbnailsShown);
    expect(finState).toEqual([3, 10])
  })

  test('wont change the thumbnails shown state if there are 7 or less of them', () => {
    const thumbnailsShown = [0, 7];
    const thumbnails = [1, 2, 3, 4, 5, 6, 7];

    const finState = onArrowDownClick(thumbnails, thumbnailsShown);
    expect(finState).toEqual([0, 7])
  })
})

describe('On thumbnail arrow up click', () => {
  test('decrease the thumbnails shown state if the starting index is greater than 0', () => {
    const thumbnailsShown = [1, 8];
    const thumbnails = [1, 2, 3, 4, 5, 6, 7, 8];

    const finState = onArrowUpClick(thumbnails, thumbnailsShown);
    expect(finState).toEqual([0, 7])
  })

  test('wont change the thumbnails shown state if the first 7 or less are being displayed', () => {
    const thumbnailsShown = [0, 7];
    const thumbnails = [1, 2, 3, 4, 5, 6, 7];

    const finState = onArrowDownClick(thumbnails, thumbnailsShown);
    expect(finState).toEqual([0, 7])
  })
})

describe('On main image right click', () => {
  test('will increment the current image index by one as long as there are images available', () => {
    const currentImage = 0;
    const thumbnails = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8'];

    const finState = onArrowRightClick(currentImage, thumbnails);

    expect(thumbnails[finState]).toEqual('img2')
  })

  test('will not increment to the next image if there are no more images', () => {
    const currentImage = 7;
    const thumbnails = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8'];

    const finState = onArrowRightClick(currentImage, thumbnails);

    expect(thumbnails[finState]).toEqual('img8')
  })
})

describe('On main image left click', () => {
  test('will increment the current image index by one as long as there are images available', () => {
    const currentImage = 1;
    const thumbnails = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8'];

    const finState = onArrowLeftClick(currentImage, thumbnails);

    expect(thumbnails[finState]).toEqual('img1')
  })

  test('will not increment to the previous image if there are no more images', () => {
    const currentImage = 0;
    const thumbnails = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8'];

    const finState = onArrowLeftClick(currentImage, thumbnails);

    expect(thumbnails[finState]).toEqual('img1')
  })
})
