const ImageService = {}

ImageService.init = () => {
  if (localStorage.getItem('images') === null) {
    localStorage.setItem('images', JSON.stringify([]));
  }
}

ImageService.getImages = () => {
  const imageArrayString = localStorage.getItem('images');
  const imageArray = JSON.parse(imageArrayString);
  return imageArray;
}

ImageService.saveImage = (url, timestamp) => {
  const newImage = { url, timestamp };
  const oldImages = ImageService.getImages();

  oldImages.unshift(newImage);

  localStorage.setItem('images', JSON.stringify(oldImages));
  return oldImages;
}

export default ImageService;