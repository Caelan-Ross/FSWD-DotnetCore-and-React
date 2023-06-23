import { Typography } from "@mui/material"
export default function Static(props) {
    
    return(
        <>
            <Typography variant="h5" align="center" component="h5">This is a static message on the frontend.</Typography>
            <br />
            <Typography variant="body1" align="center" component="p">That means it won't change unless manually done so.</Typography>
        </>
    )
}