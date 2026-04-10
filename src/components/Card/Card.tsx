import { ReactNode } from 'react';
import { LightBeam } from '..';

const Card = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative min-w-64 overflow-hidden rounded-md border border-[#0DAD8D]/40 bg-[#262626]/[.30] mx-4 mb-4 backdrop-blur-sm shadow-md">
            <LightBeam
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-55"
                width="140%"
                height={46}
                angle={0}
                blur={8}
                opacity={0.8}
            />
            {children && <div className="relative z-10 p-6">{children}</div>}
        </div>
    );
}

export { Card };