export const fetcher = (...args) => fetch(...args).then(res => res.json());

export const domain_API = "http://localhost:8087/api";

export const baoBongDaAPI = {
    getAccountByUsername: (username) => `${domain_API}/account/findByUsername/${username}`,
}