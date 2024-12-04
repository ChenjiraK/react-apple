export const successRes = (response) => response;

export const errorRes = async (err) => {
	return Promise.reject(err);
};