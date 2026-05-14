const QUESTIONS = [
  // ==================== T-SQL. ОСНОВЫ ====================
  {
    topic: "T-SQL. Основы",
    question: "С какого символа начинается имя локальной переменной?",
    options: ["#", "@", "$", "&"],
    correct: 1,
    explanation: "Локальные переменные: @counter. # - префикс временных таблиц."
  },
  {
    topic: "T-SQL. Основы",
    question: "Правильная запись IF...ELSE в T-SQL?",
    options: [
      "IF condition THEN ... ELSE ... END IF",
      "IF condition BEGIN ... END ELSE BEGIN ... END",
      "IF ELSE END",
      "IF (condition) { ... } ELSE { ... }"
    ],
    correct: 1,
    explanation: "Блоки в T-SQL: BEGIN...END. THEN и END IF не применяются."
  },
  {
    topic: "T-SQL. Основы",
    question: "Что вернёт DELETE без WHERE?",
    options: [
      "Ничего не произойдёт",
      "Будет ошибка синтаксиса",
      "Удалится только первая строка",
      "Удалятся ВСЕ строки таблицы"
    ],
    correct: 3,
    explanation: "DELETE без WHERE удаляет все строки таблицы."
  },
  {
    topic: "T-SQL. Основы",
    question: "Что возвращает RETURN в хранимой процедуре?",
    options: [
      "Только в функциях, в процедурах запрещён",
      "Таблицу вызывающему коду",
      "Целое число: код завершения процедуры",
      "Произвольный тип данных"
    ],
    correct: 2,
    explanation: "RETURN возвращает int (0 - успех, ненулевое - ошибка). Данные - через OUTPUT-параметры."
  },
  // Wayground #6: оператор цикла в T-SQL
  {
    topic: "T-SQL. Основы",
    question: "Оператор цикла в T-SQL?",
    options: ["LOOP", "FOR EACH", "REPEAT...UNTIL", "WHILE"],
    correct: 3,
    explanation: "В T-SQL единственный цикл: WHILE. LOOP/FOR EACH/REPEAT - другие СУБД."
  },
  // Wayground #14: BREAK - выход из WHILE
  {
    topic: "T-SQL. Основы",
    question: "Оператор для выхода из WHILE до завершения цикла?",
    options: ["EXIT", "STOP", "RETURN", "BREAK"],
    correct: 3,
    explanation: "BREAK прерывает WHILE. CONTINUE переходит к следующей итерации."
  },
  // Wayground #10: синтаксис UPDATE
  {
    topic: "T-SQL. Основы",
    question: "Корректный синтаксис UPDATE?",
    options: [
      "UPDATE таблица SET столбец = значение WHERE условие",
      "UPDATE таблица (столбец = значение)",
      "UPDATE таблица WHERE условие SET столбец = значение",
      "UPDATE SET столбец = значение FROM таблица"
    ],
    correct: 0,
    explanation: "Стандарт: UPDATE <таблица> SET <столбец> = <значение> [WHERE <условие>]."
  },
  // Wayground #20: объявить переменную
  {
    topic: "T-SQL. Основы",
    question: "Корректный синтаксис объявления переменной?",
    options: [
      "DECLARE @myVariable INT;",
      "VAR myVar INT;",
      "LET @myVariable AS INT;",
      "SET VARIABLE @myVariable INT;"
    ],
    correct: 0,
    explanation: "DECLARE @name TYPE [= value]. Затем SET или SELECT для присваивания."
  },
  // Wayground #24: временные таблицы физически где
  {
    topic: "T-SQL. Основы",
    question: "Где физически хранятся временные таблицы?",
    options: [
      "В базе master",
      "В памяти сервера, не на диске",
      "В системной базе tempdb",
      "В пользовательской базе, где созданы"
    ],
    correct: 2,
    explanation: "Все временные таблицы (#temp и ##global) физически живут в tempdb."
  },

  // ==================== ОГРАНИЧЕНИЯ ====================
  {
    topic: "Ограничения",
    question: "Ограничение, запрещающее NULL в столбце?",
    options: ["RESTRICT NULL", "REQUIRED", "NOT NULL", "IS NOT NULL"],
    correct: 2,
    explanation: "NOT NULL запрещает NULL в столбце."
  },
  {
    topic: "Ограничения",
    question: "Ограничение с уникальностью, но допускающее один NULL?",
    options: ["PRIMARY KEY", "NOT NULL", "UNIQUE", "CHECK"],
    correct: 2,
    explanation: "UNIQUE: уникальность + один NULL. PRIMARY KEY не допускает NULL."
  },
  {
    topic: "Ограничения",
    question: "Ограничение для уникальной идентификации записи?",
    options: ["UNIQUE", "PRIMARY KEY", "IDENTITY", "FOREIGN KEY"],
    correct: 1,
    explanation: "PRIMARY KEY: уникально идентифицирует строку, NULL не допускается."
  },
  {
    topic: "Ограничения",
    question: "Ключевое слово для явного имени ограничения?",
    options: ["LIMIT", "AS", "CONSTRAINT", "NAME"],
    correct: 2,
    explanation: "Синтаксис: CONSTRAINT ck_name CHECK (...). LIMIT не из MS SQL."
  },
  {
    topic: "Ограничения",
    question: "Сколько PRIMARY KEY у одной таблицы?",
    options: ["Не ограничено", "Только одно", "До 5", "До 1024"],
    correct: 1,
    explanation: "Таблица может иметь только один PRIMARY KEY (хотя он может включать несколько столбцов)."
  },
  {
    topic: "Ограничения",
    question: "Что делает ограничение DEFAULT?",
    options: [
      "Запрещает изменение значения столбца",
      "Устанавливает значение по умолчанию, если значение не задано при вставке",
      "Устанавливает минимальное значение столбца",
      "Заполняет NULL значения нулём"
    ],
    correct: 1,
    explanation: "DEFAULT подставляет значение, когда столбец не указан в INSERT."
  },
  {
    topic: "Ограничения",
    question: "Для каких столбцов нельзя создать DEFAULT?",
    options: [
      "VARCHAR и NVARCHAR",
      "FLOAT и DECIMAL",
      "TIMESTAMP и столбцы со свойством IDENTITY",
      "INT и BIGINT"
    ],
    correct: 2,
    explanation: "DEFAULT нельзя для TIMESTAMP и столбцов со свойством IDENTITY."
  },
  {
    topic: "Ограничения",
    question: "Что проверяет ограничение CHECK?",
    options: [
      "Уникальность значений в столбце",
      "Ссылочную целостность между таблицами",
      "Логическое условие на допустимые значения столбца",
      "Длину строковых значений"
    ],
    correct: 2,
    explanation: "CHECK ограничивает допустимые значения столбца через логическое условие."
  },

  // ==================== ТИПЫ ДАННЫХ И ФУНКЦИИ ====================
  {
    topic: "Функции и типы данных",
    question: "Тип данных для хранения строк?",
    options: ["INT", "VARCHAR", "FLOAT", "DATETIME"],
    correct: 1,
    explanation: "VARCHAR/NVARCHAR/CHAR/NCHAR - строковые типы. INT - целые числа."
  },
  {
    topic: "Функции и типы данных",
    question: "Функция объединения (склейки) строк?",
    options: ["ADDSTR()", "CONCAT()", "JOIN()", "MERGE()"],
    correct: 1,
    explanation: "CONCAT(str1, str2, ...) склеивает строки. Также через оператор +."
  },
  {
    topic: "Функции и типы данных",
    question: "Функция: наименьшее целое, >= аргументу?",
    options: ["ABS()", "FLOOR()", "CEILING()", "ROUND()"],
    correct: 2,
    explanation: "CEILING - округление вверх. FLOOR - округление вниз."
  },
  {
    topic: "Функции и типы данных",
    question: "Функция для получения года из даты?",
    options: ["GETYEAR()", "YEAR()", "DATEYEAR()", "EXTRACT(YEAR)"],
    correct: 1,
    explanation: "YEAR(date_value) - год. Аналогично MONTH() и DAY()."
  },
  {
    topic: "Функции и типы данных",
    question: "Как получить текущую дату без времени?",
    options: [
      "CURRENTDATE()",
      "GETDATEONLY()",
      "TODAY()",
      "CAST(GETDATE() AS DATE)"
    ],
    correct: 3,
    explanation: "CAST(GETDATE() AS DATE) или CONVERT(DATE, GETDATE()) убирают компонент времени."
  },
  {
    topic: "Функции и типы данных",
    question: "Функция преобразования типа с указанием формата?",
    options: ["CAST()", "TRANSFORM()", "CONVERT()", "FORMAT()"],
    correct: 2,
    explanation: "CONVERT(тип, выражение, стиль) принимает параметр стиля. CAST формат не принимает."
  },
  {
    topic: "Функции и типы данных",
    question: "Функция замены подстроки в строке?",
    options: ["SWAP()", "SUBSTITUTE()", "REPLACE()", "CHANGE()"],
    correct: 2,
    explanation: "REPLACE(string, old_substr, new_substr) заменяет все вхождения."
  },
  {
    topic: "Функции и типы данных",
    question: "Функция разницы между двумя датами?",
    options: ["BETWEENDATE()", "DATEDIFFERENCE()", "DIFFDATE()", "DATEDIFF()"],
    correct: 3,
    explanation: "DATEDIFF(единица, дата1, дата2) считает разницу в указанных единицах (day, month, year)."
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
    explanation: "Inline TVF: таблица - результат одного SELECT, оформленного как RETURN (SELECT ...)."
  },
  {
    topic: "Функции и типы данных",
    question: "Что делает ISNULL(выражение, замена)?",
    options: [
      "Возвращает 1 если значение NULL, иначе 0",
      "Проверяет, является ли значение числом",
      "Заменяет NULL указанным замещающим значением",
      "Удаляет NULL значения из столбца"
    ],
    correct: 2,
    explanation: "ISNULL(выражение, замена) - если NULL, возвращает замену. Аналог COALESCE для двух аргументов."
  },
  {
    topic: "Функции и типы данных",
    question: "Функция добавления интервала к дате?",
    options: ["ADDDATE()", "DATEPLUS()", "DATEADD()", "DATESHIFT()"],
    correct: 2,
    explanation: "DATEADD(часть, число, дата). Пример: DATEADD(DAY, 7, GETDATE())."
  },
  {
    topic: "Функции и типы данных",
    question: "Что вернёт FLOOR(3.9)?",
    options: ["4", "3", "3.9", "NULL"],
    correct: 1,
    explanation: "FLOOR - наибольшее целое, <= аргументу. FLOOR(3.9) = 3."
  },
  {
    topic: "Функции и типы данных",
    question: "Функция позиции первого вхождения подстроки?",
    options: ["INDEXOF()", "FIND()", "LOCATE()", "CHARINDEX()"],
    correct: 3,
    explanation: "CHARINDEX(подстрока, строка) - позиция первого вхождения. LOCATE() - MySQL, INDEXOF() нет в T-SQL."
  },

  // ==================== SELECT / WHERE / ФИЛЬТРАЦИЯ ====================
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Первые 5 строк из таблицы Employees в T-SQL?",
    options: [
      "SELECT FIRST 5 * FROM Employees",
      "SELECT * FROM Employees LIMIT 5",
      "SELECT TOP 5 * FROM Employees",
      "SELECT * FROM Employees WHERE ROWNUM <= 5"
    ],
    correct: 2,
    explanation: "T-SQL: TOP n. LIMIT - MySQL/PostgreSQL, ROWNUM - Oracle."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Конструкция для условного выражения в SELECT?",
    options: ["IF", "WHEN", "CASE", "CHECK"],
    correct: 2,
    explanation: "CASE WHEN ... THEN ... ELSE ... END - условное выражение. IF - управляющая команда."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Оператор отрицания условия в SQL?",
    options: ["!", "NOT", "^", "~"],
    correct: 1,
    explanation: "NOT - стандартный оператор отрицания. ! - из языков программирования."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Учитывает ли COUNT(ColumnName) значения NULL?",
    options: [
      "Да, считает все строки включая NULL",
      "Нет, NULL пропускаются, считаются только не-NULL значения",
      "Только если задан DISTINCT",
      "Да, NULL считается как 0"
    ],
    correct: 1,
    explanation: "COUNT(col) считает только не-NULL. COUNT(*) - все строки."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "На каком этапе выполнения запроса применяется WHERE?",
    options: [
      "После сортировки (ORDER BY)",
      "После SELECT",
      "До группировки, сразу после FROM",
      "После HAVING"
    ],
    correct: 2,
    explanation: "Порядок: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Оператор T-SQL, эквивалентный '!>' (не больше)?",
    options: ["<>", "<=", "!=", "NOT >"],
    correct: 1,
    explanation: "!> - 'не больше', то есть <=. Специфика T-SQL, в ANSI SQL нет."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Строки 3-10 (пропустить 2, взять 8) в T-SQL?",
    options: [
      "SELECT * FROM T LIMIT 8 OFFSET 2",
      "SELECT * FROM T ORDER BY col OFFSET 2 ROWS FETCH NEXT 8 ROWS ONLY",
      "SELECT * FROM T WHERE ROWNUM BETWEEN 3 AND 10",
      "SELECT TOP 10 * FROM T SKIP 2"
    ],
    correct: 1,
    explanation: "OFFSET ... ROWS FETCH NEXT ... ROWS ONLY - пагинация T-SQL. Требует ORDER BY."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "LIKE '_а%я' отбирает строки, где...",
    options: [
      "Начинаются с 'а' и заканчиваются на 'я'",
      "Вторая буква 'а' и последняя 'я'",
      "Содержат 'а' и 'я' где угодно",
      "Начинаются с 'я' и содержат 'а'"
    ],
    correct: 1,
    explanation: "_ - любой один символ. '_а%я': любой первый, вторая 'а', любое продолжение, последняя 'я'."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Включает ли BETWEEN крайние значения?",
    options: [
      "Нет, оба исключаются",
      "Только начальное включается",
      "Только конечное включается",
      "Да, оба значения включены"
    ],
    correct: 3,
    explanation: "BETWEEN A AND B включает оба граничных значения."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Приоритет логических операторов T-SQL от высшего к низшему?",
    options: [
      "AND, OR, NOT",
      "OR, AND, NOT",
      "NOT, AND, OR",
      "NOT, OR, AND"
    ],
    correct: 2,
    explanation: "Приоритет: NOT, AND, OR. Для явного порядка - скобки."
  },

  // ==================== АГРЕГАТЫ, GROUP BY, HAVING ====================
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
    explanation: "COUNT(col) = число строк, где col IS NOT NULL. Для уникальных: COUNT(DISTINCT col)."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Можно ли HAVING без GROUP BY?",
    options: [
      "Нет, GROUP BY обязателен",
      "Да, HAVING применяется ко всему набору как к одной группе",
      "Только в подзапросе",
      "Только в MySQL"
    ],
    correct: 1,
    explanation: "HAVING без GROUP BY: вся выборка считается одной группой."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "NULL в столбце GROUP BY - что произойдёт?",
    options: [
      "NULL-строки будут проигнорированы",
      "Будет ошибка выполнения",
      "NULL-строки составят отдельную группу",
      "NULL заменится на 0"
    ],
    correct: 2,
    explanation: "Строки с NULL в столбце группировки образуют отдельную группу."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Что делает AVG при NULL в столбце?",
    options: [
      "Считает NULL как 0",
      "Возвращает NULL",
      "Игнорирует NULL при вычислении среднего",
      "Выдаёт ошибку"
    ],
    correct: 2,
    explanation: "AVG и другие агрегаты игнорируют NULL. Среднее по не-NULL строкам."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Разница между WHERE и HAVING?",
    options: [
      "WHERE фильтрует строки до группировки, HAVING - после группировки",
      "HAVING фильтрует строки до группировки, WHERE - после",
      "WHERE только с JOIN, HAVING - без JOIN",
      "Разницы нет, это синонимы"
    ],
    correct: 0,
    explanation: "WHERE фильтрует строки до GROUP BY. HAVING фильтрует группы после GROUP BY."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Что делает TOP 30 PERCENT в SELECT?",
    options: [
      "Строки, значения которых в верхних 30%",
      "Первые 30% строк от общего числа результатов",
      "Добавляет к строке процент от суммы",
      "Округляет до 30 знаков"
    ],
    correct: 1,
    explanation: "TOP 30 PERCENT берёт первые 30% строк. Осмысленно с ORDER BY."
  },

  // ==================== JOIN ====================
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Соединение: каждая строка с каждой (декартово произведение)?",
    options: ["FULL JOIN", "INNER JOIN", "OUTER JOIN", "CROSS JOIN"],
    correct: 3,
    explanation: "CROSS JOIN - декартово произведение. FULL JOIN - внешнее соединение по условию."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "LEFT OUTER JOIN возвращает...",
    options: [
      "Из левой таблицы все строки, из правой - только совпадающие",
      "Из правой таблицы все строки, из левой - только совпадающие",
      "Только совпадающие строки из обеих таблиц",
      "Все строки из обеих таблиц"
    ],
    correct: 0,
    explanation: "LEFT JOIN: все строки левой + только совпадающие правой. Несовпадающие поля правой - NULL."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Строки левой таблицы без совпадений в правой (антисоединение)?",
    options: [
      "LEFT JOIN ... WHERE правая.id IS NOT NULL",
      "LEFT JOIN ... WHERE правая.id IS NULL",
      "EXCEPT JOIN ...",
      "ANTI JOIN ..."
    ],
    correct: 1,
    explanation: "LEFT JOIN ... WHERE правая.ключ IS NULL - строки без совпадений в правой таблице."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "INNER JOIN возвращает...",
    options: [
      "Все строки из обеих таблиц",
      "Только строки с совпадением в обеих таблицах",
      "Все строки из левой таблицы",
      "Строки без совпадений"
    ],
    correct: 1,
    explanation: "INNER JOIN: только строки с совпадением по условию ON в обеих таблицах."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "FULL OUTER JOIN возвращает...",
    options: [
      "Только совпадающие строки",
      "Все строки из левой таблицы",
      "Все строки из обеих таблиц (NULL там, где нет совпадений)",
      "Только строки правой таблицы"
    ],
    correct: 2,
    explanation: "FULL OUTER JOIN: все строки обеих таблиц. Несовпадающие поля - NULL."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Соединение таблицы с самой собой называется?",
    options: [
      "SELF JOIN",
      "RECURSIVE JOIN",
      "LOOP JOIN",
      "MIRROR JOIN"
    ],
    correct: 0,
    explanation: "SELF JOIN - таблица соединяется со своей копией. Псевдоним обязателен."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Неявное соединение двух таблиц в T-SQL?",
    options: [
      "FROM T1 CONNECT TO T2 WHERE T1.id = T2.fk",
      "FROM T1, T2 WHERE T1.id = T2.fk",
      "FROM T1 NATURAL JOIN T2",
      "FROM T1 MERGE T2 ON T1.id = T2.fk"
    ],
    correct: 1,
    explanation: "Неявное соединение: таблицы через запятую в FROM, условие в WHERE."
  },

  // ==================== UNION / EXCEPT / INTERSECT ====================
  {
    topic: "Запросы. UNION/EXCEPT/INTERSECT",
    question: "EXCEPT, если все строки первого совпадают со вторым?",
    options: [
      "Все строки из первого запроса",
      "Все строки из второго запроса",
      "Пустой результат",
      "Ошибку"
    ],
    correct: 2,
    explanation: "EXCEPT: строки из первого, которых нет во втором. Все совпали - пустой результат."
  },
  {
    topic: "Запросы. UNION/EXCEPT/INTERSECT",
    question: "INTERSECT без общих строк вернёт?",
    options: ["NULL", "Все строки из обоих запросов", "Ошибку", "Пустой результат"],
    correct: 3,
    explanation: "INTERSECT - пересечение. Нет общих строк - пустой набор."
  },
  {
    topic: "Запросы. UNION/EXCEPT/INTERSECT",
    question: "Отличие UNION от UNION ALL?",
    options: [
      "UNION ALL быстрее, но удаляет дубликаты; UNION медленнее",
      "UNION удаляет дубликаты; UNION ALL сохраняет все строки",
      "UNION ALL только с таблицами с PRIMARY KEY",
      "UNION только с двумя запросами, UNION ALL - с любым количеством"
    ],
    correct: 1,
    explanation: "UNION убирает дубликаты, UNION ALL сохраняет. UNION ALL быстрее - нет дедупликации."
  },
  {
    topic: "Запросы. UNION/EXCEPT/INTERSECT",
    question: "Где ставить ORDER BY при UNION?",
    options: [
      "После каждого отдельного запроса",
      "Только перед UNION",
      "В конце всего выражения, после последнего запроса",
      "ORDER BY нельзя с UNION"
    ],
    correct: 2,
    explanation: "ORDER BY добавляется в конце всего выражения. В промежуточных запросах нельзя."
  },
  {
    topic: "Запросы. UNION/EXCEPT/INTERSECT",
    question: "Два NULL в EXCEPT/INTERSECT считаются равными?",
    options: [
      "NULL не равно NULL, строки не считаются одинаковыми",
      "Два NULL считаются равными",
      "EXCEPT ошибка при наличии NULL",
      "NULL игнорируется при сравнении"
    ],
    correct: 1,
    explanation: "В EXCEPT/INTERSECT два NULL - равны (в отличие от WHERE col = NULL)."
  },
  // Wayground #28: INTERSECT - пересечение множеств
  {
    topic: "Запросы. UNION/EXCEPT/INTERSECT",
    question: "Оператор пересечения множеств результатов двух запросов?",
    options: ["INNER APPLY", "EXCEPT", "INTERSECT", "CROSS JOIN"],
    correct: 2,
    explanation: "INTERSECT - пересечение (общие строки). EXCEPT - разность. UNION - объединение."
  },

  // ==================== ПОДЗАПРОСЫ ====================
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Когда выражение с ANY истинно?",
    options: [
      "Если условие верно для всех значений подзапроса",
      "Если условие верно хотя бы для одного значения",
      "Только если подзапрос вернул NULL",
      "Только если подзапрос пуст"
    ],
    correct: 1,
    explanation: "ANY - хотя бы один. ALL - для всех. x > ANY(...) истинно, если x > хотя бы одного."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "В каком предложении допускается только скалярный подзапрос?",
    options: ["FROM", "WHERE", "SELECT", "HAVING"],
    correct: 2,
    explanation: "В SELECT допускается только скалярный подзапрос - одно значение."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Что такое коррелирующий подзапрос?",
    options: [
      "Выполняется один раз для всего внешнего запроса",
      "Результат зависит от строк основного запроса, выполняется для каждой строки",
      "Подзапрос во FROM с псевдонимом",
      "Подзапрос, возвращающий одно значение"
    ],
    correct: 1,
    explanation: "Коррелирующий подзапрос зависит от внешнего запроса и выполняется для каждой строки."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Максимальный уровень вложенности подзапросов в T-SQL?",
    options: ["16", "32", "64", "128"],
    correct: 1,
    explanation: "T-SQL: до 32 уровней вложенности. Выполнение с самого глубокого."
  },
  // Wayground #12: Salary > ALL(subquery)
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Условие Salary > ALL(subquery) - что означает > ALL?",
    options: [
      "Значение больше хотя бы одного значения подзапроса",
      "Значение больше среднего набора подзапроса",
      "Значение больше минимума набора подзапроса",
      "Значение больше максимума набора подзапроса"
    ],
    correct: 3,
    explanation: "> ALL - больше всех значений из подзапроса, то есть больше максимума."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Можно ли использовать IN с подзапросом?",
    options: [
      "Нет, IN только с явными списками",
      "Да, IN применяется к результатам подзапросов с одним столбцом",
      "Только если подзапрос одно значение",
      "Только в Oracle"
    ],
    correct: 1,
    explanation: "IN с подзапросом: подзапрос возвращает список значений (один столбец)."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Чем некоррелирующий подзапрос отличается от коррелирующего?",
    options: [
      "Некоррелирующий выполняется для каждой строки",
      "Некоррелирующий выполняется один раз, не зависит от строк внешнего запроса",
      "Некоррелирующий не может GROUP BY",
      "Некоррелирующий возвращает одно значение"
    ],
    correct: 1,
    explanation: "Некоррелирующий подзапрос не зависит от внешнего запроса, выполняется один раз."
  },
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Что вернёт подзапрос в WHERE для прямого сравнения (=)?",
    options: [
      "Скалярное значение: один столбец, одна строка",
      "Только таблицу с несколькими столбцами",
      "Любой набор данных",
      "Только NULL"
    ],
    correct: 0,
    explanation: "Подзапросы в WHERE для сравнения (=, <, >) возвращают скалярное значение."
  },
  // Wayground #18: EXISTS для проверки существования строк
  {
    topic: "Запросы. SELECT/JOIN",
    question: "Лучший оператор для проверки существования строк?",
    options: ["EXISTS", "COUNT(*)", "IN", "DISTINCT"],
    correct: 0,
    explanation: "EXISTS останавливается на первой найденной строке - быстрее, чем COUNT(*) > 0."
  },

  // ==================== DDL ====================
  {
    topic: "DDL. Удаление объектов",
    question: "Синтаксис удаления хранимой процедуры?",
    options: [
      "DROP TABLE procedure_name",
      "DELETE PROCEDURE procedure_name",
      "DROP PROCEDURE procedure_name",
      "REMOVE PROC procedure_name"
    ],
    correct: 2,
    explanation: "DROP PROCEDURE proc_name (или DROP PROC). DROP TABLE - для таблиц."
  },
  {
    topic: "DDL. Удаление объектов",
    question: "IF EXISTS в DROP FUNCTION IF EXISTS - что делает?",
    options: [
      "Создаёт функцию, если не существует",
      "Удаляет только если существует (нет ошибки при отсутствии объекта)",
      "Проверяет версию SQL Server",
      "Добавляет условие на результат функции"
    ],
    correct: 1,
    explanation: "IF EXISTS: без ошибки, если объект не существует. Без IF EXISTS - ошибка при отсутствии."
  },
  {
    topic: "DDL. Удаление объектов",
    question: "Как переключиться на базу данных?",
    options: [
      "CONNECT TO db_name",
      "USE db_name",
      "SET DATABASE = db_name",
      "OPEN db_name"
    ],
    correct: 1,
    explanation: "USE db_name - переключение на БД."
  },
  {
    topic: "DDL. Удаление объектов",
    question: "Какой тип данных нельзя назначить столбцу IDENTITY?",
    options: [
      "INT",
      "BIGINT",
      "VARCHAR",
      "SMALLINT"
    ],
    correct: 2,
    explanation: "IDENTITY только для числовых: tinyint, smallint, int, bigint, decimal(p,0). VARCHAR не поддерживается."
  },
  // Wayground #5: IDENTITY - для чего
  {
    topic: "DDL. Удаление объектов",
    question: "Для чего используется свойство IDENTITY в столбце?",
    options: [
      "Для указания, что столбец является первичным ключом",
      "Для автоматического присвоения уникальных строковых значений",
      "Для шифрования данных в столбце",
      "Для автоматического присвоения возрастающих числовых значений"
    ],
    correct: 3,
    explanation: "IDENTITY(seed, increment) - автоматический автоинкремент целочисленных значений."
  },
  // Wayground #6: свойство для автоинкремента (дубль тематики, но прямой вопрос)
  {
    topic: "DDL. Удаление объектов",
    question: "Свойство SQL Server для автоинкрементных значений в столбце?",
    options: ["IDENTITY", "AUTO_NUMBER", "SEQUENCE", "SERIAL"],
    correct: 0,
    explanation: "IDENTITY - MS SQL Server. AUTO_NUMBER не существует, SEQUENCE - отдельный объект, SERIAL - PostgreSQL."
  },
  // Wayground #16: DROP TABLE Employees
  {
    topic: "DDL. Удаление объектов",
    question: "Корректный синтаксис удаления таблицы Employees?",
    options: [
      "TRUNCATE Employees;",
      "DELETE TABLE Employees;",
      "DROP TABLE Employees;",
      "REMOVE TABLE Employees;"
    ],
    correct: 2,
    explanation: "DROP TABLE удаляет таблицу полностью со всеми данными и структурой. TRUNCATE удаляет только строки."
  },
  // Wayground #21: удалить функцию/процедуру без DROP
  {
    topic: "DDL. Удаление объектов",
    question: "Можно ли удалить функцию или процедуру без команды DROP?",
    options: [
      "Да, если она не используется в других запросах",
      "Да, через DELETE в системных таблицах",
      "Нет, объекты схемы удаляются только через DROP",
      "Да, очистив код через ALTER"
    ],
    correct: 2,
    explanation: "Объекты схемы (функции, процедуры, таблицы, представления) удаляются только через DROP."
  },
  // Wayground #26: ALTER TABLE
  {
    topic: "DDL. Удаление объектов",
    question: "Команда для изменения структуры существующей таблицы?",
    options: ["UPDATE TABLE", "ALTER TABLE", "CHANGE TABLE", "MODIFY TABLE"],
    correct: 1,
    explanation: "ALTER TABLE - изменение структуры (ADD/DROP/ALTER COLUMN). UPDATE меняет данные."
  },

  // ==================== DML ====================
  {
    topic: "DML. Данные",
    question: "Несколько строк одним INSERT в T-SQL?",
    options: [
      "INSERT INTO T VALUES (1), (2), (3)",
      "INSERT MULTIPLE INTO T VALUES (1), (2), (3)",
      "INSERT INTO T VALUES 1, 2, 3",
      "BULK INSERT INTO T VALUES (1), (2), (3)"
    ],
    correct: 0,
    explanation: "INSERT INTO T VALUES (v1), (v2), (v3). Каждый список в своих скобках."
  },
  {
    topic: "DML. Данные",
    question: "Что делает SELECT ... INTO в T-SQL?",
    options: [
      "Создаёт новую таблицу и заполняет результатом SELECT",
      "Сохраняет результат в переменную",
      "Добавляет строки в существующую таблицу",
      "Экспортирует данные в файл"
    ],
    correct: 0,
    explanation: "SELECT ... INTO новая_таблица: создаёт таблицу со структурой из SELECT и заполняет данными."
  },
  {
    topic: "DML. Данные",
    question: "Можно ли UPDATE с подзапросом в SET?",
    options: [
      "Нет, UPDATE только константы",
      "Да, значения через подзапросы",
      "Только в MySQL",
      "Только если одинаковая структура таблиц"
    ],
    correct: 1,
    explanation: "UPDATE t SET col = (SELECT ... FROM ...) - корректно. Подзапрос возвращает скалярное значение."
  },
  {
    topic: "DML. Данные",
    question: "NOT NULL столбец без DEFAULT, не указан в INSERT - что произойдёт?",
    options: [
      "Вставится NULL автоматически",
      "Вставится DEFAULT если задан, иначе ошибка",
      "Вставится пустая строка",
      "SQL Server выберет значение сам"
    ],
    correct: 1,
    explanation: "NOT NULL без DEFAULT - ошибка при вставке без этого столбца. Есть DEFAULT - подставится."
  },
  // Wayground #3: DELETE vs TRUNCATE
  {
    topic: "DML. Данные",
    question: "Основное отличие DELETE от TRUNCATE TABLE?",
    options: [
      "DELETE работает только с таблицами, TRUNCATE с представлениями",
      "DELETE удаляет строки по одной и может быть отменён; TRUNCATE удаляет все строки сразу и не может быть отменён",
      "DELETE быстрее и не может быть отменён; TRUNCATE медленнее, но может быть отменён",
      "DELETE удаляет только метаданные таблицы; TRUNCATE удаляет данные и метаданные"
    ],
    correct: 1,
    explanation: "DELETE: построчно, логируется, можно ROLLBACK. TRUNCATE: быстро, минимум лога, по сути нельзя откатить."
  },
  // Wayground #22: INSERT с подзапросом SELECT
  {
    topic: "DML. Данные",
    question: "Можно ли INSERT с подзапросом в части SELECT?",
    options: [
      "Да, но только при отсутствии WHERE",
      "Нет, INSERT допускает только VALUES (...)",
      "Да, например: INSERT INTO NewTable SELECT * FROM OldTable WHERE ...;",
      "Да, но только с оператором UNION ALL"
    ],
    correct: 2,
    explanation: "INSERT INTO ... SELECT - стандартная форма для копирования/массовой вставки данных."
  },

  // ==================== ПОЛЬЗОВАТЕЛЬСКИЕ ФУНКЦИИ ====================
  {
    topic: "Пользовательские функции",
    question: "Вызов скалярной пользовательской функции в SELECT?",
    options: [
      "SELECT function_name(params)",
      "SELECT EXEC function_name(params)",
      "SELECT dbo.function_name(params)",
      "CALL function_name(params)"
    ],
    correct: 2,
    explanation: "Функции вызываются с именем владельца: SELECT dbo.function_name(params)."
  },
  {
    topic: "Пользовательские функции",
    question: "RETURNS для MULTI-STATEMENT табличной функции?",
    options: [
      "RETURNS TABLE",
      "RETURNS @переменная TABLE (определение столбцов)",
      "RETURNS RECORDSET",
      "RETURNS CURSOR"
    ],
    correct: 1,
    explanation: "MULTI-STATEMENT: RETURNS @table_var TABLE (col1 type1, ...). INLINE: просто RETURNS TABLE."
  },
  // Wayground #2: скалярная функция - INSERT в таблицу
  {
    topic: "Пользовательские функции",
    question: "Можно ли в скалярной функции выполнять INSERT в обычную таблицу?",
    options: [
      "Да, но только в tempdb",
      "Да, если есть транзакция",
      "Нет",
      "Можно, если включён NOCOUNT"
    ],
    correct: 2,
    explanation: "Скалярные функции не могут иметь побочных эффектов. INSERT/UPDATE/DELETE в обычные таблицы запрещены."
  },
  // Wayground #13: Inline TVF синтаксис
  {
    topic: "Пользовательские функции",
    question: "Синтаксис объявления Inline-функции, возвращающей таблицу?",
    options: [
      "DEFINE FUNCTION ... RETURN TABLE SELECT ...",
      "CREATE PROCEDURE ... RETURNS TABLE AS SELECT ...",
      "CREATE FUNCTION ... RETURNS TABLE AS RETURN (SELECT ...)",
      "CREATE FUNCTION ... RETURNS INT AS BEGIN ... END"
    ],
    correct: 2,
    explanation: "Inline TVF: CREATE FUNCTION fn() RETURNS TABLE AS RETURN (SELECT ...). Одно выражение в RETURN."
  },
  // Wayground #17: как вернуть значение из функции
  {
    topic: "Пользовательские функции",
    question: "Как вернуть значение из функции?",
    options: [
      "Через PRINT",
      "В скалярной функции через RETURN; в табличной возвращается таблица, определённая в теле функции",
      "Только через SELECT внутри функции",
      "Всегда через OUTPUT-параметр"
    ],
    correct: 1,
    explanation: "Скалярная: RETURN <значение>. Табличная: тело наполняет таблицу-результат."
  },
  // Wayground #19: BEGIN...END в multi-statement TVF
  {
    topic: "Пользовательские функции",
    question: "Блок BEGIN...END в многооператорной табличной функции - обязателен?",
    options: [
      "Нет, запрещено стандартом",
      "Да, это обязательно",
      "Только внутри триггеров",
      "Только при использовании TRY...CATCH"
    ],
    correct: 1,
    explanation: "Multi-statement TVF требует тело BEGIN...END между AS и RETURN."
  },
  // Wayground #27: какая функция возвращает таблицу
  {
    topic: "Пользовательские функции",
    question: "Какая из функций может возвращать табличное значение?",
    options: [
      "Скалярная функция",
      "Многооператорная табличная функция (Multi-statement TVF)",
      "Обе: Multi-statement TVF и Inline TVF",
      "Встраиваемая табличная функция (Inline TVF)"
    ],
    correct: 2,
    explanation: "Обе табличные функции - Multi-statement TVF и Inline TVF - возвращают таблицу. Скалярная - одно значение."
  },

  // ==================== ХРАНИМЫЕ ПРОЦЕДУРЫ ====================
  {
    topic: "Хранимые процедуры",
    question: "Как использовать значение по умолчанию параметра при вызове?",
    options: [
      "Просто не передавать параметр",
      "Передать NULL",
      "Указать ключевое слово DEFAULT",
      "Передать пустую строку"
    ],
    correct: 2,
    explanation: "Для значения по умолчанию: EXEC proc @param = DEFAULT."
  },
  {
    topic: "Хранимые процедуры",
    question: "Ключевое отличие процедуры от функции?",
    options: [
      "Процедуры могут изменять данные в БД; функции нет",
      "Функции могут изменять данные; процедуры нет",
      "Процедуры нельзя вызвать из SELECT",
      "А и В одновременно"
    ],
    correct: 0,
    explanation: "Процедуры: DML (INSERT/UPDATE/DELETE) разрешён. Функции: изменение состояния БД запрещено."
  },
  {
    topic: "Хранимые процедуры",
    question: "Почему нельзя называть процедуры с префиксом sp_?",
    options: [
      "Это просто стиль, технически можно",
      "Префикс sp_ зарезервирован для системных процедур SQL Server",
      "Не поддерживается синтаксисом T-SQL",
      "Только до SQL Server 2016"
    ],
    correct: 1,
    explanation: "sp_ - системные процедуры. SQL Server ищет в master первым, снижается производительность."
  },
  // Wayground #8: OUTPUT-параметр - для чего
  {
    topic: "Хранимые процедуры",
    question: "Для чего используется параметр OUTPUT в хранимой процедуре?",
    options: [
      "Для логирования выполнения процедуры",
      "Для передачи значения в процедуру",
      "Для возврата значения из процедуры во внешний код",
      "Для указания, что параметр является необязательным"
    ],
    correct: 2,
    explanation: "OUTPUT-параметр возвращает значение вызывающему коду после выполнения процедуры."
  },
  // Wayground #11: объявить OUTPUT-параметр в процедуре
  {
    topic: "Хранимые процедуры",
    question: "Как объявить выходной параметр в хранимой процедуре?",
    options: [
      "DECLARE @param OUTPUT",
      "RETURN @param",
      "SET @param OUTPUT",
      "@param DataType OUTPUT в заголовке процедуры"
    ],
    correct: 3,
    explanation: "OUTPUT указывается в сигнатуре процедуры: CREATE PROC p (@x INT OUTPUT) AS ..."
  },
  // Wayground #25: преимущество хранимых процедур
  {
    topic: "Хранимые процедуры",
    question: "Основное преимущество хранимых процедур vs обычные запросы?",
    options: [
      "Они не могут содержать операторы DML",
      "Они не могут принимать параметры",
      "Они всегда возвращают табличные значения",
      "Компилируются один раз и хранятся в кеше, что повышает производительность"
    ],
    correct: 3,
    explanation: "Кеширование плана выполнения: процедура компилируется при первом вызове, потом план переиспользуется."
  },

  // ==================== ТРИГГЕРЫ ====================
  {
    topic: "Триггеры",
    question: "Виртуальная таблица с новыми значениями строк внутри триггера?",
    options: ["UPDATED", "NEW", "MODIFIED", "INSERTED"],
    correct: 3,
    explanation: "MS SQL Server: INSERTED (новые значения) и DELETED (старые)."
  },
  {
    topic: "Триггеры",
    question: "Виртуальные таблицы в триггере UPDATE?",
    options: [
      "Только INSERTED",
      "Только DELETED",
      "INSERTED (новые) и DELETED (старые)",
      "UPDATED и ORIGINAL"
    ],
    correct: 2,
    explanation: "UPDATE в триггере: INSERTED - новые данные, DELETED - старые."
  },
  {
    topic: "Триггеры",
    question: "Как отключить триггер без удаления?",
    options: [
      "DROP TRIGGER trigger_name",
      "PAUSE TRIGGER trigger_name ON table_name",
      "DISABLE TRIGGER trigger_name ON table_name",
      "SET TRIGGER trigger_name INACTIVE"
    ],
    correct: 2,
    explanation: "DISABLE TRIGGER - отключить. ENABLE TRIGGER - включить. DROP - удалить навсегда."
  },
  // Wayground #4: где создаётся триггер
  {
    topic: "Триггеры",
    question: "Где создаётся (определяется) триггер?",
    options: [
      "Внутри хранимой процедуры",
      "Внутри пользовательской функции",
      "Как отдельный объект, привязанный к таблице или представлению",
      "В системном реестре SQL Server"
    ],
    correct: 2,
    explanation: "Триггер - отдельный объект схемы, привязывается к таблице/View через CREATE TRIGGER ... ON table."
  },
  // Wayground #7: INSTEAD OF триггер
  {
    topic: "Триггеры",
    question: "Что означает INSTEAD OF триггер?",
    options: [
      "Он выполняется после основной операции",
      "Он выполняется вместо основной операции (INSERT/UPDATE/DELETE)",
      "Он срабатывает только при возникновении ошибки",
      "Он выполняется до операции, но не отменяет её"
    ],
    correct: 1,
    explanation: "INSTEAD OF подменяет операцию: исходный INSERT/UPDATE/DELETE не выполняется, выполняется тело триггера."
  },
  // Wayground #15: AFTER-триггер - когда срабатывает
  {
    topic: "Триггеры",
    question: "Какой тип триггера срабатывает после выполнения операции DML?",
    options: ["ON триггер", "INSTEAD OF триггер", "BEFORE триггер", "AFTER триггер"],
    correct: 3,
    explanation: "AFTER (или FOR) выполняется после успешного DML. INSTEAD OF подменяет операцию."
  },

  // ==================== ПРЕДСТАВЛЕНИЯ (Views) ====================
  {
    topic: "Представления (Views)",
    question: "Что такое VIEW в MS SQL Server?",
    options: [
      "Физическая копия данных таблицы",
      "Виртуальная таблица, содержимое которой определяется запросом SELECT",
      "Индексированная выборка для ускорения запросов",
      "Хранимая процедура без параметров"
    ],
    correct: 1,
    explanation: "VIEW - виртуальная таблица на основе SELECT. Данные не хранятся, вычисляются при обращении."
  },
  {
    topic: "Представления (Views)",
    question: "ORDER BY в определении VIEW без TOP - можно?",
    options: [
      "Да, всегда",
      "Нет, SELECT в VIEW не может включать ORDER BY без TOP",
      "Только в индексированных VIEW",
      "Только с WITH SCHEMABINDING"
    ],
    correct: 1,
    explanation: "ORDER BY в VIEW запрещён без TOP в списке выбора."
  },
  // Wayground #9: View на основе другого View
  {
    topic: "Представления (Views)",
    question: "Можно ли создать представление на основе другого представления?",
    options: [
      "Нет, это запрещено",
      "Можно только в tempdb",
      "Да",
      "Только если исходное представление пустое"
    ],
    correct: 2,
    explanation: "View можно строить поверх другого View (вложенные представления). Глубина ограничена 32 уровнями."
  },
  // Wayground #23: утверждение о представлениях
  {
    topic: "Представления (Views)",
    question: "Какое утверждение о представлениях верно?",
    options: [
      "Представления не могут содержать ORDER BY",
      "Представления могут использоваться для ограничения доступа к столбцам или строкам базовых таблиц",
      "Представления всегда могут быть обновлены (INSERT, UPDATE, DELETE)",
      "Представления всегда хранят свои собственные данные"
    ],
    correct: 1,
    explanation: "View - инструмент управления доступом: показывает только нужные столбцы/строки. Своих данных не хранит."
  },

  // ==================== ТРАНЗАКЦИИ ====================
  {
    topic: "Транзакции",
    question: "Расшифровка ACID?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Availability, Consistency, Integrity, Durability",
      "Atomicity, Concurrency, Isolation, Data",
      "Access, Control, Integrity, Durability"
    ],
    correct: 0,
    explanation: "ACID: Atomicity, Consistency, Isolation, Durability - четыре свойства транзакций."
  },
  {
    topic: "Транзакции",
    question: "Команда фиксации транзакции?",
    options: ["END TRANSACTION", "SAVE TRANSACTION", "COMMIT", "APPLY"],
    correct: 2,
    explanation: "COMMIT TRANSACTION (COMMIT) - фиксирует изменения. ROLLBACK - отменяет."
  },
  {
    topic: "Транзакции",
    question: "Что делает ROLLBACK?",
    options: [
      "Фиксирует частичные изменения",
      "Отменяет все изменения транзакции, восстанавливает исходное состояние",
      "Переносит транзакцию в очередь",
      "Сохраняет точку восстановления"
    ],
    correct: 1,
    explanation: "ROLLBACK отменяет все изменения транзакции, возвращая данные в исходное состояние."
  },
  {
    topic: "Транзакции",
    question: "Как начать явную транзакцию в T-SQL?",
    options: [
      "START TRANSACTION",
      "OPEN TRANSACTION",
      "BEGIN TRANSACTION",
      "INIT TRANSACTION"
    ],
    correct: 2,
    explanation: "BEGIN TRANSACTION (BEGIN TRAN). START TRANSACTION - MySQL."
  },
  {
    topic: "Транзакции",
    question: "Что такое точка сохранения (SAVEPOINT)?",
    options: [
      "Команда фиксации части транзакции",
      "Промежуточная точка: откат без отмены всей транзакции",
      "Автоматическая резервная копия",
      "Вложенная транзакция"
    ],
    correct: 1,
    explanation: "SAVE TRANSACTION savepoint_name. ROLLBACK TO savepoint_name - откат только до этой точки."
  },
  {
    topic: "Транзакции",
    question: "Свойство Isolation (изоляция) означает?",
    options: [
      "Транзакция не может быть прервана",
      "Транзакции не видят промежуточных результатов друг друга",
      "Данные сохраняются навсегда",
      "Транзакция выполняется полностью или не выполняется"
    ],
    correct: 1,
    explanation: "Isolation: промежуточные результаты транзакции не видны другим до её фиксации."
  },

  // ==================== КУРСОРЫ ====================
  {
    topic: "Курсоры",
    question: "Правильный порядок работы с курсором?",
    options: [
      "OPEN, DECLARE, FETCH, CLOSE, DEALLOCATE",
      "DECLARE, OPEN, FETCH, CLOSE, DEALLOCATE",
      "DECLARE, FETCH, OPEN, CLOSE, DEALLOCATE",
      "OPEN, FETCH, DECLARE, DEALLOCATE, CLOSE"
    ],
    correct: 1,
    explanation: "DECLARE, OPEN, FETCH, CLOSE, DEALLOCATE."
  },
  {
    topic: "Курсоры",
    question: "@@FETCH_STATUS = 0 означает?",
    options: [
      "Курсор обошёл все строки",
      "FETCH выполнен успешно",
      "Курсор пустой",
      "Ошибка выборки"
    ],
    correct: 1,
    explanation: "@@FETCH_STATUS = 0: FETCH выполнен успешно. Используется как условие WHILE."
  },
  {
    topic: "Курсоры",
    question: "Какой тип курсора поддерживает FETCH PRIOR (назад)?",
    options: [
      "FORWARD_ONLY",
      "Любой по умолчанию",
      "SCROLL",
      "STATIC"
    ],
    correct: 2,
    explanation: "FETCH PRIOR/FIRST/LAST - только курсоры с SCROLL. FORWARD_ONLY - только FETCH NEXT."
  },
  {
    topic: "Курсоры",
    question: "Что делает DEALLOCATE cursor_name?",
    options: [
      "Закрывает курсор, освобождает результирующий набор",
      "Удаляет связь курсора с переменной, освобождает структуры данных",
      "Переводит курсор в начало",
      "Сохраняет состояние курсора"
    ],
    correct: 1,
    explanation: "DEALLOCATE: удаляет связь курсора с переменной. Имя можно использовать повторно."
  },

  // ==================== ОКОННЫЕ ФУНКЦИИ ====================
  {
    topic: "Оконные функции",
    question: "ROW_NUMBER() OVER(ORDER BY col) делает?",
    options: [
      "Ранг с пропусками при одинаковых значениях",
      "Последовательный номер каждой строки с 1",
      "Распределяет строки по группам",
      "Ранг без пропусков при одинаковых"
    ],
    correct: 1,
    explanation: "ROW_NUMBER(): 1, 2, 3... При одинаковых ORDER BY порядок не определён (в отличие от RANK)."
  },
  {
    topic: "Оконные функции",
    question: "Разница RANK() и DENSE_RANK()?",
    options: [
      "RANK работает без ORDER BY, DENSE_RANK требует",
      "RANK оставляет пропуски при совпадающих рангах, DENSE_RANK нет",
      "DENSE_RANK не поддерживает PARTITION BY",
      "Синонимы"
    ],
    correct: 1,
    explanation: "RANK: 1,1,3... DENSE_RANK: 1,1,2... Пропуски только у RANK."
  },
  {
    topic: "Оконные функции",
    question: "PARTITION BY в оконных функциях делает?",
    options: [
      "Сортирует строки внутри окна",
      "Разделяет результат на секции, функция применяется к каждой отдельно",
      "Ограничивает число строк в окне",
      "Фильтрует как WHERE"
    ],
    correct: 1,
    explanation: "PARTITION BY: секции как GROUP BY, но без свёртки строк."
  },
  {
    topic: "Оконные функции",
    question: "LAG(col) OVER(ORDER BY col) возвращает?",
    options: [
      "Значение следующей строки",
      "Значение из предыдущей строки в порядке сортировки",
      "Первое значение в секции",
      "Среднее предыдущих строк"
    ],
    correct: 1,
    explanation: "LAG() - предыдущая строка. LEAD() - следующая. Смещение по умолчанию: 1."
  }
];
