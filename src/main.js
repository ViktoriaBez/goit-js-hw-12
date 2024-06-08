import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import userGallery from "./js/pixabay-api";
import addImages from "./js/render-functions";
const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btn = document.querySelector('.load');
btn.style.display = 'none';
import { perPage } from "./js/pixabay-api";
let myPage = 1;
let userSearch;

form.addEventListener('submit', async event => {
    event.preventDefault();
    userSearch = event.target.elements.search.value.trim();
    loader.style.display = 'flex';
    btn.style.display = 'none';
    gallery.innerHTML = '';

    try {
        myPage = 1;
        const response = await userGallery(userSearch, myPage);
        if (response.hits.length === 0) {
            btn.style.display = 'none';
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!'
            })
        } else {
            addImages(response)
            btn.style.display = 'flex';

            if (response.totalHits <= 15) {
                btn.style.display = 'none';
            }
        }
    } catch (error) {
        console.error(error);
    } finally {
        loader.style.display = 'none';
    }
});

const scroll = () => {
    const galleryItem = document.querySelector('.gallery-item');
    const itemHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
        top: itemHeight * 2,
        behavior: 'smooth'
    });
};

btn.addEventListener('click', async () => {
    myPage += 1;

    try {
        const response = await userGallery(userSearch, myPage);
        const totalPages = Math.ceil(response.totalHits / perPage);

        loader.style.display = 'flex';
        addImages(response)
        scroll();
        if (myPage >= totalPages) {
            btn.style.display = 'none';
            return iziToast.error({
                position: "topRight",
                message: "We're sorry, there are no more posts to load"
            });
        }
    } catch (error) {
        console.error(error);
    } finally {
        loader.style.display = 'none';
    }
});