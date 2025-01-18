// let products = [
//     {
//         title:"bestseller",
//         id:1,
//         price: 750,
//         image: "./image/bestseller.png",
//         des: "Trendy models of our experts, for the love of your life selected"
//     },
//     {
//         title:"solitaire",
//         id:2,
//         price: 1200,
//         image: "./image/solitaire.png",
//         des: "Trendy models of our experts, for the love of your life selected"
//     },
//     {
//         title:"platinum",
//         id:3,
//         price: 650,
//         image: "./image/platinum.png",
//         des: "Trendy models of our experts, for the love of your life selected"
//     },
//     {
//         title:"cheap",
//         id:4,
//         price: 850,
//         image: "./image/cheap.png",
//         des: "Trendy models of our experts, for the love of your life selected"
//     },
    
// ]

// let products = document.querySelector(".products")

// products.innerHTML = products.map((item) => {
//     return`
//          <div class="card">
//                             <img src="${item.image}" alt="">
//                             <h1>${item.title}</h1>
//                             <p>${item.des}</p>
//                             <button onclick="addCart('${item.id}')">Discover now</button>
//                         </div>
//     `
// }).join("")


let products = document.querySelector(".products");

const productItems = [
    {
        image: "./image/roza.png",
        title: "101 красная роза",
        price: "2800 som",
        id: 1,
    },
    {
        image: "./image/pion.png",
        title: "25 розовых пионовидных роз",
        id: 2,
    },
    {
        image: "./image/vlublennost.png",
        title: "Влюбленность",
        id: 2,
    },
    {
        image: "./image/konzina.png",
        title: "Конзина все для тебя",
        id: 2,
    },
    {
        image: "./image/roza.png",
        title: "99 роз",
        id: 2,
    },
    {
        image: "./image/pion.png",
        title: "99 роз",
        id: 2,
    },
    {
        image: "./image/vlublennost.png",
        title: "99 роз",
        id: 2,
    },
    {
        image: "./image/konzina.png",
        title: "Конзина все для тебя",
        id: 2,
    },
    
];

products.innerHTML = productItems.map((item) => {
    return `
        <div class="card">
            <div class="card-image">
                <img class="main-image" src="${item.image}" alt="${item.title}">
                <div class="discount">-19%</div>
                <div class="top">Top</div>
            </div>
            <div class="card-content">
                <div class="stars">
                    <img src="./svg/star.svg" alt="star">
                    <img src="./svg/star.svg" alt="star">
                    <img src="./svg/star.svg" alt="star">
                    <img src="./svg/star.svg" alt="star">
                    <img src="./svg/star.svg" alt="star">
                </div>
                <div class="card-title">
                    <p>${item.title}</p>
                    <div class="prices">
                        <del>2800 som</del>
                        <p>2280 som</p>
                    </div>
                </div>
                <button class="card-btn">
                    <p>Заказать</p>
                    <img src="./image/flower.png" alt="flower">
                </button>
                <a href="fast">Быстрый заказ</a>
            </div>
        </div>
    `;
}).join("");