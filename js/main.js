import {productDetailData} from "./data.js";

console.log(productDetailData);

console.log(productDetailData.hotel.name);

console.log(productDetailData.topFacilities);

console.log(productDetailData.topFacilities[2].id);

const facilitis = document.querySelector("#facilitis")

let html = ``;

for(let i=0; i<productDetailData.topFacilities.length; i++) {
    html+=`
    <li><img src="./img/${productDetailData.topFacilities[i].id}.svg">${productDetailData.topFacilities[i].label}</li>
    `;
}

console.log(productDetailData.rooms[0]);

facilitis.innerHTML=html;

