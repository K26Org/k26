const API_URL = "https://localhost:5001/api";

export async function getCourses() {

    const response = await fetch(`${API_URL}/course`);

    return await response.json();
}