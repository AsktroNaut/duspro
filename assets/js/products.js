const productContainer = document.querySelector('.product-grid-view')
console.log(productContainer);



fetch('http://159.223.67.62:1337/api/products?fbclid=IwAR19MiGOdxE_Ju-q0vj2g5JwrnofMjI8hZkAyqkg6Kg72XR1eOL24WAl7zc')
  .then(response => response.json())
  .then(allProducts => {
        
       

        allProducts.data.map(product => {
            const productProps = product.attributes

            let productItemHTML = document.createElement('div')
            
            let productContentHtml = `
                <div class="col-lg-3 col-md-4 col-sm-6" data-id="${product.id}">
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product-variable.html?id=${product.id}">
                                <img class="primary-img" src="${productProps.id}" alt="Product Images">
                                <img class="secondary-img" src="${productProps.id}" alt="Product Images">
                            </a>
                            
                        </div>
                        <div class="product-content">
                            <a class="product-name" href="single-product-variable.html?id=${product.id}">${productProps.title}</a>
                            <div class="price-box pb-1">
                                <span class="new-price">$${productProps.price}</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            `
            productItemHTML.innerHTML = productContentHtml
        console.log(productItemHTML);
        productContainer.append(productItemHTML)
        }
        )
        }
            
    );
