const addBtn = document.querySelector('#add-order-btn')
const orderPanel = document.querySelector('.panel.left')
const cities = ['Витебск', 'Слуцк', 'Могилёв', 'Пинск'
    , 'Орша', 'Гомель', 'Столбцы', 'Слоним', 'Гродно']


addBtn.addEventListener('click', event => {
    addOrder()
})


function addOrder() {
    const order = document.createElement('div')
    order.classList.add('cell')

    const oderCity = document.createElement('div')
    oderCity.innerHTML = getCity()
    order.append(oderCity)
    
    const oderWeight = document.createElement('div')
    oderWeight.innerHTML = `${getWeight()}т`
    order.append(oderWeight)

    const index = orderPanel.children.length - 1
    orderPanel.insertBefore(order, orderPanel.children[index])
}

function getCity() {
    const ind = Math.floor(Math.random() * cities.length)
    return cities[ind]
}

function getWeight() {
    let min = 0.5
    let max = 20
    const nSigns = 10
    min = min * nSigns
    max = max * nSigns
    return Math.round(Math.random() * (max - min) + min) / nSigns
}
