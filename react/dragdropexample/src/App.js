import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import './App.css';
import {useState} from "react";

// ドラッグアンドドロップのサンプル
function App() {
    const [items] = useState([{id: 1, text: "item0"}, {id: 2, text: "item1"}, {id: 3, text: "item2"}])

    // ドラッグ後の操作
    const onDragEnd = (result) => {
        console.log(result.source.index)
        console.log(result.destination.index)
        // 動かしたものを一つ削除する
        const remove = items.splice(result.source.index, 1)
        console.log(remove)
        // 消えたものを挿入する
        items.splice(result.destination.index, 0, remove[0])
    }

    return (
        <div className="dragDropArea">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {items.map((item, index) => (
                                <Draggable draggableId={item.text} index={index} key={item.id}>
                                    {(provided) => (<div
                                        className="item"
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}>{item.text}</div>)}
                                </Draggable>
                            ))}
                            {/*warningをつぶす*/}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default App;
