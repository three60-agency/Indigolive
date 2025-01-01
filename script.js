function showEmail() {
    const emailLink = document.getElementById('emailLink');

    // Add "hidden" class to fade out the current text
    emailLink.classList.add('hidden');

    // Wait for animation to complete, then change the text and fade in
    setTimeout(() => {
        emailLink.innerHTML = '<a href="mailto:info@indigolive.com.au" style="color: #6407CE; text-decoration: none;">info@indigolive.com.au</a>';
        emailLink.classList.remove('hidden');
        emailLink.classList.add('visible');
    }, 600); // Matches the CSS transition duration
}