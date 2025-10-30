function ShowList({ shows, onEdit, onDelete }) {
  return (
    <ul>
      {shows.map(show => (
        <li key={show.id} style={{ marginBottom: "15px" }}>
          {show.time} - {show.name}
          <button style={{ marginLeft: "10px" }} onClick={() => onEdit(show)}>Edit</button>
          <button style={{ marginLeft: "5px" }} onClick={() => onDelete(show.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ShowList;
