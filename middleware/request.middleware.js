module.exports = async (request, response, next) => {
	try {
		next();
	} catch (error) {
		next(error);
	}
};
