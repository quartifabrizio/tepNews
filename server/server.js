const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const app = express()

app.use(cors())
const APikey = process.env.API_KEY

app.get('/general', async (req, res) => {
try{
    const url = `https://newsapi.org/v2/everything?q=general&apiKey=${APikey}`;
    const response = await fetch(url)
    const data = await response.json()
    res.json(data)
}
catch (error)
{
    console.error("error fetching top news:", error)
    res.status(500).json({error:"an error occurred"})
}
});

app.get('/sport', async (req, res) => {
try{
    const url = `https://newsapi.org/v2/everything?q=sport&apiKey=${APikey}`;
    const response = await fetch(url)
    const data = await response.json()
    res.json(data)
}
catch (error)
{
    console.error("error fetching top news:", error)
    res.status(500).json({error:"an error occurred"})
}
});

app.get('/business', async (req, res) => {
    try{
        const url = `https://newsapi.org/v2/everything?q=business&apiKey=${APikey}`;
        const response = await fetch(url)
        const data = await response.json()
        res.json(data)
    }
    catch (error)
    {
        console.error("error fetching top news:", error)
        res.status(500).json({error:"an error occurred"})
    }
    });

 app.get('/technology', async (req, res) => {
        try{
            const url = `https://newsapi.org/v2/everything?q=technology&apiKey=${APikey}`;
            const response = await fetch(url)
            const data = await response.json()
            res.json(data)
        }
        catch (error)
        {
            console.error("error fetching top news:", error)
            res.status(500).json({error:"an error occurred"})
        }
        });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})