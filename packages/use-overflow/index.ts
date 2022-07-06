import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

// https://github.com/que-etc/resize-observer-polyfill/issues/80
// 由于 ts 官方增加了 contentRect 的类型定义，导致和 resize-observer-polyfill 内部的定义冲突，目前先以 "skipLibCheck" 解决

const useOverflow = (
    {
        containerDOM: _containerDOM,
        containerRef,
        defaultCount = 0,
        maxCount = Infinity,
        total
    }: {
        containerDOM?: HTMLElement | null;
        containerRef?: React.MutableRefObject<HTMLElement | null>;
        defaultCount?: number;
        maxCount?: number;
        total: number;
    },
    deps: any[] = []
): [number, number] => {
    const [count, setCount] = useState(() => Math.min(defaultCount, maxCount));
    const [measureCount, setMeasureCount] = useState(count);
    const [latestValidCount, setLatestValidCount] = useState<number | null>(null);
    const [containerDOM, setContainerDOM] = useState(() => (containerRef ? containerRef.current : _containerDOM));

    useLayoutEffect(() => {
        if (containerRef) {
            setContainerDOM(containerRef.current);
        } else {
            setContainerDOM(_containerDOM);
        }
    }, [_containerDOM, containerRef]);

    const compute = useCallback(() => {
        if (!containerDOM) return;
        if (count === latestValidCount) {
            setMeasureCount(count);
            return;
        }
        if (containerDOM.offsetWidth >= containerDOM.scrollWidth) {
            setLatestValidCount(count);
            setCount(Math.min(total, count + 1, maxCount));
        } else if (containerDOM.offsetWidth < containerDOM.scrollWidth) {
            setCount(count => Math.max(0, count - 1));
        }
    }, [containerDOM, count, latestValidCount, maxCount, total]);

    const computeRef = useRef(compute);

    useEffect(() => {
        computeRef.current = compute;
    }, [compute]);

    useEffect(() => {
        setLatestValidCount(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    useEffect(() => {
        computeRef.current();
    }, [compute]);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            setLatestValidCount(null);
        });
        if (containerDOM) resizeObserver.observe(containerDOM);
        return () => {
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
        };
    }, [containerDOM]);

    return [count, measureCount];
};

export default useOverflow;
