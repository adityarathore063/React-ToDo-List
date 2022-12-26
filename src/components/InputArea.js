import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};
function InputArea(props) {
  const [todo, setTodo] = useState("");

  function handleChange(event) {
    setTodo(event.target.value);
  }

  const add = () => {
    if (todo === "") {
      alert("Input Item is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={(e) => handleChange(e)}
          value={todo}
          placeholder="Enter Your Work"
        />
        <Fab
          onClick={() => {
            add();
          }}
        >
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(InputArea);
