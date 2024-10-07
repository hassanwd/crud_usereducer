import React from "react";
const FunctionForm = ({ addStudents, handleChange, name, grade }) => {
  const handleOnChange = (e) => {
    handleChange(e.target.name, e.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addStudents({ name, grade }); //invoke function, sending info back up to app
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        autoComplete="off"
        value={name}
        onChange={handleOnChange}
      />
      <label htmlFor="grade">Grade:</label>
      <input
        id="grade"
        type="text"
        name="grade"
        autoComplete="off"
        value={grade}
        onChange={handleOnChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};
export default FunctionForm;
