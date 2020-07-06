import React from "react";
import { ReactSortable, Sortable, MultiDrag, Swap } from "react-sortablejs";

Sortable.mount(new MultiDrag(), new Swap());

function ReactSortableJs() {
  const [state, setState] = React.useState([
    { id: 3121, name: "1" },
    { id: 2123, name: "2" },
    { id: 3456456, name: "3" },
    { id: 432234234, name: "4" },
    { id: 55674567, name: "5" },
    { id: 654363456, name: "6" },
    { id: 737, name: "7" },
    { id: 83457, name: "8" },
    { id: 925, name: "9" },
    { id: 132450, name: "10" }
  ]);

  const [state2, setState2] = React.useState([
    { id: 18679, name: "1" },
    { id: 2578, name: "2" },
    { id: 3573, name: "3" },
    { id: 4245, name: "4" },
    { id: 5345, name: "5" },
    { id: 53466, name: "6" },
    { id: 73657, name: "7" },
    { id: 34578, name: "8" },
    { id: 93457, name: "9" },
    { id: 134570, name: "10" }
  ]);

  function setList(list) {
    // console.log(list, "LIST");
    setState(list);
  }

  function makeChoosen(id) {
    const freshArray = state.map(item => {
      if (item.id === id) {
        return { ...item, chosen: true };
      } else {
        return item;
      }
    });
    console.log(freshArray, "freshArray");
  }

  return (
    <React.Fragment>
      <h1>List 1</h1>
      <ReactSortable
        list={state}
        setList={list => setList(list)}
        className="grid"
        group="groupName"
        animation={200}
        delayOnTouchStart={true}
        onEnd={event => console.log(event)}
        swap
        multiDrag
      >
        {state.map((item, index) => {
          const itemId = item.id;
          return (
            <div
              className="box"
              key={item.id}
              onMouseEnter={() => makeChoosen(itemId)}
            >
              {item.name}
            </div>
          );
        })}
      </ReactSortable>
      <h1>List 2</h1>
      <ReactSortable
        list={state2}
        setList={setState2}
        className="grid"
        group="groupName"
        animation={200}
        delayOnTouchStart={true}
        multiDrag
      >
        {state2.map((item, index) => (
          <div className="box" key={item.id}>
            {item.name}
          </div>
        ))}
      </ReactSortable>
    </React.Fragment>
  );
}

export { ReactSortableJs };
