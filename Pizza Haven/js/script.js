 let menu = document.querySelector('#menu-btn');
 let navbar = document.querySelector('.navbar');

 menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
 }

 window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
 }


// scroll select left right button movement start

let cards = document.querySelector('.menu .menuItem .scrollBox .cards');
let btnPrev = document.querySelector('.btnPrev');
let btnNext = document.querySelector('.menu .menuItem .scrollBox .scrollBtn .btnNext');
let pizzaName = document.getElementById('pizzaName');

let scrollValue = 0;
let increaseValue = 41.7;
let cardCount = 1;

btnPrev.addEventListener('click', ()=> {
    if(scrollValue !== 0)
    {
        scrollValue += increaseValue;
        cardCount -= 1;
        pizzaName.value = `Pizza ${cardCount}`;
        cards.style.transform = `translateX(${scrollValue}rem)`;
    }
    else
        console.log('not');
    console.log('prev', scrollValue);
});

btnNext.addEventListener('click', () => {
    if(scrollValue > -1*increaseValue*6 +1)
    {
        scrollValue -=increaseValue;
        cardCount += 1;
        pizzaName.value = `Pizza ${cardCount}`;
        cards.style.transform = `translateX(${scrollValue}rem)`;
    }
    else 
        console.log('not');
    console.log('next', scrollValue, (-1)*increaseValue*6 +1 );

});

cards.addEventListener('click', (event) => {
    let selectedValue = event.target.innerText;
    console.log(selectedValue);
});
// scroll select left right button movement end 
 
// Menu input fields dropdown logic

let size = document.getElementById('size');
let crust = document.getElementById('crust');
let sizeDropdown = document.getElementById('sizeDropdown');
let crustDropdown = document.getElementById('crustDropdown');

size.addEventListener('click', () => {
    sizeDropdown.style.display = 'block';
});

sizeDropdown.addEventListener('click', (event) => {
    let selectedValue = event.target.innerText;
    size.value = selectedValue;
    sizeDropdown.style.display = 'none';
});


crust.addEventListener('click', () => {
    crustDropdown.style.display = 'block';
});

crustDropdown.addEventListener('click', (event) => {
    let selectedValue = event.target.innerText;
    crust.value = selectedValue;
    crustDropdown.style.display = 'none';
});

