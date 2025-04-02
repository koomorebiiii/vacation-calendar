from dotenv import load_dotenv
from db.database import DataBase
import sys
import os

# Загружаем переменные окружения из .env:
load_dotenv()

# Получаем учетные данные для БД:
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_NAME = "db_calendar"  # os.getenv("DB_NAME")


if __name__ == '__main__':
    print(DB_USER, DB_PASSWORD, DB_NAME)
    # Проверка корректности данных для БД
    if DB_USER is None or len(DB_USER) <= 0:
        print("# Bad credentials. Exiting the program.")
        sys.exit()

    # app.run(debug=True)
