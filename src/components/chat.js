import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("localhost:3001");

function Chat() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastMessage, setLastMessage] = useState(null);
  const [name, setName] = useState(null);
  useEffect(() => {
    // declaring id items
    const messageContainer = document.getElementById("message-container");
    const messageForm = document.getElementById("send-container");
    const messageInput = document.getElementById("message-input");
    socket.on("connect", () => {
      setIsConnected(true);
    });
    socket.on("disconnect", () => {
      setIsConnected(false);
    });
    socket.on("message", (data) => {
      setLastMessage(data);
    });

    // // message drop down for USERNAME
    // const name = prompt("What is your name?");
    appendMessage("You joined");
    setName(socket.id);
    socket.emit("new-user", name);

    // NAME says MESSAGE
    socket.on("chat-message", (data) => {
      appendMessage(`${data.name}: ${data.message}`);
    });

    // NAME CONNECTED
    socket.on("user-connected", (name) => {
      appendMessage(`${name} connected`);
    });

    // NAME DISCONNECTED
    socket.on("user-disconnected", (name) => {
      appendMessage(`${name} disconnected`);
    });

    // MESSAGE FORM PREVENT DEFAULT
    // APPEND MESSAGE AREA with MESSAGE
    // CLEAR MESSAGE INPUT
    messageForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // setName(socket.id);
      const message = messageInput.value;
      appendMessage(`You: ${message}`);
      socket.emit("send-chat-message", message);
      messageInput.value = "";
    });

    // APPEND MESSAGE FUNCTION
    function appendMessage(message) {
      const messageElement = document.createElement("div");
      messageElement.innerText = message;
      messageContainer.append(messageElement);
    }

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("hello!");
  };
  console.log(name);

  return (
    <div className="chat" id="chat">
      <header className="app-header">
        <p>Connected: {"" + isConnected}</p>
        <p>Last message: {lastMessage || "-"}</p>
        <div id="message-container"></div>
        <form id="send-container">
          <input placeholder="message" type="text" id="message-input" />
          <button type="submit" id="send-button">
            Send
          </button>
        </form>
        <button onClick={sendMessage}>Say hello!</button>
        {/* <ul className="pages">
          <li className="chat page">
            <div className="chatArea">
              <ul className="messages"></ul>
            </div>
            <input
              className="inputMessage"
              placeholder="Type message here..."
            />
          </li>
          <li className="login page">
            <div className="form">
              <h3 className="title">What's your nickname?</h3>
              <input
                className="usernameInput"
                placeholder="username"
                type="text"
                maxlength="14"
              />
            </div>
          </li>
        </ul> */}
      </header>
    </div>
  );
}

export default Chat;
