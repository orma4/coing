const catchAsync = require("../utils/catchAsync");
const fetch = require("node-fetch");

const getImages = catchAsync(async (req, res) => {
  const photosResponse = await fetch(
    "https://my-json-server.typicode.com/coing-dev/photo-api/photos"
  );
  const photos = await photosResponse.json();
  const imagesResponse = await fetch(
    "https://my-json-server.typicode.com/coing-dev/photo-api/images"
  );
  const images = await imagesResponse.json();

  const response = [
    ...photos[0].map(({ albumId, id, title, url }) => ({
      id: `${albumId}${id}`,
      title,
      src: url,
    })),
    ...images[0].map(({ albumId, id, title, path }) => ({
      id: `${albumId}${id}`,
      title,
      src: path,
    })),
  ];
  res.send(response);
});

module.exports = {
  getImages,
};
