import React, { useState } from "react";
import styled from "styled-components";
import AddEditBoardModal from "../modals/AddEditBoardModal";

export default function EmptyBoard({ type }) {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  return (
    <BoardWrap>
      <h3 className="board-empty-text">
        {type === "edit"
          ? "This board is empty. Create a new column to get started."
          : "There are no boards available. Create a new board to get started"}
      </h3>
      <button
        onClick={() => {
          setIsBoardModalOpen(true);
        }}
        className="add-column-btn"
      >
        {type === "edit" ? "+ Add New Column" : "+ Add New Board"}
      </button>
      {isBoardModalOpen && (
        <AddEditBoardModal
          type={type}
          setIsBoardModalOpen={setIsBoardModalOpen}
        />
      )}
    </BoardWrap>
  );
}

const BoardWrap = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  .board-empty-text {
    text-align: center;
    color: #828fa3;
    margin-bottom: 25px;
  }
`;
