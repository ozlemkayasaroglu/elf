export default async function JokeData(id) {
    const response = await fetch(
        `http://localhost:3001/joke/${id}`
    );

    if(!response.ok) {
        throw new Error("failed to the fetch jokedata")
    }
    const jokeData= await response.json()
    return jokeData;
}