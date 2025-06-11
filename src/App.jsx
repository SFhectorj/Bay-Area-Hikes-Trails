import "./App.css";
import ResourceCard from "./ResourceCard";
import { hikes } from "./data";

function App() {
  return (
    <div className="app">
      <h1>Bay Area Hikes</h1>
      <div className="card-grid">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}

export default App;
