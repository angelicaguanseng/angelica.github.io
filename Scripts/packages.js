/* JS FOR PACKAGES PAGE */

/* DESTINATION DATA */

const destinations = {

    paris: {
        name:    'Paris',
        country: 'France',
        price:   'From AED 599 per person',
        img:     '../Assets/Packages Page/Package-Paris.jpg',
        desc:    'Paris is one of those cities that lives up to its reputation — every street feels like a painting, every café smells of fresh croissants, and the Eiffel Tower genuinely takes your breath away. Your Holidae Paris package includes return flights, a 4-star hotel in the heart of the city, and daily breakfast.',
        included: [
            'Return flights from major airports',
            '3-5 nights in a 4-star hotel near the Champs-Élysées',
            'Daily continental breakfast',
            'Holidae city guide with curated picks',
            '24/7 travel support throughout your trip',
        ],
        experiences: [
            'Eiffel Tower — summit visit at dusk for the light show',
            'The Louvre — home to over 35,000 works of art',
            'Seine river cruise — two hours of scenic beauty',
            'Montmartre & Sacré-Cœur — Paris\'s bohemian heart',
            'Versailles day trip — optional palace and gardens tour',
        ],
        gallery: [
            { src: '../Assets/Packages Page/Paris-1.jpg', alt: 'Eiffel Tower at golden hour' },
            { src: '../Assets/Packages Page/Paris-2.jpg', alt: 'Parisian boulevard' },
        ],
        video:    'https://www.youtube.com/embed/t-ltfcMQsls',
        booklink: 'booking.html?dest=paris&price=599',
    },

    rome: {
        name:    'Rome',
        country: 'Italy',
        price:   'From AED 549 per person',
        img:     '../Assets/Packages Page/Package-Rome.jpg',
        desc:    'The Eternal City never gets old — ancient ruins sit beside buzzing piazzas, Baroque fountains appear around every corner, and the food is simply outstanding. Rome is history you can taste, touch, and walk through every single day.',
        included: [
            'Return flights from major airports',
            '3-5 nights in a 4-star hotel near the historic centre',
            'Daily continental breakfast',
            'Holidae city guide with curated picks',
            '24/7 travel support throughout your trip',
        ],
        experiences: [
            'The Colosseum & Roman Forum — walk through ancient history',
            'Vatican Museums & Sistine Chapel — a masterpiece at every turn',
            'Trevi Fountain — toss a coin for good luck',
            'Trastevere neighbourhood — cobblestones and authentic trattorie',
            'Day trip to Pompeii — the city frozen in time',
        ],
        gallery: [
            { src: '../Assets/Packages Page/Rome-1.jpg', alt: 'Colosseum Rome' },
            { src: '../Assets/Packages Page/Rome-2.jpg', alt: 'Trevi Fountain Rome' },
        ],
        video:    'https://www.youtube.com/embed/FzT8YxmWF64',
        booklink: 'booking.html?dest=rome&price=549',
    },

    santorini: {
        name:    'Santorini',
        country: 'Greece',
        price:   'From AED 749 per person',
        img:     '../Assets/Packages Page/Package-Santorini.jpg',
        desc:    'Clifftop villages with white-washed walls, volcanic black-sand beaches, and sunsets that look like oil paintings. Santorini is pure Mediterranean magic — romantic, dramatic, and completely unforgettable.',
        included: [
            'Return flights from major airports',
            '5-7 nights in a clifftop hotel in Oia or Fira',
            'Daily breakfast with Aegean views',
            'Holidae island guide with curated picks',
            '24/7 travel support throughout your trip',
        ],
        experiences: [
            'Oia sunset — the most famous sunset view in the world',
            'Volcanic beaches — Red Beach and Kamari Black Beach',
            'Caldera boat tour — sail around the volcanic crater',
            'Wine tasting — Santorini\'s unique Assyrtiko grapes',
            'Ancient Akrotiri — the Minoan city preserved under ash',
        ],
        gallery: [
            { src: '../Assets/Packages Page/Santorini-1.jpg', alt: 'Blue domes Santorini' },
            { src: '../Assets/Packages Page/Santorini-2.jpg', alt: 'Santorini sunset Oia' },
        ],
        video:    'https://www.youtube.com/embed/mVL2YZsdkfY',
        booklink: 'booking.html?dest=santorini&price=749',
    },

    vienna: {
        name:    'Vienna',
        country: 'Austria',
        price:   'From AED 529 per person',
        img:     '../Assets/Packages Page/Package-Vienna.jpg',
        desc:    'Vienna is elegance in architectural form — grand imperial palaces, world-class opera houses, and a coffee house culture that has been perfected over centuries. A city that rewards slow, thoughtful exploration.',
        included: [
            'Return flights from major airports',
            '3-4 nights in a 4-star hotel in the First District',
            'Daily breakfast',
            'Holidae city guide with curated picks',
            '24/7 travel support throughout your trip',
        ],
        experiences: [
            'Schönbrunn Palace — Habsburg imperial residence and gardens',
            'Vienna State Opera — catch a world-class performance',
            'Belvedere Museum — home to Klimt\'s The Kiss',
            'Naschmarkt — Vienna\'s famous open-air food market',
            'Coffee house culture — Sachertorte at Café Sacher',
        ],
        gallery: [
            { src: '../Assets/Packages Page/Vienna-1.jpg', alt: 'Vienna grand boulevard' },
            { src: '../Assets/Packages Page/Vienna-2.jpg', alt: 'Schonbrunn Palace Vienna' },
        ],
        video:    'https://www.youtube.com/embed/KyaHvw3ZIjI',
        booklink: 'booking.html?dest=vienna&price=529',
    },

    prague: {
        name:    'Prague',
        country: 'Czech Republic',
        price:   'From AED 449 per person',
        img:     '../Assets/Packages Page/Package-Prague.jpg',
        desc:    'Prague feels like a fairy tale brought to life — Gothic towers, Baroque churches, and a medieval old town that survived the 20th century almost completely intact. One of Europe\'s most beautiful and most affordable capitals.',
        included: [
            'Return flights from major airports',
            '3-4 nights in a 4-star hotel in the Old Town',
            'Daily breakfast',
            'Holidae city guide with curated picks',
            '24/7 travel support throughout your trip',
        ],
        experiences: [
            'Old Town Square — the astronomical clock on the hour',
            'Charles Bridge — at dawn before the crowds arrive',
            'Prague Castle — the largest ancient castle complex in the world',
            'Josefov — the historic Jewish Quarter',
            'Vyšehrad — panoramic views over the city',
        ],
        gallery: [
            { src: '../Assets/Packages Page/Prague-1.jpg', alt: 'Prague old town rooftops' },
            { src: '../Assets/Packages Page/Prague-2.jpg', alt: 'Charles Bridge Prague' },
        ],
        video:    'https://www.youtube.com/embed/B2H7QWFdl8k',
        booklink: 'booking.html?dest=prague&price=449',
    },

    amsterdam: {
        name:    'Amsterdam',
        country: 'Netherlands',
        price:   'From AED 499 per person',
        img:     '../Assets/Packages Page/Package-Amsterdam.jpg',
        desc:    'Amsterdam charms every visitor with its canal-lined streets, world-class museums, and a relaxed, welcoming atmosphere unlike any other European city. Explore by bike, cruise the canals, and discover a city that is endlessly interesting.',
        included: [
            'Return flights from major airports',
            '3-4 nights in a 4-star hotel in the Canal Ring',
            'Daily breakfast',
            'Holidae city guide with curated picks',
            '24/7 travel support throughout your trip',
        ],
        experiences: [
            'Rijksmuseum — Rembrandt and Vermeer masterpieces',
            'Anne Frank House — a deeply moving historical visit',
            'Canal cruise — see the city from the water',
            'Vondelpark — the city\'s beloved green heart',
            'Jordaan neighbourhood — galleries, cafés, and hidden courtyards',
        ],
        gallery: [
            { src: '../Assets/Packages Page/Amsterdam-1.jpg', alt: 'Amsterdam canals and bikes' },
            { src: '../Assets/Packages Page/Amsterdam-2.jpg', alt: 'Amsterdam canal houses' },
        ],
        video:    'https://www.youtube.com/embed/qXyNSm_mzPM',
        booklink: 'booking.html?dest=amsterdam&price=499',
    },

};

