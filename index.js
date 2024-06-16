let images = [
  {
    id: 0,
    image_url: "/assets/images/white-room.jpg",
    thumbnail_url: "/assets/images/white-room.jpg",
    caption:
      "🏡 Just moved into this stunning modern room! Loving the minimalist vibes. #ModernLiving #HomeSweetHome",
  },
  {
    id: 1,
    image_url: "/assets/images/chineese-house.jpg",
    thumbnail_url: "/assets/images/chineese-house.jpg",
    caption:
      "🏠 Exploring traditional Chinese architecture today. Can't get enough of the intricate details! #TravelDiaries #ArchitectureLovers",
  },
  {
    id: 2,
    image_url: "/assets/images/glass-building.jpg ",
    thumbnail_url: "/assets/images/glass-building.jpg ",
    caption:
      "🏢 This glass building is a masterpiece of modern design. Reflecting the cityscape in every corner! #UrbanArchitecture #SkyscraperViews",
  },
  {
    id: 3,
    image_url: "/assets/images/dom-hill.jpg",
    thumbnail_url: "/assets/images/dom-hill.jpg",
    caption:
      "🏞️ Feeling on top of the world with this hilltop view! Nature at its finest. #ScenicViews #OutdoorAdventure",
  },
  {
    id: 4,
    image_url: "/assets/images/lady-with-jacket.jpg",
    thumbnail_url: "/assets/images/lady-with-jacket.jpg",
    caption:
      "👩‍🎤 Rocking this jacket and feeling fierce! Ready to conquer the day. #Fashionista #OOTD",
  },
  {
    id: 5,
    image_url: "/assets/images/ivana-cajina.jpg",
    thumbnail_url: "/assets/images/ivana-cajina.jpg",
    caption:
      "📸 Capturing memories with every click. Cherishing moments that last a lifetime. #PhotographyPassion #MemoriesMade",
  },
  {
    id: 6,
    image_url: "/assets/images/corey-saldana.jpg",
    thumbnail_url: "/assets/images/corey-saldana.jpg",
    caption:
      "🎶 Music vibes with Corey Saldana. Let the rhythm take you to new heights! #MusicLover #LivePerformance",
  },
  {
    id: 7,
    image_url: "/assets/images/corey-saldana-club-shot.jpg",
    thumbnail_url: "/assets/images/corey-saldana-club-shot.jpg",
    caption:
      "🎉 Saturday night fever with Corey Saldana at the club. Dance floor magic! #Nightlife #DanceParty",
  },
  {
    id: 8,
    image_url: "/assets/images/daniel-nyman.jpg",
    thumbnail_url: "/assets/images/daniel-nyman.jpg",
    caption:
      "🏃‍♂️ Keeping fit and feeling great with Daniel Nyman. Health is wealth! #FitnessGoals #HealthyLiving",
  },
  {
    id: 9,
    image_url: "/assets/images/camera.jpg",
    thumbnail_url: "/assets/images/camera.jpg",
    caption:
      "📷 Behind the lens capturing moments. Every picture tells a story. #PhotographerLife #VisualStorytelling",
  },
  {
    id: 10,
    image_url: "/assets/images/jessica-felicio.jpg",
    thumbnail_url: "/assets/images/jessica-felicio.jpg",
    caption:
      "💃 Jessica Felicio bringing elegance and grace. Dance like nobody's watching! #DanceArt #GracefulMoves",
  },
  {
    id: 11,
    image_url: "/assets/images/caleb-lucas.jpg",
    thumbnail_url: "/assets/images/caleb-lucas.jpg",
    caption:
      "🎨 Expressing creativity with Caleb Lucas. Art speaks where words are unable to explain. #ArtisticExpression #CreativeFlow",
  },
  {
    id: 12,
    image_url: "/assets/images/ian-roseboro.jpg",
    thumbnail_url: "/assets/images/ian-roseboro.jpg",
    caption:
      "🎭 Embracing the stage with Ian Roseboro. Acting is living truthfully under imaginary circumstances. #TheaterLife #ActorVibes",
  },
  {
    id: 13,
    image_url: "/assets/images/divine-effiong.jpg",
    thumbnail_url: "/assets/images/divine-effiong.jpg",
    caption:
      "🌟 Divine Effiong shining bright like a star. Embracing uniqueness and spreading positivity. #Inspiration #ShineOn",
  },
];

let activeImageIndex = 0; // Track the index of the currently active image

const renderImageGrid = () => {
  let imageGridContainer = document.querySelector(".image-grid-container");

  let html = images
    .map(
      (image) => `
      <img
        src="${image.thumbnail_url}"
        class="gallery-image cursor-pointer hover:scale-105 transition-ease-in-out duration-100 rounded-xl"
        alt="${image.caption}"
        onclick="showLightBox(${image.id})"
      />
    `
    )
    .join("");

  imageGridContainer.innerHTML = html;
};

const showLightBox = (imageId) => {
  let lightbox = document.querySelector(".lightbox");
  lightbox.classList.remove("hidden");

  document.body.classList.add("overflow-hidden");

  // Find the index of the clicked image
  activeImageIndex = images.findIndex((image) => image.id === imageId);

  // Update the lightbox with the clicked image
  updateLightbox();
};

const updateLightbox = () => {
  let imagePreviewer = document.querySelector(".image-preview-container");
  imagePreviewer.innerHTML = `
    <img
      src="${images[activeImageIndex].image_url}"
      class="rounded-xl object-contain hover:scale-105 transition-ease-in-out duration-100 w-full h-full rounded"
      alt="gallery-image"
    />
    <div class="absolute bottom-0  z-20 w-full flex justify-center items-center">
      <p class="text-white lg:max-w-[70%] bg-black/50 p-2 rounded-lg backdrop-blur-[10px]">${images[activeImageIndex].caption}</p>
    </div>
  `;
};

const closeLightBox = () => {
  let lightbox = document.querySelector(".lightbox");
  lightbox.classList.add("hidden");

  document.body.classList.remove("overflow-hidden");
};

const nextImage = () => {
  activeImageIndex = (activeImageIndex + 1) % images.length; // Move to the next image ... find modulo to start over again if at the last image
  updateLightbox();
};

const previousImage = () => {
  activeImageIndex = (activeImageIndex - 1 + images.length) % images.length; // Move to the previous image
  updateLightbox();
};

const toggleGridColumns = () => {
  let screenSize = window.innerWidth;
  console.log("screen size: ", screenSize);
  let gridContainer = document.querySelector(".image-grid-container");

  // to control the limit of column toggles based on every screen size

  if (screenSize >= 1024) {
    gridContainer.classList.toggle("lg:columns-4");
  }

  if (screenSize >= 768 && screenSize < 1024) {
    gridContainer.classList.toggle("md:columns-3");
  }
  if (screenSize >= 640 && screenSize < 768) {
    gridContainer.classList.toggle("sm:columns-2");
  }
  if (screenSize < 560) {
    gridContainer.classList.toggle("columns-2");
  }
};

const initializeEventListeners = () => {
  let closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", closeLightBox);

  let nextButton = document.querySelector(".next-button");
  nextButton.addEventListener("click", nextImage);

  let previousButton = document.querySelector(".previous-button");
  previousButton.addEventListener("click", previousImage);

  let toggleButton = document.querySelector(".toggle-column-btn");
  toggleButton.addEventListener("click", toggleGridColumns);
};

renderImageGrid();
initializeEventListeners();
