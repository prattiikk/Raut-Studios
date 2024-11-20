"use client";
import { ReactLenis, useLenis } from "lenis/react";

function LenisWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    });

    return (
        <ReactLenis
            root
            options={{
                syncTouch: true,
                lerp: 0.04,
            }}
        >
            {children}
        </ReactLenis>
    );
}
export default LenisWrapper;