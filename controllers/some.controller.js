const SomeBiz = require('../biz/some.biz');
const SomeValidator = require('');

class SomeController {
	register(app) {
		app.route('/some')
			.post(async (request, response, next) => {
				try {
					const {
						data,
					} = request.body;
					const validator = new SomeValidator();
					validator.validateCreateSome(request.body);

					const someBiz = new SomeBiz();
					const result = await someBiz.create(data);

					response.json({
						result,
					}, 'Data updated.');
				} catch (error) {
					next(error);
				}
			});
	}
}

module.exports = SomeController;
