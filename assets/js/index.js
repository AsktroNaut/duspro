

const productMainSectionBestSeller = document.querySelectorAll('.product-item-wrap')[0]
const productMainSectionFeatured = document.querySelectorAll('.product-item-wrap')[1]

fetch(`${SERVER_URL}/api/products?populate=*`)
  .then(response => response.json())
  .then(data => {

        
        let listProductOnHomeBestSeller = []
        for (let index = data.data.length -1; index > data.data.length - 5; index--) {
            listProductOnHomeBestSeller.push(data.data[index])
        }

        listProductOnHomeBestSeller.map(item => {
            const product = item.attributes

            let productOnHomeHTML = document.createElement('div')
            productOnHomeHTML.className = 'col-xl-3 col-md-4 col-sm-6'
            productOnHomeHTML.setAttribute('data-id', item.id)
            let productContent = `
            <div class="product-item">
                <div class="product-img">
                    <a href="single-product.html?id=${item.id}">
                        <img class="primary-img" src="${SERVER_URL}${product.thumbnail.data[0].attributes.url}" alt="Product Images">
                        <img class="secondary-img" src="${SERVER_URL}${product.images.data[3].attributes.url}" alt="Product Images">
                    </a>
                    
                </div>
                <div class="product-content">
                    <a class="product-name" href="single-product.html?id=${item.id}">${product.title}</a>
                    <div class="price-box pb-1">
                        <span class="new-price">$${product.price}</span>
                    </div>
                    
                </div>
            </div>
            `

            productOnHomeHTML.innerHTML = productContent
            productMainSectionBestSeller.appendChild(productOnHomeHTML)
        })


        
        let listProductOnHomeFeatured = []
        for (let index = 0; index < 4; index++) {
            listProductOnHomeFeatured.push(data.data[index])
        }
        
     

        listProductOnHomeFeatured.map(item => {
            const product = item.attributes

            let productOnHomeHTML = document.createElement('div')
            productOnHomeHTML.className = 'col-xl-3 col-md-4 col-sm-6'
            productOnHomeHTML.setAttribute('data-id', item.id)
            let productContent = `
            <div class="product-item">
                <div class="product-img">
                    <a href="single-product.html?id=${item.id}">
                        <img class="primary-img" src="${SERVER_URL}${product.thumbnail.data[0].attributes.url}" alt="Product Images">
                        <img class="secondary-img" src="${SERVER_URL}${product.images.data[3].attributes.url}" alt="Product Images">
                    </a>
                    
                </div>
                <div class="product-content">
                    <a class="product-name" href="single-product.html?id=${item.id}">${product.title}</a>
                    <div class="price-box pb-1">
                        <span class="new-price">$${product.price}</span>
                    </div>
                    
                </div>
            </div>
            `
            productOnHomeHTML.innerHTML = productContent
            productMainSectionFeatured.appendChild(productOnHomeHTML)
            
        })

      
  })


  
  



