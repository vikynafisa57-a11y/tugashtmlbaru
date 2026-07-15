function openModal(title, desc, img, link) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-desc").innerText = desc;
    document.getElementById("modal-img").src = img;

    const btn = document.querySelector(".book-now");

    btn.onclick = function () {
        window.open(link, "_blank");
    };

    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic(){

    if(music.paused){
        music.play();
        musicBtn.innerHTML = "SUGENG RAWUH TRAVELERS!";
    } 
    
    else{
        music.pause();
        musicBtn.innerHTML = "HI WELCOME TRAVELERS!";
    }
}


function openContact(){
    document.getElementById("contactModal").style.display = "flex";
}

function closeContact(){
    document.getElementById("contactModal").style.display = "none";
}


window.addEventListener("click", function(event){

    let contactModal = document.getElementById("contactModal");

    if(event.target == contactModal){
        contactModal.style.display = "none";
    }

});

document.getElementById("testimonialForm").addEventListener("submit", function(e){

    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    const ratingInput = document.querySelector('input[name="rating"]:checked');

    if(nama === ""){
        alert("Silakan isi nama terlebih dahulu!");
        return;
    }

    if(pesan === ""){
        alert("Silakan isi testimoni terlebih dahulu!");
        return;
    }

    if(!ratingInput){
        alert("Silakan pilih rating terlebih dahulu!");
        return;
    }

    if(!confirm("Yakin ingin mengirim testimoni?")){
        return;
    }

    const rating = parseInt(ratingInput.value);

    let stars = "";

    for(let i = 0; i < rating; i++){
        stars += '<i class="fa-solid fa-star"></i>';
    }

    const card = document.createElement("div");
    card.className = "card-testimoni new-testimoni";

    card.innerHTML = `
        <div class="rating">
            ${stars}
        </div>

        <p>“${pesan}”</p>

        <h4>- ${nama}</h4>

        <button class="delete-btn">
            <i class="fa-solid fa-trash"></i> Hapus
        </button>
    `;

    document.getElementById("testimoniContainer").prepend(card);

    simpanTestimoni();

    card.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    card.querySelector(".delete-btn").addEventListener("click", function(){

        if(confirm("Yakin ingin menghapus testimoni ini?")){
            card.remove();
            simpanTestimoni();
        }

    });

    this.reset();

    setTimeout(() => {
        alert("Terima kasih atas testimoninya!");
    }, 500);

});

function searchDestination() {
    let input = document.getElementById("searchDestination").value.toLowerCase();

    let cards = document.querySelectorAll(".destination .card");

    cards.forEach(function(card) {
        let title = card.querySelector("h4").textContent.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

const translations = {
    en: {
        home: "Home",
        destination: "Destination",
        testimoni: "Testimoni",
        contact: "Contact",
        heroTitle: "Wonder of Central Java",
        heroDesc: "Discover breathtaking destinations and plan your perfect adventure."
    },

    id: {
        home: "Beranda",
        destination: "Destinasi",
        testimoni: "Testimoni",
        contact: "Kontak",
        heroTitle: "Keajaiban Jawa Tengah",
        heroDesc: "Temukan destinasi menakjubkan dan rencanakan petualangan impianmu."
    },

    es: {
        home: "Inicio",
        destination: "Destino",
        testimoni: "Testimonios",
        contact: "Contacto",
        heroTitle: "Maravillas de Java Central",
        heroDesc: "Descubre destinos increíbles y planea tu aventura perfecta."
    },

    fr: {
        home: "Accueil",
        destination: "Destination",
        testimoni: "Témoignages",
        contact: "Contact",
        heroTitle: "Les Merveilles de Java Central",
        heroDesc: "Découvrez des destinations magnifiques et planifiez votre aventure parfaite."
    },

    jw: {
        home: "Ngarep",
        destination: "Panggonan Wisata",
        testimoni: "Pangandikan",
        contact: "Kontak",
        heroTitle: "Kaendahan Jawa Tengah",
        heroDesc: "Temokna papan wisata sing apik lan rencanakake lelunganmu."
    }
};

function changeLanguage(lang) {
    document.getElementById("navHome").innerText = translations[lang].home;
    document.getElementById("navDestination").innerText = translations[lang].destination;
    document.getElementById("navTestimoni").innerText = translations[lang].testimoni;
    document.getElementById("navContact").innerText = translations[lang].contact;

    document.getElementById("heroTitle").innerText = translations[lang].heroTitle;
    document.getElementById("heroDesc").innerText = translations[lang].heroDesc;
}

function simpanTestimoni() {
    const cards = [];

    document.querySelectorAll("#testimoniContainer .new-testimoni").forEach(card => {

        cards.push({
            nama: card.querySelector("h4").innerText.replace("- ", ""),
            pesan: card.querySelector("p").innerText.replace(/“|”/g, ""),
            rating: card.querySelectorAll(".fa-star").length
        });

    });

    localStorage.setItem("testimoni", JSON.stringify(cards));
    console.log(localStorage.getItem("testimoni"));
}

window.addEventListener("DOMContentLoaded", function () {

    const data = JSON.parse(localStorage.getItem("testimoni")) || [];

    data.reverse().forEach(item => {

        let stars = "";

        for (let i = 0; i < item.rating; i++) {
            stars += '<i class="fa-solid fa-star"></i>';
        }

        const card = document.createElement("div");
        card.className = "card-testimoni new-testimoni";

        card.innerHTML = `
            <div class="rating">
                ${stars}
            </div>

            <p>“${item.pesan}”</p>

            <h4>- ${item.nama}</h4>

            <button class="delete-btn">
                <i class="fa-solid fa-trash"></i> Hapus
            </button>
        `;

        document.getElementById("testimoniContainer").prepend(card);

        card.querySelector(".delete-btn").addEventListener("click", function () {

            if (confirm("Yakin ingin menghapus testimoni ini?")) {
                card.remove();
                simpanTestimoni();
            }

        });

    });

});