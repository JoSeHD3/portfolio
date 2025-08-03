import { create } from 'zustand';

export type FlagName = 'gb' | 'pl';

interface FlagState {
    flagName: FlagName;
    switchFlagName: () => void;
}

export const useFlag = create<FlagState>((set, get) => ({
    flagName: 'gb',
    switchFlagName: () =>
        set({ flagName: get().flagName === 'gb' ? 'pl' : 'gb' }),
}));

export const flagStore = useFlag;
