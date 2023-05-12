import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const List = ({ list, removeItem }) => {
  return (
    <div className="grocery-list">
      {list.map((item) => {
        return (
          <article className="grocery-item" key={item.id}>
            <p className="title">{item.title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(item.id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
