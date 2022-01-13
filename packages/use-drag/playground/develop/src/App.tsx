import { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useDragDrop from '../../../index';

const array = new Array(20).fill(null).map((v, i) => i);

function App() {
    const [list, setList] = useState(() => [...array]);
    const onDrop = useCallback((source, target) => {
        const i = +source.dataset['index'];
        const j = +target.dataset['index'];
        onDragLeave(source, target);
        setList(list => {
            const cloneList = [...list];
            cloneList.splice(j, 0, ...cloneList.splice(i, 1));
            return cloneList;
        });
    }, []);
    const onDragOver = useCallback((source, target) => {
        const i = +source.dataset['index'];
        const j = +target.dataset['index'];
        target.classList.add(i > j ? 'drag-over-up' : 'drag-over-down');
    }, []);
    const onDragLeave = useCallback((source, target) => {
        const i = +source.dataset['index'];
        const j = +target.dataset['index'];
        target.classList.remove(i > j ? 'drag-over-up' : 'drag-over-down');
    }, []);
    const [sourceProps, targetProps] = useDragDrop({ onDrop, onDragOver, onDragLeave });

    return (
        <div className='App'>
            <ul>
                {list.map((v, i) => (
                    <li key={v} {...sourceProps} {...targetProps} data-index={i} data-v={v}>
                        list - {v}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
