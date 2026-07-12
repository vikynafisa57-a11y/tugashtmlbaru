function openModal(title, desc, img, link) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-desc").innerText = desc;
    document.getElementById("modal-img").src = img;

    const btn = document.querySelector(".book-now");

    btn.onclick = function () {
        window.open(link, "_blank");
    };

    document.getElementById("modal").style.display = "block";
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

    if(nama === "" || pesan === ""){
        alert("Silakan isi nama dan testimoni terlebih dahulu!");
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
    `;

    document.getElementById("testimoniContainer").prepend(card);

    alert("Terima kasih atas testimoninya!");

    this.reset();

});