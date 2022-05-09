import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

function Row() {
  return (
    <>
      <div className="p-2 row_shadow my-2  d-flex justify-content-between align-items-center">
        <div>
          <input type="checkbox" />
        </div>
        <div>
          <p className="mb-0 fs-7">#876364</p>
        </div>
        <div>
          <p className="fs-7 d-flex align-items-center mb-0">
            {" "}
            <FaCalendarAlt className="me-2 cal" /> 10 Dec, 2021
          </p>
        </div>
        <div>
          <button className="btn_pro">Processed</button>
        </div>
        <div>
          <div className="d-flex">
            <p className="mb-0">
              <AiFillStar className="me-2 cal-1" />
            </p>
            <p className="mb-0">
              <MdEdit className="me-2 cal-1" />
            </p>
            <p className="mb-0">
              <AiFillDelete className="me-2 cal-2"/>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Row;
