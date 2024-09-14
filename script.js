document.addEventListener("DOMContentLoaded", function() {
    const linksContainer = document.getElementById('links-container');
    const searchInput = document.getElementById('search');
  
    // Load the JSON file
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const links = data.links;
        displayLinks(links);
  
        // Add event listener for search functionality
        searchInput.addEventListener('input', function(e) {
          const searchTerm = e.target.value.toLowerCase();
          const filteredLinks = links.filter(link => 
            link.name.toLowerCase().includes(searchTerm) ||
            (link.description && link.description.toLowerCase().includes(searchTerm))
          );
          displayLinks(filteredLinks);
        });
      })
      .catch(error => console.error('Error loading the JSON file:', error));
  
    // Function to display links as cards
    function displayLinks(links) {
      linksContainer.innerHTML = ''; // Clear existing content
  
      if (links.length === 0) {
        linksContainer.innerHTML = '<p>No AI tools found.</p>';
        return;
      }
  
      links.forEach(link => {
        // Create card element
        const card = document.createElement('div');
        card.classList.add('card');
  
        // Create title element
        const title = document.createElement('h2');
        title.textContent = link.name;
  
        // Create link button
        const linkButton = document.createElement('a');
        linkButton.href = link.url;
        linkButton.textContent = 'Visit';
        linkButton.target = "_blank";
        linkButton.rel = "noopener noreferrer";
  
        // Append elements to card
        card.appendChild(title);
        card.appendChild(linkButton);
  
        // Append card to container
        linksContainer.appendChild(card);
      });
    }
  });
  