# Module-04

**Реєстрація** (виконується по сабміту форми):

- Frontend
  - запит: POST, body включає логін/пароль (креди)
  - відповідь: створений користувач + кукі, які включають `accessToken`, `refreshToken`
- Backend
  - запит: отримує креди, шифрує пароль, створює в нового користувача і зберігає в колекції users БД. Створює нову сессію з прив'язкою до користувача, зберігає в коллекції sessions в БД. Сессія включає пару токенів: `accessToken`, `refreshToken`.
  - відповідь: повертає json з об'єктом створеного користувача (без пароля). Через httpOnly кукі передає `accessToken`, `refreshToken`.

**Логін** (виконується по сабміту форми):

- Frontend
  - запит: POST, body включає логін/пароль (креди)
  - відповідь: повертає користувача + кукі, які включають `accessToken`, `refreshToken`
- Backend
  - запит: отримує креди, шифрує пароль, створює в нового користувача і зберігає в колекції users БД. Створює нову сессію з прив'язкою до користувача, зберігає в коллекції sessions в БД. Сессія включає пару токенів: `accessToken`, `refreshToken`.
  - відповідь: повертає json з об'єктом створеного користувача (без пароля). Через httpOnly кукі передає `accessToken`, `refreshToken`.

> Всі інші запити - приватні. Відповідно, вони потребують обов'язкової передачі ``accessToken``, ``refreshToken`` для отримання доступу до даних бекенду. На фронті в конфіг axios потрібно включити `withCredentials: true` для того, щоб передавати кукі через заголовоки.

**Логаут** (виконується по кліку на кнопку логауту):

- Frontend
  - запит: POST, body не потрібний. Через заголовки передаються кукі з `accessToken`, `refreshToken`
  - відповідь: нічого не повертає (або тестове повідомлення) очищає кукі.
- Backend
  - запит: отримує `accessToken`, перевіряє на валідність. У разі валідності і актуальності токену - повертає 401 помилку. У разі, якщо токен валідний, шукає сессію в ДБ і очищає сессію.
  - відповідь: нічого не повертає (або json з тестовим повідомленням). Очищає кукі.

**Перевірка і оновлення сессії** (є різні стратегії запуску операції. Наприклад: автоматично раз в певний період, поки не протух `accessToken`, під час переходів між сторінками, під час отримання 401 помилки автоматичний запит. Всі стратегії направлені на підтримку забереження стану аутентифікації користувача):

- Frontend
  - запит: GET. Через заголовки передаються кукі з `accessToken`, `refreshToken` (або тільки `refreshToken`, якщо `accessToken` протух, або без кукі, якщо обидва протухли)
  - відповідь: різний формат відповіді + оновлені кукі з `accessToken`, `refreshToken`.
- Backend
  - запит: отримує кукі. Починає з перевірки `accessToken`, якщо немає `refreshToken`. Зчитує інформацію з них, перевіряє валідність, знаходить в БД сессію, оновлює сессію в БД (видаляє стару, створює нову)
  - відповідь: різний формат відповіді + оновлені кукі з `accessToken`, `refreshToken`.

В Next.js без проблем кукі автоматично передаються, якщо запит виконується на клієнті. На сервері немає доступу до Browser API (до сховища кукі в браузері).

Для вирішення цієї проблеми Next.js надає асинхронну функцію `cookies()`, яка надає можливість створити в межах Next.js сховище і записути, тобто зберігати кукі з відповідей запитів. А в потрібний момент зчитувати з нього кукі в серверних компонентах. Умовно кажучи - це допоміжне сховище в межах некст серверу.

Для реалізації можна зробити наступні дії:
- створити проксі-сервер між Next.js та зовнім бекендом. Це буде набір route-хендлерів:
  - Запити першочергово йдуть на проксі-сервер
  - Проксі-сервер виконує запити на зовнішній бекенд.


<details>
  <summary>Заняття 1</summary>
<ul>
    <li>Next Server</li>
    <li>Route Handler</li>
    <ul>
        <li>instance axios</li>
        <li>create all Handlers</li>
        <li>update all requests</li>
    </ul>
    <li>Auth</li>
    <ul>
        <li>instance axios</li>
        <li>withCredentials</li>
    </ul>
    <li>sign-up</li>
    <ul>
        <li>Header Links</li>
        <li>sign-up/page</li>
        <li>POST register</li>
        <li>register Route Handler</li>
        <li>cookies in Route Handler</li>
        <ul>
            <li>npm i cookie</li>
            <li>get setCookie</li>
            <li>parse(cookieStr)</li>
            <li>create cookie options</li>
            <li>cookieStore.set</li>
        </ul>
        <li>add register(formValues) in form</li>
    </ul>
    <li>sign-in</li>
    <ul>
        <li>sign-up/page</li>
        <li>POST login</li>
        <li>login Route Handler</li>
        <li>cookies in Route Handler</li>
        <li>add login(formValues) in form</li>
    </ul>
    <li>AuthStore</li>
    <ul>
        <li>create store</li>
        <li>checkSession client</li>
        <li>checkSession Route Handler</li>
        <ul>
            <li>cookieStore.get</li>
            <li>checkSession client</li>
            <li>silent authentication in Route Handler</li>
        </ul>
        <li>GET getMe</li>
        <li>getMe Route Handler</li>
        <li>AuthProvider</li>
        <li>add AuthProvider in RootLayout</li>
        <li>create AuthNavigation</li>
        <li>POST logout</li>
        <li>logout Route Handler</li>
        <li>cookieStore.delete</li>
        <li>add in handleLogout</li>
        <li>add setUser in sign-in & sign-up pages</li>
    </ul>
</ul>
</details>

<details>
  <summary>Заняття 2</summary>
<ul>
    <li>middleware</li>
    <ul>
        <li>private routes</li>
        <li>public routes</li>
        <li>public layout refresh</li>
    </ul>
    <li>private requests</li>
</ul>
</details>