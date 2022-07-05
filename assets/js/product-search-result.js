


let searchKeyValue = location.search.split('id-search=')[1]


console.log(searchKeyValue);

const searchTitleHtml = document.querySelector('.product-topbar-title')
console.log(searchTitleHtml);
searchTitleHtml.innerText = `Result for "${searchKeyValue}"`

searchKeyValue.toLowerCase()
console.log("searchKeyValue", searchKeyValue);
const renderSearchGrid = document.querySelector('.product-grid-view')
console.log(renderSearchGrid);

fetch(`${SERVER_URL}/api/products?populate=*`)
    .then(response => response.json())
    .then(products => {

        
        
        let item = products.data.filter(product => {
            
            return product.attributes.title.toLowerCase().includes(searchKeyValue.toLowerCase());
        })
        
        item.map(itemProps => {
            let productProps = itemProps.attributes
            console.log(itemProps);

            const divHtml = document.createElement('div');
            divHtml.className = 'col-lg-3 col-md-4 col-sm-6'
            const childrenHtml = `
                <div class="product-item">
                    <div class="product-img">
                        <a href="single-product-variable.html">
                            <img class="primary-img" src="${SERVER_URL}${productProps.thumbnail.data[0].attributes.url}" alt="Product Images">
                            <img class="secondary-img" src="${SERVER_URL}${productProps.thumbnail.data[1].attributes.url}" alt="Product Images">
                        </a>
                        
                    </div>
                    <div class="product-content">
                        <a class="product-name" href="single-product.html?id=${itemProps.id}">${productProps.title}</a>
                        <div class="price-box pb-1">
                            <span class="new-price">$${productProps.price}</span>
                        </div>
                        
                    </div>
                </div>
            `
            divHtml.innerHTML = childrenHtml
            renderSearchGrid.appendChild(divHtml)

        })
        


    }    
    );

































