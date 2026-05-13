import { useEffect, useState } from "react";
import axios from "axios";

function TestApi() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("/account/test/")
      .then((res) => {
        console.log(res.data);
        setData(res.data.message);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ margin: "100px", border: "1px solid black" }}>      
        <h2>API Test Component</h2>
        <p>{data}</p>
    </div>
  );
}

export default TestApi;