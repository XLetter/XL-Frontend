import axios from "../../axios/Axios";
import React, {useEffect,useState}from "react";

function axiosTest() {
  return axios.get(fetchURL).then(response => response.data)
}
const fetchURL="https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213";
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
          const result = await axiosTest(
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