
let menuInitialized = false;

function toggleMenu() {
  const navLinks = document.getElementById('nav');
  navLinks.classList.toggle('open')

  console.log(navLinks)

  // Close menu if a link is clicked
  if (!menuInitialized) {
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      });
    });
    menuInitialized = true;
  }
}


  const tabButtons = document.querySelectorAll('.tab');
  const tabContent = document.getElementById('tab-content');
  const categorySection = document.getElementById('category-section');

  const tabData = {
    sales: [
      { img: 'images/ackbag.jpg', name: 'Black Leather', price: '$45.99', rating: '4.5⭐' },
      { img: 'images/wallets.jpg', name: 'Luxury Pouch', price: '$65.99', rating: '4.8⭐' },
      { img: 'images/smallpaulse.jpg', name: 'Mini Bag', price: '$35.99', rating: '4.1⭐' },
      { img: 'images/bag-four.jpg', name: 'Bag', price: '$49.0', rating: '4.4⭐' },
      { img: 'images/dior.jpg', name: 'Lady Dior', price: '$55.00', rating: '4.2⭐' },
      { img: 'images/bagshoe-one.jpg', name: 'Bag & Shoe', price: '$60.99', rating: '4.6⭐' },
      { img: 'images/brownbag-two.jpg', name: 'Mini Bag', price: '$45.00', rating: '4.9⭐' },
      { img: 'images/shoe-logoish.jpg', name: 'Shoe', price: '$49.99', rating: '5.0⭐' },
    ],
    hot: [
      { img: 'images/blazzer-brown.jpg', name: 'Brown Blazzer', price: '$95.99', rating: '5.0⭐' },
      { img: 'images/snakeskinbelts.jpg', name: 'Snake Skin Belt', price: '$35.99', rating: '4.5⭐' },
      { img: 'images/lulubag.jpg', name: 'Hobo Bags', price: '$60.00', rating: '4.8⭐' },
      { img: 'images/poores.jpg', name: 'Studded Clutch', price: '$90.00', rating: '5.0⭐' },
      { img: 'images/bag-goldchain.jpg', name: 'Gold Sling', price: '$75.99', rating: '4.9⭐' },
      { img: 'images/snakekinshoes.jpg', name: 'Snake Skin Shoe', price: '$85.99', rating: '4.7⭐' },
      { img: 'images/lulu.jpg', name: 'Cream Hobo', price: '$62.99', rating: '4.6⭐' },
      { img: 'images/snakskingown.jpg', name: 'Snake Skin Gown', price: '$50.00', rating: '4.0⭐' },
    ],
    new: [
      { img: 'images/redblazzer-cap-hat.jpg', name: 'Red Blazzer', price: '$55.00', rating: '4.7⭐' },
      { img: 'images/paperbag.jpg', name: 'Eco Tote', price: '$40.00', rating: '4.2⭐' },
      { img: 'images/inischoolbag2.jpg', name: 'Mini Backpack', price: '$70.00', rating: '4.6⭐' },
      { img: 'images/zipper.jpg', name: 'Urban Zip', price: '$50.00', rating: '4.3⭐' },
      { img: 'images/leatherglooves.jpg', name: 'Gloves', price: '$15.00', rating: '4.4⭐' },
      { img: 'images/leatherjack.jpg', name: 'Leather Jacket', price: '$48.00', rating: '4.6' },
      { img: 'images/minisvhoolbag.jpg', name: 'Backpack', price: '$60.00', rating: '4.9⭐' },
      { img: 'images/white-suit.jpg', name: 'Suit', price: '$150.00', rating: '4.1⭐' },
    ],
    accessories: [
      { img: 'images/wallets.jpg', name: 'Leather Wallet', price: '$20.00', rating: '4.9⭐' },
      { img: 'images/bag-goldchain.jpg', name: 'Bag Chain', price: '$15.99', rating: '4.1⭐' },
      { img: 'images/scaff.jpg', name: 'Scarf Addon', price: '$18.00', rating: '4.7⭐' },
      { img: 'images/goldchain.jpg', name: 'Chain', price: '$12.99', rating: '4.6⭐' },
      { img: 'images/watch-gold+solver.jpg', name: 'Classical Watch', price: '$29.00', rating: '4.5⭐' },
      { img: 'images/watch.jpg', name: 'Rolex Watch', price: '$18.95', rating: '4.1⭐' },
      { img: 'images/shades.jpg', name: 'Shades', price: '$8.00', rating: '3.7⭐' },
      { img: 'images/keychain.jpg', name: 'Key Charm', price: '$22.93', rating: '4.9⭐' },
    ]
  };

  let currentTab = 'sales';
  let intervalId;

  function renderTab(tabName) {
    tabContent.innerHTML = '';
    tabData[tabName].forEach(item => {
      const card = document.createElement('div');
      card.innerHTML = `
        <div class="product-card">
          <img src="${item.img}" loading="lazy" alt="${item.name}">
        </div>
        <h4>${item.name}</h4>
        <p>${item.price} | <span class="rating">${item.rating}</span></p>
      `;
      tabContent.appendChild(card);
    });

    // Highlight active tab
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add('active');
    currentTab = tabName;
  }

  function startAutoSwitch() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      const tabs = Object.keys(tabData);
      const nextIndex = (tabs.indexOf(currentTab) + 1) % tabs.length;
      renderTab(tabs[nextIndex]);
    }, 15000);
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      renderTab(tab);
      startAutoSwitch(); // Reset timer
    });
  });

  // Pause/resume auto-switch on hover
  categorySection.addEventListener('mouseenter', () => clearInterval(intervalId));
  categorySection.addEventListener('mouseleave', () => startAutoSwitch());

  // Initial render
  renderTab('sales');
  startAutoSwitch();



