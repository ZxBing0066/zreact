import { useCallback, useState } from 'react';

import './App.css';
import useDragDrop from '../../../index';

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
        <div className='App'>
            <ul>
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

// const DragItem = (props: HTMLAttributes<HTMLDivElement>) => {
//     const dragProps = useDrag({});
//     return <div className='drag-item' {...dragProps} {...props} />;
// };
// const DropArea = ({
//     handleDrop,
//     ...props
// }: { handleDrop: (source: HTMLElement, target: HTMLElement) => void } & Omit<
//     HTMLAttributes<HTMLDivElement>,
//     'handleDrop'
// >) => {
//     const onDragOver = useCallback((source: HTMLElement, target: HTMLElement) => {
//         console.log(target);

//         target.classList.add('drag-over');
//     }, []);
//     const onDragLeave = useCallback((source: HTMLElement, target: HTMLElement) => {
//         console.log(target);
//         target.classList.remove('drag-over');
//     }, []);
//     const onDrop = useCallback(
//         (source: HTMLElement, target: HTMLElement) => {
//             console.log('drop');

//             onDragLeave(source, target);
//             handleDrop(source, target);
//         },
//         [handleDrop]
//     );
//     const dropProps = useDrop({ onDrop, onDragOver, onDragLeave });
//     return <div className='drop-area' {...dropProps} />;
// };

// const Playground = () => {
//     const [source, setSource] = useState(null);
//     const [target, setTarget] = useState(null);
//     const [place, setPlace] = useState('default');
//     const handleDrop = useCallback((source: HTMLElement, target: HTMLElement) => {
//         debugger;
//         const place = target.dataset['container-id'];
//         if (place) setPlace(place);
//     }, []);
//     console.log(source, target, place);

//     return (
//         <>
//             <DragContext.Provider value={{ source, setSource, target, setTarget }}>
//                 <DropArea handleDrop={handleDrop} data-container-id='a'>
//                     {place === 'a' && <DragItem />}
//                 </DropArea>
//                 <DropArea handleDrop={handleDrop} data-container-id='b'>
//                     {place === 'b' && <DragItem />}
//                 </DropArea>
//                 {place === 'default' && <DragItem />}
//             </DragContext.Provider>
//         </>
//     );
// };

function App() {
    return (
        <div>
            <DragList />
            {/* <Playground /> */}
        </div>
    );
}

export default App;
