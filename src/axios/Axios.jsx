import axios from 'axios';
// base url to make requests to the movie database
const instance = axios.create({
  baseURL: 'http://43.200.24.50:8080',
});

//instance.get('/foo-bar');
//https://api.themoviedb.org/3/foo-bar
//요렇게 나중에 instance.get('주소') 쓰면 baseURL뒤에 알아서 붙는다.

export default instance;
//Access-Control-Allow-Origin: *
//Access-Control-Allow-Methods: GET
//위에 두개 어떻게 해결해야하는가?
//Access to XML Http Request at 'http://43.200.24.50:8080/apis/webnovel?type=0' from origin 'http://localhost:3001' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.라고 뜨는데

//혹시 No 'Access-Control-Allow-Origin' header is present on the requested resource. 이거,,, 해결방법 아시나요,,?

//GET이랑 POST만 method으로 쓰고싶은데 모든게 다 헤더가 없다고 떠서 백이랑 연결하는 과정에서 오류가 나네요,,,

//그냥 api_key랑 base_url이 있는건 해봤는데 aws에서 연결하는건 처음입니다!
