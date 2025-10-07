// EmailJS Configuration (hidden from public view)
const EMAIL_CONFIG = {
  serviceId: 'service_1rymofk',
  contactTemplateId: 'template_6zifgrc',
  purchaseTemplateId: 'template_dbu6vef',
  recipientEmail: 'info@artesiadesigns.com'
};

// Check if EmailJS is loaded
function checkEmailJSAvailability() {
  if (typeof emailjs === 'undefined') {
    console.error('EmailJS library is not loaded');
    return false;
  }
  return true;
}

// Batch loading for featured artwork images
function implementFeaturedArtworkBatchLoading() {
  const artworkGrid = document.querySelector('.featured-work .artwork-grid');
  if (!artworkGrid) return;
  
  const artworks = artworkGrid.querySelectorAll('.artwork img');
  const batchSize = 2;
  let currentBatch = 0;
  
  function loadNextBatch() {
    const start = currentBatch * batchSize;
    const end = start + batchSize;
    
    for (let i = start; i < end && i < artworks.length; i++) {
      const img = artworks[i];
      
      // Add fade-in effect
      img.style.transition = 'opacity 0.5s ease';
      img.style.opacity = '0';
      
      // Create a new image to preload
      const tempImg = new Image();
      tempImg.onload = () => {
        img.style.opacity = '1';
      };
      tempImg.onerror = () => {
        img.style.opacity = '1'; // Show even if failed to load
      };
      
      // Start loading
      tempImg.src = img.src;
    }
    
    currentBatch++;
    
    // Load next batch after a delay if there are more images
    if (end < artworks.length) {
      setTimeout(loadNextBatch, 400);
    }
  }
  
  // Start loading first batch
  setTimeout(loadNextBatch, 100);
}

// Product Database
const productsDB = {
  awards: {
    id: 'awards',
    name: 'Award Plaque',
    image: 'images/award1.webp',
    image3: 'images/award2X.webp',
    video: 'https://sumedhkota.github.io/my-videos/Award.mp4',
    extendedDescription: 'Handcrafted with elegance and tradition, our Lippan Art Awards showcase intricate mirror work and clay patterns in a variety of stunning designs. Each piece is a unique fusion of heritage and creativity, making it a truly special token of appreciation and celebration. Perfect for honoring excellence with ethnic charm and artistic flair.',
    size: '16" x 12"',
    price: 350,
    inStock: true
  },
  bansuri: {
    id: 'bansuri',
    name: 'Bansuri',
    image: 'images/bansuri1.webp',
    image2: 'images/bansuri2X.webp',
    video: 'https://sumedhkota.github.io/my-videos/Bansuri.mp4',
    extendedDescription: 'This handcrafted Lippan Art wall piece beautifully blends tradition and rhythm, featuring intricate mirror work and clay detailing inspired by music, the flute, and the lotus. The design evokes a serene, soulful ambiance—symbolizing harmony, divinity, and creative flow—making it a captivating centerpiece for any space.',
    size: '60" x 18"',
    price: 1299,
    inStock: true
  },
  candleholder: {
    id: 'candleholder',
    name: 'Candle Holder',
    image: 'images/candleholder1.webp',
    image2: 'images/candleholder2.webp',
    video: 'https://sumedhkota.github.io/my-videos/CandleHolder.mp4',
    extendedDescription: 'This handcrafted Lippan Art wooden candle holder features an elegant and intricate design with traditional mirror and clay work. Versatile in use, it serves beautifully as a candle holder or a small planter, adding a touch of ethnic charm and warmth to any space. A perfect blend of utility and artistry.',
    size: '14" tall',
    price: 299,
    inStock: true
  },
  dreamscape: {
    id: 'dreamscape',
    name: 'Dreamscape',
    image: 'images/dreamscape1X.webp',
    image2: 'images/dreamscape2.webp',
    video: 'https://sumedhkota.github.io/my-videos/Dreamscape.mp4',
    extendedDescription: 'An enchanting fusion of contemporary flair and ethereal beauty, showcasing lippan art and mirror work adorned with delicate butterflies and flowers on a dreamy canvas.',
    size: '30" x 30"',
    price: 2499,
    inStock: true
  },
  ganesha: {
    id: 'ganesha',
    name: 'Ganesha',
    image: 'images/ganeshaX.webp',
    video: 'https://sumedhkota.github.io/my-videos/Ganesha.mp4',
    extendedDescription: 'This exclusive Lippan Art wall décor is a stunning fusion of tradition and craftsmanship, featuring intricate mirror and clay work adorned with hand-carved Ganeshas in various graceful poses. It radiates divine charm, artistic depth, and cultural richness—making it a timeless centerpiece for any sacred or living space.',
    size: '36" x 18"',
    price: 1299,
    inStock: true
  },
  ganesha2: {
    id: 'ganesha 2',
    name: 'Ganesha 2',
    image: 'images/ganesha2.webp',
    video: 'https://sumedhkota.github.io/my-videos/Ganesha2.mp4',
    extendedDescription: 'A splendid 36-inch masterpiece featuring Lord Ganesha in radiant gold and serene white—symbolizing wisdom, grace, and new beginnings. A divine blend of elegance and spiritual artistry.',
    size: '36" x 36"',
    price: 1299,
    inStock: true
    },
  timelesstraditions: {
    id: 'timelesstraditions',
    name: 'Timeless Traditions',
    image: 'images/timeless_traditions1.webp',
    image2: 'images/timeless_traditions3.webp',
    video: 'https://sumedhkota.github.io/my-videos/TimelessTraditions.mp4',
    extendedDescription: 'A majestic 96x48 Lippan art creation in white and gold, designed to frame your cherished memories at the heart of intricate elegance. With an interchangeable photo feature, it beautifully blends tradition with personal expression.',
    size: '96" x 48"',
    price: "8999 each; Rent: $1499 each/day",
    inStock: true
  },
  gather_glow: {
    id: 'gather_glow',
    name: 'Gather Glow',
    image: 'images/gatherglow1.webp',
    image2: 'images/gatherglow2.webp',
    video: 'https://sumedhkota.github.io/my-videos/GatherGlow.mp4',
    extendedDescription: 'A beautiful pair of wooden Lippan art pieces adorned with intricate mirror work and votive holders—perfect as table runners or wall accents. Designed to add warmth and festive charm to special family gatherings.',
    size: '48" x 10"',
    price: 499,
    inStock: true
  },
  nameplate: {
    id: 'nameplate',
    name: 'Name Plate',
    image: 'images/Name Plate1.webp',
    image2: 'images/Name Plate2.webp',
    video: 'https://sumedhkota.github.io/my-videos/NamePlate.mp4',
    extendedDescription: 'This beautiful round nameplate is handcrafted in traditional Lippan Art, featuring intricate clay and mirror work that adds a touch of ethnic elegance. Personalised and eye-catching, it\'s a perfect way to welcome guests with warmth and artistic flair at your doorstep.',
    size: '12" diameter',
    price: 200,
    inStock: true
  },
  haveli: {
    id: 'haveli',
    name: 'Haveli',
    image: 'images/haveli1.webp',
    image2: 'images/haveli2.webp',
    video: 'https://sumedhkota.github.io/my-videos/Haveli.mp4',
    extendedDescription: 'Embracing heritage with grace, a traditional lippan art and mirror work wall piece on a pristine white canvas, featuring an inviting aangan framed by intricate jharokha design.',
    size: '30" x 30"',
    price: 2499,
    inStock: true
  },
  jharoka: {
    id: 'jharoka',
    name: 'Jharoka',
    image: 'images/jharoka1X.webp',
    image2: 'images/jharoka2X.webp',
    video: 'https://sumedhkota.github.io/my-videos/Jharoka.mp4',
    extendedDescription: 'Experience the awe-inspiring beauty of this majestic masterpiece, meticulously adorned with captivating lippan art and mirror work. A true celebration of heritage and craftsmanship, its grand scale and intricate detailing make it a flagship statement piece in any living room. Radiating cultural richness and artistic elegance, this wall art instantly transforms your space into a gallery of timeless tradition and refined taste.',
    size: '60" x 48"',
    price: 9999,
    inStock: true
  },
  kalasam: {
    id: 'kalasam',
    name: 'Kalasam',
    image: 'images/kalasam1X.webp',
    image2: 'images/kalasam2X.webp',
    video: 'https://sumedhkota.github.io/my-videos/Kalasam.mp4',
    extendedDescription: 'This beautiful Kalasam handcrafted in Lippan Art features intricate clay and mirror work that radiates divine elegance. A perfect blend of tradition and artistry, it makes a graceful addition to any pooja room or festive décor, symbolizing auspiciousness, purity, and spiritual abundance.',
    size: '12" tall',
    price: 499,
    inStock: true
  },
  mandala: {
    id: 'mandala',
    name: 'Mandala',
    image: 'images/Mandala2.webp',
    image2: 'images/Mandala2A.webp',
    video: 'https://sumedhkota.github.io/my-videos/Mandala.mp4',
    extendedDescription: 'A striking art wall piece, blending the timeless elegance of lippan art and the shimmering allure of mirror work against a captivating black backdrop.',
    size: '31" x 25"',
    price: 699,
    inStock: true
  },
  paisely: {
    id: 'paisely',
    name: 'Paisely',
    image: 'images/Paisely.webp',
    video: 'https://sumedhkota.github.io/my-videos/Paisely.mp4',
    extendedDescription: 'This stunning paisley-shaped wall art in a vibrant festive red is adorned with intricate mirror work, capturing the essence of celebration and tradition. Elegant and eye-catching, it adds a rich ethnic charm to any space, making it a perfect piece for festive décor or timeless wall styling.',
    size: '40" x 28"',
    price: 499,
    inStock: true
  },
  rangrasiya: {
    id: 'rangrasiya',
    name: 'Rang Rasiya',
    image: 'images/rang_rasiya1.webp',
    image2: 'images/rang_rasiya2.webp',
    video: 'https://sumedhkota.github.io/my-videos/RangRasiya.mp4',
    extendedDescription: 'Twirl through life in your exquisite and colorful outfit and paint the world with your vibrant spirit. This captivating wall art celebrates that very spirit—full of movement, color, and the joy of self-expression.',
    size: '40" x 28"',
    price: 2499,
    inStock: true
  },
  rangeela: {
    id: 'rangeela',
    name: 'Rangeela',
    image: 'images/Rangeela1.webp',
    image2: 'images/Rangeela2.webp',
    video: 'https://sumedhkota.github.io/my-videos/Rangeela.mp4',
    extendedDescription: 'A vibrant masterpiece adorned with intricate lippan art and dazzling mirror work, capturing the essence of tradition and modernity in a single glance. At its heart lies a radiant central mirror that reflects light and life, adding depth and brilliance to this stunning creation.',
    size: '36" diameter',
    price: 1999,
    inStock: true
  },
  rideaway: {
    id: 'rideaway',
    name: 'Ride Away',
    image: 'images/Ride Away1.webp',
    image2: 'images/Ride Away2.webp',
    video: 'https://sumedhkota.github.io/my-videos/RideAway.mp4',
    extendedDescription: 'This elegant artwork features a majestic horse, beautifully adorned with traditional Lippan art and shimmering mirror work. Symbolizing grace, power, and royalty, it captures the spirit of movement and tradition in a timeless and artistic form—perfect for adding charm and character to any space.',
    size: '25" diameter',
    price: 599,
    inStock: true
  },
  symphony: {
    id: 'symphony',
    name: 'Symphony',
    image: 'images/symphony1.webp',
    image2: 'images/symphony2A.webp',
    video: 'https://sumedhkota.github.io/my-videos/SymphonyX.mp4',
    extendedDescription: 'This grand 4-piece wall art set showcases a harmonious blend of unique designs, each exuding its own charm and elegance. Meticulously handcrafted with intricate detailing, the set comes together as a stunning visual symphony—perfect for elevating any space with a sense of grandeur, tradition, and artistic flair.',
    size: '60" x 24"',
    price: 7999,
    inStock: true
  },
  vaibhavgate: {
    id: 'vaibhavgate',
    name: 'Vaibhav Gate',
    image: 'images/Vaibhav_Gate.webp',
    image2: 'images/Vaibhav_Gate2.webp',
    video: 'https://sumedhkota.github.io/my-videos/VaibhavGate.mp4',
    extendedDescription: 'Step into grandeur through Vaibhav Gate, a majestic entrance that blends tradition with visual splendor. Designed with intricate Lippan artwork, the interplay of earthy clay textures and sparkling mirrors, it creates an illusion of depth and opulence, giving a feel of entering a royal durbar. Inspired by the regal gates of Rajasthan, Vaibhav Gate is not just a passage—it\'s an experience. With every shimmer of mirror and curve of design, it whispers stories of heritage, pride, and celebration.',
    size: '96" x 48"',
    price: 14999,
    inStock: true
  },
  welcomesign: {
    id: 'welcomesign',
    name: 'Hanging Welcome Sign',
    image: 'images/welcome_sign1.webp',
    video: 'https://sumedhkota.github.io/my-videos/WelcomeSign.mp4',
    extendedDescription: 'A cute and endearing hanging welcome piece that radiates warmth and charm, delightfully inviting everyone with its playful elegance and heartfelt appeal.',
    size: '15" x 12"',
    price: 149,
    inStock: true
  }
};

