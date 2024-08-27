document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetch-cat').textContent = 'Clique aqui';
    
    document.getElementById('fetch-cat').addEventListener('click', async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            const imageUrl = data[0].url;
            console.log(imageUrl);
            document.getElementById('cat-image').src = imageUrl;
        } catch (error) {
            console.error('Erro ao buscar a imagem:', error);
        }
    });
});
