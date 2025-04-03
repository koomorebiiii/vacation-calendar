import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, MetaData, Table, Column, String, Date, Integer, LargeBinary, select
import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT

SqlAlchemyBase = sqlalchemy.orm.declarative_base()


class DataBase:
    def __init__(self, db_name, user, password):
        # Создаём временное подключение к postgres
        connection = psycopg2.connect(user=user, password=password)
        connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)  # без автокоммита нельзя создавать БД,
                                                                    # т.к. открыта одна транзакция

        # Создаём БД, если ещё не создана
        cursor = connection.cursor()
        try:
            cursor.execute('create database ' + db_name)
        except psycopg2.errors.DuplicateDatabase:  # база данных уже создана
            pass
        finally:  # гарантированно закрываем временное подключение
            cursor.close()
            connection.close()

        # Создаём движок и подключение
        # дефолтные параметры: echo=False, pool_size=5, max_overflow=10, encoding='UTF-8'
        connection_link = "postgresql+psycopg2://" + user + ":" + password + "@localhost/" + db_name
        engine = create_engine(connection_link)
        conn = engine.connect()
        metadata = MetaData()

        # Создаём таблицу пользователей
        users_table = Table('users', metadata,
                            Column('email', String, primary_key=True, nullable=False),
                            Column('name', String, nullable=False),
                            Column('surname', String, nullable=False),
                            Column('middlename', String, nullable=False),
                            Column('position', String),
                            Column('image', LargeBinary))

        # Создаём таблицу календаря
        calendar_table = Table('calendar', metadata,
                               Column('id', Integer, primary_key=True, nullable=False),
                               Column('email', String, nullable=False),
                               Column('fromDate', Date, nullable=False),
                               Column('toDate', Date, nullable=False),
                               Column('department', Integer, nullable=False),
                               Column('reason', String, nullable=False))

        # Создаём таблицу паролей пользователей
        auth_table = Table('auth', metadata,
                           Column('email', String, primary_key=True, nullable=False),
                           Column('password', String, nullable=False))

        # Создаём таблицу отделов
        departments_table = Table('departments', metadata,
                                  Column('id', Integer, primary_key=True, nullable=False),
                                  Column('name', String, nullable=False))

        # Инициализируем таблицы
        metadata.create_all(engine)

        self.engine = engine

        # query = users_table.insert().values([{'email': 'lissk0@mail.ru',
        #                                       'name': 'Elizaveta',
        #                                       'surname': 'Chichkan',
        #                                       'middlename': 'Vladimirovna',
        #                                       'position': 'Admin'}])
        # conn.execute(query)
        # conn.commit()

        # Создание запроса с select
        select_all_query = select(users_table)

        # Выполнение запроса
        select_all_results = conn.execute(select_all_query)

        # Вывод результата
        print(select_all_results.fetchall())

        # Закрытие соединения
        conn.close()

    def insert_to_users(self, users_table, data):
        with Session(self.engine) as session:
            pass
