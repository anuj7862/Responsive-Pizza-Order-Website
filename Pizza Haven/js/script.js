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

var cards = document.querySelector('.menu .menuItem .scrollBox .cards');
var btnPrev = document.querySelector('.btnPrev');
var btnNext = document.querySelector('.menu .menuItem .scrollBox .scrollBtn .btnNext');
var pizzaName = document.getElementById('pizzaName');

var scrollValue = 0;
var increaseValue = 41.7;
var cardCount = 1;

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
    var selectedValue = event.target.innerText;
    console.log(selectedValue);
});
// scroll select left right button movement end 
 
// Menu input fields dropdown logic

var size = document.getElementById('size');
var crust = document.getElementById('crust');
var sizeDropdown = document.getElementById('sizeDropdown');
var crustDropdown = document.getElementById('crustDropdown');

size.addEventListener('click', () => {
    sizeDropdown.style.display = 'block';
});

sizeDropdown.addEventListener('click', (event) => {
    var selectedValue = event.target.innerText;
    size.value = selectedValue;
    sizeDropdown.style.display = 'none';
});


crust.addEventListener('click', () => {
    crustDropdown.style.display = 'block';
});

crustDropdown.addEventListener('click', (event) => {
    var selectedValue = event.target.innerText;
    crust.value = selectedValue;
    crustDropdown.style.display = 'none';
});

/////////////////////


 window.addEventListener('resize',() => {
    var movingImage = document.getElementById('movingImage');
    var aboutEnd = document.querySelector('.about .content .end');
    var aboutEndOffSet = aboutEnd.offsetTop + 100;
    var scrollPosition = window.pageYOffset;
    var subcontentImage = document.querySelectorAll('.subcontentImage');
    var content = document.querySelector('.about .content');
    var aboutHeading = document.querySelector('.about .heading');

    //var aboutContent = document.querySelector('.about .content');
    if(window.innerWidth <1300 || scrollPosition > aboutEndOffSet) {
        movingImage.style.opacity = 0;
        movingImage.style.zIndex = -10;
        aboutHeading.style.display = flex;

        for(var i=0; i< subcontentImage.length; i++){
            var element = subcontentImage[i];
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

        for(var i=0; i< subcontentImage.length; i++){
            var element = subcontentImage[i];
            element.style.display = 'none';
        }
        content.style.width = '40%';
        content.style.marginTop = '95vh';
    }
    console.log(window.innerHeight, window.innerWidth);
 });

 window.addEventListener('scroll', () => {
    var image = document.querySelector('.moving-image');
    var imageOff = document.querySelector('.about .imageOffSetTop');
    var aboutContent = document.querySelector('.about .content .pizza');
    var pizzaBase = document.querySelector('.about .content .pizzaBase');
    var pizzaSauce = document.querySelector('.about .content .pizzaSauce');
    var pizzaDetails = document.querySelector('.about .content .pizzaDetails');
    var aboutEnd = document.querySelector('.about .content .end');
    var movingImage = document.getElementById('movingImage');
    var subcontentImage = document.querySelectorAll('.subcontentImage');
    var content = document.querySelector('.about .content');
    var aboutHeading = document.querySelector('.about .heading');

    var imageOffset = imageOff.offsetTop;
    var scrollPosition = window.pageYOffset;
    var aboutContentOffSet = aboutContent.offsetTop + 80;
    var pizzaBaseOffSet = pizzaBase.offsetTop + 90;
    var pizzaSauceOffSet = pizzaSauce.offsetTop + 90;
    var pizzaDetailsOffSet = pizzaDetails.offsetTop + 90;
    var aboutEndOffSet = aboutEnd.offsetTop + 100;

    var commonMargin = 80;
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
            for(var i=0; i< subcontentImage.length; i++){
                var element = subcontentImage[i];
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
        for(var i=0; i< subcontentImage.length; i++){
            var element = subcontentImage[i];
            element.style.display = 'block';
        }
        content.style.width = '80%';
        content.style.marginTop = '20vh';
    }
    //var video = document.querySelector('.home .background-video');
    // if(scrollPosition > aboutContentOffSet) {
    //     video.style.display = 'none';
    // }
    // else {
    //     video.style.display = 'block';
    // }
    //moving image transform....
    if(scrollPosition >= imageOffset && scrollPosition <= aboutContentOffSet ) {
        image.style.position = 'absolute';
            var translateZ = (scrollPosition- imageOffset) /(1.4);
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
