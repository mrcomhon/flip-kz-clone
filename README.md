# FlipClone

Учебный frontend-клон части интерфейса [Flip.kz](https://www.flip.kz/). Проект создан для практики React, TypeScript, адаптивной вёрстки и компонентной архитектуры.

> [!IMPORTANT]
> Проект находится в разработке. Сейчас это frontend-интерфейс без backend, API и полноценной логики интернет-магазина.

## Что реализовано

- header для desktop, tablet и mobile;
- burger menu с закрытием по `Escape` и блокировкой фокуса;
- dropdown авторизации;
- затемнение фона при открытом меню;
- интерфейс поиска без поисковой логики;
- desktop-версия footer;
- переиспользуемые UI- и layout-компоненты;
- строгая типизация TypeScript для исходного кода.

## Технологии

- React 19;
- TypeScript;
- Vite;
- SCSS Modules;
- ESLint;
- SVGR;
- React Icons;
- React Focus Lock.

## Требования

- Node.js `^20.19.0` или `>=22.12.0`;
- npm.

## Запуск

```bash
git clone https://github.com/mrcomhon/flip-kz-clone.git
cd flip-kz-clone
npm install
npm run dev
```

После запуска Vite выведет локальный URL в терминале.

## Проверки

```bash
npm run typecheck
npm run lint
npm run build
```

| Команда             | Назначение                |
| ------------------- | ------------------------- |
| `npm run dev`       | запуск dev-сервера Vite     |
| `npm run typecheck` | проверка типов TypeScript   |
| `npm run lint`      | проверка кода ESLint       |
| `npm run build`     | production-сборка        |
| `npm run preview`   | локальный просмотр сборки |

## Структура

```text
src/
├── assets/       # иконки, шрифты и изображения
├── components/   # React-компоненты
├── hooks/        # пользовательские React-хуки
├── pages/        # страницы
└── styles/       # глобальные стили и SCSS-хелперы
```

## План развития

- добавить i18n для русского и казахского языков;
- закончить мобильную версию footer;
- добавить subheader и каталог;
- создать карточки и страницы товаров;
- добавить логику поиска, корзины, избранного и авторизации;
- добавить тесты.

## Дисклеймер

Этот репозиторий создан исключительно в учебных целях, не связан с Flip.kz и не является официальным продуктом.
