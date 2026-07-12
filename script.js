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

    card.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    card.querySelector(".delete-btn").addEventListener("click", function(){

        if(confirm("Yakin ingin menghapus testimoni ini?")){
            card.remove();
        }

    });

    this.reset();

    setTimeout(() => {
        alert("Terima kasih atas testimoninya!");
    }, 500);

});

const translations = {
    en: {
        home: "Home",
        destination: "Destination",
        testimonial: "Testimonials",
        contact: "Contact",

        heroTitle: "Wonder of Central Java",
        heroDesc: "Discover breathtaking destinations and plan your perfect adventure.",
        welcome: "WELCOME TRAVELERS!"
    },

    id: {
        home: "Beranda",
        destination: "Destinasi",
        testimonial: "Testimoni",
        contact: "Kontak",

        heroTitle: "Keajaiban Jawa Tengah",
        heroDesc: "Temukan destinasi menakjubkan dan rencanakan petualangan terbaikmu.",
        welcome: "SELAMAT DATANG!"
    },

    es: {
        home: "Inicio",
        destination: "Destino",
        testimonial: "Testimonios",
        contact: "Contacto",

        heroTitle: "Maravillas de Java Central",
        heroDesc: "Descubre destinos increíbles y planea tu aventura perfecta.",
        welcome: "¡BIENVENIDOS!"
    },

    fr: {
        home: "Accueil",
        destination: "Destination",
        testimonial: "Témoignages",
        contact: "Contact",

        heroTitle: "Les Merveilles de Java Central",
        heroDesc: "Découvrez des destinations magnifiques et préparez votre aventure parfaite.",
        welcome: "BIENVENUE !"
    },

    jw: {
        home: "Ngarep",
        destination: "Papan Wisata",
        testimonial: "Pangandikan",
        contact: "Kontak",

        heroTitle: "Kaendahan Jawa Tengah",
        heroDesc: "Temokna papan wisata sing endah lan rancang lelunganmu.",
        welcome: "SUGENG RAWUH!"
    }
};

function changeLanguage(lang){

    // Navbar
    document.getElementById("navHome").textContent = translations[lang].home;
    document.getElementById("navDestination").textContent = translations[lang].destination;
    document.getElementById("navTestimoni").textContent = translations[lang].testimonial;
    document.getElementById("navContact").textContent = translations[lang].contact;

    // Hero
    if(document.getElementById("heroTitle")){
        document.getElementById("heroTitle").textContent = translations[lang].heroTitle;
    }

    if(document.getElementById("heroDesc")){
        document.getElementById("heroDesc").textContent = translations[lang].heroDesc;
    }

    if(document.getElementById("musicBtn")){
        document.getElementById("musicBtn").textContent = translations[lang].welcome;
    }
}