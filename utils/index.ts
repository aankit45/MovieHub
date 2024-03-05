export async function fetchMovies() {
    const headers = {
		'X-RapidAPI-Key': '294472bf49mshf1beed13ab2db2bp1f78cajsne9f872f8233a',
		'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
	}
    const response = await fetch('https://movies-api14.p.rapidapi.com/shows', { headers: headers });
    const result = await response.json();
    return result;
}