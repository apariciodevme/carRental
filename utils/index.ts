
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '67fb390958msh7789e9be8c0a1c0p10a671jsn08f5d02c46ae',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }


    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers, 
    });


    const result = await response.json(); 

    return result;
}