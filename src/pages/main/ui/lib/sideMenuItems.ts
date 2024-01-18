import {SideMenuItemPropsI} from "@/shared/ui/sideMenuItem";

export const SideMenuItems: SideMenuItemPropsI[] = [
    {
      id: "SideMenuItem1",
      title: "Организаторам",
      linksTitle: ["Документы организаторам", "Услуги организаторам", "Выставочные площадки", "Рестораны и кафе", "Конгресс-центр", "Спорт-центр"]
    },
    {
        id: "SideMenuItem2",
        title: "Экспонентам",
        linksTitle: ["Общие условия участия", "Услуги экспонентам", "Документы экспонентам", "Центр деловых контактов", "Забронировать гостиницу"]
    },
    {
        id: "SideMenuItem3",
        title: "Посетителям",
        linksTitle: ["Сервисы", "Онлайн-регистрация на мероприятие", "Забронировать гостиницу", "Центр деловых контактов"]
    },
    {
        id: "SideMenuItem4",
        title: "Прессе",
        linksTitle: ["Аккредитация", "Пресс-служба", "Правила аккредитации"]
    }
]