'use client';

import { AnimatePresence, usePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Timeout = number | { enter: number; exit: number };

type Status = "entering" | "entered" | "exiting" | "exited";

type Props = {
    in: boolean;
    timeout?: Timeout;
    unmount?: boolean;
    initial?: boolean;
    children: (props: {
        status: Status;
        nodeRef: React.RefObject<HTMLElement | null>;
    }) => React.ReactNode;
};

export function Transition({
    in: show,
    timeout = 500,
    unmount = true,
    initial = true,
    children,
}: Props) {
    return (
        <AnimatePresence>
            {(show || !unmount) && (
                <TransitionContent
                    show={show}
                    timeout={timeout}
                    initial={initial}
                >
                    {children}
                </TransitionContent>
            )}
        </AnimatePresence>
    );
}

function TransitionContent({
    show,
    timeout,
    initial,
    children,
}: {
    show: boolean;
    timeout: Timeout;
    initial: boolean;
    children: Props["children"];
}) {
    const nodeRef = useRef<HTMLElement | null>(null);
    const [status, setStatus] = useState<Status>(
        initial ? "exited" : "entered"
    );

    const [isPresent, safeToRemove] = usePresence();

    const exitMs =
        typeof timeout === "number" ? timeout : timeout.exit;

    useEffect(() => {
        if (show) {
            setStatus("entering");
            requestAnimationFrame(() => setStatus("entered"));
        }
    }, [show]);

    useEffect(() => {
        if (!isPresent) {
            setStatus("exiting");
            setTimeout(() => {
                setStatus("exited");
                safeToRemove?.();
            }, exitMs);
        }
    }, [isPresent, exitMs, safeToRemove]);

    return <>{children({ status, nodeRef })}</>;
}
