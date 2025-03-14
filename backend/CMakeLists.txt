cmake_minimum_required(VERSION 3.10)  # Минимальная версия CMake
project(VacationCalendarBackend)       # Название проекта

set(CMAKE_CXX_STANDARD 17)            # Используем стандарт C++17

# Добавляем исполняемый файл
add_executable(backend/src/main.cpp)