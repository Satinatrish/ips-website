document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cards-container");
    const searchBar = document.getElementById("search-bar");

    // Hardcoded sample data
    const sampleData = [
        {
            id: 1,
            title: "Ethnic Sports",
            date: "March 23-25, 2024",
            festival: "Kaamulan Festival ",
            description: "A showcase of traditional ethnic sports during the Kaamulan Festival.",
            image: "https://www.shutterstock.com/editorial/image-editorial/M6T8A7y9Ncj3ge1fNDkwMDU=/filipino-man-indigenous-manobo-tribe-competes-archery-440nw-10189028j.jpg"
        },
        {
            id: 2,
            title: "Laga Daw Maama ta Bukidnon",
            date: "March 24, 2024",
            festival: "Kaamulan Festival ",
            description: "A cultural event featuring traditional rituals of the Bukidnon people.",
            image: "https://scontent.fmnl40-1.fna.fbcdn.net/v/t39.30808-6/433465106_824524252817308_31395520163340060_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF8UqouRjw5ICLT_4jAUIj9MOOOZ2QjCqYw445nZCMKpqV5N6-xb7yeoVr_My9PxEk5vAToXSgcv2NMcbCy6zze&_nc_ohc=Fnm4ALZJ-G0Q7kNvgFgPtVk&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&_nc_gid=AuVwFP0tNbLrDbCJe3dWqj9&oh=00_AYDfSyVLuF2RAI7y22_p850NPtA-zepzLcnCCWo6Um1Dwg&oe=674DA291"
        },
        {
            id: 3,
            title: "Ethnocultural Music Festival",
            date: "April 4, 2024",
            festival: "Kaamulan Festival ",
            description: "A music festival celebrating the ethnocultural music of Bukidnon.",
            image: "https://scontent.fmnl40-1.fna.fbcdn.net/v/t39.30808-6/423715486_465504195811320_4987750057009442209_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFBfWWPKCzL4B4K77_1tv7dd0NqfJhPQ2N3Q2p8mE9DY-ODM78bvvqWA9U_b6or5G2fdy15DeJCKn8u2bwdhG2o&_nc_ohc=RNuI1ZrGt1UQ7kNvgEHvnS0&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&_nc_gid=Af9E_IwUVyOZL90jS3idgvH&oh=00_AYCUJz7wLSafppHI9GkH6_YYKNd-qunwW-rUkQwKf2L0DA&oe=674D9F10"
        },
        {
            id: 4,
            title: "Traditional Indigenous Cooking Show",
            date: "April 11, 2024",
            festival: "Kaamulan Festival ",
            description: "A cooking show that features traditional Bukidnon dishes.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8C08XsAbaLUuFNzsq3_xxPorXy7otuerR3Q&s"
        },
        {
            id: 5,
            title: "Tribal Mass Wedding",
            date: "April 11, 2024",
            festival: "Kaamulan Festival ",
            description: "The Kaamulan Festival is the ideal occasion to showcase Tribal wedding traditions in the Philippines and the unique indigenous culture of Bukidnon’s seven tribes namely, the Higaonon, Talaandig, Manobo, Matigsalug, Tigwahanon, Bukidnon, and Umayamnon.",
            image: "https://scontent.fmnl40-2.fna.fbcdn.net/v/t39.30808-6/437893814_405900402394573_6706692494258274842_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHh1lnrXhWBqBPr4VeD7HcKqW1O6GTB_lCpbU7oZMH-UDt6WT1L43IUFllgvXVKtH1FEzxreFEKy94HRd80p8Y7&_nc_ohc=CI9EnJ_30IEQ7kNvgHctA-U&_nc_zt=23&_nc_ht=scontent.fmnl40-2.fna&_nc_gid=AQxy7OrU0AyVaF1UBIsq6f1&oh=00_AYAyAIi9rXnWPw65crILvDIJsu4ZP1w1hZADuN1bWT9wlg&oe=674D83B8"
        },
        {
            id: 6,
            title: "Panalawahig Ritual, Piniliyapan hu Bukidnon",
            date: "April 19, 2024",
            festival: "Kaamulan Festival ",
            description: "A ritual of renewal and prosperity for the people of Bukidnon.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmEKQRYMRGZEtMvkS1G81iCoTqKZUa3ppyA&s"
        },
        {
            id: 7,
            title: "Bansalumad Peace Caravan & Concert",
            date: "April 23, 2024",
            festival: "Kaamulan Festival",
            description: "A peace caravan featuring music and cultural performances.",
            image: "https://scontent.fmnl40-2.fna.fbcdn.net/v/t39.30808-6/439318888_1793364104519427_7018131574434057800_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHO5CBmjIjWGWshkV0egVK0VsN1HSBdK4BWw3UdIF0rgHTrHwACMEeKB7aDGnpPT9O6XGt06EXQtmyS5EtNYtRg&_nc_ohc=mV9If8d0v2kQ7kNvgELhuyY&_nc_zt=23&_nc_ht=scontent.fmnl40-2.fna&_nc_gid=AQ_1_cx4etPokSJu_C8lDpD&oh=00_AYCuXxugMkQQlIm0j1IqwwIBcmYk7c2YvO5eKfn-6q5izQ&oe=674DA52D"
        },
        {
            id: 8,
            title: "Panungdan (Pamada), Pamahandi Daw Singapo",
            date: "April 4, 2024",
            festival: "Kaamulan Festival",
            description: "A Traditional Bukidnon ritual with food offerings.",
            image: "https://i.ytimg.com/vi/kC48dTW5HLg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLABCJpJ1VZAjrJ1YCgv1Ehlc6N_YA"
        },
        {
            id: 9,
            title: "Banog-Banog Story",
            date: "April 27, 2024",
            festival: "Banog-Banog Festival ",
            description: "The Banog-Banog story, a traditional tale passed through generations in the Municipality of Manolo Fortich Bukidnon.",
            image: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/438259987_464564315917490_7056546611941682456_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG-JA_rUTFzObHPh_PAIEqMo4aFzDeht3GjhoXMN6G3cXkQgo48YMJud8K7qRa7hcoQtJvMYNmvKWJgcvqIL0Zh&_nc_ohc=SVp8-rR5T08Q7kNvgFxuQ6W&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=ArNwW-3qSjYNXZDNRQGrFB_&oh=00_AYCkZ2lovyR6i5hmWEukWYii31Tm2jBwaDnXWlTYCm10zQ&oe=674D9494"
        },
        {
            id: 10,
            title: "Banog-Banog Story & Cultural Show",
            date: "April 28, 2024",
            festival: "Banog-Banog Festival",
            description: "A Cultural show and a Street dancing parade based on the Banog-Banog story.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLLQJ1FBsr3lWLYIAyej-Wdl6DaIpTt46kg&s"
        },
        {
            id: 11,
            title: "Ritual, Short Program",
            date: "August 17, 2024",
            festival: "Anlaw Ta Palaopao",
            description: "A Ritual and short program to start the festivities.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLLQJ1FBsr3lWLYIAyej-Wdl6DaIpTt46kg&s"
        },
        {
            id: 12,
            title: "Mass w/ Ethnic Attire, Indigenous Games, Search for Laga ta Palaopao",
            date: "August 18, 2024",
            festival: "Anlaw Ta Palaopao",
            description: "A mass with ethnic attire followed by indigenous games and a search for Laga ta Palaopao.",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFeNdXfyfAKrTU1zJ3GCE0iAcnyhEO2_bzQ73o8jvqo5XqiR3if7LPnhkO__EU5naHgWJ747MfYR8HQ4YGktFsef6kiADZeojx--qAEbZ9ZLq3AuwnMj1foLgzzOuuczBCCKJ9VPbzWID_CH7IAlHivK9w0_r-L2PwiBOwiKf_DA0O5V0Pmg/s702/2339_PerformingArts_1.width-3000.jpg"
        },
        {
            id: 13,
            title: "Ritual",
            date: "October 25, 2024",
            festival: " INDIGENOUS PEOPLES MONTH CELEBRATION",
            description: "A Ritual to honor the Indigenous Ancestors and Heritage of the Community .",
            image: "https://scontent.fmnl40-1.fna.fbcdn.net/v/t39.30808-6/307184835_405505325071350_3464421608604110175_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFZK13n131iuuowUmai_6KKay7slWlIf7prLuyVaUh_ugTSIqDAoLrRkZrnaoeysKL1J9jcQgLBMQcD2kbpZeLF&_nc_ohc=I6e3teszaOAQ7kNvgEaxO3_&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&_nc_gid=AqeQ1fDNLYUXLHrOwcCyJnp&oh=00_AYBpC0na2_xzSMiyh3x-wK6ijJZgBAanX7xAAQL257N6tg&oe=674D9B60"
        },
        {
            id: 14,
            title: "Intermission Number (Binukid Songs)",
            date: "October 25, 2024",
            festival: " INDIGENOUS PEOPLES MONTH CELEBRATION",
            description: "A performance of traditional Binukid songs.",
            image: "https://scontent.fmnl40-1.fna.fbcdn.net/v/t39.30808-6/455919073_8030336213680850_6300596759114819544_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGLgSIce5X7M6_xkd1v7yjkGkPLHtmsABYaQ8se2awAFiWEW90mgXFG5MdpdS-QPMi0TxUXh4BDlzN0V7ybBnmm&_nc_ohc=Uc1OSRyoEi8Q7kNvgHgCa6x&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&_nc_gid=Aqo3vaFwUQ8A11Xe0V5j9hs&oh=00_AYDWTszp6vnP7HY6E7Xlsk-q_fE6nOx6Xs17lSf8x4niqw&oe=674D9789"
        },
        {
            id: 15,
            title: "Intermission Number (Ethnic Dance)",
            date: "October 25, 2024",
            festival: " INDIGENOUS PEOPLES MONTH CELEBRATION",
            description: "A performance of traditional ethnic dance.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7C79UIvkPm46LgILEyDtE0eYZkzmOcdDEQ&s"
        },
        {
            id: 16,
            title: "Closing Ritual",
            date: "October 25, 2024",
            festival: "INDIGENOUS PEOPLES MONTH CELEBRATION",
            description: "A closing ritual marking the end of the celebration.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRAdzy3tQ5xWI-38wLm3OkbnTsH_lqTrYR-Q&s"
        },
        {
            id: 17,
            title: "Ethnic Tribal Sports",
            date: "October 25, 2024",
            festival: "INDIGENOUS PEOPLES MONTH CELEBRATION ",
            description: "Traditional ethnic tribal sports including Duso, Bag-id, Galing hu Mais, and Kag-asud hu Humay.",
            image: "https://www.shutterstock.com/editorial/image-editorial/M3T8A1yaN5j0g819NDg5OTg=/filipinos-men-indigenous-manobo-tribe-compete-pestle-440nw-10189028f.jpg"
        },
        {
            id: 18,
            title: "Traditional Tribal Cooking",
            date: "October 25, 2024",
            festival: "INDIGENOUS PEOPLES MONTH CELEBRATION ",
            description: "Traditional tribal cooking showcasing local Bukidnon dishes.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSko1BW430tyrPp9LYb3CzSnIFJudvjrs8Q&s"
        },
        {
            id: 19,
            title: "Ritual / Pangampo",
            date: "October 20, 2024",
            festival: "Anlaw Ta Dalirig",
            description: "A presentation of the traditional Dugso and Dasang dance.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM6rkR_3tcc0n0HvsonWmK-zftfq_9Nos6Cg&s"
        },
        {
            id: 20,
            title: "IP Night Presentation: Dugso, Dasang",
            date: "October 22, 2024",
            festival: "Anlaw Ta Dalirig",
            description: "A presentation of the traditional Dugso and Dasang dance.",
            image: "https://scontent.fmnl40-1.fna.fbcdn.net/v/t39.30808-6/464306582_1234451671170997_33135297150126334_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHbrrSdh7cW8MCnSAdkU_Ha2GI332dATHDYYjffZ0BMcMDaGZjG79dybU0SeEvPUQRT0eeLPPWJZ9-9uLlj4QR1&_nc_ohc=TcNaYfR9i80Q7kNvgEz-u3t&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&_nc_gid=AiklNdAbEWdKJ5G75UT17Zl&oh=00_AYCPReZKNh69n1CgimtkG0lkmwl1xtCb6MHlAJyvE7Exxg&oe=674D9853"
        },
        {
            id: 21,
            title: "Tribal Games",
            date: "October 25, 2024",
            festival: "Anlaw Ta Dalirig",
            description: "Traditional tribal games for all ages.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXFz6_2skSh0ox1FLI9kVf6q7UQJCtDERzw&s"
        },
        {
            id: 22,
            title: "Pan-aha hu Madagway ha Inay",
            date: "October 25, 2024",
            festival: "Anlaw Ta Dalirig",
            description: "A pageant that showcase the Indigenous beauty and talents of Mothers in Baranggay Dalirig .",
            image: "https://scontent.fmnl40-2.fna.fbcdn.net/v/t39.30808-6/464732349_8498862160169387_9180681720804477359_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEuUn6QBVl8X2YYa1OBE3cSXgcxZ9_V4MFeBzFn39XgwZZeWw-NjtTu_I83R9Msy7UQzPUb3fFkUSqjL4qIPeG-&_nc_ohc=lJNEvQUAS6kQ7kNvgHstSdm&_nc_zt=23&_nc_ht=scontent.fmnl40-2.fna&_nc_gid=AmxfZ41iE-HtWDWylDuuTt3&oh=00_AYDBOgaO4s0KzzPmVoU68csNcKmwDARN_nr7ZBPXLS9odg&oe=674D928D"
        },
        {
            id: 23,
            title: "Laga Daw Malaki ta NBSC",
            date: "October 31, 2024",
            festival: "IP Month Celebration at NBSC",
            description: "A Pageant that promotes Indigenous traditions and beleifs.",
            image: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/468220576_9162745273738527_5535992715861911786_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEivq9HIdj_yst9M0pbPgTkm6kTjYiDKPabqRONiIMo9iIPyjD1VAynl-6Knwm1t34ihKDCG6jm5D5ULbi5m07c&_nc_ohc=0AkI-gW-7HAQ7kNvgHjd0Kg&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=A61B0xfftc1Qcwc4n8e40lu&oh=00_AYBm-eSa7szwEuFSq4UjtMRdMggmNroswC3iKck25VaiOA&oe=674D912A"
        },
        {
            id: 24,
            title: "IP Congress",
            date: "October 21, 2024",
            festival: "IP Month Celebration",
            description: "A congress to discuss the issues and concerns of Indigenous Peoples.",
            image: "https://buksu.edu.ph/wp-content/uploads/2024/03/DSC06367-1024x683.jpg"

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
