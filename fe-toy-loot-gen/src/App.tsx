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
        <EnemyInfoBlock />
      </Card>
  </>);
}

const EnemyInfoBlock = () => {
    return (<>
        <div>
          <h2>Placeholder Name</h2>
          <div>HP: 10</div>
          <div>Defenses:</div>
          <table style={{ textAlign: 'center' }}>
            <tr>
              <td><TypetagBubble tag='PLAIN'/></td><td style={{color: '#2d2'}}>+2.5</td>
            </tr>
            <tr>
              <td><TypetagBubble tag='WATER'/></td><td style={{color: '#d62'}}>-5</td>
            </tr>
            <tr>
              <td><TypetagBubble tag='WIND'/></td><td style={{ color: '#d62' }}>-10</td>
            </tr>
            <tr>
              <td><TypetagBubble tag='FIRE'/></td><td style={{ color: '#2d2' }}>+10</td>
            </tr>
            <tr>
              <td><TypetagBubble tag='GRAVITON'/></td><td style={{ color: '#2d2' }}>+10</td>
            </tr>
            <tr>
              <td><TypetagBubble tag='QUANTUM'/></td><td style={{ color: '#2d2' }}>+10</td>
            </tr>
          </table>
          <br />
          <div>Attacks per turn:</div>
          <table style={{ textAlign: 'center' }}>
            <tr>
              <td><TypetagBubble tag='RADIATIVE'/></td><td>1 x 2 dmg</td>
            </tr>
            <tr>
              <td><TypetagBubble tag='KINETIC'/></td><td>1 x 2 dmg</td>
            </tr>
            <tr>
              <td><TypetagBubble tag='ALLOY'/></td><td>1 x 3 dmg</td>
            </tr>
            <tr>
              <td><TypetagBubble tag='EARTH'/></td><td>1 x 3 dmg</td>
            </tr>
          </table>
        </div>
    </>);
}

const TypetagBubble = ({tag}: {tag: string}) => {
    let colors: { bubble: string, text: string };
    if (tag === 'PLAIN') {
        colors = { bubble: '#555', text: '#eee' };
    } else if (tag === 'WATER') {
        colors = { bubble: '#09c', text: '#000' };
    } else if (tag === 'WIND') {
        colors = { bubble: '#aaf', text: '#000' };
    } else if (tag === 'FIRE') {
        colors = { bubble: '#d60', text: '#000' };
    } else if (tag === 'LIGHTNING') {
        colors = { bubble: '#bb3', text: '#000' };
    } else if (tag === 'COLD') {
        colors = { bubble: '#0fc', text: '#000' };
    } else if (tag === 'KINETIC') {
        colors = { bubble: '#daa', text: '#000' };
    } else if (tag === 'RADIATIVE') {
        colors = { bubble: '#dd0', text: '#000' };
    } else if (tag === 'EARTH') {
        colors = { bubble: '#840', text: '#eee' };
    } else if (tag === 'ALLOY') {
        colors = { bubble: '#884', text: '#eee' };
    } else if (tag === 'QUANTUM') {
        colors = { bubble: '#b0e', text: '#000' };
    } else if (tag === 'GRAVITON') {
        colors = { bubble: '#62e', text: '#eee' };
    } else {
        colors = { bubble: '#bbb', text: '#000' };
    }
        
    return (<span style={{ color: colors.text, backgroundColor: colors.bubble, borderRadius: '4px' , padding: '0 4px 0 4px', margin: '0 2px 0 2px' }}>{tag}</span>)
}

export default App;
