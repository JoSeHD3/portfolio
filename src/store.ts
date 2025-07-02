import { create } from 'zustand';

interface FlagState {
    flagName: 'gb' | 'pl';
    switchFlagName: () => void;
}

const useFlag = create<FlagState>()((set) => ({
    flagName: 'gb',
    switchFlagName: () =>
        set((state) => ({ flagName: state.flagName === 'gb' ? 'pl' : 'gb' })),
}));

export const flagStore = useFlag;

export { useFlag };
