import { useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import FilterList from "./components/FilterList";
import Layout from "./components/Layout";
import data from "./data";

const App = () => {
  const [filters, setFilters] = useState({
    role: "",
    level: "",
    tools: [],
    languages: [],
  });

  const filtered = data.filter((job) => {
    if (filters.role && job.role !== filters.role) return false;
    if (filters.level && job.level !== filters.level) return false;
    if (filters.tools.length) {
      if (!filters.tools.every((t) => job.includes(t))) return false;
    }
    if (filters.languages.length) {
      if (!filters.languages.every((l) => job.languages.includes(l)))
        return false;
    }
    return true;
  });

  return (
    <Layout>
      <JobList>
        <FilterList filters={filters} setFilters={setFilters} />
        {filtered.length > 0
          ? filtered.map((job) => (
              <Card
                filters={filters}
                setFilters={setFilters}
                key={job.id}
                job={job}
              />
            ))
          : data.map((job) => (
              <Card
                filters={filters}
                setFilters={setFilters}
                key={job.id}
                job={job}
              />
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
