import axios from 'axios';

export default async function handler(req, res) {
    if(!["POST"].includes(req.method)) return res.status(405).json({error: "Method not allowed."})
    const { vin, modelYear, colour, manufacturer, model,
    trimLevel, purchaseDate, purchaseAmount, saleDate, saleAmount } = req.query;
    console.log(purchaseDate)
    if(req.method === "POST"){
        if(saleDate && saleAmount){
            var response = await axios.post(`http://localhost:7047/Vehicle/Create?vin=${vin}&modelYear=${modelYear}&
            colour=${colour}&manufacturer=${manufacturer}&model=${model}&trimLevel=${trimLevel}&purchaseDate=${purchaseDate}
            &purchaseAmount=${purchaseAmount}&saleDate=${saleDate}&saleAmount=${saleAmount}`)
        }else{
            var response = await axios.post(`http://localhost:7047/Vehicle/Create?vin=${vin}&modelYear=${modelYear}&
            colour=${colour}&manufacturer=${manufacturer}&model=${model}&trimLevel=${trimLevel}&purchaseDate=${purchaseDate}
            &purchaseAmount=${purchaseAmount}`)
        }

        return res.status(200)
    }
    
    return res.status(500).json({ error: "Reached the end of the API with no resolution."})
}