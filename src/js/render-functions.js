import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

const addImages = response => {
    const galleryList = response.hits.map(image => {
        return `<li class="gallery-item">
            <a class="gallery-link" href=${image.largeImageURL}>
                <img
                    src=${image.webformatURL}
                    alt=${image.tags}
                />
            </a>
                 <div>
                <p>Likes ${image.likes}</p>
                <p>Views ${image.views}</p>
                <p>Comments ${image.comments}</p>
                <p>Downloads ${image.downloads}</p>
            </div>
                </li>`
    }).join('');
    gallery.insertAdjacentHTML('beforeend', galleryList);
    lightbox.refresh();
};
export default addImages;