// Create modal if it doesn't exist
function createModal() {
  if (document.querySelector('.product-modal')) return;

  const modal = document.createElement('div');
  modal.className = 'product-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <div class="modal-grid">
        <div class="modal-image">
        </div>
        <div class="modal-details">
          <h2></h2>
          <p class="extended-description"></p>
          <p class="size">Size:</p>
          <p class="price">Price:</p>
          <span class="stock"></span>
          <button class="btn add-to-cart" data-product-id="">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Create fullscreen modal if it doesn't exist
  if (!document.getElementById('fullscreen-modal')) {
    const fullscreenModal = document.createElement('div');
    fullscreenModal.id = 'fullscreen-modal';
    fullscreenModal.className = 'fullscreen-modal';
    fullscreenModal.innerHTML = `
      <div class="fullscreen-content">
        <span class="fullscreen-close">&times;</span>
        <div class="fullscreen-image-container">
          <button class="fullscreen-nav fullscreen-prev"><i class="fas fa-chevron-left"></i></button>
          <img src="" alt="Fullscreen Image" class="fullscreen-image">
          <button class="fullscreen-nav fullscreen-next"><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    `;
    document.body.appendChild(fullscreenModal);

    // Add fullscreen modal event listeners
    const closeBtn = fullscreenModal.querySelector('.fullscreen-close');
    const prevBtn = fullscreenModal.querySelector('.fullscreen-prev');
    const nextBtn = fullscreenModal.querySelector('.fullscreen-next');

    closeBtn.addEventListener('click', closeFullscreenModal);
    // Navigation handled by individual modal instances
  }

  return modal;
}

// Product modal functionality