/* PAGE LOGIC */

document.addEventListener('DOMContentLoaded', () => {

    /* MOBILE MENU */

    const navmobile = document.querySelector('.navmobile');
    const navmobiledrawer = document.querySelector('.navmobiledrawer');

    if (navmobile && navmobiledrawer) {

        navmobile.addEventListener('click', () => {
            const isOpen = navmobile.classList.toggle('open');
            navmobiledrawer.classList.toggle('open', isOpen);
            navmobile.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        navmobiledrawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navmobile.classList.remove('open');
                navmobiledrawer.classList.remove('open');
                navmobile.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', (e) => {
            if (!navmobile.contains(e.target) && !navmobiledrawer.contains(e.target)) {
                navmobile.classList.remove('open');
                navmobiledrawer.classList.remove('open');
                navmobile.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    /* SCROLL REVEAL */

    const revealels = document.querySelectorAll('.reveal, .reveal-stagger');

    if (revealels.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );
        revealels.forEach(el => observer.observe(el));
    }

    /* MODAL */

    const modal     = document.getElementById('dest-modal');
    const backdrop  = modal?.querySelector('.modal-backdrop');
    const closebtn  = modal?.querySelector('.modal-close');
    const heroimg   = modal?.querySelector('.modal-hero-img');
    const titleel   = modal?.querySelector('.modal-title');
    const countryel = modal?.querySelector('.modal-country');
    const priceel   = modal?.querySelector('.modal-price');
    const descel    = modal?.querySelector('.modal-desc');
    const includedul = modal?.querySelector('.modal-included');
    const expul     = modal?.querySelector('.modal-experiences');
    const galleryel = modal?.querySelector('.modal-gallery');
    const bookbtn   = modal?.querySelector('.modal-bookbtn');

    if (!modal) return;

    const openmodal = (destkey) => {
        const d = destinations[destkey];
        if (!d) return;

        heroimg.src         = d.img;
        heroimg.alt         = d.name;
        titleel.textContent   = d.name;
        countryel.textContent = d.country;
        priceel.textContent   = d.price;
        descel.textContent    = d.desc;

        includedul.innerHTML = d.included.map(item => `<li>${item}</li>`).join('');

        expul.innerHTML = d.experiences.map(item => `<li>${item}</li>`).join('');

        const photoshtml = d.gallery
            .map(img => `<img src="${img.src}" alt="${img.alt}" loading="lazy">`)
            .join('');

        const videohtml = `
            <div class="modal-gallery-video">
                <iframe
                    src="${d.video}"
                    title="${d.name} travel video"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy">
                </iframe>
            </div>`;

        galleryel.innerHTML = photoshtml + videohtml;

        /* Lightbox on photos */
        galleryel.querySelectorAll('img').forEach(img => {
            img.addEventListener('click', () => openlightbox(img.src, img.alt));
        });

        bookbtn.href = d.booklink;

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        modal.querySelector('.modal-panel').scrollTop = 0;
    };

    const closemodal = () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';

        const iframe = modal.querySelector('iframe');
        if (iframe) iframe.src = iframe.src;
    };

    document.querySelectorAll('.viewdetails-btn').forEach(btn => {
        btn.addEventListener('click', () => openmodal(btn.dataset.dest));
    });

    closebtn?.addEventListener('click', closemodal);
    backdrop?.addEventListener('click', closemodal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closemodal();
    });

    const lightbox      = document.getElementById('lightbox');
    const lightboximg   = lightbox?.querySelector('img');
    const lightboxclose = lightbox?.querySelector('.lightbox-close');

    const openlightbox = (src, alt) => {
        lightboximg.src = src;
        lightboximg.alt = alt || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closelightbox = () => {
        lightbox.classList.remove('open');

        if (!modal.classList.contains('open')) {
            document.body.style.overflow = '';
        }
    };

    lightboxclose?.addEventListener('click', closelightbox);
    lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closelightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closelightbox(); });

});