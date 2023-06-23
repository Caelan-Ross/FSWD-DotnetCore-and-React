import { Typography, Link, Alert, Box, TextField, Button } from '@mui/material'
import { useState } from 'react';
import useSWR  from 'swr'
import axios  from 'axios'
import { ErrorOutline } from '@mui/icons-material'

function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}

export default function News() {
    const [search, setSearch] = useState("news");
    const [updated, setUpdated] = useState(search);
    const fetcher = url => axios.get(url).then(res => res.data);
    
    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleClick = () => {
        setUpdated(search);
    };

    const { data, error } = useSWR("https://newsapi.org/v2/everything?q="+ (updated != "" ? updated : "news") + "&sortBy=publishedAt&pageSize=10&apiKey=89ffdb235f73453cb38683aa1ec942e9", fetcher, {
        refreshInterval: 30000,
        revalidateOnFocus: true,
        refreshWhenHidden: false
    });
    
    if(!data){
        return(
            <>
                <Typography variant="h5" align="center" component="h5">News</Typography>
                
                <div>
                    <div>
                        <Typography variant="h6" align="center" component="h6">Your news is on its way!</Typography>
                        <br />
                        <Typography variant="body1" align="center" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </div>
                    <div>
                        <Typography variant="h6" align="center" component="h6">Your news is on its way!</Typography>
                        <br />
                        <Typography variant="body1" align="center" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </div>
                    <div>
                        <Typography variant="h6" align="center" component="h6">Your news is on its way!</Typography>
                        <br />
                        <Typography variant="body1" align="center" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </div>
                </div> 
            </>
        )
    }

    if(error){
        return(
            <> 
                <Typography variant="h5" align="center" component="h5">News</Typography>
                <ErrorOutline />
                <Alert severity="error">{error.message}</Alert>
            </>  
        )
    }

    if(data){
        return (
            <>
                <Typography variant="h5" align="center" component="h5">News</Typography>
                <TextField id="outlined-basic" label="Search" variant="outlined"
                    name="search"
                    onChange={handleChange}
                    value={search}
                    align="center"/><Button variant="contained" align="center" onClick={handleClick}>Search</Button>
                <div> 
                    <ol>
                        { data.articles.map((article, index) => {
                            return (<li key={index}>
                                <ul style={{ listStyle: 'none', paddingBottom: '50px'}}>
                                    <li>
                                        <Typography variant="h6" align="center" component="h6">{article.title}</Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body1" align="center" component="p">
                                            {article.author? article.author + " - " : ""}
                                            <Link align="center" href={article.url}>{article.source.name}</Link>
                                            {" - " + new Date(article.publishedAt).toLocaleDateString('en-US', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric',
                                            })}
                                        </Typography>
                                    </li>
                                    {article.urlToImage &&
                                        <li>
                                            <center>
                                                <Box
                                                component="img"
                                                align="center"
                                                sx={{
                                                height: 200,
                                                width: 350,
                                                }}
                                                src={article.urlToImage}
                                                />
                                            </center>
                                        </li>
                                    }
                                    <li style={{ paddingTop: '50px'}}>
                                        <Typography variant="body1" align="left" component="p"><span>{removeTags(article.content)}</span></Typography>
                                    </li>
                                </ul>
                            </li>)
                        })}
                    </ol>
                </div>
            </>
        )
    }
}