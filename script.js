function showEmail() {
    const emailLink = document.getElementById('emailLink');

    // Detect if on mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        // On mobile, directly open email client
        window.location.href = "mailto:info@indigolive.com.au?subject=Enquiry";
    } else {
        // On desktop, show transition effect
        emailLink.classList.add('hidden');

        setTimeout(() => {
            emailLink.innerHTML = '<a href="mailto:info@indigolive.com.au" style="color: #6407CE; text-decoration: none;">info@indigolive.com.au</a>';
            emailLink.classList.remove('hidden');
            emailLink.classList.add('visible');
        }, 600); // Matches the CSS transition duration
    }
}