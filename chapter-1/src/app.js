const { response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json())

const customers = [];
function verifyIfAccountCpfExists(req, res, next) {
    const { cpf } = req.headers;
    const customer = customers.find(item => item.cpf == cpf);
    if (!customer) {
        return res.status(403).json({
            "message": "Esse CPF não esta cadastrado",
        })
    }
    req.customer = customer;
    return next();
}

app.post('/account', (req, res) => {
    const { cpf, name, statement } = req.body;


    const customersAlreadyExists = customers.some(item => item.cpf == cpf);

    if (customersAlreadyExists) {
        res.status(500).json({
            message: "Esse CPF já esta cadastrado"
        })

    }
    else {
        const id = uuidv4();
        customers.push({
            cpf, name, statement
        })
        res.status(200).json({
            customers
        })
    }


})

app.get("/statement", verifyIfAccountCpfExists, (req, res) => {
    const { customer } = req
    if (!customer.statement) {
        return res.status(404).json({
            "message": "Extrato não disponível"
        })
    }
    res.status(200).json({
        "message": customer.statement
    })
})
app.post('/deposit', verifyIfAccountCpfExists, (req, res) => {
    const { description, amount } = req.body;
    const { customer } = req;


    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: "credit"
    }

    customer.statement.push(statementOperation);
    return res.status(201).json({
        "message": "Deposito realizado com sucesso"
    })

})

app.get('/statement/date', verifyIfAccountCpfExists, (req, res) => {
    const { customer } = req;
    const { date } = req.query
    const dateFormat = new Date(date + " 00:00");


    // const statement = customer.statement.filter(item => item.created_at.toDateString() == dateFormat.toDateString());


    const statement = customer.statement.filter(item => item.created_at.toDateString() == dateFormat.toDateString());




    return res.status(200).json({
        "data": statement
    })
})

app.put('/account', verifyIfAccountCpfExists, (req, res) => {
    const { name } = request.body;
    const { customer } = request;
    customer.name = name;
    return response.status(201).json({
        "message": "Alteração realizada com sucesso"
    })
})
app.delete('/account', verifyIfAccountCpfExists, (req, res) => {
    const { customer } = req;


    customers.splice(customer, 1);
    res.status(200).json({
        "message": "Registro deletado com sucesso"
    })
})
app.listen(8000, () => {
    console.log("executando");
})