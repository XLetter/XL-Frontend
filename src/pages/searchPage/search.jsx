import axios from "../../axios/Axios";
import React, {useEffect,useState}from "react";

const useSearchApi = (initialSearchKeyword) => {
    const [searchKeyword, setSearchKeyword] = useState(initialSearchKeyword);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
  
        try {
          const result = await axios(
            `${process.env.API_HOST}/search?keyword=${searchKeyword}`
          );
          setData(result.data);
          setIsLoading(false);
        } catch (error) {
          setIsError(true);
          console.log(error);
        }
      };
      fetchData();
    }, [searchKeyword]);
  
    return [{ data, isLoading, isError }, setSearchKeyword];
  };
  export default useSearchApi