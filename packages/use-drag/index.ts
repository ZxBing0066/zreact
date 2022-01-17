import { useCallback, useRef } from 'react';

const useDragDrop = ({
    onDrop,
    onDragEnter,
    onDragLeave,
    onDragOver,
    effectAllowed,
    dropEffect,
    ignoreChildEnterLeave,
    ignoreSelf
}: {
    onDrop?: (source: Element, target: Element) => void;
    onDragEnter?: (source: Element, target: Element) => void;
    onDragLeave?: (source: Element, target: Element) => void;
    onDragOver?: (source: Element, target: Element) => void;
    effectAllowed?: DataTransfer['effectAllowed'];
    dropEffect?: DataTransfer['dropEffect'];
    ignoreChildEnterLeave?: boolean;
    ignoreSelf?: boolean;
}) => {
    const sourceDomRef = useRef(null);
    const prevTargetDomRef = useRef(null);
    const enterCounterRef = useRef(0);

    const handleDragStart = useCallback(
        e => {
            sourceDomRef.current = e.currentTarget;
            e.dataTransfer.effectAllowed = effectAllowed;
            enterCounterRef.current = 0;
            prevTargetDomRef.current = null;
        },
        [effectAllowed]
    );
    const handleDragEnd = useCallback(e => {
        sourceDomRef.current = null;
        enterCounterRef.current = 0;
        prevTargetDomRef.current = null;
    }, []);

    const checkEvent = useCallback(e => {
        if (!sourceDomRef.current) return false;
        if (ignoreSelf && sourceDomRef.current === e.currentTarget) return false;
        return true;
    }, []);

    const handleDrop = useCallback(
        e => {
            if (!checkEvent(e)) return;
            onDrop?.(sourceDomRef.current!, e.currentTarget);
        },
        [onDrop]
    );
    const handleDragOver = useCallback(e => {
        if (!checkEvent(e)) return;
        e.preventDefault();
        onDragOver?.(sourceDomRef.current!, e.currentTarget);
    }, []);
    const handleDragEnter = useCallback(
        e => {
            if (!checkEvent(e)) return;
            e.dataTransfer.dropEffect = dropEffect;
            if (ignoreChildEnterLeave) {
                if (e.currentTarget === prevTargetDomRef.current) {
                    enterCounterRef.current++;
                } else {
                    enterCounterRef.current = 1;
                    onDragEnter?.(sourceDomRef.current!, e.currentTarget);
                }
                prevTargetDomRef.current = e.currentTarget;
                return;
            }
            onDragEnter?.(sourceDomRef.current!, e.currentTarget);
        },
        [onDragEnter]
    );
    const handleDragLeave = useCallback(
        e => {
            if (!checkEvent(e)) return;
            if (ignoreChildEnterLeave && e.currentTarget === prevTargetDomRef.current) {
                enterCounterRef.current--;
                if (enterCounterRef.current <= 0) {
                    onDragLeave?.(sourceDomRef.current!, e.currentTarget);
                    prevTargetDomRef.current = null;
                }
                return;
            }
            onDragLeave?.(sourceDomRef.current!, e.currentTarget);
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
        onDragEnter: handleDragEnter,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave
    };
    return [sourceProps, targetProps];
};

export default useDragDrop;
