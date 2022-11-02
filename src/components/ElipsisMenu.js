import React from "react";
import styled from "styled-components";

export default function ElipsisMenu({
  type,
  setOpenEditModal,
  setOpenDeleteModal,
}) {
  return (
    <div className="elipsis-menu text-L">
      <p
        onClick={() => {
          setOpenEditModal();
        }}
      >
        Edit {type}
      </p>
      <DeleteBtn onClick={() => setOpenDeleteModal()}>Delete {type}</DeleteBtn>
    </div>
  );
}

const DeleteBtn = styled.p`
  color: #ea5555;
  margin-top: 16px;
`;
