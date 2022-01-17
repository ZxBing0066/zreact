import { useCallback, useState } from 'react';

import './style.scss';
import useDragDrop from '../../../../index';

const array = new Array(20).fill(null).map((v, i) => i);

const DragList = () => {
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
    const onDragEnter = useCallback((source, target) => {
        console.log('enter');

        const i = +source.dataset['index'];
        const j = +target.dataset['index'];
        target.classList.add(i > j ? 'drag-over-up' : 'drag-over-down');
    }, []);
    const onDragLeave = useCallback((source, target) => {
        console.log('leave');

        const i = +source.dataset['index'];
        const j = +target.dataset['index'];
        target.classList.remove(i > j ? 'drag-over-up' : 'drag-over-down');
    }, []);
    const [sourceProps, targetProps] = useDragDrop({
        onDrop,
        onDragEnter,
        onDragLeave,
        ignoreChildEnterLeave: true,
        ignoreSelf: true
    });

    return (
        <div className='playground'>
            <ul className='drag-list'>
                {list.map((v, i) => (
                    <li key={v} {...sourceProps} {...targetProps} data-index={i} data-v={v}>
                        <span>list</span>
                        <span> - {v}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DragList;
