

const expressServer = require('express'); //for backend server
const cors = require('cors'); //to allow all ips to access server
const stripe = require('stripe')('sk_test_51M4Cs5DusieQBY9zUcBCHuRlK5aIORa33xhSANR8nnRxpSICZO0ez0jeSRhBmByRV4ZMpURyowF8t90cQotra4On002CzqDed3');

const app = expressServer();
app.use(cors());
app.use(expressServer.static("public"));
app.use(expressServer.json());

app.post("/checkout", async (request, response) => {
    const items = request.body.items;
    let lineItems = [];

    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create(
        {
            line_items: lineItems,
            mode: 'payment',
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/failure"
        });

        response.send(JSON.stringify({url:session.url}));
});

app.listen(4000, () => console.log("listening on port 4000"));