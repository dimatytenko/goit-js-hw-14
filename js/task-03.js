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

const galleryRef = document.querySelector(".gallery");

const createItems = (arr) => {
  return arr
    .map(({ url, alt }) => {
      return `<li class="gallery__item"><img class="gallery__img" src="${url}" alt="${alt}"></li>`;
    })
    .join("");
};

const galleryItems = createItems(images);

galleryRef.insertAdjacentHTML("afterbegin", galleryItems);

galleryRef.style.display = "flex";
galleryRef.style.justifyContent = "space-around";
galleryRef.style.listStyle = "none";
galleryRef.style.padding = "0";
galleryRef.style.margin = "0";
galleryRef.style.width = "100%";
galleryRef.style.flexWrap = "wrap";
galleryRef.style.alignItems = "center";
galleryRef.style.alignContent = "center";
galleryRef.style.backgroundColor = "lightgrey";
galleryRef.style.border = "1px solid black";
galleryRef.style.borderRadius = "10px";

const galleryItemRef = document.querySelectorAll(".gallery__item");
galleryItemRef.forEach((item) => {
  item.style.display = "flex";
  item.style.justifyContent = "center";
  item.style.alignItems = "center";
  item.style.width = "300px";
  item.style.height = "300px";
  item.style.borderRadius = "10px";
  item.style.overflow = "hidden";
  item.style.margin = "10px";
});

const galleryImgRef = document.querySelectorAll(".gallery__img");
galleryImgRef.forEach((img) => {
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  img.style.borderRadius = "10px";
});
