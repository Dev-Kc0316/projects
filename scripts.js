const videos = document.querySelectorAll(".video-carousel video");
const prevBtn = document.querySelector(".video-carousel .prev");
const nextBtn = document.querySelector(".video-carousel .next");
let current = 0;
let interval;

function showVideo(index){
    videos.forEach(v => v.classList.remove("active"));
    videos[index].classList.add("active");
    videos[index].currentTime = 0;
    videos[index].play();
}

function nextVideo(){
    current = (current + 1) % videos.length;
    showVideo(current);
}
function prevVideo(){
    current = (current - 1 + videos.length) % videos.length;
    showVideo(current);
}
function startAutoSlide(){
    interval = setInterval(nextVideo, 4000);
}
function stopAutoSlide(){
    clearInterval(interval);
}

// EVENT LISTENERS
nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextVideo();
    startAutoSlide();
});
prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevVideo();
    startAutoSlide();
});

// Initialize
showVideo(current);
startAutoSlide();