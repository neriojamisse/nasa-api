document.addEventListener('DOMContentLoaded', function() {
    const apodBtn = document.getElementById('apod-btn');
    const imageLibraryBtn = document.getElementById('image-library-btn');
    const marsRoverBtn = document.getElementById('mars-rover-btn');
    const earthBtn = document.getElementById('earth-btn');
    const exoplanetBtn = document.getElementById('exoplanet-btn');
    const resultDiv = document.getElementById('result');

    function displayResult(result) {
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
});
