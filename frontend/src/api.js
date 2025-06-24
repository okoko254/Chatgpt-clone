export async function sendMessage(message) {
    const response = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
  
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to fetch response from the server');
    }
  }
