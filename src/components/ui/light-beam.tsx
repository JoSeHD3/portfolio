import { CSSProperties, useId } from 'react';
import { cn } from '../../lib/utils';

export interface LightBeamProps {
    className?: string;
    color?: string;
    width?: number | string;
    height?: number | string;
    angle?: number;
    opacity?: number;
    blur?: number;
    style?: CSSProperties;
}

const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value));

const LightBeam = ({
    className,
    color = '#08dad8',
    width = 360,
    height = 140,
    angle = 0,
    opacity = 1,
    blur = 18,
    style,
}: LightBeamProps) => {
    const id = useId().replace(/:/g, '');
    const beamGradientId = `${id}-beam-gradient`;
    const glowGradientId = `${id}-glow-gradient`;
    const beamFilterId = `${id}-beam-filter`;

    const beamOpacity = clamp(opacity, 0, 1);

    const mergedStyle: CSSProperties = {
        width,
        height,
        ...style,
        transform: `${style?.transform ? `${style.transform} ` : ''}rotate(${angle}deg)`,
        transformOrigin: style?.transformOrigin ?? 'center',
    };

    return (
        <div
            aria-hidden="true"
            className={cn('pointer-events-none overflow-hidden', className)}
            style={mergedStyle}
        >
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="h-full w-full"
            >
                <defs>
                    <linearGradient
                        id={beamGradientId}
                        x1="0%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                    >
                        <stop offset="0%" stopColor={color} stopOpacity="0" />
                        <stop offset="18%" stopColor={color} stopOpacity={0.08 * beamOpacity} />
                        <stop offset="40%" stopColor={color} stopOpacity={0.38 * beamOpacity} />
                        <stop offset="50%" stopColor={color} stopOpacity={beamOpacity} />
                        <stop offset="60%" stopColor={color} stopOpacity={0.38 * beamOpacity} />
                        <stop offset="82%" stopColor={color} stopOpacity={0.08 * beamOpacity} />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </linearGradient>

                    <linearGradient
                        id={glowGradientId}
                        x1="0%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                    >
                        <stop offset="0%" stopColor={color} stopOpacity="0" />
                        <stop offset="24%" stopColor={color} stopOpacity={0.05 * beamOpacity} />
                        <stop offset="50%" stopColor={color} stopOpacity={0.32 * beamOpacity} />
                        <stop offset="76%" stopColor={color} stopOpacity={0.05 * beamOpacity} />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </linearGradient>

                    <filter id={beamFilterId} x="-30%" y="-50%" width="160%" height="200%">
                        <feGaussianBlur stdDeviation={blur} />
                    </filter>
                </defs>

                <g filter={`url(#${beamFilterId})`}>
                    <path
                        d="M0 50 L14 24 L50 8 L86 24 L100 50 L86 76 L50 92 L14 76 Z"
                        fill={`url(#${glowGradientId})`}
                        opacity={0.55}
                    />
                    <path
                        d="M0 50 L14 24 L50 8 L86 24 L100 50 L86 76 L50 92 L14 76 Z"
                        fill={`url(#${beamGradientId})`}
                    />
                    <path
                        d="M18 50 L30 36 L50 28 L70 36 L82 50 L70 64 L50 72 L30 64 Z"
                        fill={color}
                        opacity={0.35 * beamOpacity}
                    />
                </g>
            </svg>
        </div>
    );
};

export { LightBeam };