function openProductModal(product) {
  const modal = document.querySelector('.product-modal') || createModal();
  if (!modal) return;

  const modalContent = modal.querySelector('.modal-content');
  const modalImage = modal.querySelector('.modal-image');
  const modalDetails = modal.querySelector('.modal-details');

  // Clear previous content
  modalImage.innerHTML = '';

  // Set up media array for navigation
  const mediaArray = [];
  mediaArray.push({ type: 'image', src: product.image });
  if (product.image2) mediaArray.push({ type: 'image', src: product.image2 });
  if (product.image3) mediaArray.push({ type: 'image', src: product.image3 });
  if (product.video) mediaArray.push({ type: 'video', src: product.video });

  let currentMediaIndex = 0;

  // Navigation handlers (defined once outside the update function)
  function goToPrev() {
    const newIndex = (currentMediaIndex - 1 + mediaArray.length) % mediaArray.length;
    updateModalMedia(newIndex);
  }

  function goToNext() {
    const newIndex = (currentMediaIndex + 1) % mediaArray.length;
    updateModalMedia(newIndex);
  }

  function updateModalMedia(index) {
    // Add fade transition
    modalImage.style.transition = 'opacity 0.3s ease';
    modalImage.style.opacity = '0.3';
    
    setTimeout(() => {
      // Clear previous content
      modalImage.innerHTML = '';
      const media = mediaArray[index];
      currentMediaIndex = index;

    if (media.type === 'video') {
      // Show loading spinner
      const loadingSpinner = document.createElement('div');
      loadingSpinner.className = 'modal-loading';
      loadingSpinner.innerHTML = '<div class="loading-spinner"></div>';
      modalImage.appendChild(loadingSpinner);
      
      // Create video element
      const video = document.createElement('video');
      video.src = media.src;
      video.controls = true;
      video.muted = true; // Mute all modal videos
      video.autoplay = true;
      // Disable audio controls specifically
      video.addEventListener('loadedmetadata', () => {
        video.muted = true;
        // Remove audio track if possible
        if (video.audioTracks) {
          for (let i = 0; i < video.audioTracks.length; i++) {
            video.audioTracks[i].enabled = false;
          }
        }
      });
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.objectFit = 'cover';
      video.style.background = '#f9f7f5';
      video.style.borderRadius = '12px';
      video.style.setProperty('border-radius', '12px', 'important');
      
      // Hide loading spinner when video loads
      video.addEventListener('loadeddata', () => {
        loadingSpinner.remove();
      });
      
      video.addEventListener('error', () => {
        loadingSpinner.remove();
      });
      
      // Force video to load
      video.load();
      
      modalImage.appendChild(video);
      
      video.addEventListener('click', () => {
        openFullscreenModal(product, mediaArray, index);
      });
      
      // Add fullscreen hover text for videos
      const fullscreenText = document.createElement('p');
      fullscreenText.textContent = 'Click to view in fullscreen';
      fullscreenText.className = 'vimeo-fullscreen-text';
      fullscreenText.addEventListener('click', (e) => {
        e.stopPropagation();
        openFullscreenModal(product, mediaArray, index);
      });
      modalImage.appendChild(fullscreenText);
    } else {
      // Show loading spinner
      const loadingSpinner = document.createElement('div');
      loadingSpinner.className = 'modal-loading';
      loadingSpinner.innerHTML = '<div class="loading-spinner"></div>';
      modalImage.appendChild(loadingSpinner);
      
      // Create image element
      const img = document.createElement('img');
      img.alt = product.name;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      img.style.display = 'block';
      img.style.opacity = '0';
      img.style.position = 'absolute';
      img.style.top = '0';
      img.style.left = '0';
      img.style.borderRadius = '12px';
      img.style.setProperty('border-radius', '12px', 'important');
      
      // Force image to load and show immediately
      img.onload = () => {
        loadingSpinner.remove();
        img.style.opacity = '1';
        console.log('Modal image loaded:', media.src);
      };
      img.onerror = () => {
        loadingSpinner.remove();
        console.error('Failed to load modal image:', media.src);
      };
      img.src = media.src;
      
      modalImage.appendChild(img);
      
      img.addEventListener('click', () => {
        openFullscreenModal(product, mediaArray, index);
      });

      // Add fullscreen hover text for images
      const fullscreenText = document.createElement('p');
      fullscreenText.textContent = 'Click to view in fullscreen';
      fullscreenText.addEventListener('click', () => {
        openFullscreenModal(product, mediaArray, index);
      });
      modalImage.appendChild(fullscreenText);
    }

    // Add navigation buttons if there are multiple media items
    if (mediaArray.length > 1) {
      const prevBtn = document.createElement('button');
      prevBtn.className = 'modal-nav modal-prev';
      prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
      prevBtn.style.zIndex = '20';
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToPrev();
      });

      const nextBtn = document.createElement('button');
      nextBtn.className = 'modal-nav modal-next';
      nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
      nextBtn.style.zIndex = '20';
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToNext();
      });

      modalImage.appendChild(prevBtn);
      modalImage.appendChild(nextBtn);
    }
    
    // Fade back in
    setTimeout(() => {
      modalImage.style.opacity = '1';
    }, 50);
    }, 250);
  }

  // Initialize with first media item
  updateModalMedia(0);

  // Update product details
  modalDetails.querySelector('h2').textContent = product.name;
  modalDetails.querySelector('.extended-description').textContent = product.extendedDescription;
  modalDetails.querySelector('.size').innerHTML = `<b>Size:</b> ${product.size}`;
  modalDetails.querySelector('.price').innerHTML = `<b>Price:</b> $${product.price}`;
  modalDetails.querySelector('.add-to-cart').setAttribute('data-product-id', product.id);

  modal.style.display = 'block';
  setTimeout(() => modalContent.classList.add('show'), 10);

  // Add close button functionality
  const closeBtn = modal.querySelector('.close-modal');
  closeBtn.addEventListener('click', closeProductModal);
}

function closeProductModal() {
  const modal = document.querySelector('.product-modal');
  if (!modal) return;
  
  const modalContent = modal.querySelector('.modal-content');
  modalContent.classList.remove('show');
  
  setTimeout(() => {
    modal.style.display = 'none';
    // Clear content to prevent video from playing
    modal.querySelector('.modal-image').innerHTML = '';
  }, 300);
}

function openFullscreenModal(product, mediaArray, currentIndex = 0) {
  const modal = document.getElementById('fullscreen-modal');
  if (!modal) return;

  // Clear previous content
  const content = modal.querySelector('.fullscreen-content');
  content.innerHTML = '';

  // Create image container
  const imageContainer = document.createElement('div');
  imageContainer.className = 'fullscreen-image-container';
  content.appendChild(imageContainer);

  // Create gallery container
  const galleryContainer = document.createElement('div');
  galleryContainer.className = 'fullscreen-gallery';
  content.appendChild(galleryContainer);

  // Add close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'fullscreen-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', closeFullscreenModal);
  content.appendChild(closeBtn);

  let fullscreenCurrentIndex = currentIndex;
  let vimeoPlayer = null;

  // Function to update the fullscreen content
  function updateFullscreenContent(index) {
    // Add fade transition
    imageContainer.style.transition = 'opacity 0.3s ease';
    imageContainer.style.opacity = '0.3';
    
    setTimeout(() => {
      // Clear previous content and player
      imageContainer.innerHTML = '';
      if (vimeoPlayer) {
        vimeoPlayer.destroy();
        vimeoPlayer = null;
      }
      const media = mediaArray[index];
      fullscreenCurrentIndex = index;
    
    if (media.type === 'video') {
      // Show loading spinner
      const loadingSpinner = document.createElement('div');
      loadingSpinner.className = 'fullscreen-loading';
      loadingSpinner.innerHTML = '<div class="loading-spinner"></div>';
      imageContainer.appendChild(loadingSpinner);
      
      // Create video element
      const video = document.createElement('video');
      video.src = media.src;
      video.className = 'fullscreen-video';
      video.controls = true;
      video.muted = true; // Mute all fullscreen videos
      video.autoplay = true;
      // Disable audio controls specifically
      video.addEventListener('loadedmetadata', () => {
        video.muted = true;
        // Remove audio track if possible
        if (video.audioTracks) {
          for (let i = 0; i < video.audioTracks.length; i++) {
            video.audioTracks[i].enabled = false;
          }
        }
      });
      video.style.objectFit = 'cover';
      video.style.background = '#000';
      
      // Hide loading spinner when video loads
      video.addEventListener('loadeddata', () => {
        loadingSpinner.remove();
      });
      
      video.addEventListener('error', () => {
        loadingSpinner.remove();
      });
      
      // Force video to load
      video.load();
      setTimeout(() => {
        video.play().catch(e => console.log('Video play error:', e));
      }, 100);
      
      imageContainer.appendChild(video);
    } else {
      // Show loading spinner
      const loadingSpinner = document.createElement('div');
      loadingSpinner.className = 'fullscreen-loading';
      loadingSpinner.innerHTML = '<div class="loading-spinner"></div>';
      imageContainer.appendChild(loadingSpinner);
      
      // Create image element
      const img = document.createElement('img');
      img.className = 'fullscreen-image';
      img.alt = product.name;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      img.style.display = 'block';
      img.style.opacity = '0';
      
      // Force image to load and show
      img.onload = () => {
        loadingSpinner.remove();
        img.style.opacity = '1';
        console.log('Fullscreen image loaded:', media.src);
      };
      img.onerror = () => {
        loadingSpinner.remove();
        console.error('Failed to load fullscreen image:', media.src);
      };
      img.src = media.src;
      
      imageContainer.appendChild(img);
    }

    // Add navigation buttons
    if (mediaArray.length > 1) {
      const prevBtn = document.createElement('button');
      prevBtn.className = 'fullscreen-nav fullscreen-prev';
      prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newIndex = (fullscreenCurrentIndex - 1 + mediaArray.length) % mediaArray.length;
        updateFullscreenContent(newIndex);
      });

      const nextBtn = document.createElement('button');
      nextBtn.className = 'fullscreen-nav fullscreen-next';
      nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newIndex = (fullscreenCurrentIndex + 1) % mediaArray.length;
        updateFullscreenContent(newIndex);
      });

      imageContainer.appendChild(prevBtn);
      imageContainer.appendChild(nextBtn);
    }

    // Update thumbnails
    updateFullscreenGallery();
    
    // Fade back in
    setTimeout(() => {
      imageContainer.style.opacity = '1';
    }, 50);
    }, 250);
  }

  // Function to update the thumbnails
  function updateFullscreenGallery() {
    galleryContainer.innerHTML = '';
    
    mediaArray.forEach((media, index) => {
      if (media.type === 'video') {
        // Create a video thumbnail with a play icon
        const thumbnail = document.createElement('div');
        thumbnail.className = 'gallery-thumbnail video-thumbnail';
        if (index === fullscreenCurrentIndex) {
          thumbnail.classList.add('active');
        }
        
        const playIcon = document.createElement('i');
        playIcon.className = 'fas fa-play';
        thumbnail.appendChild(playIcon);
        
        thumbnail.addEventListener('click', () => {
          updateFullscreenContent(index);
        });
        
        galleryContainer.appendChild(thumbnail);
      } else {
        // Regular image thumbnail
        const thumbnail = document.createElement('img');
        thumbnail.src = media.src;
        thumbnail.className = 'gallery-thumbnail';
        if (index === fullscreenCurrentIndex) {
          thumbnail.classList.add('active');
        }
        
        thumbnail.addEventListener('click', () => {
          updateFullscreenContent(index);
        });
        
        galleryContainer.appendChild(thumbnail);
      }
    });
  }

  // Initialize with the current media item
  updateFullscreenContent(fullscreenCurrentIndex);

  // Display the modal
  modal.style.display = 'flex';
  modal.classList.add('show');

  // Add keyboard navigation for fullscreen modal
  const handleKeyDown = (e) => {
    if (modal.style.display === 'flex') {
      if (e.key === 'ArrowLeft' && mediaArray.length > 1) {
        const newIndex = (fullscreenCurrentIndex - 1 + mediaArray.length) % mediaArray.length;
        updateFullscreenContent(newIndex);
      } else if (e.key === 'ArrowRight' && mediaArray.length > 1) {
        const newIndex = (fullscreenCurrentIndex + 1) % mediaArray.length;
        updateFullscreenContent(newIndex);
      } else if (e.key === 'Escape') {
        closeFullscreenModal();
      }
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  // Store the handler to remove it later
  modal.keydownHandler = handleKeyDown;
}

function closeFullscreenModal() {
  const modal = document.getElementById('fullscreen-modal');
  if (!modal) return;
  
  modal.classList.remove('show');
  
  // Remove keyboard event listener
  if (modal.keydownHandler) {
    document.removeEventListener('keydown', modal.keydownHandler);
    modal.keydownHandler = null;
  }
  
  setTimeout(() => {
    modal.style.display = 'none';
    modal.querySelector('.fullscreen-content').innerHTML = '';
  }, 300);
}

// Add event listeners when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Optimize hero video loading
  const heroVideo = document.querySelector('.hero-video video, .hero-video iframe');
  if (heroVideo) {
    heroVideo.loading = 'eager';
    heroVideo.preload = 'auto';
  }
  
  // Disable audio controls on all video elements
  function disableAudioControls(video) {
    video.muted = true;
    video.volume = 0;
    
    // Prevent unmuting through user interaction
    video.addEventListener('volumechange', () => {
      if (!video.muted) {
        video.muted = true;
        video.volume = 0;
      }
    });
    
    // Disable audio tracks if available
    video.addEventListener('loadedmetadata', () => {
      video.muted = true;
      video.volume = 0;
      if (video.audioTracks) {
        for (let i = 0; i < video.audioTracks.length; i++) {
          video.audioTracks[i].enabled = false;
        }
      }
    });
  }
  
  // Apply to all video elements on the page
  document.querySelectorAll('video').forEach(disableAudioControls);
  
  // Initialize batch loading for featured artwork
  implementFeaturedArtworkBatchLoading();
  
  // Close modals when clicking outside
  window.addEventListener('click', (e) => {
    const productModal = document.querySelector('.product-modal');
    const fullscreenModal = document.getElementById('fullscreen-modal');
    
    if (e.target === productModal) {
      closeProductModal();
    } else if (e.target === fullscreenModal) {
      closeFullscreenModal();
    }
  });
});





  

