/* JS FOR HOME PAGE */

document.addEventListener('DOMContentLoaded', () => {

    /* MOBILE NAVIGATION */

    // Select the mobile menu button and mobile drawer
    const navmobile = document.querySelector('.navmobile');
    const navmobiledrawer = document.querySelector('.navmobiledrawer');

    // Check if both navigation elements exist before running the code
    if (navmobile && navmobiledrawer) {

        // Toggle the mobile navigation menu when the button is clicked
        navmobile.addEventListener('click', () => {

            // Add or remove the "open" class on the menu button
            const isOpen = navmobile.classList.toggle('open');

            // Show or hide the mobile drawer based on menu state
            navmobiledrawer.classList.toggle('open', isOpen);

            // Update accessibility attribute for screen readers
            navmobile.setAttribute('aria-expanded', isOpen);

            // Disable page scrolling while the mobile menu is open
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close the mobile menu when a navigation link is clicked
        navmobiledrawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {

                // Remove active menu classes
                navmobile.classList.remove('open');
                navmobiledrawer.classList.remove('open');
                
                // Reset accessibility attribute
                navmobile.setAttribute('aria-expanded', 'false');

                // Restore page scrolling
                document.body.style.overflow = '';
            });
        });

        // Close the mobile menu when clicking outside the navigation area
        document.addEventListener('click', (e) => {

            // Check if the click happened outside the menu button and drawer
            if (!navmobile.contains(e.target) && !navmobiledrawer.contains(e.target)) {
                
                // Close the mobile navigation menu
                navmobile.classList.remove('open');
                navmobiledrawer.classList.remove('open');

                // Reset accessibility attribute
                navmobile.setAttribute('aria-expanded', 'false');

                // Restore page scrolling
                document.body.style.overflow = '';
            }
        });
    }

    /* SCROLL REVEAL ANIMATION */

    // Select all elements that should animate when scrolled into view
    const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');

    // Only run the observer if reveal elements exist
    if (revealEls.length) {

        // Create an Intersection Observer to detect when elements enter the viewport
        const observer = new IntersectionObserver(

            // Run when observed elements become visible
            (entries) => {
                entries.forEach(entry => {

                    // Check if the element is currently visible on screen
                    if (entry.isIntersecting) {

                        // Add the visible class to trigger CSS animations
                        entry.target.classList.add('visible');

                        // Stop observing the element after the animation runs once
                        observer.unobserve(entry.target);
                    }
                });
            },

            // Set when the animation should trigger during scrolling
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        // Apply the observer to each reveal element
        revealEls.forEach(el => observer.observe(el));
    }

});