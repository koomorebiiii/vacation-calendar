﻿# Веб-приложение “Календарь отпусков”
**Календарь отпусков** — это веб-приложение для управления отпусками сотрудников. Оно позволяет отслеживать график отпусков, предотвращать конфликты дат и упрощает процесс планирования.


## Технологии
- Backend: Python
- Frontend: JavaScript (React)
- База данных: PostgreSQL


## Основной функционал
- Просмотр и управление графиком отпусков
- Поиск и фильтрация отпусков
- Авторизация и контроль доступа


## Установка и запуск
**1. Клонируйте репозиторий:**
```bash
git clone https://github.com/LiSSk0/vacation-calendar.git
cd vacation-calendar
```

**2. Настройте виртуальное окружение и установите зависимости:**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Для macOS/Linux
venv\Scripts\activate  # Для Windows
pip install -r requirements.txt
```
**3. Укажите данные для подключения к БД PostgreSQL в файле .env, основываясь на примере в файле .env.example**
**4. Запустите backend:**
```bash
python backend/src/main.py
```
**5. Запустите frontend:**
```bash
cd frontend
```


## Контакты
- Telegram:
- Email: