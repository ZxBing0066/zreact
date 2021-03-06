import { useCallback, useState } from 'react';

import './style.scss';
import useDragDrop from '../../../index';
import Switch from '../Switch';

const DragList = () => {
    const [blankDroppable, setBlankDroppable] = useState(false);
    const [place, setPlace] = useState('blank');
    const onDragEnter = useCallback((source, target) => {
        console.log('enter');
        console.log(target);

        target.classList.add('drag-over');
        console.log(target.classList);
    }, []);
    const onDragLeave = useCallback((source, target) => {
        console.log('leave');
        target.classList.remove('drag-over');
    }, []);
    const onDrop = useCallback(
        (source, target) => {
            onDragLeave(source, target);
            setPlace(target.dataset['zoneId'] || 'blank');
        },
        [onDragLeave]
    );

    const [sourceProps, targetProps] = useDragDrop({
        onDrop,
        onDragEnter,
        onDragLeave,
        ignoreChildEnterLeave: true,
        ignoreSelf: true
    });
    const dragItem = <div className="drag-item" {...sourceProps}></div>;

    return (
        <div className="drag-zone" {...(blankDroppable ? targetProps : {})}>
            <div className="controls">
                <div>
                    <label>outer droppable: </label>
                    <Switch on={blankDroppable} onChange={setBlankDroppable} />
                </div>
            </div>
            <div>
                <div className="drop-zone" data-zone-id="a" {...targetProps}>
                    {place === 'a' && dragItem}
                </div>
                <div className="drop-zone" data-zone-id="b" {...targetProps}>
                    {place === 'b' && dragItem}
                </div>
            </div>
            <div className="blank" data-zone-id="blank">
                {place === 'blank' && dragItem}
            </div>
        </div>
    );
};

export default DragList;
