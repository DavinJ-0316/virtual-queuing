import API from "../../libs/API";

const getAuthenticatedUser = () => API.get('/auth')

export default getAuthenticatedUser
