import { HTMLAttributes, ReactNode, useRef } from 'react';

import useVirtualList, { useSimpleVirtualList } from 'z-use-virtual-list';

const SimpleVirtualScrollList = ({
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
    const [renderChildren, offsetTop] = useSimpleVirtualList(scrollerRef, wrapperRef, heightWrapperRef, children, {
        clientHeight: height
    });
    return (
        <div ref={scrollerRef} className="list" style={{ maxHeight: height, width, overflowY: 'auto' }}>
            <div ref={heightWrapperRef}>
                <ul ref={wrapperRef} style={{ transform: `translate(0, ${offsetTop}px)` }}>
                    {renderChildren}
                </ul>
            </div>
        </div>
    );
};

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
        // itemHeight: 40
    });
    return (
        <div ref={scrollerRef} className="list" style={{ maxHeight: height, width, overflowY: 'auto' }}>
            <div ref={heightWrapperRef}>
                <ul ref={wrapperRef} style={{ transform: `translate(0, ${offsetTop}px)` }}>
                    {renderChildren}
                </ul>
            </div>
        </div>
    );
};

const dataSource = new Array(1000000)
    .fill(null)
    .map((v, i) => ({ key: i, name: 'item - ' + i, desc: `Hello, I'm item - ${i}.` }));

const randomDataSource = new Array(1000000).fill(null).map((v, i) => ({
    key: i,
    name: 'item - ' + i,
    desc: `Hello, I'm item - ${i}.`,
    height: (Math.random() * 30 * 2) | (0 + 40)
}));

const Item = ({ item, ...rest }: { item: typeof dataSource[number] } & HTMLAttributes<HTMLLIElement>) => {
    return (
        <li className="item" {...rest}>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
        </li>
    );
};

function App() {
    return (
        <div className="main">
            <SimpleVirtualScrollList height={400}>
                {dataSource.map(item => (
                    <Item item={item} key={item.key}></Item>
                ))}
            </SimpleVirtualScrollList>
            <VirtualScrollList height={400}>
                {randomDataSource.map(item => (
                    <Item item={item} key={item.key} style={{ height: item.height }}></Item>
                ))}
            </VirtualScrollList>
        </div>
    );
}

export default App;
