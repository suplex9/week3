module.exports = function(app, path) {
    app.get('/', function(req, res) {
        let filepath = path.resolve('./www/form.html');
        res.sendFile(filepath);
    });
}