import axios from 'axios';

export default async function handler(req, res) {
    if(!["PUT"].includes(req.method)) return res.status(405).json({error: "Method not allowed."})
    const { id, vin, modelYear, colour, manufacturer, model,
    trimLevel, purchaseDate, purchaseAmount, saleDate, saleAmount } = req.query;
    if(req.method === "PUT"){
        if(saleDate && saleAmount){
            var response = await axios.put(`http://localhost:7047/Vehicle/Update?vehicleId=${id}&vin=${vin}&modelYear=${modelYear}&
            colour=${colour}&manufacturer=${manufacturer}&model=${model}&trimLevel=${trimLevel}&purchaseDate=${purchaseDate}
            &purchaseAmount=${purchaseAmount}&saleDate=${saleDate}&saleAmount=${saleAmount}`)
        }else{
            var response = await axios.put(`http://localhost:7047/Vehicle/Update?vehicleId=${id}&vin=${vin}&modelYear=${modelYear}&
            colour=${colour}&manufacturer=${manufacturer}&model=${model}&trimLevel=${trimLevel}&purchaseDate=${purchaseDate}
            &purchaseAmount=${purchaseAmount}`)
        }
        
        
        return res.status(200)
    }
    
    return res.status(500).json({ error: "Reached the end of the API with no resolution."})
}