import { useCallback, useRef } from 'react';

const useDragDrop = ({
    onDragStart,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDragEnd,
    onDrop,
    effectAllowed,
    dropEffect,
    ignoreChildEnterLeave,
    ignoreSelf
}: {
    /** when drag start */
    onDragStart?: (source: Element) => void;
    /** drag enter the droppable element */
    onDragEnter?: (source: Element, target: Element) => void;
    /** drag over the droppable element, frequent trigger */
    onDragOver?: (source: Element, target: Element) => void;
    /** drag leave the droppable element  */
    onDragLeave?: (source: Element, target: Element) => void;
    /** drop on a droppable element */
    onDrop?: (source: Element, target: Element) => void;
    /** release drag or press esc or drop on a invalid element */
    onDragEnd?: (source: Element) => void;
    /** set the effectAllowed when dragStart */
    effectAllowed?: DataTransfer['effectAllowed'];
    /** set dropEffect when dragOver */
    dropEffect?: DataTransfer['dropEffect'];
    /** don't call enter or leave when enter a child element of current dragEnter element */
    ignoreChildEnterLeave?: boolean;
    /** ignore dragOver, dragOver, dragLeave, drop events on the dragged element */
    ignoreSelf?: boolean;
}) => {
    const sourceDomRef = useRef(null);
    const prevTargetDomRef = useRef(null);
    const enterCounterRef = useRef(0);

    const checkEvent = useCallback(
        e => {
            if (!sourceDomRef.current) return false;
            if (ignoreSelf && sourceDomRef.current === e.currentTarget) return false;
            return true;
        },
        [ignoreSelf]
    );

    const clean = useCallback(() => {
        sourceDomRef.current = null;
        prevTargetDomRef.current = null;
        enterCounterRef.current = 0;
    }, []);

    const handleDragStart = useCallback(
        e => {
            clean();
            sourceDomRef.current = e.currentTarget;
            e.dataTransfer.effectAllowed = effectAllowed;
            onDragStart?.(e.currentTarget);
        },
        [clean, effectAllowed, onDragStart]
    );
    const handleDragEnd = useCallback(
        e => {
            onDragEnd?.(e.currentTarget);
            clean();
        },
        [clean, onDragEnd]
    );

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
        [checkEvent, dropEffect, ignoreChildEnterLeave, onDragEnter]
    );
    const handleDragOver = useCallback(
        e => {
            if (!checkEvent(e)) return;
            e.preventDefault();
            e.dataTransfer.dropEffect = dropEffect;

            onDragOver?.(sourceDomRef.current!, e.currentTarget);
        },
        [checkEvent, dropEffect, onDragOver]
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
        [checkEvent, ignoreChildEnterLeave, onDragLeave]
    );
    const handleDrop = useCallback(
        e => {
            if (!checkEvent(e)) return;
            onDrop?.(sourceDomRef.current!, e.currentTarget);
            clean();
        },
        [checkEvent, clean, onDrop]
    );

    const sourceProps = {
        draggable: true,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd
    };
    const targetProps = {
        onDragEnter: handleDragEnter,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop
    };
    return [sourceProps, targetProps];
};

export default useDragDrop;
