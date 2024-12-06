
import { useEffect, useState } from "react";

const useLoadNotes = () => {
  const [loading, setLoading] = useState(true);

  const loadNotes = async () => {
    setLoading(true);
    // Имитация задержки загрузки данных
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return loading;
};

export default useLoadNotes;
