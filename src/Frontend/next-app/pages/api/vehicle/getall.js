import axios from 'axios';

export default async function handler(req, res) {
    if(!["GET"].includes(req.method)) return res.status(405).json({error: "Method not allowed."})

    if(req.method === "GET"){
        var response = await axios.get("http://localhost:7047/Vehicle/GetAll")

        return res.status(200).json(
            { vehicles: response.data }
        )
    }

    return res.status(500).json({ error: "Reached the end of the API with no resolution."})
}