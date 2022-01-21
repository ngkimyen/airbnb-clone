export const getPlaces = async(place) => {
   const response = await fetch(`https://airbnb-clone-c224c-default-rtdb.firebaseio.com/place-list/${place}`, {mode: 'no-cors'})
   const data = await response.json();

   let places = [];
   for (let key in data) {
      places.push({
         id: key,
         ...data[key]
      })
   }

   return places;
}