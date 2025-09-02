let product = [
    {
        title: "Mercedes-Benz GLS 63 AMG",
        price: "3 321 200som",
        image: "https://files.aster.kz/market-news/v2/2022-9/c1e8994a-a4f2-47a5-8077-087db9d284c3.webp"

    },

    {
        title: "Hyundai Sonota New Rise",
        price: "1 041 000som",
        image: "https://a.d-cd.net/g6uLoC1syz_kcZ0j7SUM9oxUiLI-960.jpg"
    },
    {
        title: "Kia K5",
        price: "3 349 000som",
        image: "https://i.pinimg.com/originals/2d/90/01/2d90014712e118da8e974e853e63f9fb.jpg"
    },
    {
        title: " Lexus GS 350",
        price: "3 355 000som",
        image: "https://www.experienceferrari.com/wp-content/uploads/2024/04/2020-lexus-gs-mmp-1-1574354422-1-scaled.jpg"
    },

    {
        title: "Toyota Camry",
        price: "2 052 000",
        image: "https://nextcar.ua/images/detailed/523/IMG_4953.JPG"
    },
    {
        title: "Audi A8",
        price: "5 692 000",
        image: "https://tumen.oemvag.ru/wa-data/public/shop/products/92/82/4538292/images/41836/41836.970.png"
    },
    {
        title: "BMW M5",
        price: "5 000 000",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/source/46f705111077375.5ffb645951e7c.jpg"
    },
    {
        title: "Lexus LX 570",
        price: "4 200 000",
        image: "https://avatars.mds.yandex.net/get-autoru-vos/1698998/1c60ed09b01e3680ce542e5c0adb3db6/1200x900"
    },
    {
        title: "Lexus LX 470",
        price: "3 530 000",
        image: "https://frankfurt.apollo.olxcdn.com/v1/files/s6hm6q47qtmk2-KZ/image;s=1024x768"
    },
  
    {
        title: "Nissan Altima",
        price: "1 150 000",
        image: "https://www.ixbt.com/img/n1/news/2022/5/2/2023-Nissan-Altima-01_large.jpeg"
    },
    {
        title: "Kia K7",
        price: "2 700 000",
        image: "https://avatars.mds.yandex.net/get-autoru-vos/4557358/dde8c74f006676a02e432bb0ffa02a3b/1200x900"

    }

]

let result = document.querySelector(".result")
result.innerHTML = product.map((card) => {
    return `<div> 
    <p> ${card.title}  </p>
    <div class="at"> 
    <h3>30%</h3>
    <img src="${card.image}" alt="${card.title}" />
    
    
     </div>
     <div class="jazuu">
     <div class="text"> 
    <div class="btn">
     
   <h5> ${card.price}</h5>
    </div>
    
    
     <button class= "btn1">Aluu</button>
   
   
    </div>
    
   
    </div>
    </div>`
})