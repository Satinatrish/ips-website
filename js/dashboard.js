// Dashboard page-specific functionality
document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.getElementById("cards-container");

    // Retrieve data from localStorage
    const storedData = JSON.parse(localStorage.getItem("contentData")) || [];

    // Clear existing cards (if any)
    cardsContainer.innerHTML = "";

    // Generate cards dynamically
    storedData.forEach((content, index) => {
        const card = document.createElement("div");
        card.className = "col-md-4 card";

        card.innerHTML = `
            <div class="card-body">
                <img src="${content.image}" class="card-img-top" alt="${content.title}" style="max-height: 200px; object-fit: cover;">
                <h5 class="card-title">${content.title}</h5>
                <p class="card-text"><strong>Date:</strong> ${content.date}</p>
                <p class="card-text"><strong>Festival:</strong> ${content.festival}</p>
                <p class="card-text">${content.description}</p>
            </div>
        `;

        cardsContainer.appendChild(card);
    });

    // Search Bar functionality
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", function () {
        const query = searchBar.value.toLowerCase();
        const filteredData = storedData.filter((content) => 
            content.title.toLowerCase().includes(query) || 
            content.description.toLowerCase().includes(query) ||
            content.festival.toLowerCase().includes(query)
        );

        cardsContainer.innerHTML = "";
        filteredData.forEach((content, index) => {
            const card = document.createElement("div");
            card.className = "col-md-4 card";
            card.innerHTML = `
                <div class="card-body">
                    <img src="${content.image}" class="card-img-top" alt="${content.title}" style="max-height: 200px; object-fit: cover;">
                    <h5 class="card-title">${content.title}</h5>
                    <p class="card-text"><strong>Date:</strong> ${content.date}</p>
                    <p class="card-text"><strong>Festival:</strong> ${content.festival}</p>
                    <p class="card-text">${content.description}</p>
                </div>
            `;
            cardsContainer.appendChild(card);
        });
    });
});

