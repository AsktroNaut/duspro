
const categorySection = document.querySelector('.megamenu-holder')

console.log(categorySection);

fetch('http://159.223.67.62:1337/api/product-categories?populate=*')
  .then(response => response.json())
  .then(data => {
        const renderHtml = document.querySelector('.drop-menu')
        
        console.log(renderHtml)

        data.data.map(item => {
            console.log(item);
            const parentsHtml = document.createElement('li')
            const childrenhtml = `
            <a href="">${item.attributes.name}</a>
            `
            parentsHtml.innerHTML= childrenhtml
                
                
            renderHtml.appendChild(parentsHtml)

            
        })









    }
        
  )




























