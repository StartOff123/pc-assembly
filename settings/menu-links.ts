interface IHeaderMenuLinks {
    key: number;
    title: string;
    href: string;
}

export const menuLinks: IHeaderMenuLinks[] = [
    {
        key: 1,
        title: 'главная',
        href: 'home'
    },
    {
        key: 2,
        title: 'О нас',
        href: 'about'
    },
    {
        key: 3,
        title: 'Услуги',
        href: 'services'
    },
    {
        key: 4,
        title: 'Вопросы',
        href: 'questions'
    },
    {
        key: 5,
        title: 'Контакты',
        href: 'contacts'
    },
];