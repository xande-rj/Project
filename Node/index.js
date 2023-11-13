const express = require('express')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

const dados = {
    'nome' : 'Alexandre',
    'idade' : 22,
    'Sobrenome' : 'Silva',
    'id' : 1
}

app.get('/', (req,res)=>{
    res.send('hello World')
})

app.get('/info',(req,res)=>{
    res.send(dados)
})

// app.use((req, res, next) => {
//     res.status(404).send("Sorry can't find that!")
// })

app.get('/user/:id', function (request, response) {
    response.send('user ' + request.params.id)
})

//A url precisa ter a letra dentro das para barras
// app.get(/a/, (req,res)=>{
//     res.send('hello World'+' a')
// })

//A url precisa ter a letra dentro das para barras
// .*= antes ou depois
// app.get(/.*fly*./, (req, res) => {
//     res.send('/.*fly$/')
// })

//Request Parametro
// vem em formato json
/*{
exemplo : nome colocada na url
}
*/
app.get('/:nome', (req, res) => {
    res.send(req.params)
})

// app.get('/example/a', (req, res) => {
//     res.send('Hello from A!')
// })

app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })


// app.post('/', (req, res) => {
//     res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//     res.send('Got a DELETE request at /user')
// })

app.listen(PORT,HOST)