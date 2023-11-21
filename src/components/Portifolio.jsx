import { useEffect, useState, React } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
   <>
      <ul className="flex flex-wrap justify-around">{repos.map(item => (
        <Card className="my-3" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="data:image/png;base64,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" />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
             Linguagem ultilizada: {item.language}
            </Card.Text>
            <Button className="bg-gray-500" variant="dark"><a href={item.html_url} target="_blank">Repositório</a></Button>
          </Card.Body>
        </Card>

      ))}</ul>
      
   </>
  );
};

export default Portifolio;
