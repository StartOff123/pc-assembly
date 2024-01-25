import { StaticImageData } from 'next/image';

// ПК id: 1
import wb6d52f70p05pfppu0jz4ys2mbhua4y from '@/public/assets/assemly/power/power_1.png';
import cqwiz8cuyvdtqnz8lcsj4or2pgf55z3 from '@/public/assets/assemly/power/power_2.png';
import v7velws173xof7locj01qch379hhsey from '@/public/assets/assemly/power/power_3.png';

// ПК id: 2
import db735897f2ff0791b9a58743da5c4c03 from '@/public/assets/assemly/intercom/optimize-PhotoRoom.png-PhotoRoom.png';
import c18d5c0c91e07cc47c7bb904435bf3dd from '@/public/assets/assemly/intercom/optimize (1)-PhotoRoom.png-PhotoRoom.png';
import db735897f2ff0791b9a58743da5c4c04 from '@/public/assets/assemly/intercom/optimize (2)-PhotoRoom.png-PhotoRoom.png';
import db735897f2ff0791b9a58743da5c4c05 from '@/public/assets/assemly/intercom/optimize (3)-PhotoRoom.png-PhotoRoom.png';

export type ComponentsIdType = 'videocard' | 'CPU' | 'сooling' | 'RAM' | 'motherboard' | 'SSD' | 'powerunit' | 'frame' | 'ОС';
export type AsseblyType = 'power' | 'intercom';

export interface IAssembly {
    id: number;
    assemblyId: AsseblyType;
    title: string;
    subtitle: string;
    description: string;
    price: number;
    components: IComponents[];
    images: StaticImageData[];
}

export interface IComponents {
    id: ComponentsIdType;
    title: string;
}

export const assembly: IAssembly[] = [
    {
        id: 1,
        assemblyId: 'power',
        title: 'PCASSEMBLY POWER',
        subtitle: 'Среднебюджетный игровой ПК',
        description: 'PCASSEMBLY POWER - довольно бюджетная игровая сборка, которая прекрасно подойдет для работы и игр. На борту находится приятный по современным меркам процессор AMD Ryzen 3 в паре с GTX 1050 Ti. Такая сборка с лёгкостью запустит CS2, Dota 2 на максимальных настройках и высокой производительностью.',
        price: 39399,
        components: [
            {
                id: 'videocard',
                title: 'NVIDIA GeForce GTX 1050 Ti',
            },
            {
                id: 'CPU',
                title: 'AMD Ryzen 3 1200',
            },
            {
                id: 'сooling',
                title: 'PCCOOLER GI-X4B V2',
            },
            {
                id: 'RAM',
                title: '8 ГБ DDR4 2666 МГц',
            },
            {
                id: 'motherboard',
                title: 'ASUS PRIME B450M-K II',
            },
            {
                id: 'SSD',
                title: '960 ГБ Kingston',
            },
            {
                id: 'powerunit',
                title: 'DEEPCOOL PF500',
            },
            {
                id: 'frame',
                title: '1stPlayer DK-3 White',
            },
            {
                id: 'ОС',
                title: 'Windows 11',
            },
        ],
        images: [
            cqwiz8cuyvdtqnz8lcsj4or2pgf55z3,
            wb6d52f70p05pfppu0jz4ys2mbhua4y,
            v7velws173xof7locj01qch379hhsey,
        ]
    },
    {
        id: 2,
        assemblyId: 'intercom',
        title: 'PCASSEMBLY INTERCOM',
        subtitle: 'Бюджетный игровой ПК',
        description: 'PCASSEMBLY INTERCOM - самый бюджетный ПК на процессоре core i3. Данный процессор с легкостью справится с офисными задачами и играми, а видеокарта 1050 Ti даст поиграть с современные новинки пусти и не на максимальных, то на средних настройках.',
        price: 36099,
        components: [
            {
                id: 'videocard',
                title: 'NVIDIA GeForce GTX 1050 Ti',
            },
            {
                id: 'CPU',
                title: 'Intel Core i3-10100F 3.6 ГГц',
            },
            {
                id: 'сooling',
                title: 'PCCOOLER GI-X4B V2',
            },
            {
                id: 'RAM',
                title: '8 ГБ DDR4 2666 МГц',
            },
            {
                id: 'motherboard',
                title: 'GIGABYTE H410M H V2',
            },
            {
                id: 'SSD',
                title: '480 Гб Kingston',
            },
            {
                id: 'powerunit',
                title: 'AeroCool VX PLUS 500W',
            },
            {
                id: 'frame',
                title: '1stPlayer Firerose F4',
            },
            {
                id: 'ОС',
                title: 'Windows 11',
            },
        ],
        images: [
            db735897f2ff0791b9a58743da5c4c03,
            db735897f2ff0791b9a58743da5c4c04,
            c18d5c0c91e07cc47c7bb904435bf3dd,
            db735897f2ff0791b9a58743da5c4c05,
        ]
    },
];