// Comprehensive preloading system
function implementComprehensivePreloading() {
  // Create a set to track loaded resources
  const loadedResources = new Set();
  
  // Preload all product images and videos aggressively
  function preloadAllProductMedia() {
    const products = Object.values(productsDB);
    
    // Immediate aggressive preloading for modal content
    function preloadModalContent() {
      products.forEach(product => {
        // Preload all images immediately for modal use
        if (product.image && !loadedResources.has(product.image)) {
          const img = new Image();
          img.loading = 'eager';
          img.src = product.image;
          loadedResources.add(product.image);
        }
        
        if (product.image2 && !loadedResources.has(product.image2)) {
          const img = new Image();
          img.loading = 'eager';
          img.src = product.image2;
          loadedResources.add(product.image2);
        }
        
        // Preload videos immediately
        if (product.video && !loadedResources.has(product.video)) {
          preloadVideo(product.video);
          loadedResources.add(product.video);
        }
      });
    }
    
    // Batch preload in chunks for gallery display
    function preloadBatch(startIndex, batchSize = 3) {
      const endIndex = Math.min(startIndex + batchSize, products.length);
      
      for (let i = startIndex; i < endIndex; i++) {
        const product = products[i];
        
        // Additional preloading for gallery display
        if (product.image && !loadedResources.has(product.image + '_gallery')) {
          const img = new Image();
          img.loading = 'eager';
          img.src = product.image;
          loadedResources.add(product.image + '_gallery');
        }
      }
      
      // Continue with next batch faster
      if (endIndex < products.length) {
        setTimeout(() => preloadBatch(endIndex, batchSize), 50);
      }
    }
    
    // Start immediate modal preloading
    preloadModalContent();
    
    // Start gallery preloading
    preloadBatch(0);
  }
  
  // Enhanced preload function for videos
  function preloadVideo(url) {
    const video = document.createElement('video');
    video.src = url;
    video.preload = 'metadata';
    video.muted = true; // Mute preloaded videos
    video.style.display = 'none';
    
    video.addEventListener('loadedmetadata', () => {
      console.log('Video preloaded:', url);
    });
    
    video.addEventListener('error', () => {
      console.error('Failed to preload video:', url);
    });
    
    document.body.appendChild(video);
    
    // Remove the video element after preloading
    setTimeout(() => {
      if (video.parentNode) {
        video.parentNode.removeChild(video);
      }
    }, 1000);
  }
  
  
  // Start preloading immediately
  preloadAllProductMedia();
  
}

// Initialize product cards
document.addEventListener('DOMContentLoaded', function() {
  // Start comprehensive preloading
  implementComprehensivePreloading();
  // Create modal and set up event listeners
  const modal = createModal();
  const closeBtn = modal.querySelector('.close-modal');

  // Close button click handler
  closeBtn.addEventListener('click', closeProductModal);

  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeProductModal();
    }
  });

  // Close on outside click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeProductModal();
    }
  });

  // Add click handlers to products and artwork
  document.addEventListener('click', function(e) {
    const productCard = e.target.closest('.product, .artwork');
    if (!productCard) return;

    // Don't trigger if clicking add-to-cart or favorite buttons
    if (e.target.classList.contains('add-to-cart') || 
        e.target.classList.contains('favorite-btn') || 
        e.target.closest('.favorite-btn')) {
      return;
    }

    const productId = productCard.dataset.productId;
    const productData = productsDB[productId];
    
    if (productData) {
      openProductModal(productData);
    }
  });

  // Add click handler for modal's Add to Cart button
  modal.querySelector('.add-to-cart').addEventListener('click', function(e) {
    e.stopPropagation();
    const productId = this.dataset.productId;
    if (productId && window.cart) {
      window.cart.addItem(productId);
      
      // Close the modal after adding to cart
      closeProductModal();
    }
  });
});

// Cart functionality
class Cart {
  constructor() {
    this.items = {};
    this.loadFromLocalStorage();
    this.initializeCartUI();
    this.updateCartCount();
  }

