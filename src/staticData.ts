import { ShoppingCart, ScanBarcode, ListOrdered, ChartNoAxesCombined, Mail, Bell, Settings, CircleHelp, UserSearch, House } from "lucide-react";
import { AsideMenuItem } from "./types/types";

export const menuItems: AsideMenuItem[] = [
    {
        title: 'Home',
        icon: House,
        url: '/',
        iconColor: '#7662ea',
        russianTitle: 'Главная'
    },
    {
        title: 'Products',
        icon: ShoppingCart,
        url: '/products',
        iconColor: '#20AE3C',
        russianTitle: 'Товары'
    },
    {
        title: 'Categories',
        icon: ScanBarcode,
        url: '/categories',
        iconColor: '#FEA339',
        russianTitle: 'Категории'
    },
    {
        title: 'Orders',
        icon: ListOrdered,
        url: '/orders',
        iconColor: '#3872F0',
        russianTitle: 'Заказы'
    },
    {
        title: 'Users',
        icon: UserSearch,
        url: '/users',
        iconColor: '#FC5025',
        russianTitle: 'Пользователи'

    },
    {
        title: 'Statistics',
        icon: ChartNoAxesCombined,
        url: '/stat',
        iconColor: '#973CCB',
        russianTitle: 'Статистика'
    },

    {
        title: 'Messages',
        icon: Mail,
        url: '/messages',
        iconColor: '#fff',
        russianTitle: 'Сообщения'
    },

]
export const bottomMenuItems: AsideMenuItem[] = [
    {
        title: 'Alerts',
        icon: Bell,
        url: '/alerts',
        iconColor: '#fff',
        russianTitle: 'Оповещения'
    },
    {
        title: 'Settings',
        icon: Settings,
        url: '/settings',
        iconColor: '#fff',
        russianTitle: 'Настройки'
    },
    {
        title: 'FAQ',
        icon: CircleHelp,
        url: '/faq',
        iconColor: '#fff',
        russianTitle: 'FAQ'
    },
]
