document.addEventListener('DOMContentLoaded', function () {
    const patternsElement = document.getElementById('patterns');

    // Example API call to detect dark patterns on the page
    axios.get('https://detect.roboflow.com/dark-pattern-_visual-detection/1')
        .then(response => {
            if (response.data.darkPatterns && response.data.darkPatterns.length > 0) {
                // Update the text content with the number of dark patterns detected
                patternsElement.textContent = `${response.data.darkPatterns.length} dark patterns detected on this site.`;
            } else {
                // Update the text content if no dark patterns are found
                patternsElement.textContent = 'No dark patterns detected on this site.';
            }
        })
        .catch(error => {
            // Handle any errors that occur during the request
            patternsElement.textContent = 'Error analyzing the page. Please try again later.';
            console.error('Error fetching dark pattern data:', error);
        });
});