  loadFromLocalStorage() {
    const savedCart = localStorage.getItem('artesiaCart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.updateCartCount();
      this.updateCartUI();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('artesiaCart', JSON.stringify(this.items));
  }

  addItem(productId) {
    if (!this.items[productId]) {
      this.items[productId] = {
        quantity: 0,
        ...productsDB[productId]
      };
    }
    this.items[productId].quantity += 1;
    this.saveToLocalStorage();
    this.updateCartUI();
    this.showAddedToCartFeedback();
  }

  removeItem(productId) {
    delete this.items[productId];
    this.saveToLocalStorage();
    this.updateCartUI();
  }

  updateQuantity(productId, delta) {
    const item = this.items[productId];
    if (item) {
      const maxQuantity = 5; // Set maximum quantity
      if (item.quantity + delta > maxQuantity) {
        alert(`You can only add a maximum of ${maxQuantity} of this item.`);
        return; // Exit the function if the limit is exceeded
      }
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.removeItem(productId);
      } else {
        this.saveToLocalStorage();
        this.updateCartUI();
      }
    }
  }

  getTotal() {
    return Object.values(this.items).reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = Object.values(this.items).reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  showAddedToCartFeedback() {
    const feedback = document.createElement('div');
    feedback.className = 'cart-feedback';
    feedback.textContent = 'Added to cart!';
    document.body.appendChild(feedback);

    setTimeout(() => {
      feedback.classList.add('show');
      setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => {
          feedback.remove();
        }, 300);
      }, 2000);
    }, 100);
  }

  updateCartUI() {
    this.updateCartCount();
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItemsContainer.innerHTML = '';
    
    if (Object.keys(this.items).length === 0) {
      // Add empty cart message and shop button
      const emptyCartMessage = document.createElement('div');
      emptyCartMessage.style.textAlign = 'center';
      emptyCartMessage.style.padding = '20px';
      emptyCartMessage.innerHTML = `
        <p style="margin-bottom: 20px">Your cart is empty</p>
        <a href="shop.html" class="btn">Start Shopping</a>
      `;
      cartItemsContainer.appendChild(emptyCartMessage);
      cartTotal.textContent = '$0.00';
      return;
    }
    
    Object.entries(this.items).forEach(([productId, item]) => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <div class="cart-item-price">$${item.price}</div>
          <div class="cart-item-quantity">
            <button class="quantity-btn minus" data-product-id="${productId}">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn plus" data-product-id="${productId}">+</button>
          </div>
        </div>
        <button class="remove-item" data-product-id="${productId}">&times;</button>
      `;
      cartItemsContainer.appendChild(itemElement);
    });
    
    cartTotal.textContent = `$${this.getTotal().toFixed(2)}`;
  }

  initializeCartUI() {
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.querySelector('.close-cart');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cartBtn) {
      cartBtn.addEventListener('click', () => {
        console.log("Cart button clicked");
        cartModal.style.display = 'block';
        setTimeout(() => cartModal.classList.add('show'), 10);
      });
    }

    if (closeCart) {
      closeCart.addEventListener('click', () => {
        cartModal.classList.remove('show');
        setTimeout(() => cartModal.style.display = 'none', 300);
      });
    }

    cartModal.addEventListener('click', (e) => {
      if (e.target === cartModal) {
        cartModal.classList.remove('show');
        setTimeout(() => cartModal.style.display = 'none', 300);
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart')) {
        e.stopPropagation();
        const productId = e.target.closest('.product')?.dataset.productId;
        if (productId) {
          this.addItem(productId);
        }
      }
      
      if (e.target.classList.contains('quantity-btn')) {
        const productId = e.target.dataset.productId;
        const delta = e.target.classList.contains('plus') ? 1 : -1;
        this.updateQuantity(productId, delta);
      }
      
      if (e.target.classList.contains('remove-item')) {
        const productId = e.target.dataset.productId;
        this.removeItem(productId);
      }
    });

    checkoutBtn.addEventListener('click', () => {
      if (Object.keys(this.items).length === 0) {
        alert('Your cart is empty!');
        return;
      }
      
      // Generate cart message for contact form
      let cartMessage = "I would like to purchase these specific items:\n\n";
      let total = 0;
      
      Object.entries(this.items).forEach(([productId, item]) => {
        const itemTotal = item.price * item.quantity;
        cartMessage += `${item.name} - Quantity: ${item.quantity} - Price: $${item.price} each - Subtotal: $${itemTotal}\n`;
        total += itemTotal;
      });
      
      cartMessage += `\nTotal Price: $${total.toFixed(2)}`;
      
      // Store cart message in sessionStorage for the contact page
      sessionStorage.setItem('cartMessage', cartMessage);
      
      // Redirect to contact page
      window.location.href = 'contact.html';
    });
  }
}

// Initialize cart when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  window.cart = new Cart();
  
  // Initialize mobile navigation
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('header nav');
  
  if (mobileNavToggle && nav) {
    mobileNavToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('show');
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !mobileNavToggle.contains(e.target) && nav.classList.contains('show')) {
        nav.classList.remove('show');
        mobileNavToggle.classList.remove('active');
      }
    });
  }
  
  // Prevent right-click and dragging on images
  document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG' && !e.target.closest('.product, .artwork')) {
      e.preventDefault();
    }
  });

  document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG' && !e.target.closest('.product, .artwork')) {
      e.preventDefault();
    }
  });

  // Prevent keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) { // Prevent Ctrl/Cmd + S
      const selection = window.getSelection();
      if (selection.toString().length === 0) {
        e.preventDefault();
      }
    }
  });
  
  // Page Transitions
  requestAnimationFrame(() => {
    document.body.classList.add('fade-in');
  });

  // Handle internal navigation links
  document.querySelectorAll('a').forEach(link => {
    // Only handle internal links
    if (link.href && link.href.startsWith(window.location.origin)) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetHref = this.href;
        
        // Remove fade-in and add fade-out class
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');
        
        // Navigate after transition
        setTimeout(() => {
          window.location.href = targetHref;
        }, 200);
      });
    }
  });
  
  // Initialize products loading
  loadProducts();
  
  // Check if we're on the contact page and auto-fill cart messages
  if (window.location.pathname.includes('contact.html')) {
    const cartMessage = sessionStorage.getItem('cartMessage');
    
    if (cartMessage) {
      const messageTextarea = document.getElementById('message');
      if (messageTextarea) {
        messageTextarea.value = cartMessage;
        sessionStorage.removeItem('cartMessage');
      }
    }
  }
});



// Favorites functionality
class Favorites {
  constructor() {
    this.items = {};
    this.loadFromLocalStorage();
    this.initializeFavoritesUI();
  }

  loadFromLocalStorage() {
    const savedFavorites = localStorage.getItem('artesiaFavorites');
    if (savedFavorites) {
      this.items = JSON.parse(savedFavorites);
      this.updateFavoritesCount();
      this.updateFavoritesUI();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('artesiaFavorites', JSON.stringify(this.items));
  }

  toggleFavorite(productId) {
    console.log(`Toggling favorite for product ID: ${productId}`);
    if (this.items[productId]) {
      delete this.items[productId];
      // Update heart icon in product card
      const productCard = document.querySelector(`.product[data-product-id="${productId}"]`);
      if (productCard) {
        const favoriteBtn = productCard.querySelector('.favorite-btn');
        const heartIcon = favoriteBtn.querySelector('i');
        if (heartIcon) {
          heartIcon.classList.remove('fas');
          heartIcon.classList.add('far');
        }
        favoriteBtn.classList.remove('favorited');
      }
    } else {
      this.items[productId] = {
        ...productsDB[productId]
      };
      // Update heart icon in product card
      const productCard = document.querySelector(`.product[data-product-id="${productId}"]`);
      if (productCard) {
        const favoriteBtn = productCard.querySelector('.favorite-btn');
        const heartIcon = favoriteBtn.querySelector('i');
        if (heartIcon) {
          heartIcon.classList.remove('far');
          heartIcon.classList.add('fas');
        }
        favoriteBtn.classList.add('favorited');
      }
    }
    this.saveToLocalStorage();
    this.updateFavoritesUI();
    this.showFavoritesFeedback(this.items[productId] ? 'Added to favorites!' : 'Removed from favorites!');
    return this.items[productId] !== undefined;
  }

  isFavorite(productId) {
    return this.items[productId] !== undefined;
  }

  updateFavoritesCount() {
    const count = Object.keys(this.items).length;
    const favoritesBtn = document.getElementById('favorites-btn');
    if (favoritesBtn) {
      const icon = favoritesBtn.querySelector('i');
      if (count > 0) {
        icon.classList.remove('far');
        icon.classList.add('fas');
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
      }
    }
  }

  showFavoritesFeedback(message) {
    const feedback = document.createElement('div');
    feedback.className = 'favorites-feedback';
    feedback.textContent = message;
    document.body.appendChild(feedback);

    setTimeout(() => {
      feedback.classList.add('show');
      setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => {
          feedback.remove();
        }, 300);
      }, 2000);
    }, 100);
  }

  updateFavoritesUI() {
    this.updateFavoritesCount();
    const favoritesItemsContainer = document.getElementById('favorites-items');
    if (!favoritesItemsContainer) return;
    
    favoritesItemsContainer.innerHTML = '';
    
    if (Object.keys(this.items).length === 0) {
      const emptyMessage = document.createElement('div');
      emptyMessage.style.textAlign = 'center';
      emptyMessage.style.padding = '20px';
      emptyMessage.innerHTML = `
        <p style="margin-bottom: 20px">Your favorites list is empty</p>
        <a href="shop.html" class="btn">Start Shopping</a>
      `;
      favoritesItemsContainer.appendChild(emptyMessage);
      return;
    }
    
    Object.entries(this.items).forEach(([productId, item]) => {
      const itemElement = document.createElement('div');
      itemElement.className = 'favorite-item';
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="favorite-item-details">
          <h3>${item.name}</h3>
          <div class="favorite-item-price">$${item.price}</div>
        </div>
        <div class="action-buttons">
          <button class="action-btn add-to-cart" data-product-id="${productId}" title="Add to Cart">
            <i class="fas fa-shopping-cart"></i>
          </button>
          <button class="action-btn remove-favorite" data-product-id="${productId}" title="Remove from Favorites">
            <i class="fas fa-times"></i>
          </button>
        </div>
      `;
      favoritesItemsContainer.appendChild(itemElement);
    });

    // Add the "Add All to Cart" button
    const addAllButton = document.createElement('div');
    addAllButton.className = 'add-all-container';
    addAllButton.innerHTML = `
      <button class="btn add-all-to-cart">Add All to Cart</button>
    `;
    favoritesItemsContainer.appendChild(addAllButton);

    // Add event listener for the Add All button
    const addAllToCartBtn = addAllButton.querySelector('.add-all-to-cart');
    addAllToCartBtn.addEventListener('click', () => {
      Object.keys(this.items).forEach(productId => {
        if (window.cart) {
          window.cart.addItem(productId);
        }
      });
    });
  }

  initializeFavoritesUI() {
    const favoritesBtn = document.getElementById('favorites-btn');
    const favoritesModal = document.getElementById('favorites-modal');
    const closeFavorites = document.querySelector('.close-favorites');

    if (favoritesBtn) {
      favoritesBtn.addEventListener('click', () => {
        favoritesModal.style.display = 'block';
        setTimeout(() => favoritesModal.classList.add('show'), 10);
      });
    }

    if (closeFavorites) {
      closeFavorites.addEventListener('click', () => {
        favoritesModal.classList.remove('show');
        setTimeout(() => favoritesModal.style.display = 'none', 300);
      });
    }

    favoritesModal.addEventListener('click', (e) => {
      if (e.target === favoritesModal) {
        favoritesModal.classList.remove('show');
        setTimeout(() => favoritesModal.style.display = 'none', 300);
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart') && e.target.closest('.favorite-item')) {
        e.stopPropagation();
        const productId = e.target.dataset.productId;
        if (productId && window.cart) {
          window.cart.addItem(productId);
        }
      }
      
      if (e.target.classList.contains('remove-favorite')) {
        const productId = e.target.dataset.productId;
        if (productId) {
          this.toggleFavorite(productId);
        }
      }
    });
  }
}

