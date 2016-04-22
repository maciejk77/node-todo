var configValues = require('./config');

module.exports = {

	getDbConnectionsString: function() {
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + 
		'@ds013911.mlab.com:13911/udemy-nodetodo';
	}

}

//  mongodb://<dbuser>:<dbpassword>@ds013911.mlab.com:13911/udemy-nodetodo