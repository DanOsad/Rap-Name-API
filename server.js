const express = require('express')
const app = express()
const PORT = 8000

// app.use(express.static('public'))

const rappers = {
    '21 savage': {
        age: 29,
        birthName: 'Sheyaa Bin Abraham-Joseph',
        birthLocation: 'London, England',
    },
    'chance the rapper': {
        age: 29,
        birthName: 'Chancellor Bennett',
        BirthLocation: 'Chicago, Illinois',
    },
    'dylan': {
        age: 29,
        birthName: 'Dylan',
        BirthLocation: 'Dylan',
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) => {
    const rapperName = req.params.rapperName.toLowerCase()
    if (rappers[rapperName]) {
        res.json(rappers[rapperName])
    } else {
        res.json(rappers['Dylan'])
    }
})

app.get('/api/:rapper', (req, res) => {

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Serving listening on port ${PORT}...`)
})