from flask import Flask, request, jsonify
import requests

app = Flask(__name__)
GEMINI_API_KEY = "r1e2b3e4c5c6a7"

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message")      
    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    # Replace with Gemini AI API endpoint
    response = requests.post(
        "https://api.gemini.ai/chat",
        headers={"Authorization": f"Bearer {GEMINI_API_KEY}"},
        json={"message": user_message}
    )

    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "Failed to fetch response from Gemini AI"}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
