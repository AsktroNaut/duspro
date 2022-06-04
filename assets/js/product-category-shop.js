let productCategory =  location.search.split('id-category=')[1]
productCategory = productCategory.replace(/%20+/g," ");

console.log(productCategory);
const productContainer = document.querySelector('.product-grid-view')
const shopHeading = document.querySelector('.shop-heading')

shopHeading.innerText = productCategory
fetch('http://159.223.67.62:1339/api/products?populate=*')
  .then(response => response.json())
  .then(data => {
        console.log(data);


        let productOfCategoryList = data.data.filter(item => {
            return item.attributes.product_categories.data[0].attributes.name == productCategory
        })
        console.log(productOfCategoryList);


        productOfCategoryList.map(product => {
            const productProps = product.attributes

            let productItemHTML = document.createElement('div')
            productItemHTML.className = 'col-lg-3 col-md-4 col-sm-6'
            productItemHTML.setAttribute('data-id', product.id)
            let productContentHtml = `
                
                    <div class="product-item">
                        <div class="product-img">
                            <a href="single-product.html?id=${product.id}">
                                <img class="primary-img" src="http://159.223.67.62:1339${productProps.thumbnail.data[0].attributes.url}" alt="Product Images">
                                <img class="secondary-img" src="http://159.223.67.62:1339${productProps.images.data[0].attributes.url}" alt="Product Images">
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
        
  });
