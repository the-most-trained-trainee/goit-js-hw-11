import axios from "axios";

const searchQueryForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-form > input");

searchQueryForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const enteredRequest = searchInput.value;

    // fetch("https://pixabay.com/api/?key=29078045-8c2db167d821a84d590b709ce&q=yellow+flowers&image_type=photo&pretty=true")
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     })
    axios.get("https://pixabay.com/api/?key=29078045-8c2db167d821a84d590b709ce&q=yellow+flowers&image_type=photo&pretty=true")
        .then((response) => {
            console.log(response);
        })
    // .then((data) => {
    //     console.log(data);
    // })




    event.currentTarget.reset();
}



// key - твій унікальний ключ доступу до API.
//     q - термін для пошуку.Те, що буде вводити користувач.
//         image_type - тип зображення.На потрібні тільки фотографії, тому постав значення photo.
//             orientation - орієнтація фотографії.Постав значення horizontal.
//                 safesearch - фільтр за віком.Постав значення true.