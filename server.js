const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));

// Rota para obter a imagem astronômica do dia (APOD)
app.get('/apod', async (req, res) => {
    try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=2qlc1btiaP4Ka60ETWyNkSzedrGRgye9DEpes7eN', { timeout: 120000 });
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error fetching APOD:', error);
        res.status(500).json({ error: 'Failed to fetch APOD' });
    }
});

// Rota para obter imagens e vídeos da biblioteca da NASA
app.get('/image-library', async (req, res) => {
    try {
        const response = await axios.get('https://images-api.nasa.gov/search?media_type=image,video&api_key=2qlc1btiaP4Ka60ETWyNkSzedrGRgye9DEpes7eN', { timeout: 120000 });
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error fetching NASA Image and Video Library:', error);
        res.status(500).json({ error: 'Failed to fetch NASA Image and Video Library' });
    }
});

// Rota para obter fotos dos rovers da NASA em Marte
app.get('/mars-rover', async (req, res) => {
    try {
        const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=2qlc1btiaP4Ka60ETWyNkSzedrGRgye9DEpes7eN', { timeout: 120000 });
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error fetching NASA Mars Rover Photos:', error);
        res.status(500).json({ error: 'Failed to fetch NASA Mars Rover Photos' });
    }
});

// Rota para obter imagens de satélite da Terra
app.get('/earth', async (req, res) => {
    try {
        const response = await axios.get('https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&dim=0.1&api_key=2qlc1btiaP4Ka60ETWyNkSzedrGRgye9DEpes7eN', { timeout: 120000 });
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error fetching NASA Earth Imagery:', error);
        res.status(500).json({ error: 'Failed to fetch NASA Earth Imagery' });
    }
});

// Rota para obter dados do arquivo de exoplanetas da NASA
app.get('/exoplanet', async (req, res) => {
    try {
        const response = await axios.get('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&api_key=2qlc1btiaP4Ka60ETWyNkSzedrGRgye9DEpes7eN', { timeout: 120000 });
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error fetching NASA Exoplanet Archive:', error);
        res.status(500).json({ error: 'Failed to fetch NASA Exoplanet Archive' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

