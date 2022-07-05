
const categorySection = document.querySelector('.megamenu-holder')

console.log(categorySection);



fetch(`${SERVER_URL}/api/product-categories?populate=*`)
  .then(response => response.json())
  .then(data => {
      console.log(data);
        const renderHtml = document.querySelectorAll('.drop-menu')
        
        
        
       

        

        for (let i = 0; i < renderHtml.length; i++) {
          data.data.map(item => {
           
            const parentsHtml = document.createElement('li')
            const childrenhtml = `
            <a href="product-category-shop.html?id-category=${item.attributes.name}">${item.attributes.name}</a>
            `
            parentsHtml.innerHTML= childrenhtml
                
                
          renderHtml[i].appendChild(parentsHtml)
            // renderHtml.appendChild(parentsHtml)

            
          })
          
        }
    }
        
  )



