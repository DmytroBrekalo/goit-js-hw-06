const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const createGalleryItem = ({ url, alt }) =>
  `<li class="gallery__item"><img class="gallery__img" src = "${url}" alt = "${alt}"></li>`;
const galleryMarkup = images.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.style.maxWidth = "1600px";
gallery.style.display = "flex";
gallery.style.gap = "20px";

const liEls = gallery.querySelectorAll(".gallery__item");
liEls.forEach((li) => {
  li.style.listStyle = "none";
});

const imgEls = gallery.querySelectorAll(".gallery__img");
imgEls.forEach((img) => {
  img.style.display = "block";
  img.style.height = "324px";
  img.style.maxWidth = "100%";
});
