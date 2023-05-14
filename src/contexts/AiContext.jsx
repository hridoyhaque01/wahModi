import { Configuration, OpenAIApi } from "openai";
import React, { createContext, useState } from "react";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const AiContext = createContext();

const AiProvider = ({ children }) => {
  const date = new Date();
  const formattedDate = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  console.log(formattedDate);

  // states
  const [modiMessages, setModiMessages] = useState([
    { user: false, message: "How can I help you?" },
  ]);
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isProccesing, setIsProccesing] = useState(false);

  // functions here
  const processRequest = async (input) => {
    const newModiMessages = [
      ...modiMessages,
      { user: true, message: input, message_time: formattedDate },
    ];
    setModiMessages(newModiMessages);

    try {
      setIsProccesing(true);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Act as India's Prime Minister Narendra Modi and here is some custom data about you in the docx file in this link: https://docs.google.com/document/d/1_1M_gpae2kGCMLCoDKkOR1wnwOdxd-60/edit?usp=sharing&ouid=107813714745756336832&rtpof=true&sd=true , now reply to the following message as Narandra Modi:\n\n ${input}`,
        temperature: 0,
        max_tokens: 1500,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });

      if (response.status === 200) {
        setIsLoading(false);
      }

      const responseCorrect = response?.data?.choices[0]?.text;
      const newResponseMessages = [
        ...newModiMessages,
        {
          user: false,
          message: responseCorrect,
          message_time: formattedDate,
        },
      ];

      setOutput(responseCorrect);
      setModiMessages(newResponseMessages);
      setIsProccesing(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // reset output
  const resetOutput = () => {
    setOutput("");
  };

  const aiInfo = {
    output,
    resetOutput,
    processRequest,
    isLoading,
    setIsLoading,
    modiMessages,
    setModiMessages,
    isProccesing,
  };

  return <AiContext.Provider value={aiInfo}>{children}</AiContext.Provider>;
};

export default AiProvider;