// Initialize favorites when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  window.favorites = new Favorites();
  
  // Add favorite buttons to all products
  document.querySelectorAll('.product').forEach(product => {
    const productId = product.dataset.productId;
    const favoriteBtn = document.createElement('button');
    const isFavorite = window.favorites.isFavorite(productId);
    favoriteBtn.className = `favorite-btn${isFavorite ? ' favorited' : ''}`;
    favoriteBtn.innerHTML = `<i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>`;
    
    // Add the favorite button directly to the product container
    product.appendChild(favoriteBtn);
    
    favoriteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isFavorite = window.favorites.toggleFavorite(productId);
      const icon = favoriteBtn.querySelector('i');
      if (isFavorite) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        favoriteBtn.classList.add('favorited');
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        favoriteBtn.classList.remove('favorited');
      }
    });
  });
});



// Email functionality
document.addEventListener('DOMContentLoaded', function() {
  // Test EmailJS availability on page load
  setTimeout(() => {
    if (checkEmailJSAvailability()) {
      console.log('EmailJS is properly loaded and available');
    } else {
      console.error('EmailJS failed to load - email functionality will not work');
    }
  }, 1000);

  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return; // Only run on contact page

  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');
  
  function showMessage(element, duration = 5000) {
    element.style.display = 'block';
    element.style.opacity = '0';
    element.style.transform = 'translateY(-10px)';
    element.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 10);
    
    setTimeout(() => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        element.style.display = 'none';
      }, 300);
    }, duration);
  }

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!checkEmailJSAvailability()) {
      showMessage(errorMessage);
      return;
    }

    const submitButton = document.getElementById('send-message');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create the email body in the desired format
    const emailBody = `
      Name: ${name}
      Email: ${email}

      Dear Artesia Designs,
      ${message}

      Thank you,
      ${name}
    `;

    const templateParams = {
      user_name: name,
      user_email: email,
      message: emailBody,
      to_name: 'Artesia Designs',
      reply_to: email,
      // Additional common template variables for compatibility
      from_name: name,
      from_email: email,
      to_email: EMAIL_CONFIG.recipientEmail
    };
    
    console.log('Sending email with config:', {
      serviceId: EMAIL_CONFIG.serviceId,
      templateId: EMAIL_CONFIG.templateId,
      recipientEmail: EMAIL_CONFIG.recipientEmail,
      fromEmail: email,
      fromName: name
    });
    
    emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.contactTemplateId,
      templateParams
    )
    .then(function(response) {
      console.log('Email sent successfully:', response);
      showMessage(successMessage);
      contactForm.reset();
    })
    .catch(function(error) {
      console.error('Failed to send email:', error);
              console.error('Error details:', {
          status: error.status,
          text: error.text,
          serviceId: EMAIL_CONFIG.serviceId,
          templateId: EMAIL_CONFIG.contactTemplateId,
          recipientEmail: EMAIL_CONFIG.recipientEmail
        });
      showMessage(errorMessage);
    })
    .finally(function() {
      submitButton.disabled = false;
      submitButton.textContent = 'Send Message';
    });
  });
});

