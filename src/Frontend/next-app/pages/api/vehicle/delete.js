import axios from 'axios';

export default async function handler(req, res) {
    if(!["DELETE"].includes(req.method)) return res.status(405).json({error: "Method not allowed."})
    const { id } = req.query
    if(req.method === "DELETE"){
        var response = await axios.delete("http://localhost:7047/Vehicle/Delete?id=" + id)
 
        return res.status(200)
    }
    
    return res.status(500).json({ error: "Reached the end of the API with no resolution."})
}