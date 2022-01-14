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
            sourceDomRef.current = e.currentTarget;
            e.dataTransfer.effectAllowed = effectAllowed;
        },
        [effectAllowed]
    );
    const handleDragEnd = useCallback(e => {
        sourceDomRef.current = null;
    }, []);

    const handleDrop = useCallback(
        e => {
            if (!sourceDomRef.current || sourceDomRef.current === e.currentTarget) return;
            onDrop?.(sourceDomRef.current, e.currentTarget);
        },
        [onDrop]
    );
    const handleDragOver = useCallback(
        e => {
            e.preventDefault();
            if (!sourceDomRef.current || sourceDomRef.current === e.currentTarget) return;

            debugger;
            onDragOver?.(sourceDomRef.current, e.currentTarget);
        },
        [onDragOver]
    );
    const handleDragLeave = useCallback(
        e => {
            if (!sourceDomRef.current || sourceDomRef.current === e.currentTarget) return;
            onDragLeave?.(sourceDomRef.current, e.currentTarget);
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
