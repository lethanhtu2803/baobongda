export const fetcher = (...args) => fetch(...args).then(res => res.json());

export const domain_API = "http://localhost:8087/api";

export const baoBongDaAPI = {
    getAccountByUsername: (username) => `${domain_API}/account/findByUsername/${username}`,
    findAll: () => `${domain_API}/account/findAll`,
    login: (account) => ({
        url: `${domain_API}/account/login`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
        }
    })
}