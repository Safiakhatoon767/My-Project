let images = [
    "https://picsum.photos/id/1015/800/450",
    "https://picsum.dev/image/1172/view",
    "https://picsum.dev/image/993/view"
];

// index ko track karne ke liye
let current_index = 0;

// image element pakad liye
let img_tag = document.querySelectorAll("#main-img");

// buttons pakad liye
let next_button = document.querySelector("#next-btn");
let prev_button = document.querySelector("#prev-btn");

// next button click k liye
next_button.addEventListener("click", () => {
    current_index++;
    if (current_index >= images.length) {
        current_index = 0;
    }
    img_tag.src = images[current_index];
});

// prev button click k liye
prev_button.addEventListener("click", () => {
    current_index--;
    if (current_index < 0) {
        current_index = images.length - 1;
    }
    img_tag.src = images[current_index];
});
