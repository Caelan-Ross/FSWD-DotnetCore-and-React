import { Typography } from "@mui/material"
import axios from 'axios';
export default function Dynamic(props) {
    
    return (
        <>
            <Typography variant="h5" align="center" component="h5">This is a dynamic message grabbing data from the backend (The next line will change if you reload the page).</Typography>
            <br />
            <Typography variant="body1" align="center" component="p">
            {props.message ? (
                <>{props.message}</>
                ) : (
                "Loading..."
                )}
            </Typography>
        </>
    )
}

export async function getServerSideProps() {
    var config = {
        headers:{
            "content-type": "application/json"
        }
    };
    const message = await (axios.get('http://localhost:3000/api/message', config).then(res => res.data.message));

    return { 
        props: { 
            message: message 
        }
    }
}