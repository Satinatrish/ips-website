document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cards-container");
    const searchBar = document.getElementById("search-bar");

    // Hardcoded sample data
    const sampleData = [
        {
            id: 1,
            title: "Event 1",
            date: "2025-01-01",
            festival: "Festival 1",
            description: "Description of Event 1",
            image: "path/to/image1.jpg"
        },
        {
            id: 2,
            title: "Event 2",
            date: "2025-02-01",
            festival: "Festival 2",
            description: "Description of Event 2",
            image: "path/to/image2.jpg"
        },
        {
            id: 3,
            title: "Event 3",
            date: "2025-03-01",
            festival: "Festival 3",
            description: "Description of Event 3",
            image: "path/to/image3.jpg"
        },
        {
            id: 4,
            title: "Event 4",
            date: "2025-04-01",
            festival: "Festival 4",
            description: "Description of Event 4",
            image: "path/to/image4.jpg"
        }
    ];

    // Retrieve localStorage data or default to an empty array if none exists
    const storedData = JSON.parse(localStorage.getItem("timelineData")) || [];

    // Combine hardcoded sample data and localStorage data
    const combinedData = [...sampleData, ...storedData];

    // Save combined data to localStorage if not already present
    if (!localStorage.getItem("timelineData")) {
        localStorage.setItem("timelineData", JSON.stringify(combinedData));
    }

    // Function to sort data by date (newest first)
    function sortByDate(data) {
        return data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Newest first
    }

    // Display data as cards
    function displayData(data) {
        const sortedData = sortByDate(data);
        cardsContainer.innerHTML = "";
        sortedData.forEach(item => {
            const card = document.createElement("div");
            card.className = "col-md-4 mb-4";
            card.innerHTML = `
                <div class="card">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}" style="height: 300px; object-fit: cover;">
                    <div class="card-body">
                        <h4 class="card-title" style="font-weight: bold;">${item.title}</h4>
                        <p><strong>Date:</strong> ${item.date}</p>
                        <p><strong>Festival:</strong> ${item.festival}</p>
                        <p><strong>Description:</strong> ${item.description}</p>
                        <button class="btn btn-primary" data-id="${item.id}" data-bs-toggle="modal" data-bs-target="#viewModal">View Details</button>
                    </div>
                </div>
            `;

            cardsContainer.appendChild(card);
        });
    }

    // Event listener to populate the modal
    cardsContainer.addEventListener("click", (e) => {
        if (e.target.matches(".btn-primary")) {
            const itemId = e.target.getAttribute("data-id");
            const item = combinedData.find(t => t.id == itemId);

            if (item) {
                document.getElementById("viewImage").src = item.image;
                document.getElementById("viewTitle").textContent = item.title;
                document.getElementById("viewDate").textContent = item.date;
                document.getElementById("viewFestival").textContent = item.festival;
                document.getElementById("viewDescription").textContent = item.description;
            }
        }
    });

    // Search functionality
    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        const filteredData = combinedData.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.date.includes(query) ||
            item.festival.toLowerCase().includes(query)
        );
        displayData(filteredData);
    });

    // Initial display of data
    displayData(combinedData);
});
