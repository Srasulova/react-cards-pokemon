import { useState } from "react";
import axios from "axios";

function useFlip() {
  const [isFlipped, setIsFlipped] = useState(true);

  const toggleFlip = () => {
    setIsFlipped((isUp) => !isUp);
  };

  return [isFlipped, toggleFlip];
}

function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  const addData = async (urlEnding = "") => {
    const response = await axios.get(`${baseUrl}${urlEnding}`);
    setData((data) => [
      ...data,
      { ...response.data, id: response.data.id || response.data.name },
    ]);
  };

  return [data, addData];
}

export { useAxios, useFlip };
