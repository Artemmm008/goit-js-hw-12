import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = form.elements.query;

hideLoader();

form.addEventListener("submit", e => {
    e.preventDefault();
    const query = input.value.trim();

    if (!query) {
        iziToast.warning({
            message: "Please enter a search term!",
            position: "topRight",
        });
        return;
    }

    showLoader();
    clearGallery();

    getImagesByQuery(query)
    .then(data => {
        const hits = data.hits; 

        if (hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
        } else {
            createGallery(hits);
        }
        
        hideLoader(); 
        form.reset();
    })
    .catch(error => {
        iziToast.error({
            message: "Error",
            position: "topRight",
        });
        console.error(error);
        
        hideLoader();
        form.reset();
    });
})