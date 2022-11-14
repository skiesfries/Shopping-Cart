import pokeball from './assets/pokeball.png';
import potion from './assets/potion.png';
import zcrystal from './assets/z crystal.png';

const productsArray = [
    {
        id: '1',
        name: 'Pokeball',
        price: 1.50,
        image: pokeball,
        imgSize: 200
    },
    {
        id: '2',
        name: 'Potion',
        price: 5.00,
        image: potion,
        imgSize: 200
    },
    {
        id: '3',
        name: 'Z Crystal',
        price: 50.00,
        image: zcrystal,
        imgSize: 300
    },
]

//lets us grab data from any item in our products list by id only
function getProductData(id)
{
    let productData = productsArray.find(product => product.id === id); //.find allows us to loop through the array looking through every product id until it matches our id param
    if (productData === undefined)
    {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }
}

export {productsArray, getProductData};