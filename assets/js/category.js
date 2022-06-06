
const categorySection = document.querySelector('.megamenu-holder')

console.log(categorySection);

fetch('http://159.223.67.62:1339/api/product-categories?populate=*')
  .then(response => response.json())
  .then(data => {
      console.log(data);
        const renderHtml = document.querySelector('.drop-menu')
        
        console.log(renderHtml)

        data.data.map(item => {
            console.log(item);
            const parentsHtml = document.createElement('li')
            const childrenhtml = `
            <a href="product-category-shop.html?id-category=${item.attributes.name}">${item.attributes.name}</a>
            `
            parentsHtml.innerHTML= childrenhtml
                
                
            renderHtml.appendChild(parentsHtml)

            
        })









    }
        
  )

