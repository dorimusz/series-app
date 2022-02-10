const express = require('express');
const res = require('express/lib/response');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())
const port = 3000;

let serieses = [];
let id = 0;

app.get('/api/series', (req, res) => {
    res.json(serieses)
})

app.post('/api/series', (req, res) => {
    const series = {
        name: req.body.name,
        characters: req.body.charList,
        id: id++
    }
    serieses.push(series);
    res.sendStatus(204);
})

app.delete('/api/series/:id', (req, res) => {

    const idParam = req.params.id;

    /*
    const newSerieses = [];
    for (const s of serieses) {
        if (s.id !== idParam) {
            newSerieses.push(s)
        }
    }
    serieses = newSerieses;
    */

    serieses = serieses.filter(s => s.id !== Number(idParam));
    res.sendStatus(204);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})