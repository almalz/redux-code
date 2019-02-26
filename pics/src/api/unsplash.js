import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID ec1c3f175f8e34a7239f9751dfb31e2579a0dac11c056be4be4d8dd06c43f02c'
	}
});
