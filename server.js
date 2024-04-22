
const port = 4600;
const host = '127.0.0.1';
const  app = require('./index.js')



app.listen(port, host, () => {
    console.log(`the server is running on http://${host}:${port}`);
});

