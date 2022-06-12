
const categorySection = document.querySelector('.megamenu-holder')

console.log(categorySection);



fetch('http://159.223.67.62:1339/api/product-categories?populate=*')
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

// if (window.pageYOffset > ) {
  
// }



// window.onscroll = () => {
  
//   if(window.pageYOffset > 216) {
//     console.log("ok");
//     fetch('http://159.223.67.62:1339/api/product-categories?populate=*')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//           const renderHtml2 = document.querySelector('.drop-menu2')
          
          
//           console.log(renderHtml)
         
  
//           data.data.map(item => {
//               console.log(item);
//               const parentsHtml = document.createElement('li')
//               const childrenhtml = `
//               <a href="product-category-shop.html?id-category=${item.attributes.name}">${item.attributes.name}</a>
//               `
//               parentsHtml.innerHTML= childrenhtml
                  
                  
//               renderHtml2.appendChild(parentsHtml)
  
              
//           })
  
//       }
          
//     )
  
//   }

// }


