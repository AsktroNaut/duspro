
let urlProductId =  location.search.split('id=')[1]
console.log(urlProductId);

fetch('http://159.223.67.62:1337/api/products?populate=*')
  .then(response => response.json())
  .then(productList => {
        console.log(productList)

        let productDetail = productList.data.filter((item) => {
            return item.id == urlProductId
        })
        console.log(productDetail);
        let productItemHTML = document.createElement('div')
        
        let item = productDetail[0].attributes
        console.log(item);
        let productDetailHtml = `
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="single-product-img">
                        <div class="swiper-container single-product-slider">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <a href="assets/images/product/large-size/1-1-570x633.jpg" class="single-img gallery-popup">
                                        <img class="img-full" src="assets/images/product/large-size/1-1-570x633.jpg" alt="Product Image">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="assets/images/product/large-size/1-2-570x633.jpg" class="single-img gallery-popup">
                                        <img class="img-full" src="assets/images/product/large-size/1-2-570x633.jpg" alt="Product Image">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="assets/images/product/large-size/1-3-570x633.jpg" class="single-img gallery-popup">
                                        <img class="img-full" src="assets/images/product/large-size/1-3-570x633.jpg" alt="Product Image">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="assets/images/product/large-size/1-4-570x633.jpg" class="single-img gallery-popup">
                                        <img class="img-full" src="assets/images/product/large-size/1-4-570x633.jpg" alt="Product Image">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="thumbs-arrow-holder">
                            <div class="swiper-container single-product-thumbs">
                                <div class="swiper-wrapper">
                                    <a href="#" class="swiper-slide">
                                        <img class="img-full" src="assets/images/product/large-size/1-1-570x633.jpg" alt="Product Thumnail">
                                    </a>
                                    <a href="#" class="swiper-slide">
                                        <img class="img-full" src="assets/images/product/large-size/1-2-570x633.jpg" alt="Product Thumnail">
                                    </a>
                                    <a href="#" class="swiper-slide">
                                        <img class="img-full" src="assets/images/product/large-size/1-3-570x633.jpg" alt="Product Thumnail">
                                    </a>
                                    <a href="#" class="swiper-slide">
                                        <img class="img-full" src="assets/images/product/large-size/1-4-570x633.jpg" alt="Product Thumnail">
                                    </a>
                                </div>
                                <!-- Add Arrows -->
                                <div class=" thumbs-button-wrap d-none d-md-block">
                                    <div class="thumbs-button-prev">
                                        <i class="pe-7s-angle-left"></i>
                                    </div>
                                    <div class="thumbs-button-next">
                                        <i class="pe-7s-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pt-5 pt-lg-0">
                    <div class="single-product-content">
                        <h2 class="title">${item.title}</h2>
                        <div class="price-box">
                            <span class="new-price">$${item.price}</span>
                        </div>
                        
                        <p class="short-desc">${item.description}</p>
                        <ul class="quantity-with-btn">
                            
                            <li class="add-to-cart">
                                <a class="btn btn-custom-size lg-size btn-pronia-primary" href="${item.amazon_url}">BUY</a>
                            </li>
                            
                        </ul>
                        <ul class="service-item-wrap">
                            
                        </ul>
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


  
    
    































