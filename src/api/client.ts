export const client = {
    returnRejectedPromiseOnError: true,
    withCredentials: false,
    timeout: 30000,
    authHash: "",
    baseURL: `https://statisti.rs/uvdance.rs/lser/`,
    headers: {
        common: {
            Authorization: "",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    },
};
