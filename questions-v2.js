const QUESTIONS = [
  // ==================== ОСНОВЫ И СИНТАКСИС T-SQL ====================
  {
    topic: "T-SQL. Основы",
    question: "Какое свойство задаёт автоинкремент столбца в MS SQL Server?",
    options: ["AUTO_INCREMENT", "SERIAL", "IDENTITY", "AUTOINC"],
    correct: 2,
    explanation: "В MS SQL Server используется IDENTITY(seed, increment). AUTO_INCREMENT — это MySQL, SERIAL — PostgreSQL."
  },
  {
    topic: "T-SQL. Основы",
    question: "С какого символа начинается имя локальной переменной в T-SQL?",
    options: ["#", "@", "$", "&"],
    correct: 1,
    explanation: "Локальные переменные начинаются с @ (например, @counter). # — это префикс для временных таблиц."
  },
  {
    topic: "T-SQL. Основы",
    question: "Как правильно записать условный оператор IF...ELSE в T-SQL?",
    options: [
      "IF condition THEN ... ELSE ... END IF",
      "IF condition BEGIN ... END ELSE BEGIN ... END",
      "IF ELSE END",
      "IF (condition) { ... } ELSE { ... }"
    ],
    correct: 1,
    explanation: "В T-SQL для блока используются BEGIN...END. Слова THEN и END IF не применяются."
  },
  {
    topic: "T-SQL. Основы",
    question: "Какая команда используется для изменения данных в существующих строках таблицы?",
    options: ["ALTER ROW", "MODIFY", "UPDATE", "CHANGE"],
    correct: 2,
    explanation: "Изменение данных — UPDATE. ALTER изменяет структуру объектов, а не данные."
  },
  {
    topic: "T-SQL. Основы",
    question: "Что произойдёт, если выполнить DELETE без WHERE?",
    options: [
      "Ничего не произойдёт",
      "Будет ошибка синтаксиса",
      "Удалится только первая строка",
      "Удалятся ВСЕ строки таблицы"
    ],
    correct: 3,
    explanation: "Без WHERE условие отсутствует, поэтому DELETE затронет ВСЕ строки таблицы."
  },
  {
    topic: "T-SQL. Основы",
    question: "Можно ли вкладывать циклы WHILE друг в друга в T-SQL?",
    options: [
      "Да, циклы можно вкладывать друг в друга без ограничений",
      "Нет, нельзя",
      "Только с SELECT внутри",
      "Только два уровня вложенности"
    ],
    correct: 0,
    explanation: "Вложенность циклов в T-SQL разрешена, ограничений на уровень нет."
  },
  {
    topic: "T-SQL. Основы",
    question: "Можно ли присвоить значение переменной через SELECT?",
    options: [
      "Нет, только через SET",
      "Да, например: SELECT @var = column FROM table",
      "Только в хранимых процедурах",
      "Только если переменная объявлена как OUTPUT"
    ],
    correct: 1,
    explanation: "SELECT @var = column — валидный способ присваивания. Альтернатива — SET @var = value."
  },
  {
    topic: "T-SQL. Основы",
    question: "Как используется RETURN в хранимой процедуре?",
    options: [
      "Только в функциях, в процедурах запрещён",
      "Для возврата таблицы вызывающему коду",
      "Для возврата целого числа — кода завершения процедуры",
      "Для возврата произвольного типа данных"
    ],
    correct: 2,
    explanation: "RETURN в процедуре возвращает целое число (обычно 0 = успех, ненулевое = ошибка). Для возврата данных используются OUTPUT-параметры."
  },

  // ==================== ОГРАНИЧЕНИЯ (CONSTRAINTS) ====================
  {
    topic: "Ограничения",
    question: "Какое ограничение запрещает столбцу принимать значение NULL?",
    options: ["RESTRICT NULL", "REQUIRED", "NOT NULL", "IS NOT NULL"],
    correct: 2,
    explanation: "NOT NULL — стандартное ограничение, запрещающее NULL в столбце."
  },
  {
    topic: "Ограничения",
    question: "Какое ограничение гарантирует уникальность значений, но допускает один NULL?",
    options: ["PRIMARY KEY", "NOT NULL", "UNIQUE", "CHECK"],
    correct: 2,
    explanation: "UNIQUE даёт уникальность, но допускает одно значение NULL. PRIMARY KEY не допускает NULL вообще."
  },
  {
    topic: "Ограничения",
    question: "Какое ограничение служит для уникальной идентификации записи в таблице?",
    options: ["UNIQUE", "PRIMARY KEY", "IDENTITY", "FOREIGN KEY"],
    correct: 1,
    explanation: "PRIMARY KEY — первичный ключ, уникально идентифицирует каждую строку таблицы и не допускает NULL."
  },
  {
    topic: "Ограничения",
    question: "Какое ключевое слово используется для явного задания имени ограничению?",
    options: ["LIMIT", "AS", "CONSTRAINT", "NAME"],
    correct: 2,
    explanation: "Синтаксис: CONSTRAINT ck_name CHECK (...). LIMIT — это вообще не из MS SQL."
  },

  // ==================== ТИПЫ ДАННЫХ И ФУНКЦИИ ====================
  {
    topic: "Функции и типы данных",
    question: "Какой тип данных используется для хранения строк?",
    options: ["INT", "VARCHAR", "FLOAT", "DATETIME"],
    correct: 1,
    explanation: "Для строк используются VARCHAR/NVARCHAR/CHAR/NCHAR. INT — это целые числа."
  },
  {
    topic: "Функции и типы данных",
    question: "Какая функция объединяет (склеивает) строки?",
    options: ["ADDSTR()", "CONCAT()", "JOIN()", "MERGE()"],
    correct: 1,
    explanation: "CONCAT(str1, str2, ...) объединяет строки. Также можно через оператор +."
  },
  {
    topic: "Функции и типы данных",
    question: "Какая функция возвращает модуль (абсолютное значение) числа?",
    options: ["MOD()", "ABS()", "MODULE()", "POW()"],
    correct: 1,
    explanation: "ABS() — модуль. MOD — это остаток от деления в других СУБД; в T-SQL для остатка используется оператор %."
  },
  {
    topic: "Функции и типы данных",
    question: "Какая функция возводит число в степень?",
    options: ["EXPAND()", "POW()", "EXP()", "POWER()"],
    correct: 3,
    explanation: "POWER(основание, степень). EXP() — это экспонента (e^x), POW() — это в других языках."
  },
  {
    topic: "Функции и типы данных",
    question: "Какая функция возвращает квадратный корень числа?",
    options: ["SQUAREROOT()", "ROOT()", "SQR()", "SQRT()"],
    correct: 3,
    explanation: "SQRT(number) — квадратный корень. Других имён в T-SQL нет."
  },
  {
    topic: "Функции и типы данных",
    question: "Какая функция возвращает наименьшее целое, большее или равное аргументу?",
    options: ["ABS()", "FLOOR()", "CEILING()", "ROUND()"],
    correct: 2,
    explanation: "CEILING (потолок) — округление вверх. FLOOR — округление вниз."
  },
  {
    topic: "Функции и типы данных",
    question: "Какая функция возвращает год из даты?",
    options: ["GETYEAR()", "YEAR()", "DATEYEAR()", "EXTRACT(YEAR)"],
    correct: 1,
    explanation: "YEAR(date_value) возвращает год. Аналогично MONTH() и DAY()."
  },
  {
    topic: "Функции и типы данных",
    question: "Как получить текущую дату без компоненты времени?",
    options: [
      "CURRENTDATE()",
      "GETDATEONLY()",
      "TODAY()",
      "CAST(GETDATE() AS DATE)"
    ],
    correct: 3,
    explanation: "GETDATE() возвращает дату с временем. Чтобы убрать время: CAST(GETDATE() AS DATE) или CONVERT(DATE, GETDATE())."
  },
  {
    topic: "Функции и типы данных",
    question: "Какая функция позволяет преобразовать значение в другой тип с указанием формата?",
    options: ["CAST()", "TRANSFORM()", "CONVERT()", "FORMAT()"],
    correct: 2,
    explanation: "CONVERT(тип, выражение, стиль) — принимает параметр стиля. CAST формат не принимает."
  },
  {
    topic: "Функции и типы данных",
    question: "Какая функция заменяет одну подстроку на другую внутри строки?",
    options: ["SWAP()", "SUBSTITUTE()", "REPLACE()", "CHANGE()"],
    correct: 2,
    explanation: "REPLACE(string, old_substr, new_substr) — заменяет все вхождения."
  },
  {
    topic: "Функции и типы данных",
    question: "Какая функция вычисляет разницу между двумя датами?",
    options: ["BETWEENDATE()", "DATEDIFFERENCE()", "DIFFDATE()", "DATEDIFF()"],
    correct: 3,
    explanation: "DATEDIFF(единица, дата1, дата2) — разница в указанных единицах (day, month, year и т.д.)."
  },
  {
    topic: "Функции и типы данных",
    question: "Что возвращает скалярная пользовательская функция?",
    options: [
      "Несколько строк",
      "Одно значение",
      "Таблицу",
      "Только NULL"
    ],
    correct: 1,
    explanation: "Скалярная функция возвращает ровно одно значение указанного типа. Возврат таблицы — это табличная функция."
  },
  {
    topic: "Функции и типы данных",
    question: "Что возвращает Inline (встроенная табличная) функция?",
    options: [
      "Одно значение",
      "Несколько отдельных значений",
      "Таблицу (результат одного SELECT)",
      "Только текст"
    ],
    correct: 2,
    explanation: "Inline TVF возвращает таблицу — результат одного SELECT, оформленного как RETURN (SELECT ...)."
  },

  // ==================== ЗАПРОСЫ И СОЕДИНЕНИЯ ====================
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Как выбрать первые 5 строк из таблицы Employees в MS SQL Server?",
    options: [
      "SELECT FIRST 5 * FROM Employees",
      "SELECT * FROM Employees LIMIT 5",
      "SELECT TOP 5 * FROM Employees",
      "SELECT * FROM Employees WHERE ROWNUM <= 5"
    ],
    correct: 2,
    explanation: "В T-SQL — TOP n. LIMIT — это MySQL/PostgreSQL, ROWNUM — Oracle."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Какая конструкция позволяет задать условное выражение в SELECT?",
    options: ["IF", "WHEN", "CASE", "CHECK"],
    correct: 2,
    explanation: "CASE WHEN ... THEN ... ELSE ... END — условное выражение. IF — это управляющая команда, а не выражение."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Какой оператор используется для отрицания условия в SQL?",
    options: ["!", "NOT", "^", "~"],
    correct: 1,
    explanation: "NOT — стандартный оператор отрицания. ! — это из языков программирования."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Учитывает ли COUNT(ColumnName) значения NULL в столбце?",
    options: [
      "Да, считает все строки включая NULL",
      "Нет, NULL пропускаются — считаются только не-NULL значения",
      "Только если задан DISTINCT",
      "Да, NULL считается как 0"
    ],
    correct: 1,
    explanation: "COUNT(ColumnName) считает только не-NULL значения. COUNT(*) считает все строки независимо от NULL."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Что возвращает COUNT(ColumnName)?",
    options: [
      "Количество всех строк таблицы (включая NULL)",
      "Количество уникальных значений в столбце",
      "Количество ненулевых (не-NULL) значений в столбце",
      "Сумму значений столбца"
    ],
    correct: 2,
    explanation: "COUNT(col) = число строк, где col IS NOT NULL. Для уникальных нужен COUNT(DISTINCT col)."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Какое соединение возвращает декартово произведение — каждую строку с каждой?",
    options: ["FULL JOIN", "INNER JOIN", "OUTER JOIN", "CROSS JOIN"],
    correct: 3,
    explanation: "CROSS JOIN даёт декартово произведение. FULL JOIN — это полное внешнее соединение по условию."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Когда выражение с оператором ANY истинно?",
    options: [
      "Если условие верно для всех значений подзапроса",
      "Если условие верно хотя бы для одного значения подзапроса",
      "Только если подзапрос возвращает NULL",
      "Только если подзапрос пуст"
    ],
    correct: 1,
    explanation: "ANY = хотя бы один. ALL = для всех. Например, x > ANY(...) истинно, если x больше хотя бы одного значения."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "На каком этапе выполнения запроса применяется WHERE?",
    options: [
      "После сортировки (ORDER BY)",
      "После SELECT",
      "До группировки — сразу после FROM",
      "После HAVING"
    ],
    correct: 2,
    explanation: "Порядок: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. WHERE фильтрует строки ДО группировки."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Можно ли использовать HAVING без GROUP BY?",
    options: [
      "Нет, GROUP BY обязателен",
      "Да, тогда HAVING применяется к всему набору как к одной группе",
      "Только в подзапросе",
      "Только в MySQL"
    ],
    correct: 1,
    explanation: "HAVING можно использовать без GROUP BY, если есть агрегатные функции — вся выборка считается одной группой."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Можно ли использовать ORDER BY после GROUP BY?",
    options: [
      "Нет, нельзя совместно",
      "Только если нет HAVING",
      "Да, ORDER BY ставится после GROUP BY (и HAVING)",
      "Только без агрегатных функций"
    ],
    correct: 2,
    explanation: "Порядок секций: ... GROUP BY ... HAVING ... ORDER BY. Это стандартная и частая комбинация."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Можно ли комбинировать INNER JOIN и LEFT JOIN в одном запросе?",
    options: [
      "Нет, нельзя",
      "Только два соединения в одном запросе",
      "Только при наличии GROUP BY",
      "Да, можно использовать любые типы JOIN в одном запросе"
    ],
    correct: 3,
    explanation: "Никаких ограничений на смешивание типов JOIN нет."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Можно ли использовать более двух таблиц в одном запросе с JOIN?",
    options: [
      "Нет, только две таблицы",
      "Да, можно соединять сколько угодно таблиц",
      "Только если есть PRIMARY KEY",
      "Только через UNION"
    ],
    correct: 1,
    explanation: "JOIN'ы можно строить цепочкой: FROM A JOIN B ON ... JOIN C ON ... JOIN D ON ..."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Как правильно соединить три таблицы в одном запросе?",
    options: [
      "Через UNION трёх запросов",
      "Через цепочку JOIN: FROM A JOIN B ON ... JOIN C ON ...",
      "Через CROSS APPLY",
      "Только через подзапросы"
    ],
    correct: 1,
    explanation: "Стандартный способ — цепочка JOIN. UNION объединяет наборы строк, а не таблицы по столбцам."
  },
  {
    topic: "Запросы. UNION/EXCEPT/INTERSECT",
    question: "Какой оператор возвращает только общие (совпадающие) строки из двух запросов?",
    options: ["CROSS JOIN", "UNION", "EXCEPT", "INTERSECT"],
    correct: 3,
    explanation: "INTERSECT — пересечение, общие строки. EXCEPT — разность, UNION — объединение."
  },
  {
    topic: "Запросы. UNION/EXCEPT/INTERSECT",
    question: "Что вернёт EXCEPT, если все строки первого запроса совпадают со вторым?",
    options: [
      "Все строки из первого запроса",
      "Все строки из второго запроса",
      "Пустой результат",
      "Ошибку"
    ],
    correct: 2,
    explanation: "EXCEPT возвращает строки, которые есть в первом, но нет во втором. Если совпадают все — результат пустой."
  },
  {
    topic: "Запросы. UNION/EXCEPT/INTERSECT",
    question: "Что вернёт INTERSECT, если у двух запросов нет ни одной общей строки?",
    options: ["NULL", "Все строки из обоих запросов", "Ошибку", "Пустой результат"],
    correct: 3,
    explanation: "INTERSECT — пересечение. Нет пересечений — пустой набор (не NULL и не ошибка)."
  },

  // ==================== ТРИГГЕРЫ И УДАЛЕНИЕ ОБЪЕКТОВ ====================
  {
    topic: "Триггеры",
    question: "Как называется виртуальная таблица с новыми значениями строк внутри триггера?",
    options: ["UPDATED", "NEW", "MODIFIED", "INSERTED"],
    correct: 3,
    explanation: "В MS SQL Server есть две виртуальные таблицы: INSERTED (новые значения) и DELETED (старые)."
  },
  {
    topic: "Триггеры",
    question: "Можно ли создать несколько триггеров на одно и то же событие одной таблицы?",
    options: [
      "Нет, только один триггер на событие",
      "Только два триггера",
      "Да, можно создавать несколько AFTER-триггеров на одно событие",
      "Только с указанием FOR EACH ROW"
    ],
    correct: 2,
    explanation: "В MS SQL можно вешать несколько AFTER-триггеров. INSTEAD OF — только один на событие."
  },
  {
    topic: "DDL. Удаление объектов",
    question: "Какой синтаксис правильный для удаления пользовательской функции?",
    options: [
      "DROP TABLE function_name",
      "DELETE FUNCTION function_name",
      "REMOVE FUNCTION function_name",
      "DROP FUNCTION function_name"
    ],
    correct: 3,
    explanation: "DROP FUNCTION fn_name — стандартный синтаксис. DROP TABLE удаляет таблицы, а не функции."
  },
  {
    topic: "DDL. Удаление объектов",
    question: "Какой синтаксис правильный для удаления хранимой процедуры?",
    options: [
      "DROP TABLE procedure_name",
      "DELETE PROCEDURE procedure_name",
      "DROP PROCEDURE procedure_name",
      "REMOVE PROC procedure_name"
    ],
    correct: 2,
    explanation: "DROP PROCEDURE proc_name (или сокращённо DROP PROC). DROP TABLE — это для таблиц."
  }
];