// Chat Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create chat popup elements
  const chatPopupHTML = `
    <button class="chat-trigger" id="chat-trigger">
      <i style="font-size:24px" class="fa">&#xf075;</i>
    </button>
    
    <div class="chat-popup" id="chat-popup">
      <div class="chat-header">
        <p>Send a message</p>
        <h3>How can we help?</h3>
        <p>We usually respond in a few hours</p>
      </div>
      <div class="chat-body">
        <form class="chat-form" id="chat-popup-form">
          <label for="chat-name">Name</label>
          <input type="text" required id="chat-name">
          <label for="chat-email">Email address</label>
          <input type="email" required id="chat-email">
          <label for="chat-message">How can we help?</label>
          <textarea required id="chat-message"></textarea>
          <button type="submit" id="send-message-btn" class="btn">Send a message</button>
        </form>
        <div id="chat-success-message" class="message success" style="display: none;"></div>
        <div id="chat-error-message" class="message error" style="display: none;"></div>
        <a href="https://wa.me/18133601236" target="_blank" class="whatsapp-btn">
          <i class="fab fa-whatsapp"></i>
          Chat via Text
        </a>
      </div>
      <div id="chat-confirmation" class="confirmation" style="display: none;">
        <h2>We have received your message.</h2>
        <p>We usually respond in a few hours.</p>
      </div>
    </div>
  `;

  // Add chat popup to body
  document.body.insertAdjacentHTML('beforeend', chatPopupHTML);

  // Get elements
  const chatTrigger = document.getElementById('chat-trigger');
  const chatPopup = document.getElementById('chat-popup');
  const chatForm = document.getElementById('chat-popup-form');
  const sendMessageBtn = document.getElementById('send-message-btn');
  const successMessage = document.getElementById('chat-success-message');
  const errorMessage = document.getElementById('chat-error-message');
  const confirmationMessage = document.getElementById('chat-confirmation');
  const icon = chatTrigger.querySelector('i'); // Get the icon element

  // Toggle chat popup
  chatTrigger.addEventListener('click', () => {
    const isVisible = chatPopup.classList.toggle('show'); // Toggle the 'show' class to show/hide the popup
    
    // Change the icon based on the popup state
    if (isVisible) {
      icon.innerHTML = '&#xf106;'; // Change to chevron down arrow
      icon.classList.add('rotate'); // Add rotation class
    } else {
      icon.innerHTML = '&#xf075;'; // Change back to message icon
      icon.classList.remove('rotate'); // Remove rotation class
    }
  });

  // Handle chat form submission
  sendMessageBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // Prevent multiple submissions
    if (sendMessageBtn.disabled) {
      return;
    }

    if (!checkEmailJSAvailability()) {
      errorMessage.textContent = 'Email service is not available. Please try again later or contact us directly.';
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
      confirmationMessage.style.display = 'none';
      return;
    }

    // Reset error states
    const inputs = chatForm.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.classList.add('invalid'); // Add invalid class if invalid
        isValid = false;
      } else {
        input.classList.remove('invalid'); // Remove invalid class if valid
      }
    });

    if (!isValid) {
      errorMessage.textContent = 'Please fill in all fields correctly.';
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none'; // Hide success message
      confirmationMessage.style.display = 'none'; // Hide confirmation message
      return; // Prevent form submission
    }

    // Disable button and show loading state
    const originalButtonText = sendMessageBtn.textContent;
    sendMessageBtn.disabled = true;
    sendMessageBtn.textContent = 'Sending...';

    const name = document.getElementById('chat-name').value;
    const email = document.getElementById('chat-email').value;
    const message = document.getElementById('chat-message').value;

    // Create the email body in the desired format
    const emailBody = `
      Name: ${name}
      Email: ${email}

      Dear Artesia Designs,
      ${message}

      Thank you,
      ${name}
    `;

    const templateParams = {
      user_name: name,
      user_email: email,
      message: emailBody,
      to_name: 'Artesia Designs',
      reply_to: email,
      // Additional common template variables for compatibility
      from_name: name,
      from_email: email,
      to_email: EMAIL_CONFIG.recipientEmail,
      subject: 'New Chat Message'
    };

    // Send email using EmailJS
    emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.contactTemplateId, templateParams)
      .then(function(response) {
        console.log('Chat email sent successfully:', response);
        successMessage.textContent = 'Message sent successfully! We will contact you soon.';
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none'; // Hide error message
        chatForm.reset();

        // Show confirmation message with smooth transition
        confirmationMessage.style.display = 'flex';
        confirmationMessage.classList.add('show');
      })
      .catch(function(error) {
        console.error('Failed to send chat email:', error);
        console.error('Chat error details:', {
          status: error.status,
          text: error.text,
          serviceId: EMAIL_CONFIG.serviceId,
          templateId: EMAIL_CONFIG.contactTemplateId,
          recipientEmail: EMAIL_CONFIG.recipientEmail
        });
        errorMessage.textContent = 'Failed to send message. Please try again or contact us directly.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none'; // Hide success message
        confirmationMessage.style.display = 'none'; // Hide confirmation message
      })
      .finally(function() {
        // Re-enable button and restore original text
        sendMessageBtn.disabled = false;
        sendMessageBtn.textContent = originalButtonText;
      });
  });

  // Add focus and blur event listeners for input validation
  const inputs = chatForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.classList.remove('invalid'); // Remove invalid class on focus
    });
  });
});

// Add this after the existing chat popup initialization
document.addEventListener('DOMContentLoaded', function() {
  // Get existing chat elements
  const chatTrigger = document.getElementById('chat-trigger');
  const chatPopup = document.getElementById('chat-popup');
  const icon = chatTrigger?.querySelector('i');

  if (chatTrigger && chatPopup) {
    // Add overlay click handler for mobile
    document.addEventListener('click', function(e) {
      const isMobile = window.innerWidth <= 768;
      if (isMobile && chatPopup.classList.contains('show')) {
        if (!chatPopup.contains(e.target) && !chatTrigger.contains(e.target)) {
          chatPopup.classList.remove('show');
          document.body.classList.remove('chat-open');
          // Reset icon if it exists
          if (icon) {
            icon.innerHTML = '&#xf075;';
            icon.classList.remove('rotate');
          }
        }
      }
    });

    // Modify existing click handler to add body class
    const existingClickHandler = chatTrigger.onclick;
    chatTrigger.onclick = function(e) {
      if (existingClickHandler) existingClickHandler.call(this, e);
      document.body.classList.toggle('chat-open');
    };
  }
});



// Testimonial functionality
document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.testimonial-arrow.prev');
  const nextBtn = document.querySelector('.testimonial-arrow.next');
  const testimonialGrid = document.querySelector('.testimonials-grid');
  let currentIndex = 0;

  function updateTestimonialHeight() {
    const activeTestimonial = document.querySelector('.testimonial.active');
    if (activeTestimonial && testimonialGrid) {
      const height = activeTestimonial.offsetHeight;
      testimonialGrid.style.height = `${height}px`;
    }
  }

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove('active', 'previous');
      if (i === index) {
        testimonial.classList.add('active');
      } else if (i === (index - 1 + testimonials.length) % testimonials.length) {
        testimonial.classList.add('previous');
      }
    });
    updateTestimonialHeight();
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevTestimonial);
    nextBtn.addEventListener('click', nextTestimonial);
  }

  // Show first testimonial and set initial height
  showTestimonial(0);

  // Update height on window resize
  window.addEventListener('resize', updateTestimonialHeight);
});



// Custom Order Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  const customOrderBtn = document.getElementById('custom-order-btn');
  const customOrderModal = document.getElementById('custom-order-modal');
  const closeCustomOrder = document.querySelector('.close-custom-order');
  const customOrderForm = document.getElementById('custom-order-form');

  // Handle "Other" radio button selections
  function handleOtherInputs() {
    // Get all radio button groups that have "other" options
    const radioGroups = ['location', 'shape', 'source'];
    
    radioGroups.forEach(groupName => {
      const radios = document.querySelectorAll(`input[name="${groupName}"]`);
      const otherTextInput = document.querySelector(`input[name="${groupName}-other"]`);
      
      if (otherTextInput) {
        radios.forEach(radio => {
          radio.addEventListener('change', function() {
            if (this.value === 'other' && this.checked) {
              otherTextInput.classList.add('show');
              otherTextInput.focus();
            } else if (otherTextInput.classList.contains('show')) {
              otherTextInput.classList.remove('show');
              otherTextInput.value = '';
            }
          });
        });
      }
    });
  }

  if (customOrderBtn && customOrderModal) {
    // Initialize other input handlers
    handleOtherInputs();
    
    customOrderBtn.addEventListener('click', () => {
      customOrderModal.style.display = 'block';
      setTimeout(() => {
        customOrderModal.querySelector('.custom-order-modal-content').style.transform = 'scale(1)';
        customOrderModal.querySelector('.custom-order-modal-content').style.opacity = '1';
      }, 10);
    });

    closeCustomOrder.addEventListener('click', () => {
      customOrderModal.querySelector('.custom-order-modal-content').style.transform = 'scale(0.7)';
      customOrderModal.querySelector('.custom-order-modal-content').style.opacity = '0';
      setTimeout(() => {
        customOrderModal.style.display = 'none';
      }, 300);
    });

    customOrderModal.addEventListener('click', (e) => {
      if (e.target === customOrderModal) {
        closeCustomOrder.click();
      }
    });



    // Form submission
    customOrderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (!checkEmailJSAvailability()) {
        alert('Email service is not available. Please try again later or contact us directly.');
        return;
      }
      
      // Collect all form data
      const formData = new FormData(customOrderForm);
      const data = {};
      
      // Get all form inputs
      for (let [key, value] of formData.entries()) {
        data[key] = value;
      }
      
      // Build custom order message
      let message = "CUSTOM ORDER REQUEST\n\n";
      message += "CONTACT INFORMATION:\n";
      message += `Name: ${data['custom-name'] || ''}\n`;
      message += `Phone: ${data['custom-phone'] || ''}\n`;
      message += `Email: ${data['custom-email'] || ''}\n`;
      message += `Preferred Contact: ${data['contact-method'] || ''}\n\n`;
      
      message += "INSTALLATION DETAILS:\n";
      message += `Location: ${data['location'] || ''}`;
      if (data['location'] === 'other' && data['location-other']) {
        message += ` - ${data['location-other']}`;
      }
      message += `\nWall Size: ${data['wall-size'] || ''}\n\n`;
      
      message += "DESIGN PREFERENCES:\n";
      message += `Style: ${data['style'] || ''}\n`;
      message += `Color Palette: ${data['color-palette'] || ''}\n`;
      message += `Shape: ${data['shape'] || ''}`;
      if (data['shape'] === 'other' && data['shape-other']) {
        message += ` - ${data['shape-other']}`;
      }
      message += `\n\n`;
      
      message += "TIMELINE & BUDGET:\n";
      message += `Timeline: ${data['timeline'] || ''}\n`;
      message += `Budget: ${data['budget'] || ''}\n\n`;
      
      if (data['additional-notes']) {
        message += "ADDITIONAL NOTES:\n";
        message += `${data['additional-notes']}\n\n`;
      }
      
      message += "SOURCE:\n";
      message += `How they heard about us: ${data['source'] || ''}`;
      if (data['source'] === 'other' && data['source-other']) {
        message += ` - ${data['source-other']}`;
      }
      
      // Send email directly using EmailJS
      const templateParams = {
        user_name: data['custom-name'] || '',
        user_email: data['custom-email'] || '',
        message: message,
        to_name: 'Artesia Designs',
        reply_to: data['custom-email'] || '',
        // Additional common template variables for compatibility
        from_name: data['custom-name'] || '',
        from_email: data['custom-email'] || '',
        to_email: EMAIL_CONFIG.recipientEmail,
        subject: 'New Custom Order Request'
      };

      // Show loading state
      const submitBtn = customOrderForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.purchaseTemplateId, templateParams)
        .then(function(response) {
          console.log('Custom order email sent successfully:', response);
          // Success - show confirmation with smooth transition
          const successContent = `
            <div style="text-align: center; padding: 40px; opacity: 0; transform: translateY(20px); transition: all 0.5s ease;">
              <i class="fas fa-check-circle" style="font-size: 3em; color: #4CAF50; margin-bottom: 20px;"></i>
              <h3 style="color: #796652; margin-bottom: 15px;">Custom Order Request Sent!</h3>
              <p style="color: #666;">We have received your custom order request and will contact you soon.</p>
              <button class="btn" onclick="document.querySelector('.close-custom-order').click()">Close</button>
            </div>
          `;
          customOrderForm.innerHTML = successContent;
          
          // Trigger smooth transition
          setTimeout(() => {
            const successDiv = customOrderForm.querySelector('div');
            successDiv.style.opacity = '1';
            successDiv.style.transform = 'translateY(0)';
          }, 10);
        })
        .catch(function(error) {
          console.error('Failed to send custom order:', error);
          console.error('Custom order error details:', {
            status: error.status,
            text: error.text,
            serviceId: EMAIL_CONFIG.serviceId,
            templateId: EMAIL_CONFIG.purchaseTemplateId,
            recipientEmail: EMAIL_CONFIG.recipientEmail
          });
          alert('Failed to send custom order request. Please try again or contact us directly.');
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        });
    });
  }
});

