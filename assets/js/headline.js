const headlineArea = document.querySelector('.breadcrumb-area')
console.log(headlineArea);
let screenWidth

const changeHeadline = () => {
   
    screenWidth = document.documentElement.clientWidth;
    if (screenWidth < 500 ) {
        headlineArea.setAttribute('style', 'background-image: url(assets/images/breadcrumb/bg/1-1-phone.jpg)')
    } else {
        headlineArea.setAttribute('style', 'background-image: url(assets/images/breadcrumb/bg/1-1-1919x388.jpg)')
    }
    console.log("doi size");
    
}

changeHeadline()


window.addEventListener('resize', changeHeadline ) 


