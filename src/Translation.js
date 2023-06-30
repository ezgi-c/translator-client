import React, { useState } from "react";
import axios from "axios";

function Translation() {
  const [text, setText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [translatedText, setTranslatedText] = useState("");


  const handleTranslation = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/translate`, {
        text,
        targetLanguage,
      });

      const translatedText = response.data.translatedText;
      setTranslatedText(translatedText);
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  return (
    <div>
           <h2>Translation Form</h2>
      <div>
        <label>Text:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <label>Target Language:</label>
        <input
          type="text"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        />
      </div>

      <button onClick={handleTranslation}>Translate</button>

      {translatedText && (
        <div>
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
}

export default Translation;
