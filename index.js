const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const { 
	errorHandlingMiddleware, 
	responseMiddleware, 
	requestMiddleware, 
} = require('./middleware');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
// app.use(cors({ credentials: true, origin: true }));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization, user_id',
	);
	next();
});

app.use(requestMiddleware);

app.use(responseMiddleware);

app.use('/', require('./routes/main'));

app.use(errorHandlingMiddleware);

app.listen(8607);

console.log('Server started on port 8607');
