const productContainer = document.querySelector('.product-grid-view')




fetch(`${SERVER_URL}/api/products?populate=*`)
  .then(response => response.json())
  .then(allProducts => {
        


        allProducts.data.map(product => {
            const productProps = product.attributes

            let productItemHTML = document.createElement('div')
            productItemHTML.className = 'col-lg-3 col-md-4 col-sm-6'
            productItemHTML.setAttribute('data-id', product.id)
            let productContentHtml = `
                
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html?id=${product.id}">
                                <img class="primary-img" src="${SERVER_URL}${productProps.thumbnail.data[0].attributes.url}" alt="Product Images">
                                <img class="secondary-img" src="${SERVER_URL}${productProps.images.data[0].attributes.url}" alt="Product Images">
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
      
        productContainer.appendChild(productItemHTML)
        }
        )
        }
            
    );

  
    


    
    

              // <img class="secondary-img" src="${SERVER_URL}${productProps.images.data[0].attributes.url}" alt="Product Images">                          