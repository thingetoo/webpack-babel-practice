import { onArrowDownClick, onArrowUpClick } from '../client/state-functions/overview.state-functions.js'

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
})

describe('Testing on thumbnail on arrow down click', () => {
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

describe('Testing on thumbnail on arrow up click', () => {
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

// describe()