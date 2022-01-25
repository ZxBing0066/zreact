import { useCallback, useMemo, useState } from 'react';

import useDragDrop from '../../../index';
import './style.scss';

const KeyCodeOfA = 'A'.charCodeAt(0);

const list = new Array(26).fill(null).map((v, i) => {
    const key = String.fromCharCode(KeyCodeOfA + i);
    return {
        key,
        title: `Item ${key}`
    };
});

const DragTransfer = () => {
    const [fromDataList, setFromDataList] = useState(() => [...list]);
    const toDataList = useMemo(() => list.filter(item => !fromDataList.find(_item => item === _item)), [fromDataList]);

    const onDrop = useCallback((source, target) => {
        onDragLeave(source, target);
        const targetZone = target.dataset.zoneId;
        const key = source.dataset.key;

        setFromDataList(fromDataList => {
            const currentZone = fromDataList.find(item => item.key === key) ? 'from' : 'to';
            if (currentZone === targetZone) return fromDataList;
            const item = list.find(item => item.key === key);
            if (targetZone === 'from') return [...fromDataList, item!];
            return fromDataList.filter(_item => _item !== item);
        });
    }, []);

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

    const [sourceProps, targetProps] = useDragDrop({
        onDrop,
        onDragEnter,
        onDragLeave,
        ignoreChildEnterLeave: true,
        ignoreSelf: true
    });

    return (
        <div className="drag-transfer">
            <div className="controls">
                <div></div>
            </div>
            <div className="main-container">
                <div className="from-container">
                    <h2>from</h2>
                    <div className="list" data-zone-id="from" {...targetProps}>
                        {fromDataList.map(({ key, title }) => (
                            <div key={key} data-key={key} className="item" {...sourceProps}>
                                {title}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="to-container">
                    <h2>to</h2>
                    <div className="list" data-zone-id="to" {...targetProps}>
                        {toDataList.map(({ key, title }) => (
                            <div key={key} data-key={key} className="item" {...sourceProps}>
                                {title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DragTransfer;
