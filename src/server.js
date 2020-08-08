//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/ElShaddayCommercial'));
app.get('/*', function(req,res) {
    res.sendFile('./dist/ElShaddayCommercial/index.html', { root: '.' });
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log("running on port 8080");