# Kinescope MAX Demo

Статическое [мини-приложение](https://dev.max.ru/docs/webapps/introduction) для мессенджера MAX: два встроенных плеера **Kinescope** — ролик с **DRM** и без.

## Состав

| Файл | Назначение |
|------|------------|
| `index.html` | Разметка, iframe embed, подключение [MAX Bridge](https://dev.max.ru/docs/webapps/bridge) (`st.max.ru/js/max-web-app.js`) |
| `styles.css` | Оформление и блок 16:9 под видео |
| `app.js` | Переключение вкладок, при наличии — `WebApp.ready()` |

## Локальный запуск

Нужен любой статический сервер, например:

```bash
npx --yes serve -l 3000 .
```

Откройте `http://localhost:3000`. Для MAX в продакшене нужен только **HTTPS**.

## GitHub Pages

Репозиторий: [dondigidonok/kinescope_max_demo_bot](https://github.com/dondigidonok/kinescope_max_demo_bot).

После включения **Settings → Pages** (ветка `main`, корень `/`) сайт будет по адресу:

**https://dondigidonok.github.io/kinescope_max_demo_bot/**

Эту ссылку можно указать в кабинете партнёра MAX: **Чат-боты → Чат-бот и мини-приложение → Настроить**.

## Видео

- С DRM: `https://kinescope.io/embed/2WFmbHsNz1W72DL9DGz2ps`
- Без DRM: `https://kinescope.io/embed/mMZhUWSyT2F4aWFp6BJT5X`

## Полезные ссылки

- [Документация MAX для разработчиков](https://dev.max.ru/docs)
- [Подключение мини-приложения](https://dev.max.ru/docs/webapps/introduction)
- [FAQ: мини-приложения](https://dev.max.ru/help/miniapps)
