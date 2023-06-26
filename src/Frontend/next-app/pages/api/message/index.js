import axios from 'axios';

export default async function handler(req, res) {
    if(!["GET"].includes(req.method)) return res.status(405).json({error: "Method not allowed."})

    if(req.method === "GET"){
        var config = {
            headers:{
              "Content-Type": "application/json"
            }
        };
        var response = await axios.get("http://localhost:7047/Message", config)

        if(req.headers["content-type"] == "application/json") return res.status(200).json(
            { message: response.data.text }
        )
        else return res.status(200).send(
            response.data.text
        )
    }

    return res.status(500).json({ error: "Reached the end of the API with no resolution."})
}