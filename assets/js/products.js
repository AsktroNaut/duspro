const productContainer = document.querySelector('.product-grid-view')
console.log(productContainer);



fetch('http://159.223.67.62:1337/api/products?fbclid=IwAR03UF3mWvMEGpngRvnIB469ocO7eoJ4IYw_hnzFM1ufFDsEHECqULnJwVw')
  .then(response => response.json())
  .then(allProducts => {
        
       console.log(allProducts.data);

        allProducts.data.map(product => {
            const productProps = product.attributes

            let productItemHTML = document.createElement('div')
            productItemHTML.className = 'col-lg-3 col-md-4 col-sm-6'
            productItemHTML.setAttribute('data-id', product.id)
            let productContentHtml = `
                
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html?id=${product.id}">
                                <img class="primary-img" src="${productProps.id}" alt="Product Images">
                                <img class="secondary-img" src="${productProps.id}" alt="Product Images">
                            </a>
                            
                        </div>
                        <div class="product-content">
                            <a class="product-name" href="single-product.html?id=${product.id}">${productProps.title}</a>
                            <div class="price-box pb-1">
                                <span class="new-price">$${productProps.price}</span>
                            </div>
                            
                        </div>
                    </div>
                

                
            `
            productItemHTML.innerHTML = productContentHtml
        console.log(productItemHTML);
        productContainer.appendChild(productItemHTML)
        }
        )
        }
            
    );


                                        