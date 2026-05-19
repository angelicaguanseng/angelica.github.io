/* JS FOR BOOKING PAGE */

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

    /* DATE SETUP */

    const today = new Date().toISOString().split('T')[0];
    const traveldate = document.getElementById('travel-date');
    const returndate = document.getElementById('return-date');

    if (traveldate) {
        traveldate.min = today;
        const soon = new Date();
        soon.setMonth(soon.getMonth() + 2);
        traveldate.value = soon.toISOString().split('T')[0];
    }

    if (returndate) {
        returndate.min = today;
        const ret = new Date();
        ret.setMonth(ret.getMonth() + 2);
        ret.setDate(ret.getDate() + 4);
        returndate.value = ret.toISOString().split('T')[0];
    }

    traveldate?.addEventListener('change', () => {
        if (returndate && returndate.value < traveldate.value) {
            returndate.value = traveldate.value;
        }
    });

    /* ORDER SUMMARY */

    const destselect  = document.getElementById('destination');
    const guestsel    = document.getElementById('guests');
    const nightsel    = document.getElementById('nights');
    const orderimg    = document.getElementById('order-img');
    const orderdest   = document.getElementById('order-dest');
    const lineguests  = document.getElementById('line-guests');
    const linenights  = document.getElementById('line-nights');
    const linebase    = document.getElementById('line-base');
    const ordertotal  = document.getElementById('order-total');

    /* Read URL params */
    const params  = new URLSearchParams(window.location.search);
    const urldest = params.get('dest');

    if (urldest && destselect) {
        const match = [...destselect.options].find(o => o.value === urldest);
        if (match) destselect.value = urldest;
    }

    /* Recalculate and redisplay order summary */
    const updatesummary = () => {
        const selected = destselect?.options[destselect.selectedIndex];
        const price    = parseInt(selected?.dataset.price, 10) || 0;
        const img      = selected?.dataset.img || '';
        const label    = selected?.text?.split(' —')[0] || '—';

        const guests = parseInt(guestsel?.value, 10) || 2;
        const nights = parseInt(nightsel?.value, 10) || 4;

        /* Fade image in/out when destination changes */
        if (orderimg && img) {
            orderimg.style.opacity = '0';
            setTimeout(() => {
                orderimg.src = img;
                orderimg.alt = label;
                orderimg.style.opacity = '1';
            }, 200);
        }

        if (orderdest) orderdest.textContent = price ? label : 'Select a destination';
        if (lineguests) lineguests.textContent = guests + (guests === 1 ? ' guest' : ' guests');
        if (linenights) linenights.textContent = nights + (nights === 1 ? ' night' : ' nights');
        if (linebase)   linebase.textContent   = price ? 'AED ' + price.toLocaleString() + ' p.p/night' : '—';

        const total = price * guests * nights;
        if (ordertotal) ordertotal.textContent = price ? 'AED ' + total.toLocaleString() : '—';
    };

    /* Run on load and whenever a dropdown changes */
    updatesummary();
    destselect?.addEventListener('change', updatesummary);
    guestsel?.addEventListener('change', updatesummary);
    nightsel?.addEventListener('change', updatesummary);

    /* FORM VALIDATION */

    const form      = document.getElementById('booking-form');
    const formcard  = document.getElementById('form-card');
    const confirmbox = document.getElementById('confirm-box');
    const steps     = document.querySelectorAll('.step');

    /* Show error under an input */
    const showerror = (input, msg) => {
        input.classList.add('error');
        const el = input.parentElement.querySelector('.errormsg');
        if (el) { el.textContent = msg; el.style.display = 'block'; }
    };

    /* Clear error when user starts typing */
    const clearerror = (input) => {
        input.classList.remove('error');
        const el = input.parentElement.querySelector('.errormsg');
        if (el) el.style.display = 'none';
    };

    form?.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('input', () => clearerror(input));
    });

    form?.addEventListener('submit', (e) => {
        e.preventDefault();

        let valid = true;

        /* Check first name */
        const fname = document.getElementById('fname');
        if (fname && !fname.value.trim()) {
            showerror(fname, 'Please enter your first name.');
            valid = false;
        }

        /* Check last name */
        const lname = document.getElementById('lname');
        if (lname && !lname.value.trim()) {
            showerror(lname, 'Please enter your last name.');
            valid = false;
        }

        /* Check email */
        const email = document.getElementById('email');
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            showerror(email, 'Please enter a valid email address.');
            valid = false;
        }

        /* Check travel date */
        const tdate = document.getElementById('travel-date');
        if (tdate && !tdate.value) {
            showerror(tdate, 'Please choose a departure date.');
            valid = false;
        }

        /* Check destination selected */
        if (destselect && !destselect.value) {
            destselect.classList.add('error');
            const el = destselect.parentElement.querySelector('.errormsg');
            if (el) { el.textContent = 'Please select a destination.'; el.style.display = 'block'; }
            valid = false;
        }

        if (!valid) return;

        /* All good — mark steps done and show confirmation */
        steps.forEach(s => { s.classList.add('done'); s.classList.remove('active'); });

        const confirmdest = document.getElementById('confirm-dest');
        if (confirmdest && destselect) {
            confirmdest.textContent = destselect.options[destselect.selectedIndex]?.text?.split(' —')[0] || 'your destination';
        }

        if (formcard)    formcard.style.display    = 'none';
        if (confirmbox) {
            confirmbox.style.display = 'block';
            confirmbox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

});