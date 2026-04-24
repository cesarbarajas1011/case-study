export const getAIMessage = async (userQuery) => {
  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful refrigerator repair expert. Answer all user questions clearly and directly. If the question is unrelated, politely redirect to refrigerator topics.",
          },
          {
            role: "user",
            content: userQuery,
          },
        ],
        temperature: 0.2,
      }),
    });

    const data = await res.json();

  
    console.log("Groq response:", data);

    const content =
      data?.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate a response.";

    return {
      role: "assistant",
      content,
    };
  } catch (err) {
    console.error(err);

    return {
      role: "assistant",
      content: "Error connecting to AI service.",
    };
  }
};
