const searchBox = document.querySelector('.hm-searchbox')
console.log(searchBox);

searchBox.addEventListener('submit', (e) => {
    e.preventDefault()

    let searchKey = searchBox['Search...'].value
    window.location.href = `product-search-result.html?id-search=${searchKey}`
})

