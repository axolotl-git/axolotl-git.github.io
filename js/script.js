document.addEventListener('DOMContentLoaded', () => {
    const scriptList = document.getElementById('script-list');

    fetch('scripts.json')
        .then(response => response.json())
        .then(data => {
            Object.entries(data).forEach(([key, value]) => {
                const li = document.createElement('li');
                li.textContent = `${key}: ${value}`;
                scriptList.querySelector('ul').appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
});
