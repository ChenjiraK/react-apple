export const successReq = (request) => {
	const accessToken = localStorage.getItem('access_token');

	if (accessToken) {
		request.headers.Authorization = `Bearer ${accessToken}`;
	}

	return request;
};

export const errorReq = (err) => Promise.reject(err);