export const fetchAPI = async (route, method) => {
    const response = await fetch(`https://portfolio-backend-ten-gamma.vercel.app${route}`,{
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    if (response.ok) {
        return Promise.resolve(data)
    }
}