import axios from 'axios'; // This assumes you are using ES modules

// Your existing code goes here...


    // Function to extract relevant data from the webpage elements
    function extractElementData() {
        const elements = document.querySelectorAll('*');
        let pageData = [];

        elements.forEach(el => {
            const text = el.textContent.trim();
            const tag = el.tagName;
            const css = window.getComputedStyle(el);
            
            if (text) {  // Only send elements with meaningful text
                pageData.push({
                    text: text,
                    tag: tag,
                    css: {
                        display: css.display,
                        visibility: css.visibility,
                        position: css.position,
                        // Add other CSS properties if needed
                    }
                });
            }
        });

        return pageData;
    }

    // Prepare the data to send to the API
    const pageContent = extractElementData();

    // Send the data using axios
    axios({
        method: "POST",
        url: "https://detect.roboflow.com/dark-pattern-_visual-detection/1",
        params: {
            api_key: "paste your Api key" // Replace with your actual API key
        },
        data: pageContent,  // Send page content instead of an image
        headers: {
            "Content-Type": "application/json" // Set content type to JSON
        }
    })
    .then(function(response) {
        console.log(response.data);  // Log the API's response
        if (response.data.is_dark_pattern === 1) {
            alert("Dark pattern detected!");
        }
    })
    .catch(function(error) {
        console.log("Error:", error.message);
    });