import React , {FC} from 'react'
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
      <div className="appContainer">
        <div className="appTitle">
          <div className="headerBarContainer">
            <div className="titleText">Toy loot gen game</div>
          </div>
        </div>
        <div className="appBody">
          <Cols>
            <Col>Library</Col>
            <Col>Equipped</Col>
            <Col>
              <Rows>
                <Row>
                <EnemyInfoCard />
                </Row>
                <Row>
                  ???
       
                </Row>
              </Rows>
            </Col>
          </Cols>
        </div>
      </div>
    </>
  )
}

const Cols: FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<div className="colsContainer">{children}</div>)
}

const Col: FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<div className="colsItem">{children}</div>)
}

const Rows: FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<div className='rowsContainer'>{children}</div>);
}
const Row: FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (<div className="rowsItem">{children}</div>)
}
const Card: FC<{ children?: React.ReactNode, title: string }> = ({ children, title }) => {
    return (<div><div>{title}</div><div style={{ textAlign: 'left', paddingLeft: '12px' }}>{children}</div></div>);
}

const EnemyInfoCard = () => {

  return (<>
      <Card title='Enemy Info'>
        <button style={{ backgroundColor: '#2244aa', border: 'solid 0px gray', borderRadius: '6px', width: 'auto', margin: '4px 4px 4px 4px',  padding: '2px 8px 2px 8px', }}>Generate enemy</button>
        <div style={{ textAlign: 'left' }}>
          <div>max hp: 10</div>
          <div>atk 1: 5 plain damage</div>
          <div>resists: +3 water DEF</div>
        </div>
        <table style={{ tableLayout: 'auto', width: '100%', backgroundColor: '#442299' }}>
            <tr><td>blah</td><td>s</td></tr>
            <tr>blah</tr>
        </table>
      </Card>
  </>);
}

export default App;
