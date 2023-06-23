export default function handler(req, res) {
    if(!["GET", "POST"].includes(req.method)) return res.status(405).json({error: "Method not allowed."})

    if(req.method === "POST"){
        console.log("POST")
        return res.status(200).json({ message: "[HOME] Hello [POST] from the API!"})
    }

    if(req.method === "GET"){
        console.log("GET")
        if(req.headers["content-type"] == "application/json") return res.status(200).json({ message: "[HOME] Welcome [GET] from the API!"})
        else return res.status(200).send("[HOME] Welcome [GET] from the API!")
    }

    return res.status(500).json({ error: "Reached the end of the API with no resolution."})
}