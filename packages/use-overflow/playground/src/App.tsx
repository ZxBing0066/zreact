import { useMemo, useRef, useState } from 'react';
import useOverflow from '@zreact/use-overflow';

const randomContents = ['tag', 'hello', 'world', 'simple tag', 'short tag', 'looooooooong tag'];

function App() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [tags] = useState(() => {
        return new Array(20).fill(null).map((v, i) => {
            return randomContents[i % randomContents.length];
        });
    });
    const [count] = useOverflow({
        containerRef,
        maxCount: tags.length
    });
    const visibleTags = useMemo(() => {
        return tags.slice(0, count).map((tag, i) => {
            return (
                <span className="tag" key={i}>
                    {tag}
                </span>
            );
        });
    }, [count, tags]);
    const ellipsis = useMemo(() => {
        return count < tags.length ? <span className="tag">{tags.length - count} more...</span> : null;
    }, [count, tags.length]);

    return (
        <div>
            <div className="tags" ref={containerRef}>
                {visibleTags}
                {ellipsis}
            </div>
        </div>
    );
}

export default App;