/////////////////////


 window.addEventListener('resize',() => {
    let movingImage = document.getElementById('movingImage');
    let aboutEnd = document.querySelector('.about .content .end');
    let aboutEndOffSet = aboutEnd.offsetTop + 100;
    let scrollPosition = window.pageYOffset;
    let subcontentImage = document.querySelectorAll('.subcontentImage');
    let content = document.querySelector('.about .content');
    let aboutHeading = document.querySelector('.about .heading');

    //let aboutContent = document.querySelector('.about .content');
    if(window.innerWidth <1300 || scrollPosition > aboutEndOffSet) {
        movingImage.style.opacity = 0;
        movingImage.style.zIndex = -10;
        aboutHeading.style.display = flex;

        for(let i=0; i< subcontentImage.length; i++){
            let element = subcontentImage[i];
            element.style.display = 'block';
        }
        content.style.width = '80%';
        content.style.marginTop = '10vh';
    }
    else {
        movingImage.style.opacity = 1;
        movingImage.style.zIndex = 2;
        movingImage.style.top= '1vh';
        movingImage.style.right= '20vw';
        aboutHeading.style.display = 'none';

        for(let i=0; i< subcontentImage.length; i++){
            let element = subcontentImage[i];
            element.style.display = 'none';
        }
        content.style.width = '40%';
        content.style.marginTop = '95vh';
    }
    console.log(window.innerHeight, window.innerWidth);
 });

 window.addEventListener('scroll', () => {
    let image = document.querySelector('.moving-image');
    let imageOff = document.querySelector('.about .imageOffSetTop');
    let aboutContent = document.querySelector('.about .content .pizza');
    let pizzaBase = document.querySelector('.about .content .pizzaBase');
    let pizzaSauce = document.querySelector('.about .content .pizzaSauce');
    let pizzaDetails = document.querySelector('.about .content .pizzaDetails');
    let aboutEnd = document.querySelector('.about .content .end');
    let movingImage = document.getElementById('movingImage');
    let subcontentImage = document.querySelectorAll('.subcontentImage');
    let content = document.querySelector('.about .content');
    let aboutHeading = document.querySelector('.about .heading');

    let imageOffset = imageOff.offsetTop;
    let scrollPosition = window.pageYOffset;
    let aboutContentOffSet = aboutContent.offsetTop + 80;
    let pizzaBaseOffSet = pizzaBase.offsetTop + 90;
    let pizzaSauceOffSet = pizzaSauce.offsetTop + 90;
    let pizzaDetailsOffSet = pizzaDetails.offsetTop + 90;
    let aboutEndOffSet = aboutEnd.offsetTop + 100;

    let commonMargin = 80;
    //hide moving image if width is less than....
    if(scrollPosition > aboutEndOffSet) {
        image.style.opacity = 0;
        image.style.zIndex = -10;
        //aboutHeading.style.display = 'flex';
        console.log('1');
    }
    else {
        console.log('2');
        if(window.innerWidth > 1300) 
        {
            for(let i=0; i< subcontentImage.length; i++){
                let element = subcontentImage[i];
                element.style.display = 'none';
            }
            content.style.width = '40%';
            content.style.marginTop = '95vh';
            image.style.opacity = 1;
            image.style.zIndex = 2;
            aboutHeading.style.display = 'none';
            console.log('21');
        }
    }
    if(window.innerWidth < 1300) 
    {
        console.log('3');
        image.style.opacity = 0;
        image.style.zIndex = -10;
        aboutHeading.style.display = 'flex';
        for(let i=0; i< subcontentImage.length; i++){
            let element = subcontentImage[i];
            element.style.display = 'block';
        }
        content.style.width = '80%';
        content.style.marginTop = '20vh';
    }
    //let video = document.querySelector('.home .background-video');
    // if(scrollPosition > aboutContentOffSet) {
    //     video.style.display = 'none';
    // }
    // else {
    //     video.style.display = 'block';
    // }
    //moving image transform....
    if(scrollPosition >= imageOffset && scrollPosition <= aboutContentOffSet ) {
        image.style.position = 'absolute';
            let translateZ = (scrollPosition- imageOffset) /(1.4);
            console.log(translateZ, "##");
            
            image.style.transform = 'translateY(-'+ translateZ +'px) translateX(' + translateZ + 'px) rotate(' + translateZ/2 +'deg)';
    }
    else if (scrollPosition < imageOffset){ 
        image.style.transform = 'translateY(0) translateX(0)';
        //image.style.position = 'absolute';
    }
    else {
        image.style.position = 'fixed';
    }

    //conditions for changing side pizza image and content animations....

    if ( scrollPosition > aboutContentOffSet && scrollPosition <= pizzaBaseOffSet + commonMargin) {
        image.style.position = 'fixed';
        aboutContent.style.opacity = 1;

        movingImage.src = './images/pizza-fotor-1.png';
        movingImage.alt = 'image';
    }
    else {
        aboutContent.style.opacity = 0;
        aboutContent.style.transition = 'opacity 1s ease-out';
    }

    if (scrollPosition > pizzaBaseOffSet && scrollPosition <= pizzaSauceOffSet + commonMargin) {
        movingImage.src = './images/pizza-base.png';
        movingImage.alt = 'image 2';

        pizzaBase.style.opacity = 1;
        aboutContent.style.opacity = 0;
        aboutContent.style.transition = 'opacity 1s ease-out';
    }
    else {
        pizzaBase.style.opacity = 0;
        pizzaBase.style.transition = 'opacity 1s ease-out';
    }

    if (scrollPosition > pizzaSauceOffSet && scrollPosition <= pizzaDetailsOffSet + commonMargin) {
        movingImage.src = './images/pizza-with-cheese-fotor-20230625125349.png';
        movingImage.alt = 'image 3';

        pizzaSauce.style.opacity = 1;
        pizzaBase.style.opacity = 0;
        pizzaBase.style.transition = 'opacity 1s ease-out';
    }
    else {
        pizzaSauce.style.opacity = 0;
        pizzaSauce.style.transition = 'opacity 1s ease-out';
    }
    
    if (scrollPosition > pizzaDetailsOffSet) {
        movingImage.src = './images/pizza-fotor-2.jpg';
        movingImage.alt = 'image 3';

        pizzaDetails.style.opacity = 1;
        pizzaSauce.style.opacity = 0;
        pizzaSauce.style.transition = 'opacity 1s ease-out';
    }
    if(scrollPosition > aboutEndOffSet) {
        console.log('abc');
        image.style.opacity = 0;
        image.style.zIndex = -10;
        //aboutHeading.style.display = 'flex';
    }
    
 });
