function ResourceCard({ resource }) {
  return (
    <div className="card">
      <h2>{resource.title}</h2>
      <p>{resource.description}</p>
      <a
        href={resource.link}
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Visit Resource
      </a>
    </div>
  );
}

export default ResourceCard;
