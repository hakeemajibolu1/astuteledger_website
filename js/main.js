// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 6.524379, lng: 3.3792063 };

    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), 
    {
        zoom: 14, 
        center: loc
    });

    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map});
}

// Sticky menu background fade while scrolling
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.8;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Smooth Scroll Function. "hash" refers to the IDs
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();
        
        const hash = this.hash;

        $('html, body').animate(
            {
                // Scroll from the top and the "-100" is to show the section title
                scrollTop: $(hash).offset().top - 100 
            }, 
            800 // Scroll speed in milliseconds
        );
    }
});