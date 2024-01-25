import { Variants } from 'framer-motion';

type AnimationsKeyType = 'fadeLeft' | 'fadeRight' | 'fadeDown' | 'fadeUp' | 'fadeDownOpas';

type AnimationType = {
    [key in AnimationsKeyType]?: Variants;
};

export const animations: AnimationType = {
    fadeLeft: {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    },
    fadeRight: {
        hidden: {
            x: 100,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    },
    fadeUp: {
        hidden: {
            y: -100,
            opacity: 0
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    },
    fadeDown: {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    },
    fadeDownOpas: {
        hidden: {
            y: 50,
        },
        visible: (custom: number) => ({
            y: 0,
            transition: { delay: custom * 0.2 }
        })
    },
};