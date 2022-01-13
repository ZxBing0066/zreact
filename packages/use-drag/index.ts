import { useCallback, useRef } from 'react';

const useDragDrop = ({
    onDrop,
    onDragOver,
    onDragLeave,
    effectAllowed
}: {
    onDrop?: (source: Element, target: Element) => void;
    onDragOver?: (source: Element, target: Element) => void;
    onDragLeave?: (source: Element, target: Element) => void;
    effectAllowed?: 'move';
}) => {
    const sourceDomRef = useRef(null);

    const handleDragStart = useCallback(
        e => {
            sourceDomRef.current = e.target;
            e.dataTransfer.effectAllowed = effectAllowed;
        },
        [effectAllowed]
    );
    const handleDragEnd = useCallback(e => {
        sourceDomRef.current = null;
    }, []);

    const handleDrop = useCallback(
        e => {
            if (!sourceDomRef.current || sourceDomRef.current === e.target) return;
            onDrop?.(sourceDomRef.current, e.target);
        },
        [onDrop]
    );
    const handleDragOver = useCallback(
        e => {
            e.preventDefault();
            if (!sourceDomRef.current || sourceDomRef.current === e.target) return;
            onDragOver?.(sourceDomRef.current, e.target);
        },
        [onDragOver]
    );
    const handleDragLeave = useCallback(
        e => {
            if (!sourceDomRef.current || sourceDomRef.current === e.target) return;
            onDragLeave?.(sourceDomRef.current, e.target);
        },
        [onDragLeave]
    );

    const sourceProps = {
        draggable: true,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd
    };
    const targetProps = {
        onDrop: handleDrop,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave
    };
    return [sourceProps, targetProps];
};

export default useDragDrop;
