import "./App.css";
import ResourceCard from "./ResourceCard";
import { resources } from "./data";

function App() {
  return (
    <div className="app">
      <h1>San Francisco Bay Area Hiking Trails</h1>
      <div className="card-grid">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}

export default App;
