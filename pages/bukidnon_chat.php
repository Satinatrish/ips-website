<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bukidnon Tribes Chat</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/main.css">
</head>
<style>
    /* General page styles */
    html, body {
        height: 100%; /* Ensure the page takes up the full height of the viewport */
        margin: 0;
    }

    body {
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1; /* Allow the main content to grow and push the footer down */
        display: flex;
        justify-content: center; /* Centers horizontally */
        align-items: center; /* Centers vertically */
    }

    /* Chat container styles */
    .chat-container {
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        width: 360px;
        max-width: 90%;
        display: flex;
        flex-direction: column;
        height: 500px;
    }

    /* Header with profile picture and description */
    .chat-header {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ddd;
        background-color: #007bff;
        color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .chat-header img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }

    .chat-header .ai-description {
        font-size: 14px;
        font-style: italic;
    }

    /* Chat box styles */
    .chat-box {
        flex-grow: 1;
        padding: 10px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
    }

    .user-input {
        display: flex;
        border-top: 1px solid #ddd;
        padding: 10px;
        background-color: #f7f7f7;
    }

    .user-input input {
        flex-grow: 1;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 20px;
        outline: none;
    }

    .user-input button {
        padding: 10px 15px;
        margin-left: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        outline: none;
    }

    .user-input button:hover {
        background-color: #0056b3;
    }

    .message {
        margin-bottom: 15px;
    }

    .message.user {
        text-align: right;
    }

    .message.bot {
        text-align: left;
    }

    .message p {
        display: inline-block;
        padding: 10px;
        border-radius: 20px;
        background-color: #e4e6eb;
    }

    .message.user p {
        background-color: #007bff;
        color: white;
    }

    .message.bot p {
        background-color: #f1f1f1;
    }
    .typing-indicator {
    display: inline-block;
    padding: 10px;
    border-radius: 20px;
    background-color: #f1f1f1;
    font-style: italic;
}

.typing-indicator:after {
    content: '...';
    animation: typing 1.5s infinite steps(5, end);
}

@keyframes typing {
    0% { content: ''; }
    25% { content: '.'; }
    50% { content: '..'; }
    75% { content: '...'; }
    100% { content: ''; }
}

</style>

<body>

    <!-- Header -->
    <header class="bg-dark text-white">
        <nav class="navbar navbar-expand-lg navbar-dark container">
            <a class="navbar-brand" href="../index.html">Tribal Heritage Timeline</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="dashboard.html">Dashboard</a></li>
                    <li class="nav-item"><a class="nav-link" href="history.html">History</a></li>
                    <li class="nav-item"><a class="nav-link" href="artifacts.html">Artifacts</a></li>
                    <li class="nav-item"><a class="nav-link" href="culture.html">Culture</a></li>
                    <li class="nav-item"><a class="nav-link" href="bukidnon_chat.php">Ask Ai</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main class="container mt-5">
        <!-- Chat container with Profile and Messages -->
        <div class="chat-container">
            <!-- Chat Header with Profile Picture and AI Description -->
            <div class="chat-header">
                <img src="img/ai.webp" alt="AI Profile Picture">
                <div class="ai-description">
                    <strong>AI Assistant:</strong> Your friendly AI guide for Bukidnon tribes information.
                </div>
            </div>

            <div class="chat-box" id="chat-box">
                <!-- Messages will appear here -->
            </div>

            <div class="user-input">
                <input type="text" id="user-message" placeholder="Ask about the Bukidnon tribes..." autocomplete="off">
                <button id="send-button">Send</button>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center p-3 mt-5">
        <p>&copy; 2024 Tribal Heritage Timeline | All Rights Reserved</p>
    </footer>

    <script src="../js/dashboard.js"></script>
    <script>
        // Function to handle sending user messages
        async function sendMessage() {
            const userMessage = document.getElementById('user-message').value;
            if (!userMessage) return;

            // Display the user's message
            displayMessage(userMessage, 'user');

            // Clear the input field
            document.getElementById('user-message').value = '';

            // Display typing animation before response
            const chatBox = document.getElementById('chat-box');
            const typingMessageDiv = document.createElement('div');
            typingMessageDiv.classList.add('message', 'bot');
            typingMessageDiv.innerHTML = `<p class="typing-indicator"> </p>`;
            chatBox.appendChild(typingMessageDiv);
            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message

            // Fetch and display bot's response after a delay
            const botResponse = await generateSolution(userMessage);
            typingMessageDiv.remove(); // Remove typing animation
            displayMessage(botResponse, 'bot');
        }

        // Function to display messages in the chat box
        function displayMessage(message, sender) {
            const chatBox = document.getElementById('chat-box');
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', sender);
            messageDiv.innerHTML = `<p>${message}</p>`;
            chatBox.appendChild(messageDiv);
            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
        }

        // Function to fetch a solution for the user's message
        async function generateSolution(userMessage) {
            const prompt = `Provide a concise response to the question: "${userMessage}". Keep it precise and under 100 words without cutting off sentences.`;

            try {
                const response = await fetch("https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-11B-Vision-Instruct", {
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer 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",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        inputs: prompt,
                        parameters: {
                            max_new_tokens: 150, // Allow up to 150 tokens for a more complete response
                            temperature: 0.7, // Adjust randomness to make responses more controlled
                            top_p: 0.9 // Use top-p sampling for more relevant responses
                        }
                    })
                });

                const data = await response.json();
                if (data && Array.isArray(data) && data[0]?.generated_text) {
                    return data[0].generated_text.trim();
                } else {
                    return "Sorry, I couldn't find an answer to your question.";
                }
            } catch (error) {
                console.error("Error:", error);
                return "Sorry, there was an issue generating a response. Please try again later.";
            }
        }

        // Event listener for send button
        document.getElementById('send-button').addEventListener('click', sendMessage);

        // Event listener for Enter key
        document.getElementById('user-message').addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });
    </script>

</body>
</html>
