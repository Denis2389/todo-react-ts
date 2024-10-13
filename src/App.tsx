import ListGroup from "./components/ListGroup"

const App = () => {
  const items = ["New York", "San Francisko", "Tokyo", "London", "Paris"];


  return (
    <div>
      <ListGroup items={items} heading="Cities"/>
    </div>
  );
}

export default App