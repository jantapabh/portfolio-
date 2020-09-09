import React, { useEffect, useState } from "react";
import { Divider, Row, Col, Card } from "antd";

import { BioContainer, DividerHeader, BioText } from "./styles";
import axios from "axios";

const Workshop = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    getRepos();
  }, []);
  const getRepos = async () => {
    let res = await axios.get(
      "https://api.github.com/users/jantapabh/repos?per_page=100"
    );
    setRepos(res.data);
  };
  const mapReposinHTML = () => {
    return repos.map((item, index) => {
      return (
        <>
          <Col md={6}>
            <a target="_blank" href={item.svn_url} >
              <Card title={item.name} bordered={true} className="card">
                <Row type="flex" justify="space-between">
                  <svg
                    aria-label="fork"
                    class="octicon octicon-repo-forked"
                    viewBox="0 0 10 16"
                    version="1.1"
                    width="10"
                    height="16"
                    role="img"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                    ></path>
                  </svg>
                  {item.forks_count}
                  <svg
                    aria-label="star"
                    class="octicon octicon-star"
                    viewBox="0 0 14 16"
                    version="1.1"
                    width="14"
                    height="16"
                    role="img"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                    ></path>
                  </svg>{" "}
                  {item.stargazers_count}
                </Row>
              </Card>
            </a>
          </Col>
        </>
      );
    });
  };
  return (
    <BioContainer>
      <Divider>
        <DividerHeader>GITHUB Repositories</DividerHeader>
      </Divider>
      <BioText><Row type='flex' justify='center'>{mapReposinHTML()}</Row></BioText>
    </BioContainer>
  );
};

export default Workshop;
