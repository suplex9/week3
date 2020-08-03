module.exports = function(app) {
    app.post('/login', function(req,res) {
        let users = [{'email':'jamie@com.au','upwd':'12'}, {'email':'renouf@com.au','upwd':'12'}]
        
        if (!req.body) {
            return res.sendStatus(400)
        }
        var customer = {}
        customer.email = req.body.email;
        customer.upwd = req.body.upwd;
        customer.valid = false;
        for (let i=0; 1<users.length;i++) {
            if (req.body.email == users[i].email && req.body.upwd == users[i].upwd){
                customer.valid = true;
            }
        }
        res.send(customer);
    });
}