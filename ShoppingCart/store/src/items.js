import pokeball from './assets/pokeball.png';
import potion from './assets/potion.png';
import zcrystal from './assets/z crystal.png';

const itemsInStock = [
    {
        id: '1',
        name: 'Pokeball',
        price: 2.50,
        image: pokeball,
        imgSize: 200
    },
    {
        id: '2',
        name: 'Potion',
        price: 5.99,
        image: potion,
        imgSize: 200
    },
    {
        id: '3',
        name: 'Z Crystal',
        price: 50.00,
        image: zcrystal,
        imgSize: 335
    },
]

//lets us grab data from any item in our products list by id only
function getItemData(id)
{
    let itemData = itemsInStock.find(item => item.id === id); //.find allows us to loop through the array looking through every product id until it matches our id param
    if (itemData === undefined)
    {
        console.log("Item data does not exist for ID: " + id);
        return undefined;
    }
    return itemData;
}

export {itemsInStock, getItemData};