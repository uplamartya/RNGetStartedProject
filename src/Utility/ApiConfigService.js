// import axios from 'axios';
// import Config from "../Common/Constants/env";

// console.log("Config", Config)
// const axiosOptions = {
// 	baseURL: Config.baseUrl,
// };

// export const userAuthFetch = axios.create(axiosOptions);
// export const dashboardApi = axios.create(axiosOptions);
// export const getImageApi = axios.create(axiosOptions);
// export const getFavouriteApi = axios.create(axiosOptions);
// export const getWatchLaterApi = axios.create(axiosOptions);
// export const getCategoryListApi = axios.create(axiosOptions);
// export const getParticularPostContentApi = axios.create(axiosOptions);
// export const getSearchApi = axios.create(axiosOptions);
// export const paymentApi = axios.create(axiosOptions);

// // Adding headers to requests
// // add app_key
// dashboardApi.interceptors.request.use(config => {
// 	config.headers.key = Config.app_key
// 	console.log("API Called :-", Config.baseUrl + config.url)
// 	return Promise.resolve(config);
// });


// getFavouriteApi.interceptors.request.use(config => {
// 	config.headers.key = Config.app_key
// 	console.log("API Called :-", Config.baseUrl + config.url)
// 	return Promise.resolve(config);


// });

// getWatchLaterApi.interceptors.request.use(config => {

// 	config.headers.key = Config.app_key
// 	console.log("API Called :-", Config.baseUrl + config.url)
// 	return Promise.resolve(config);
// });

// getCategoryListApi.interceptors.request.use(config => {

// 	config.headers.key = Config.app_key
// 	console.log("API Called :-", Config.baseUrl + config.url)
// 	return Promise.resolve(config);
// });

// getParticularPostContentApi.interceptors.request.use(config => {

// 	config.headers.key = Config.app_key
// 	console.log("API Called :-", Config.baseUrl + config.url)
// 	return Promise.resolve(config);
// });


// getSearchApi.interceptors.request.use(config => {

// 	config.headers.key = Config.app_key
// 	console.log("API Called :-", Config.baseUrl + config.url)
// 	return Promise.resolve(config);

// });


// paymentApi.interceptors.request.use(config => {
// 	config.headers.key = Config.app_key
// 	console.log("API Called :-", Config.baseUrl + config.url)
// 	return Promise.resolve(config);
// });


// userAuthFetch.interceptors.request.use(config => {
// 	config.headers.key = Config.app_key
// 	console.log("API Called :-", Config.baseUrl + config.url)
// 	return Promise.resolve(config);
// });

// export const extractData = r => r.data;


