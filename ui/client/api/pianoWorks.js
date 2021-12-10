const dataServiceUrl = 'http://localhost:5000';

export async function getAllworks() {

    const response = await fetch(`${dataServiceUrl}/listings`);
    return await response.json();
}