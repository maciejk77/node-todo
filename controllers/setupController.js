var Todos = require('../models/todoModel');

module.exports = function(app) {

	app.get('/api/setupTodos', function(req, res) {

		var starterTodos = [
			{
				username: 'test',
				todo: 'Buy milk',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'test',
				todo: 'Walk the dog',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'test',
				todo: 'Do laundry',
				isDone: false,
				hasAttachment: false
			}
		];

		Todos.create(starterTodos, function(err, results) {
			if(err) {
				throw new Error(err);
			} else {
				res.send(results);	
			}

		});		

	})

}