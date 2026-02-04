function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const sound = document.getElementById("replySound");

  const userText = input.value.trim();
  if (userText === "") return;

  // Show user message
  chatBox.innerHTML += `<p><b>You:</b> ${userText}</p>`;
  input.value = "";

  let aiReply = "";
  const text = userText.toLowerCase();

  // ---- AI LOGIC ----

  if (text.includes("college") || text.includes("student")) {
    aiReply =
      "Iron Lady offers Skill Development and Career Guidance programs for college students to build confidence, career clarity, and industry-ready skills.";
  } 
  else if (text.includes("career") || text.includes("job") || text.includes("growth")) {
    aiReply =
      "Iron Lady supports women in career growth through mentorship, skill training, and confidence-building programs.";
  } 
  else if (text.includes("entrepreneur") || text.includes("business") || text.includes("startup")) {
    aiReply =
      "Iron Lady provides Women Entrepreneurship programs that offer mentorship, leadership guidance, and business support.";
  } 
  else if (text.includes("program") || text.includes("course")) {
    aiReply =
      "Iron Lady offers programs in Skill Development, Career Guidance, Women Leadership, and Entrepreneurship.";
  } 
  else if (text.includes("who is iron lady")) {
    aiReply =
      "Iron Lady is a women empowerment initiative focused on education, leadership, mentorship, and career development.";
  }
  else if (text.includes("iron lady") || text.includes("foundation")) {
    aiReply =
      "Iron Lady Foundation empowers women through education, mentorship, leadership, and career-oriented programs.";
  } 
  else {
    aiReply =
      "I can help you with information about Iron Lady programs, careers, students, or entrepreneurship.";
  }

  // Show AI response
  chatBox.innerHTML += `<p><b>🤖 Iron Lady AI:</b> ${aiReply}</p>`;

  // Auto scroll
  chatBox.scrollTop = chatBox.scrollHeight;

  // Play reply sound
  sound.play();
}

// Auto question click
function autoAsk(question) {
  document.getElementById("userInput").value = question;
  sendMessage();
}

// Toggle chatbot open / close
function toggleChat() {
  const chat = document.getElementById("chatContainer");
  chat.style.display =
    chat.style.display === "none" || chat.style.display === ""
      ? "block"
      : "none";
}
