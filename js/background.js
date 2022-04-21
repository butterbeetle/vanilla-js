const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

const cImage = images[ Math.floor( Math.random() * images.length ) ];

const bgImage = document.createElement("img");

bgImage.src = `img/${cImage}`;

document.body.appendChild(bgImage);