document.addEventListener('DOMContentLoaded', () => {
    const scriptList = document.getElementById('script-list');

    // load file JSON
    fetch('scripts.json')
        .then(response => response.json())
        .then(data => {
            // Iterate over all key-value pairs in the JSON
            Object.keys(data).forEach(key => {
                const li = document.createElement('li');
                li.innerHTML = `${key} <button class="download-btn" data-url="${data[key]}">Download</button>`;
                scriptList.querySelector('ul').appendChild(li);
            });

            // add click event to download button
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
