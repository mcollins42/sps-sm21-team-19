export async function fetchJson(url) {
 let result = await fetch(url);
 return await result.json();
}