// Countdown Timer

  const countdownBtns = {
    days: document.querySelector('.count-days'),
    hours: document.querySelector('.count-hours'),
    mins: document.querySelector('.count-mins'),
  };

  const btnDays = document.getElementById('btn-days');
  const btnHours = document.getElementById('btn-hours');
  const btnMins = document.getElementById('btn-mins');

  const baseDuration = 8 * 24 * 60 * 60 * 1000;
  let endTime = Date.now() + baseDuration;

  function updateCountdown() {
    const now = Date.now();
    let timeLeft = endTime - now;

    if (timeLeft <= 0) {
      endTime = Date.now() + baseDuration;
      timeLeft = endTime - now;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((timeLeft / (1000 * 60)) % 60);

    countdownBtns.days.textContent = days;
    countdownBtns.hours.textContent = hours.toString().padStart(2, '0');
    countdownBtns.mins.textContent = mins.toString().padStart(2, '0');

    // Add blinking class for urgency if 1 day or less
    if (days <= 1) {
      btnDays.classList.add('blinking');
      btnHours.classList.add('blinking');
      btnMins.classList.add('blinking');
    } else {
      btnDays.classList.remove('blinking');
      btnHours.classList.remove('blinking');
      btnMins.classList.remove('blinking');
    }
  }

  updateCountdown(); // Call once immediately
  setInterval(updateCountdown, 1000); // Then update every second

//Testimonials

  const testimonials = document.querySelectorAll('.testimonial');
  let current = 0;
  let interval;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
    current = index;
  }

  function nextTestimonial() {
    const next = (current + 1) % testimonials.length;
    showTestimonial(next);
  }

  function prevTestimonial() {
    const prev = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(prev);
  }

  function startAutoRotate() {
    interval = setInterval(nextTestimonial, 6000);
  }

  function stopAutoRotate() {
    clearInterval(interval);
  }

  document.getElementById('next-testimonial').addEventListener('click', () => {
    nextTestimonial();
    stopAutoRotate();
    startAutoRotate();
  });

  document.getElementById('prev-testimonial').addEventListener('click', () => {
    prevTestimonial();
    stopAutoRotate();
    startAutoRotate();
  });

  document.querySelector('.testimonial-grid').addEventListener('mouseenter', stopAutoRotate);
  document.querySelector('.testimonial-grid').addEventListener('mouseleave', startAutoRotate);

  startAutoRotate();
