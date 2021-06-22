console.log('hello cybersoft')


var arrProduct = [
    {id:1, name:'iphone x',price: 1000, img: 'http://picsum.photos/id/1/200/200'},
    {id:2, name:'iphone xs',price: 2000, img: 'http://picsum.photos/id/2/200/200'},
    {id:3, name:'iphone xs max',price: 3000, img: 'http://picsum.photos/id/3/200/200'},
]

function renderProduct (){
    var content = '';
    for(var i=0;i<arrProduct.length;i++) {
        let product = arrProduct[i]
        content += `
        <div class="col-4 mt-2">
            <div class="card">
                <img src="${product.img}" alt="..."/>
                <div class="card-body">
                    <p>${product.price}</p>
                    <button>Mua hàng</button>
                </div>
            </div>
        </div>        
        `
    }

    document.querySelector('#arrProduct').innerHTML = content
}
renderProduct();