import React from 'react'
import { DndContext, useDraggable, useDroppable, DragOverlay } from '@dnd-kit/core'
import './App.css'

function Draggable () {
  const { attributes, listeners, setNodeRef: setNodeRefItem, transform } = useDraggable({
    id: 'draggable',
  });

  const style = transform ? ({
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  }) : undefined ;

  return (
    <div ref={setNodeRefItem} style={style} {...listeners} {...attributes} className="card-in-library-big"> sample module here - expanded item 1 </div>
  )
}

function App() {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable'
  });



  return (
    <>
      <div className="App">
        <div className="title">
          <div className="title-text">Toy loot gen game</div>
        </div>
        <div className="body">
            <div className="body-left-small">
              Library
              <div className="card-in-library-list">
                <DndContext>
                <Draggable />
                <div className="card-in-library-big">
                  sample module here - expanded
                </div>
                </DndContext>
                <div className="card-in-library-big">
                  sample module here - expanded
                </div>
                <div className="card-in-library-big">
                  sample module here - expanded
                </div>
              </div>
            </div>
            <div className="body-right-big">
              <div className="hull-wrapper">
                <div className="hull-title">your robot name here</div>
                <div className="hull-body">
                  <div className="hull-column">
                    <div className="hull-column-strut"></div>
                    <div className="hull-column-container">
                      <div ref={setNodeRef} className="hull-column-item">{isOver ? 'slot 1' : 'empty'}</div>
                      <div className="hull-column-item">slot 2</div>
                      <div className="hull-column-item">slot 3</div>
                      <div className="hull-column-item">slot 4</div>
                    </div>
                  </div>
                  <div className="hull-column"></div>
                  <div className="hull-column"></div>
                  <div className="hull-column"></div>
                </div>
              </div>
            </div>
        </div>
        <div className="debug">debug</div>
      </div>
    </>
  )
}

export default App
