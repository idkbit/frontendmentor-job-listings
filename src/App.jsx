import { useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Layout from "./components/Layout";
import data from "./data";

const App = () => {
  const [jobList, setJobList] = useState(data);
  return (
    <Layout>
      <JobList>
        {jobList.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </JobList>
    </Layout>
  );
};

const JobList = styled.main`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;
`;

export default App;
