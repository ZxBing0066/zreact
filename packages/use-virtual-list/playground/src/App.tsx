import { ReactNode, useRef } from 'react';

import useVirtualList from 'z-use-virtual-list';

const VirtualScrollList = ({
    children,
    height,
    width
}: {
    children: ReactNode[];
    height: number;
    width?: number | string;
}) => {
    const scrollerRef = useRef(null);
    const wrapperRef = useRef(null);
    const heightWrapperRef = useRef(null);
    const [renderChildren, offsetTop] = useVirtualList(scrollerRef, wrapperRef, heightWrapperRef, children, {
        clientHeight: height
    });
    return (
        <div ref={scrollerRef} style={{ maxHeight: height, width, overflowY: 'auto' }}>
            <div ref={heightWrapperRef}>
                <ul ref={wrapperRef} style={{ transform: `translate(0, ${offsetTop}px)` }}>
                    {renderChildren}
                </ul>
            </div>
        </div>
    );
};

const dataSource = new Array(10000)
    .fill(null)
    .map((v, i) => ({ key: i, name: 'item - ' + i, desc: `Hello, I'm item - ${i}.` }));

const Item = ({ item }: { item: typeof dataSource[number] }) => {
    return (
        <li className="item">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
        </li>
    );
};

function App() {
    return (
        <div className="main">
            <VirtualScrollList height={400}>
                {dataSource.map(item => (
                    <Item item={item} key={item.key}></Item>
                ))}
            </VirtualScrollList>
        </div>
    );
}

export default App;
