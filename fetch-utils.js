const SUPABASE_URL = 'https://hyqivfaxwqmuwojmjohl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cWl2ZmF4d3FtdXdvam1qb2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTIwMTksImV4cCI6MTk2MzEyODAxOX0.2-5A9FQPEXiMr2pXL1ib36JFCtoqDgkSAwT8WO4ZiNc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAlbums() {
    const response = await client
        .from('Albums')
        .select ('*');
    console.log(response);
    return response.body;
}

export async function getGames() {
    const response = await client
        .from('VideoGames')
        .select ('*');
    return response.body;
}

export async function getMovies() {
    const response = await client
        .from('Movies')
        .select ('*');
    return response.body;
}

export async function getAnimals() {
    const response = await client
        .from('Animals')
        .select ('*');
    return response.body;
}