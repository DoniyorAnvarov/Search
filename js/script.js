const elastic = document.querySelector('#elastic')

elastic.addEventListener('input', (ev) => {
    const value = ev.target.value.trim()
    const elasticItems = document.querySelectorAll('.product')
    const searchRegExp = new RegExp(value, 'gi')

    if (value === '') {
        elasticItems.forEach((el) => {
            el.classList.remove('hide')
        })
        return
    }

    elasticItems.forEach((el) => {
        const innerProduct = el.querySelector('.product-title')
        const elementText = innerProduct.textContent
        const isContainsSearchRequest = searchRegExp.test(elementText)
        if (!isContainsSearchRequest) {
            el.classList.add('hide')
        } else {
            el.classList.remove('hide')
        }
    })
})