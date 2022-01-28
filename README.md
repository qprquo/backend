# Проектная кухня

Так мы называем коллективную работу над проектом, проходящую параллельно с курсом по React в Яндекс.Практикуме. По желанию студенты делятся на команды и переделывают несложное приложение на React и Redux. Это закрепляет навыки кодинга и тренирует навыки коллективной работы.

## О проекте в этом репозитории

Backend проекта Кинореакция

## Запуск

Убедитесь что на вашей системе установлена mariadb или mysql.<br/>

Создайтие `.env` файл и заполните следующими переменными:

```sh
# Ваш api ключ https://www.themoviedb.org/
MOVIE_DB_KEY=1646dc3465760bb1d34cf9e78ace6b12
# пользователь бд
DB_USER=kino
# пароль
DB_PASSWORD=123
# имя базы данных
DB_DATABASE=kino
```

Переместитесь в директорию приложения:
1. `npm install` - устанавливает зависимости 
2. `npm run generate::secret` - генерирует secret key
3. `npm run migrate` - применят миграции
4. `npm run start::debug` или `npm run start` — запускает сервер
