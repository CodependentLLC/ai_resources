document.addEventListener("DOMContentLoaded", function() {
    // Load the JSON file
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const linksContainer = document.getElementById('links-container');
  
        // Loop through each link in the JSON and render it
        data.links.forEach(link => {
          const linkElement = document.createElement('a');
          linkElement.href = link.url;
          linkElement.textContent = link.name;
          linkElement.target = "_blank";  // Opens link in a new tab
          linksContainer.appendChild(linkElement);
          linksContainer.appendChild(document.createElement('br'));
        });
      })
      .catch(error => console.error('Error loading the JSON file:', error));
  });
  