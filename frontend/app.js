const loadBtn =
document.getElementById("loadBtn");

const container =
document.getElementById("internContainer");

const loader =
document.getElementById("loader");

const totalInterns =
document.getElementById("totalInterns");

const apiStatus =
document.getElementById("apiStatus");

const searchInput =
document.getElementById("searchInput");

let interns = [];

loadBtn.addEventListener(
    "click",
    loadInterns
);

async function loadInterns() {

    loader.classList.remove("hidden");

    try {

        const response =
        await fetch(
        "http://localhost:5000/api/interns"
        );

        if(!response.ok){
            throw new Error(
            "Failed to fetch data"
            );
        }

        interns =
        await response.json();

        displayInterns(interns);

        totalInterns.textContent =
        interns.length;

        apiStatus.textContent =
        "Online";

    }
    catch(error){

        container.innerHTML =
        `
        <div class="card">
            <h3>⚠ Error</h3>
            <p>${error.message}</p>
        </div>
        `;

        apiStatus.textContent =
        "Offline";
    }
    finally{
        loader.classList.add("hidden");
    }
}

function displayInterns(data){

    container.innerHTML = "";

    data.forEach(intern => {

        const card =
        document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${intern.name}</h3>
            <p>ID: ${intern.id}</p>
            <span class="role">
                ${intern.role}
            </span>
        `;

        container.appendChild(card);

    });
}

searchInput.addEventListener(
    "keyup",
    () => {

        const value =
        searchInput.value.toLowerCase();

        const filtered =
        interns.filter(intern =>
            intern.name
            .toLowerCase()
            .includes(value)
        );

        displayInterns(filtered);
    }
);