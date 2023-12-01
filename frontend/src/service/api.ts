import axios from "axios";

const URL_API = "http://sede.vidatel.com.br/api_jsonrpc.php"

const api = axios.create({
    baseURL: URL_API
});

export { api };