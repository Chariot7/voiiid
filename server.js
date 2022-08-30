const path = require('path');
const express = require('express');
let sslRedirect = require('heroku-ssl-redirect')
const app = express();
const publicPath = path.join(__dirname, '..','public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

app.use(sslRedirect());
  
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});