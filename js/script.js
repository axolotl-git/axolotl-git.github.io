document.addEventListener('DOMContentLoaded', () => {
    const scriptList = document.getElementById('script-list');

    // Load the JSON file
    fetch('../scripts.json') // Adjusted path to go up one directory
        .then(response => response.json())
        .then(data => {
            // Iterate over each object in the JSON
            data.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>${item.name}</strong><br>
                    <a href="${item.url}" target="_blank">${item.url}</a><br>
                    <p>${item.description}</p>
                    <button class="download-btn" data-url="${item.url}">Download</button>
                `;
                scriptList.querySelector('ul').appendChild(li);
            });

            // Add click event to download buttons
            const downloadButtons = document.querySelectorAll('.download-btn');
            downloadButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const scriptUrl = button.getAttribute('data-url');
                    alert(`Downloading ${scriptUrl}...`);
                    const link = document.createElement('a');
                    link.href = scriptUrl;
                    link.download = scriptUrl.split('/').pop(); // Extracts the file name from the URL
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            });
        })
        .catch(error => console.error('Error loading JSON file:', error));
});
