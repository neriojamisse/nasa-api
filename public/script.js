document.addEventListener('DOMContentLoaded', function() {
    const apodBtn = document.getElementById('apod-btn');
    const imageLibraryBtn = document.getElementById('image-library-btn');
    const marsRoverBtn = document.getElementById('mars-rover-btn');
    const earthBtn = document.getElementById('earth-btn');
    const exoplanetBtn = document.getElementById('exoplanet-btn');
    const resultDiv = document.getElementById('result');
    const mediaContainer = document.getElementById('media-container');
    const imageElement = document.getElementById('image');
    const videoElement = document.getElementById('video');
    const languageSelect = document.getElementById('language');

    function displayResult(result) {
        if (result.url) {
            if (result.media_type === 'image') {
                imageElement.src = result.url;
                imageElement.style.display = 'block';
                videoElement.style.display = 'none';
            } else if (result.media_type === 'video') {
                videoElement.src = result.url;
                videoElement.style.display = 'block';
                imageElement.style.display = 'none';
            }
            mediaContainer.style.display = 'block';
        }
        resultDiv.innerHTML = JSON.stringify(result, null, 2);
    }

    async function fetchData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            displayResult(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            resultDiv.innerHTML = '<p>Failed to fetch data.</p>';
        }
    }

    apodBtn.addEventListener('click', function() {
        fetchData('/apod');
    });

    imageLibraryBtn.addEventListener('click', function() {
        fetchData('/image-library');
    });

    marsRoverBtn.addEventListener('click', function() {
        fetchData('/mars-rover');
    });

    earthBtn.addEventListener('click', function() {
        fetchData('/earth');
    });

    exoplanetBtn.addEventListener('click', function() {
        fetchData('/exoplanet');
    });

    languageSelect.addEventListener('change', function() {
        const language = languageSelect.value;
        // Lógica para alterar o idioma da página
    });
});
