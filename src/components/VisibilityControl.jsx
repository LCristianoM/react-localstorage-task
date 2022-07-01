import React from 'react'

export const VisibilityControl = ({ isChecked, setShowCompleted, cleanTask }) => {

  const handleDelete = () => {
    if(window.confirm('Are you sure you want to delete id?')){
      cleanTask();
    }
  }

  return (
    <div className="d-flex justify-content-between bg-secondary text-white test-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label>Show task done</label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Clear
      </button>
    </div>
  );
}
