"use client";

import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
export default function Drugable() {
  useEffect(() => {
    dragElement(document.getElementById("drugdiv"));

    function dragElement(drugableItemDiv: any) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(drugableItemDiv.id)) {
        const drugableItem = document.getElementById(drugableItemDiv.id) as any;
        drugableItem.onmousedown = dragMouseDown;
      } else {
        drugableItemDiv.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e: any) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e: any) {
        // e = e || window.event;
        e.preventDefault();
        // client calculate the coordinate of the mouse cursor relative to the top left edge of the document, not the element
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(window.innerHeight, window.innerWidth);
        // console.log(pos4, drugableItemDiv.clientHeight);
        // console.log(Number(drugableItemDiv.style.top.split("px")[0]));
        let newNumber = Number(drugableItemDiv.style.top.split("px")[0]);
        console.log(newNumber);
        if (
          pos4 > drugableItemDiv.clientHeight - 8 &&
          window.innerHeight - 50 >= pos4 &&
          pos3 > drugableItemDiv.clientWidth - 128 &&
          window.innerWidth - 150 >= pos3
          // newNumber >= 0
        ) {
          console.log(Number(drugableItemDiv.style.top.split("px")[0]));
          drugableItemDiv.style.top = drugableItemDiv.offsetTop - pos2 + "px";
          drugableItemDiv.style.left = drugableItemDiv.offsetLeft - pos1 + "px";
        }
      }
      // removing the mouseup event stops the drag event
      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }, []);
  const iconString = <FaHome />;
  return (
    <div>
      <div
        id="drugdiv"
        className="text-black p-5 absolute bg-red-400 cursor-move">
        <p>move me any where in the screen viewport</p>
        <div className="text-black bg-red-900" />
        <p>{iconString}</p>
      </div>
      <div id="magnifier"></div>
    </div>
  );
}
