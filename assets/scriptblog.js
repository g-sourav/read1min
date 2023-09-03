
function loadSuggestedBlogs() {
         fetch("testtd.json")
        .then(response => response.json())
        .then(data => {
            const suggestedBlogs = document.getElementById('suggestedBlogs');
            let html = '';

            if (data.length > 0) {
                for (let i = data.length - 1; i >= 0; i--) {
                const card = document.createElement('div');
                //card.classList.add('col-md-4', 'mb-4');
                    const item= data[i];
                card.innerHTML = `
                    <div class="sug-card rounded bg-white mt-1">
                        <img src="${item.image}" class="card-img" alt="${item.title}">
                        <div class="card-body ml-1">
                            <h6 class="card-title"><a href="/${item.dataPath}" target="_blank">${item.title}</a></h6>
                            <p class="card-text mt-2">Date: ${item.date}</p>
                        </div>
                    </div>
                `;
        
                // Append the card to the container
                suggestedBlogs.appendChild(card);
        
            }
        };

           // suggestedBlogs.innerHTML = html;
        })
        .catch(error => {
            console.error('Failed to load suggested blogs:', error);
        });
}

loadSuggestedBlogs();

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add event listeners to the navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSectionId = link.getAttribute('href');
            scrollToSection(targetSectionId);
        });
    });
});