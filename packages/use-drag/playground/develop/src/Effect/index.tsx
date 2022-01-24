import { useCallback, useState } from 'react';

import './style.scss';
import useDragDrop from '../../../../index';

const effectAllowedOptions = [
    'none',
    'copy',
    'copyLink',
    'copyMove',
    'link',
    'linkMove',
    'move',
    'all',
    'uninitialized',
    undefined
];
const dropEffectOptions = ['none', 'copy', 'link', 'move', undefined];

const DragList = () => {
    const [place, setPlace] = useState('blank');
    const [effectAllowed, setEffectAllowed] = useState('undefined');
    const [dropEffect, setDropEffect] = useState('undefined');
    const onDrop = useCallback((source, target) => {
        onDragLeave(source, target);
        setPlace(target.dataset['zoneId'] || 'blank');
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
        ignoreSelf: true,
        effectAllowed: (effectAllowed === 'undefined' ? undefined : effectAllowed) as DataTransfer['effectAllowed'],
        dropEffect: (dropEffect === 'undefined' ? undefined : dropEffect) as DataTransfer['dropEffect']
    });
    const dragItem = <div className='drag-item' {...sourceProps}></div>;

    return (
        <div className='drag-zone'>
            <div className='controls'>
                <div>
                    <label>outer droppable: </label>
                    <div>
                        <label htmlFor='effect-allowed'>effect-allowed: </label>
                        <select
                            id='effect-allowed'
                            value={effectAllowed}
                            onChange={e => setEffectAllowed(e.target.value)}
                        >
                            {effectAllowedOptions.map(v => (
                                <option value={v + ''}>{v + ''}</option>
                            ))}
                        </select>
                        <br />
                        <label htmlFor='effect-allowed'>drop-effect: </label>
                        <select id='drop-effect' value={dropEffect} onChange={e => setDropEffect(e.target.value)}>
                            {dropEffectOptions.map(v => (
                                <option value={v + ''}>{v + ''}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <div className='drop-zone' data-zone-id='a' {...targetProps}>
                    {place === 'a' && dragItem}
                </div>
                <div className='drop-zone' data-zone-id='b' {...targetProps}>
                    {place === 'b' && dragItem}
                </div>
            </div>
            <div className='blank' data-zone-id='blank'>
                {place === 'blank' && dragItem}
            </div>
        </div>
    );
};

export default DragList;
