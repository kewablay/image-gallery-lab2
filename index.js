let images = [
  {
    image_url: "/assets/images/white-room.jpg",
    thumbnail_url: "/assets/images/white-room.jpg",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
  {
    image_url: "/assets/images/chineese-house.jpg",
    thumbnail_url: "/assets/images/chineese-house.jpg",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
  {
    image_url: "/assets/images/glass-building.jpg ",
    thumbnail_url: "/assets/images/glass-building.jpg ",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
  {
    image_url: "/assets/images/dom-hill.jpg",
    thumbnail_url: "/assets/images/dom-hill.jpg",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
  {
    image_url: "/assets/images/lady-with-jacket.jpg",
    thumbnail_url: "/assets/images/lady-with-jacket.jpg",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
  {
    image_url: "/assets/images/ivana-cajina.jpg",
    thumbnail_url: "/assets/images/ivana-cajina.jpg",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
  {
    image_url: "/assets/images/corey-saldana.jpg",
    thumbnail_url: "/assets/images/corey-saldana.jpg",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
  {
    image_url: "/assets/images/corey-saldana-club-shot.jpg",
    thumbnail_url: "/assets/images/corey-saldana-club-shot.jpg",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
  {
    image_url: "/assets/images/daniel-nyman.jpg",
    thumbnail_url: "/assets/images/daniel-nyman.jpg",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
  {
    image_url: "/assets/images/camera.jpg",
    thumbnail_url: "/assets/images/camera.jpg",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
  {
    image_url: "/assets/images/jessica-felicio.jpg",
    thumbnail_url: "/assets/images/jessica-felicio.jpg",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
  {
    image_url: "/assets/images/caleb-lucas.jpg",
    thumbnail_url: "/assets/images/caleb-lucas.jpg",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
  {
    image_url: "/assets/images/ian-roseboro.jpg",
    thumbnail_url: "/assets/images/ian-roseboro.jpg",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
  {
    image_url: "/assets/images/divine-effiong.jpg",
    thumbnail_url: "/assets/images/divine-effiong.jpg",
    caption:
      "This is an aesthetic design of a modern room based on ultramodern architecture.",
  },
];

const renderImageGrid = () => {
  let imageGridContainer = document.querySelector(".image-grid-container");

  let html = images
    .map(
      (image) => `
      <img
        src="${image.thumbnail_url}"
        class="gallery-image hover:scale-105 transition-ease-in-out duration-100 rounded-xl"
        alt="${image.alt}"
      />
    `
    )
    .join("");

  imageGridContainer.innerHTML = html;
};

renderImageGrid();
