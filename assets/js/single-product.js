
let urlProductId =  location.search.split('id=')[1]


fetch('http://159.223.67.62:1337/api/products?populate=*')
  .then(response => response.json())
  .then(productList => {
        

        let productDetail = productList.data.filter((item) => {
            return item.id == urlProductId
        })
        
        let productItemHTML = document.createElement('div')
        
        let item = productDetail[0].attributes
        
        let productDetailHtml = `
        <div class="container">
            <div class="row">
                <div class="col-lg-6">

                    <div class="single-product-img">
                        <div class="swiper-container single-product-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                            <div class="swiper-wrapper" id="swiper-wrapper-f4c0efcd10dd512810" aria-live="polite" style="transform: translate3d(-1362px, 0px, 0px); transition-duration: 0ms;"><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="1" role="group" aria-label="1 / 10" style="width: 454px;">
                                    <a href="http://159.223.67.62:1337${item.images.data[1].attributes.url}" class="single-img gallery-popup">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[1].attributes.url}" alt="Product Image">
                                    </a>
                                </div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" role="group" aria-label="2 / 10" style="width: 454px;">
                                    <a href="http://159.223.67.62:1337${item.images.data[0].attributes.url}" class="single-img gallery-popup">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[0].attributes.url}" alt="Product Image">
                                    </a>
                                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="3" role="group" aria-label="3 / 10" style="width: 454px;">
                                    <a href="http://159.223.67.62:1337${item.thumbnail.data[1].attributes.url}" class="single-img gallery-popup">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.thumbnail.data[1].attributes.url}" alt="Product Image">
                                    </a>
                                </div>
                                <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" role="group" aria-label="4 / 10" style="width: 454px;">
                                    <a href="http://159.223.67.62:1337${item.thumbnail.data[1].attributes.url}" class="single-img gallery-popup">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.thumbnail.data[1].attributes.url}" alt="Product Image">
                                    </a>
                                </div>
                                <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" role="group" aria-label="5 / 10" style="width: 454px;">
                                    <a href="http://159.223.67.62:1337${item.images.data[2].attributes.url}" class="single-img gallery-popup">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[2].attributes.url}" alt="Product Image">
                                    </a>
                                </div>
                                <div class="swiper-slide" data-swiper-slide-index="2" role="group" aria-label="6 / 10" style="width: 454px;">
                                    <a href="http://159.223.67.62:1337${item.images.data[0].attributes.url}" class="single-img gallery-popup">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[0].attributes.url}" alt="Product Image">
                                    </a>
                                </div>
                                <div class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="3" role="group" aria-label="7 / 10" style="width: 454px;">
                                    <a href="http://159.223.67.62:1337${item.images.data[1].attributes.url}" class="single-img gallery-popup">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[1].attributes.url}" alt="Product Image">
                                    </a>
                                </div>
                                <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" role="group" aria-label="8 / 10" style="width: 454px;">
                                    <a href="http://159.223.67.62:1337${item.images.data[2].attributes.url}" class="single-img gallery-popup">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[2].attributes.url}" alt="Product Image">
                                    </a>
                                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="1" role="group" aria-label="9 / 10" style="width: 454px;">
                                    <a href="http://159.223.67.62:1337${item.thumbnail.data[1].attributes.url}" class="single-img gallery-popup">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.thumbnail.data[1].attributes.url}" alt="Product Image">
                                    </a>
                                </div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" role="group" aria-label="10 / 10" style="width: 454px;">
                                    <a href="http://159.223.67.62:1337${item.images.data[0].attributes.url}" class="single-img gallery-popup">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[0].attributes.url}" alt="Product Image">
                                    </a>
                                </div>
                            </div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                        <div class="thumbs-arrow-holder">
                            <div class="swiper-container single-product-thumbs swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                                <div class="swiper-wrapper" id="swiper-wrapper-7d4f8586444ebd0d" aria-live="polite" style="transform: translate3d(-336px, 0px, 0px); transition-duration: 0ms;"><a href="#" class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="1" role="group" aria-label="1 / 10" style="width: 92px; margin-right: 20px;">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[0].attributes.url}" alt="Product Thumnail">
                                    </a>
                                    <a href="http://159.223.67.62:1337${item.thumbnail.data[1].attributes.url}" class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" role="group" aria-label="2 / 10" style="width: 92px; margin-right: 20px;">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.thumbnail.data[1].attributes.url}" alt="Product Thumnail">
                                    </a>
                                    <a href="http://159.223.67.62:1337${item.images.data[1].attributes.url}" class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="3" role="group" aria-label="3 / 10" style="width: 92px; margin-right: 20px;">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[1].attributes.url}" alt="Product Thumnail">
                                    </a>
                                    <a href="http://159.223.67.62:1337${item.images.data[2].attributes.url}" class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" role="group" aria-label="4 / 10" style="width: 92px; margin-right: 20px;">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[2].attributes.url}" alt="Product Thumnail">
                                    </a>
                                    <a href="http://159.223.67.62:1337${item.thumbnail.data[1].attributes.url}" class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" role="group" aria-label="5 / 10" style="width: 92px; margin-right: 20px;">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.thumbnail.data[1].attributes.url}" alt="Product Thumnail">
                                    </a>
                                    <a href="http://159.223.67.62:1337${item.images.data[0].attributes.url}" class="swiper-slide" data-swiper-slide-index="2" role="group" aria-label="6 / 10" style="width: 92px; margin-right: 20px;">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[0].attributes.url}" alt="Product Thumnail">
                                    </a>
                                    <a href="#" class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="3" role="group" aria-label="7 / 10" style="width: 92px; margin-right: 20px;">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[1].attributes.url}" alt="Product Thumnail">
                                    </a>
                                    <a href="#" class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" role="group" aria-label="8 / 10" style="width: 92px; margin-right: 20px;">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[2].attributes.url}" alt="Product Thumnail">
                                    </a><a href="#" class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="1" role="group" aria-label="9 / 10" style="width: 92px; margin-right: 20px;">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.thumbnail.data[1].attributes.url}" alt="Product Thumnail">
                                    </a><a href="#" class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" role="group" aria-label="10 / 10" style="width: 92px; margin-right: 20px;">
                                        <img class="img-full" src="http://159.223.67.62:1337${item.images.data[0].attributes.url}" alt="Product Thumnail">
                                    </a></div>
                                <!-- Add Arrows -->
                                <div class=" thumbs-button-wrap d-none d-md-block">
                                    
                                </div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-lg-6 pt-5 pt-lg-0">
                    <div class="single-product-content">
                        <h2 class="title">${item.title}</h2>
                        <div class="price-box">
                            <span class="new-price">$${item.price}</span>
                        </div>
                        <ul style="margin-bottom: 24px" class="quantity-with-btn">
                            
                            <li class="add-to-cart">
                                <a class="btn btn-custom-size lg-size btn-pronia-primary" href="${item.amazon_url}">BUY</a>
                            </li>
                            
                        </ul>
                        <p class="short-desc">${item.description}</p>
                        
                        
                        <div class="product-category">
                            <span class="title">SKU:</span>
                            <ul>
                                <li>
                                    <span>${productDetail[0].id}</span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        `
        productItemHTML.innerHTML = productDetailHtml


        const mainHtml = document.querySelector('.single-product-area')
        mainHtml.appendChild(productItemHTML)


    
    })



        // swiper js
        
  
    
    































