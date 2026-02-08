import { useEffect } from "react";
import Image from "next/image";

export function ImageModal({
    src,
    onClose,
}: {
    src: string;
    onClose: () => void;
}) {
    // Lock background scroll
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);


    return (
        <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="
          relative
          max-h-[90vh]
          w-full
          max-w-6xl
          overflow-auto
          rounded-xl
        "
            >

                <Image
                    src={src}
                    alt="Expanded system diagram"
                    width={2000}
                    height={1200}
                    className="w-full h-auto rounded-xl"
                />
            </div>
        </div>
    );
}
