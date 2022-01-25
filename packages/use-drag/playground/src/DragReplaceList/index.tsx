import { useCallback, useState } from 'react';

import './style.scss';
import useDragDrop from '../../../index';

const array = new Array(20).fill(null).map((v, i) => i);

const DragReplaceList = () => {
    const [list, setList] = useState(() => [...array]);
    const onDrop = useCallback((source, target) => {
        const i = +source.dataset['index'];
        const j = +target.dataset['index'];
        onDragLeave(source, target);
        setList(list => {
            const cloneList = [...list];
            [cloneList[i], cloneList[j]] = [cloneList[j], cloneList[i]];
            return cloneList;
        });
    }, []);
    const onDragEnter = useCallback((source, target) => {
        console.log('enter');
        target.classList.add('drag-over');
    }, []);
    const onDragLeave = useCallback((source, target) => {
        console.log('leave');
        target.classList.remove('drag-over');
    }, []);
    const [sourceProps, targetProps] = useDragDrop({
        onDrop,
        onDragEnter,
        onDragLeave,
        ignoreChildEnterLeave: true,
        ignoreSelf: true
    });

    return (
        <ul className='replace-list'>
            {list.map((v, i) => (
                <li key={v} {...sourceProps} {...targetProps} data-index={i} data-v={v}>
                    <span>list</span>
                    <span> - {v}</span>
                </li>
            ))}
        </ul>
    );
};

export default DragReplaceList;
