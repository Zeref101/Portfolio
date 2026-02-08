import Image from 'next/image';
import React from 'react'

function ArchitectureModal({ onClose }: { onClose: () => void }) {
    return (
        <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="absolute inset-6 md:inset-10 bg-black rounded-xl overflow-auto"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/70 hover:text-white"
                >
                    ✕
                </button>

                <Image
                    src="/rheoma-system-architecture.png"
                    alt="System architecture full view"
                    width={2000}
                    height={1200}
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
}


export default ArchitectureModal;
