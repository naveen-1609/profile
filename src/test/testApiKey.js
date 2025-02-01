fetch("https://backend-pfcn.onrender.com/api/key")
  .then(response => response.json())  // Convert response to JSON
  .then(data => console.log("API Key Fetched:", data.apiKey)) // Log the API key
  .catch(error => console.error("Error fetching API key:", error));