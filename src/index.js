import FetchPhotos from "./fetchPhotos.js";

const searchQueryForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-form > input");
const galleryPart = document.querySelector(".gallery");
const loadMoreButton = document.querySelector(".load-more");

const fetchMaker = new FetchPhotos();

searchQueryForm.addEventListener("submit", onSubmit);

loadMoreButton.addEventListener("click", fetchArticles);

function onSubmit(event) {
  event.preventDefault();
  galleryPart.innerHTML = "";
  fetchMaker.resetPage();
  fetchMaker.request = searchInput.value;
  fetchArticles();
  event.currentTarget.reset();
}

function fetchArticles() {
  fetchMaker.newFetch().then(res => cardBuilder(res.data.hits));
}

function cardBuilder(photoSet) {
  let galleryToInput = "";
  photoSet.forEach(photo => {
    galleryToInput = galleryToInput + `
        <div class="photo-card">
            <img src="${photo.webformatURL}" alt="" loading="lazy" />
            <div class="info">
                <p class="info-item"><b>Likes</b> ${photo.likes}</p>
                <p class="info-item"><b>Views</b> ${photo.views}</p>
                <p class="info-item"><b>Comments</b> ${photo.comments}</p>
                <p class="info-item"><b>Downloads</b> ${photo.downloads}</p>
            </div>
        </div>`
  });
  galleryPart.innerHTML += galleryToInput;
}