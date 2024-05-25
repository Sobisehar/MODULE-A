const firebaseConfig = {
  apiKey: "AIzaSyBiHWnxkBmgLpa1ir5sYh_K74ljuzU0XZU",
  authDomain: "js-assign-b0be2.firebaseapp.com",
  databaseURL: "https://js-assign-b0be2-default-rtdb.firebaseio.com",
  projectId: "js-assign-b0be2",
  storageBucket: "js-assign-b0be2.appspot.com",
  messagingSenderId: "1079032108834",
  appId: "1:1079032108834:web:4d7ebca0a4c5ebf27cb77b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.database();
  // console.log(db);

//                       banner  start
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // Autoplay
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
  
      // Use slide or fade transition effect
      speed: 2000,
      effect: 'fade',
      fadeEffect: {
            crossFade: true,
       },
    });
  });
//                           banner end

