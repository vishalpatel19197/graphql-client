import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_TODO_QUERY = gql`
  query GetTodoList {
    getTodos {
      title
      user {
        name
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_TODO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getTodos.map(({ title, user }, id) => (
    <div key={id}>
      <h3>Title : {title}</h3>
      {/* <img width="400" height="250" alt="location-reference" src={`${photo}`} /> */}
      <br />
      <p>User: {user.name}</p>
      <br />
    </div>
  ));
}

export default App;
