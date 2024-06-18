import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const makeRequestAPI = async (prompt) => {
  const res = await axios.post("http://localhost:8080/diagnose", { prompt });
  return res.data;
};

function ChatBot() {
  const backgroundStyle = {
    backgroundImage: "url('https://wallpaperaccess.com/full/958470.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
  };

  const blurOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(6px)',
    zIndex: 0,
  };

  const contentStyle = {
    zIndex: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    height: '80%', // Adjust this value as needed
    overflowY: 'auto',
  };

  const [prompt, setPrompt] = useState("");
  const mutation = useMutation({
    mutationFn: makeRequestAPI,
    mutationKey: ["gemini-ai-request"],
  });

  const submitHandler = (e) => {
    e.preventDefault();
    mutation.mutate(prompt);
  };

  const parseResponse = (response) => {
    const sections = response.split('**');
    return sections.map(section => {
      const [title, ...content] = section.split('*');
      return { title: title.trim(), content: content.filter(item => item.trim()).map(item => item.trim()) };
    }).filter(section => section.title || section.content.length > 0);
  };

  return (
    <div>
      <div style={backgroundStyle}>
        <div style={blurOverlayStyle}></div>
        <div style={contentStyle}>
          <div className="container d-flex justify-content-center align-items-center h-100">
            <div style={{ zIndex: 1 }} className="App">
              <div className="App-chat-container">
                <div className="App-chat border rounded-xl p-5 bg-white" style={{ marginTop: '20%', maxHeight: '60vh', overflowY: 'auto' }}>
                  <p className='text-2xl' style={{ color: 'black', fontWeight: 'bold' }}>Interact with the AI Companion:</p>
                  <form className="App-form" onSubmit={submitHandler}>
                    <input
                      type="text"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Write a content about..."
                      className="App-input text-dark rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <br />
                    <button className="mt-3 mb-5 text-light bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-s px-4 py-2.5 text-center inline-flex items-center me-2 mb-2" type="submit">
                      Generate Content
                    </button>
                  </form>
                </div>
                <div className="App-response" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                  {mutation.isPending && <p>Generating your content...</p>}
                  {mutation.isError && <p className="App-error">{mutation.error.message}</p>}
                  {mutation.isSuccess && (
                    <div className="card-deck">
                      {parseResponse(mutation.data).map((section, index) => (
                        <div key={index} className="card text-dark bg-light mb-3 rounded-lg shadow-xl">
                          <div className="card-body">
                            <h5 className="card-title">{section.title ? `Content ${index + 1}: ${section.title}` : `Content ${index + 1}`}</h5>
                            {section.content.map((item, idx) => (
                              <p key={idx} className="card-text">{item}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