// Video functionality - now handled by Vimeo embeds

// Announcement banner animation timing
function updateAnnouncementTiming() {
  const banner = document.querySelector('.announcement-content');
  if (!banner) return;

  // Get the content width
  const contentWidth = banner.offsetWidth;
  const viewportWidth = window.innerWidth;
  
  // Calculate total distance (content width + 2 viewport widths)
  const totalDistance = contentWidth + (2 * viewportWidth);
  
  // Calculate duration based on distance
  const speedPx = 150; // pixels per second
  const duration = (totalDistance / speedPx) + 1.5;
  
  // Set the animation properties
  banner.style.setProperty('--content-width', duration);
  banner.style.animation = `scroll ${duration}s linear infinite`;
}

// Update timing on load and resize
document.addEventListener('DOMContentLoaded', updateAnnouncementTiming);
window.addEventListener('resize', updateAnnouncementTiming);













// Function to load products
function loadProducts() {
  const productGrid = document.getElementById('product-grid');
  if (!productGrid) return;

  // Group products by orientation
  const productEntries = Object.entries(productsDB);
  const verticalProducts = [];
  const horizontalProducts = [];
  const squareProducts = [];

  // Categorize products by image orientation
  productEntries.forEach(([id, product]) => {
    // Create a temporary image to check dimensions
    const img = new Image();
    img.src = product.image;
    
    // Store the product with its ID for later use
    const productWithId = { id, product };
    
    img.onload = () => {
      const ratio = img.width / img.height;
      if (ratio < 0.85) {
        // Vertical image
        verticalProducts.push(productWithId);
      } else if (ratio > 1.15) {
        // Horizontal image
        horizontalProducts.push(productWithId);
      } else {
        // Square image
        squareProducts.push(productWithId);
      }
      
      // Check if all images have been processed
      if (verticalProducts.length + horizontalProducts.length + squareProducts.length === productEntries.length) {
        // Start loading products in batches
        loadProductsByGroup();
      }
    };
    
    // Handle image loading error
    img.onerror = () => {
      // Default to square if we can't determine orientation
      squareProducts.push(productWithId);
      
      // Check if all images have been processed
      if (verticalProducts.length + horizontalProducts.length + squareProducts.length === productEntries.length) {
        // Start loading products in batches
        loadProductsByGroup();
      }
    };
  });

  // Function to load products in batches by group
  function loadProductsByGroup() {
    // Combine all products in the desired order
    const groupedProducts = [...verticalProducts, ...squareProducts, ...horizontalProducts];
    let currentIndex = 0;
    const batchSize = 4;

    // Create and show loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'gallery-loading';
    loadingIndicator.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loadingIndicator);

    function loadNextBatch() {
      const batch = groupedProducts.slice(currentIndex, currentIndex + batchSize);
      
      batch.forEach(({ id, product }) => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.setAttribute('data-product-id', id);

        // Determine orientation class
        const img = new Image();
        img.src = product.image;
        const ratio = img.width / img.height;
        
        if (ratio < 0.85) {
          productElement.classList.add('vertical-card');
        } else if (ratio > 1.15) {
          productElement.classList.add('horizontal-card');
        } else {
          productElement.classList.add('square-card');
        }

        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        imageContainer.appendChild(spinner);

        const productImg = document.createElement('img');
        productImg.alt = product.name;
        productImg.style.position = 'absolute';
        productImg.style.top = '0';
        productImg.style.left = '0';
        productImg.style.width = '100%';
        productImg.style.height = '100%';
        productImg.style.objectFit = 'cover';
        
        productImg.onload = () => {
          spinner.style.display = 'none';
          productImg.classList.add('loaded');
        };
        
        productImg.src = product.image;
        imageContainer.appendChild(productImg);

        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';

        const name = document.createElement('h3');
        name.textContent = product.name;

        const blurb = document.createElement('p');
        blurb.className = 'blurb';
        blurb.textContent = product.description;

        const size = document.createElement('p');
        size.className = 'size';
        size.innerHTML = `<b>Size:</b> ${product.size}`;

        const price = document.createElement('p');
        price.className = 'price';
        price.innerHTML = `<b>Price:</b> $${product.price}`;

        const favoriteBtn = document.createElement('button');
        favoriteBtn.className = 'favorite-btn';
        favoriteBtn.innerHTML = '<i class="far fa-heart"></i>'; // Empty heart
        favoriteBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          favorites.toggleFavorite(id);
        });

        productInfo.appendChild(name);
        productInfo.appendChild(blurb);
        productInfo.appendChild(size);
        productInfo.appendChild(price);
        productInfo.appendChild(favoriteBtn);

        productElement.appendChild(imageContainer);
        productElement.appendChild(productInfo);

        productElement.addEventListener('click', (e) => {
          if (!e.target.closest('.favorite-btn')) {
            openProductModal(product);
          }
        });
        
        productGrid.appendChild(productElement);
      });

      currentIndex += batchSize;

      if (currentIndex < groupedProducts.length) {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            observer.disconnect();
            setTimeout(loadNextBatch, 100);
          }
        });

        const lastProduct = productGrid.lastElementChild;
        if (lastProduct) {
          observer.observe(lastProduct);
        }
      } else {
        // Hide loading indicator when all products are loaded
        if (loadingIndicator && loadingIndicator.parentNode) {
          loadingIndicator.parentNode.removeChild(loadingIndicator);
        }
      }
    }

    // Start loading the first batch
    loadNextBatch();
  }
}

// Function to handle image loading
function handleImageLoad(img) {
  img.classList.add('loaded');
  const spinner = img.parentElement.querySelector('.loading-spinner');
  if (spinner) {
    spinner.style.display = 'none';
  }
}

// Function to preload image
function preloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}





