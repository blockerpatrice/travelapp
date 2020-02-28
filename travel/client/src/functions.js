const API_URL = 'http://localhost:1341'

export async function listLogEntries (){
    const response = await fetch(`${API_URL}/api/Routes`)
    return response.json()
}