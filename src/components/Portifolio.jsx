import { useEffect, useState, React } from "react";
import { DiGithubFull } from "react-icons/di";

import axios from "axios";

const Portifolio = () => {
  const [repos, setRepos] = useState([]);

  const URL_user = "https://api.github.com/users/Helio-junior-ADS/repos";
  const getUser = async () => {
    await axios
      .get(URL_user)
      .then((res) => {
        setRepos(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Erro:", err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-around">{repos.map(item => (
        <div className="rounded-md border-solid border-2 border-gray-500 shadow-2xl w-1/5 m-5 text-center" key={item.id}>
          <div className="flex flex-col items-center overflow-hidden overflow-ellipsis">
              <div className="p-1 ">
                {item.name}
              </div>

              <div className="p-1">
                {item.language}
              </div>

              <div className="">
                <a className="text-[50px]" href={item.html_url}><DiGithubFull/></a>
              </div>
          </div>
        </div>
      ))}</div>
    </div>
  );
};

export default Portifolio;
