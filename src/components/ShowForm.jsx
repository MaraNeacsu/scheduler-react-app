import { useState, useEffect } from "react";

function ShowForm({ onSave, editShow, onCancel }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (editShow) {
      setName(editShow.name);
      setTime(editShow.time);
    }
  }, [editShow]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !time) return;
    onSave({ id: editShow ? editShow.id : Date.now(), name, time });
    setName("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Show Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">{editShow ? "Update" : "Add"}</button>
      {editShow && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default ShowForm;
