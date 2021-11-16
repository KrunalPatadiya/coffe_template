//dynamic images
import cup from '../images/cup.png';
import clock from '../images/clock.png';
import location from '../images/location.png';


//we use this data in another component and use map to load all data
//here a list of item which display in all cards
export const data = [
    { id: 1, img: cup, Title: 'Tasty Coffee', Des: 'Most of all, we are committed to giving you the best customer service as well as a comfortable environment to sit with good friends, research study and work.' },
    { id: 2, img: clock, Title: 'Fast Cooking', Des: 'Our preferred, straightforward and also unique method of developing cool coffee.' },
    { id: 3, img: location, Title: 'Free Delivery', Des: 'We are the Cafe with a bold vision to make a distinction in both our neighborhood and also worldwide neighborhoods.' }
]


//function get the id parameter and compare with id in data array and return the record of that id
export function getData(d) {
    return data.find(
        item=>item.id===d
    )
}
