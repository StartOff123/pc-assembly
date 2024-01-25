import { StaticImageData } from 'next/image';

import to from '@/public/assets/services/to.jpg';
import servicePc from '@/public/assets/service-pc.jpg';
import apgrate from '@/public/assets/services/apgrate.jpg';
import diagnostics from '@/public/assets/services/diagnostics.jpg';

export type ServicesType = 'apgrate' | 'to' | 'diagnistic' | 'buildPc';

export interface IServicesList {
    title: string;
    discription: string;
    list: string[];
    image: StaticImageData;
    btnText: string;
    type: ServicesType;
}

export const servicesList: IServicesList[] = [
    {
        title: 'Апгрейд ПК',
        discription: 'Увеличим мощность и производительность под задачи Вашего ПК',
        list: [
            'Обновим видеокарту',
            'Увеличим объем оперативной памяти',
            'Улучшим охлаждаемость Вашего компьютера',
            'Подберем новый процессор и мат. плату'
        ],
        image: apgrate,
        btnText: 'апгрейднуть ПК',
        type: 'apgrate'
    },
    {
        title: 'Тех. обслуживание ПК',
        discription: '"Вылечим" Ваш компьютер от проблем и загрязнений',
        list: [
            'Сделаем чистку системы',
            'Заменим термоинтерфейс',
            'Обновим или оптимизируем OC, обновим драйвера',
        ],
        image: to,
        btnText: 'провести ТО',
        type: 'to'
    },
    {
        title: 'Диагностика ПК',
        discription: 'Поможем выявить проблемы и устранить их',
        list: [
            'Проведем полную диагностику компьютера',
            'Заменим неисправные компоненты',
        ],
        image: diagnostics,
        btnText: 'диагностировать ПК',
        type: 'diagnistic'
    },
];

export const buildPc: IServicesList = {
    title: 'Поможем собрать лучший игровой ПК',
    discription: 'Команда PCASSEMBLY подберет для Вас лучшие и топовые компоненты, соберет с современном корпусе с крутой RGB-подсветкой',
    list: [
        'Идеальное соотношение цена/качество',
        'Полностью готовая конфигурация прямо из коробки',
        'Гарантия пол года',
        'Интересные решения и подходы',
        'Уникальная сборка состоит только из Ваших предпочтений'
    ],
    btnText: 'Заказать сборку',
    image: servicePc,
    type: 'buildPc'
}