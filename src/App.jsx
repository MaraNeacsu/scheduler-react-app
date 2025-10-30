import { useState } from "react";
import ShowList from "./components/ShowList";
import ShowForm from "./components/ShowForm";

function App() {
  const [shows, setShows] = useState([
    { id: 1, name: "Morning News", time: "08:00" },
    { id: 2, name: "Daily Hits", time: "10:00" }
  ]);

  const [editShow, setEditShow] = useState(null);

  const addOrUpdateShow = (show) => {
    if (editShow) {
      setShows(shows.map(s => (s.id === show.id ? show : s)));
      setEditShow(null);
    } else {
      setShows([...shows, { ...show, id: Date.now() }]);
    }
  };

  const editHandler = (show) => setEditShow(show);
  const deleteHandler = (id) => setShows(shows.filter(s => s.id !== id));
  const cancelEdit = () => setEditShow(null);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Radio Scheduler</h1>
      <ShowForm onSave={addOrUpdateShow} editShow={editShow} onCancel={cancelEdit} />
      <ShowList shows={shows} onEdit={editHandler} onDelete={deleteHandler} />
    </div>
  );
}

export default App;
