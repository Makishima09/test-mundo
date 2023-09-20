import APIRequest from "../utils/config/axios.config";

export function getRandomUser() {
    return APIRequest.get('/', {    //https://randomuser.me/api/
        validateStatus: function (status) {
          return status < 500; // Resuelve solo si el código de estado es menor que 500
        }
        }) 
}

