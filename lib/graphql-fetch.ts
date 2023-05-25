export async function graphqlFetch(query: string, variables?: any) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${process.env.GITHUB_TOKEN}`);

  const response = await fetch(process.env.GITHUB_API_URL as string, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Error ${await response.text()}`);
  }

  return response.json();
}
