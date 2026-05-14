const QUESTIONS = [
  // ==================== T-SQL. ОСНОВЫ (10 вопросов) ====================
  {
    topic: "T-SQL. Основы",
    question: "Свойство автоинкремента столбца в MS SQL Server?",
    options: ["AUTO_INCREMENT", "SERIAL", "IDENTITY", "AUTOINC"],
    correct: 2,
    explanation: "IDENTITY(seed, increment). AUTO_INCREMENT - MySQL, SERIAL - PostgreSQL."
  },
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
    question: "Команда изменения данных в существующих строках?",
    options: ["ALTER ROW", "MODIFY", "UPDATE", "CHANGE"],
    correct: 2,
    explanation: "UPDATE меняет данные. ALTER меняет структуру объектов."
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
    question: "Можно ли вкладывать циклы WHILE друг в друга?",
    options: [
      "Да, без ограничений",
      "Нет, нельзя",
      "Только с SELECT внутри",
      "Только два уровня вложенности"
    ],
    correct: 0,
    explanation: "Вложенность WHILE в T-SQL разрешена, ограничений на уровень нет."
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
    explanation: "SELECT @var = column - корректный способ. Альтернатива: SET @var = value."
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
  {
    topic: "T-SQL. Основы",
    question: "Объявление двух переменных одним DECLARE?",
    options: [
      "DECLARE @a INT; DECLARE @b INT",
      "DECLARE @a INT, @b INT",
      "DECLARE @a INT AND @b INT",
      "VAR @a INT, @b INT"
    ],
    correct: 1,
    explanation: "DECLARE @a INT, @b INT - несколько переменных через запятую."
  },
  {
    topic: "T-SQL. Основы",
    question: "Значение переменной сразу после DECLARE без инициализации?",
    options: ["0", "NULL", "Пустая строка", "Undefined"],
    correct: 1,
    explanation: "Неинициализированные переменные имеют значение NULL."
  },

  // ==================== ОГРАНИЧЕНИЯ (8 вопросов) ====================
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

  // ==================== ТИПЫ ДАННЫХ И ФУНКЦИИ (18 вопросов) ====================
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
    question: "Что возвращает скалярная пользовательская функция?",
    options: [
      "Несколько строк",
      "Одно значение",
      "Таблицу",
      "Только NULL"
    ],
    correct: 1,
    explanation: "Скалярная функция - одно значение. Таблицу возвращает табличная функция."
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

  // ==================== SELECT / WHERE / ФИЛЬТРАЦИЯ (10 вопросов) ====================
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

  // ==================== АГРЕГАТЫ, GROUP BY, HAVING (10 вопросов) ====================
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

  // ==================== JOIN (12 вопросов) ====================
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

  // ==================== UNION / EXCEPT / INTERSECT (6 вопросов) ====================
  {
    topic: "Запросы. UNION/EXCEPT/INTERSECT",
    question: "Оператор для общих строк из двух запросов?",
    options: ["CROSS JOIN", "UNION", "EXCEPT", "INTERSECT"],
    correct: 3,
    explanation: "INTERSECT - пересечение. EXCEPT - разность. UNION - объединение."
  },
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

  // ==================== ПОДЗАПРОСЫ (10 вопросов) ====================
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
    question: "Что проверяет EXISTS?",
    options: [
      "Что подзапрос вернул хотя бы одну строку",
      "Что подзапрос вернул ровно одно значение",
      "Что столбец не NULL",
      "Что таблица существует в БД"
    ],
    correct: 0,
    explanation: "EXISTS: проверяет, вернул ли подзапрос хотя бы одну строку."
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
  {
    topic: "Запросы. SELECT/JOIN",
    question: "x > ALL(SELECT ...) истинно, когда...",
    options: [
      "x больше хотя бы одного значения из подзапроса",
      "x больше всех значений из подзапроса",
      "Выбирает все строки без фильтрации",
      "Эквивалентен IN"
    ],
    correct: 1,
    explanation: "ALL: условие верно для ВСЕХ значений. x > ALL(...) - x больше каждого из набора."
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

  // ==================== DDL (8 вопросов) ====================
  {
    topic: "DDL. Удаление объектов",
    question: "Синтаксис удаления пользовательской функции?",
    options: [
      "DROP TABLE function_name",
      "DELETE FUNCTION function_name",
      "REMOVE FUNCTION function_name",
      "DROP FUNCTION function_name"
    ],
    correct: 3,
    explanation: "DROP FUNCTION fn_name. DROP TABLE - для таблиц."
  },
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
    question: "Столбец-автоинкремент в MS SQL Server?",
    options: [
      "id INT AUTO_INCREMENT PRIMARY KEY",
      "id INT SERIAL PRIMARY KEY",
      "id INT PRIMARY KEY IDENTITY(1,1)",
      "id INT PRIMARY KEY SEQUENCE"
    ],
    correct: 2,
    explanation: "IDENTITY(seed, increment). IDENTITY(1,1): с 1, шаг 1. AUTO_INCREMENT - MySQL, SERIAL - PostgreSQL."
  },
  {
    topic: "DDL. Удаление объектов",
    question: "Сколько таблиц в одной БД MS SQL Server?",
    options: ["65536", "1000000", "2147483648", "Без ограничений"],
    correct: 2,
    explanation: "До 2147483648 таблиц. Стандартная таблица: до 1024 столбцов."
  },
  {
    topic: "DDL. Удаление объектов",
    question: "Максимум символов в имени таблицы MS SQL Server?",
    options: ["64", "128", "256", "512"],
    correct: 1,
    explanation: "Имя таблицы/БД: до 128 символов. Локальные временные таблицы: до 116."
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

  // ==================== DML (6 вопросов) ====================
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
    question: "Отличие TRUNCATE TABLE от DELETE без WHERE?",
    options: [
      "TRUNCATE удаляет только первые 100 строк",
      "TRUNCATE быстрее и требует меньше ресурсов журнала транзакций",
      "DELETE быстрее, не сбрасывает счётчик IDENTITY",
      "TRUNCATE можно откатить, DELETE нельзя"
    ],
    correct: 1,
    explanation: "TRUNCATE быстрее, меньше ресурсов журнала, сбрасывает счётчик IDENTITY."
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
    question: "Обязательно ли FROM в DELETE FROM T WHERE ...?",
    options: [
      "Да, FROM обязательно",
      "Нет, DELETE T WHERE ... тоже корректно",
      "FROM только при JOIN",
      "FROM только для временных таблиц"
    ],
    correct: 1,
    explanation: "FROM в DELETE необязателен. DELETE FROM T и DELETE T - оба варианта корректны."
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

  // ==================== ПОЛЬЗОВАТЕЛЬСКИЕ ФУНКЦИИ (6 вопросов) ====================
  {
    topic: "Пользовательские функции",
    question: "Максимум параметров у пользовательской функции T-SQL?",
    options: ["100", "1000", "2100", "4096"],
    correct: 2,
    explanation: "Пользовательские функции: до 2100 параметров."
  },
  {
    topic: "Пользовательские функции",
    question: "Могут ли функции выполнять INSERT/UPDATE/DELETE?",
    options: [
      "Да, без ограничений",
      "Да, только во временных таблицах",
      "Нет, функции не могут изменять состояние БД",
      "Только скалярные функции"
    ],
    correct: 2,
    explanation: "Пользовательские функции не могут выполнять DML-операции."
  },
  {
    topic: "Пользовательские функции",
    question: "Временные таблицы внутри пользовательских функций?",
    options: [
      "Да, без ограничений",
      "Нет, временные таблицы запрещены; табличные переменные разрешены",
      "Только локальные (#)",
      "Только глобальные (##)"
    ],
    correct: 1,
    explanation: "Временные таблицы в функциях запрещены. Табличные переменные (@var TABLE) - разрешены."
  },
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
  {
    topic: "Пользовательские функции",
    question: "Максимальный уровень вложенности функций?",
    options: ["8", "16", "32", "64"],
    correct: 2,
    explanation: "Вложенность функций: до 32 уровней."
  },

  // ==================== ХРАНИМЫЕ ПРОЦЕДУРЫ (6 вопросов) ====================
  {
    topic: "Хранимые процедуры",
    question: "Как запустить хранимую процедуру?",
    options: [
      "RUN procedure_name",
      "CALL procedure_name",
      "EXECUTE procedure_name (или EXEC)",
      "START procedure_name"
    ],
    correct: 2,
    explanation: "EXECUTE (EXEC) запускает процедуру. Без EXEC - только если первая инструкция в пакете."
  },
  {
    topic: "Хранимые процедуры",
    question: "Как передать OUTPUT-параметр при вызове процедуры?",
    options: [
      "EXEC proc_name @param = @var",
      "EXEC proc_name @var OUT",
      "EXEC proc_name @param = @var OUTPUT",
      "EXEC proc_name RETURN @var"
    ],
    correct: 2,
    explanation: "Для выходных параметров: EXEC proc @param = @var OUTPUT."
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
    question: "Максимум параметров в хранимой процедуре?",
    options: ["100", "1000", "2100", "Без ограничений"],
    correct: 2,
    explanation: "Хранимая процедура: до 2100 параметров."
  },

  // ==================== ТРИГГЕРЫ (6 вопросов) ====================
  {
    topic: "Триггеры",
    question: "Виртуальная таблица с новыми значениями строк внутри триггера?",
    options: ["UPDATED", "NEW", "MODIFIED", "INSERTED"],
    correct: 3,
    explanation: "MS SQL Server: INSERTED (новые значения) и DELETED (старые)."
  },
  {
    topic: "Триггеры",
    question: "Несколько триггеров на одно событие одной таблицы - можно?",
    options: [
      "Нет, только один на событие",
      "Только два",
      "Да, можно несколько AFTER-триггеров",
      "Только с FOR EACH ROW"
    ],
    correct: 2,
    explanation: "Несколько AFTER-триггеров на одно событие - можно. INSTEAD OF - только один."
  },
  {
    topic: "Триггеры",
    question: "Активирует ли TRUNCATE TABLE триггер DELETE?",
    options: [
      "Да, всегда",
      "Только если помечен как TRUNCATE-safe",
      "Нет, TRUNCATE не активирует триггер",
      "Только AFTER-триггеры"
    ],
    correct: 2,
    explanation: "TRUNCATE TABLE не активирует триггер DELETE."
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
    question: "Отличие AFTER-триггера от INSTEAD OF?",
    options: [
      "AFTER до операции, INSTEAD OF после",
      "AFTER после успешной операции, INSTEAD OF вместо неё",
      "INSTEAD OF быстрее AFTER",
      "AFTER для VIEW, INSTEAD OF только для таблиц"
    ],
    correct: 1,
    explanation: "AFTER (FOR) - после успешной операции. INSTEAD OF - вместо неё, переопределяет поведение."
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

  // ==================== ПРЕДСТАВЛЕНИЯ (4 вопроса) ====================
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
  {
    topic: "Представления (Views)",
    question: "Максимум столбцов в представлении?",
    options: ["256", "512", "1024", "2048"],
    correct: 2,
    explanation: "VIEW: до 1024 столбцов."
  },
  {
    topic: "Представления (Views)",
    question: "Максимальный уровень вложенности VIEW на основе VIEW?",
    options: ["8", "16", "32", "64"],
    correct: 2,
    explanation: "Вложенность VIEW: до 32 уровней."
  },

  // ==================== ТРАНЗАКЦИИ (6 вопросов) ====================
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

  // ==================== КУРСОРЫ (4 вопроса) ====================
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

  // ==================== ОКОННЫЕ ФУНКЦИИ (4 вопроса) ====================
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
  },

  // ==================== ВОПРОСЫ ИЗ РЕАЛЬНОГО ТЕСТА WAYGROUND (28 шт) ====================
  // Эти вопросы вытащены из Wayground-теста преподавателя.
  // Помечены префиксом "🎯" в topic для фильтрации.
  {
    topic: "🎯 Тест",
    question: "Какой оператор цикла используется в T-SQL?",
    options: ["LOOP", "FOR EACH", "REPEAT...UNTIL", "WHILE"],
    correct: 3,
    explanation: "В T-SQL единственный цикл: WHILE. LOOP/FOR EACH/REPEAT - другие СУБД."
  },
  {
    topic: "🎯 Тест",
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
  {
    topic: "🎯 Тест",
    question: "В чем основное отличие между командами DELETE и TRUNCATE TABLE?",
    options: [
      "DELETE работает только с таблицами, TRUNCATE с представлениями.",
      "DELETE удаляет строки по одной и может быть отменен; TRUNCATE удаляет все строки сразу и не может быть отменен.",
      "DELETE быстрее и не может быть отменен; TRUNCATE медленнее, но может быть отменен.",
      "DELETE удаляет только метаданные таблицы; TRUNCATE удаляет данные и метаданные."
    ],
    correct: 1,
    explanation: "DELETE: построчно, логируется, можно ROLLBACK. TRUNCATE: быстро, минимум лога, по сути нельзя откатить."
  },
  {
    topic: "🎯 Тест",
    question: "Где создаётся (определяется) триггер?",
    options: [
      "Внутри хранимой процедуры.",
      "Внутри пользовательской функции.",
      "Как отдельный объект, привязанный к таблице или представлению.",
      "В системном реестре SQL Server."
    ],
    correct: 2,
    explanation: "Триггер - отдельный объект схемы, привязывается к таблице/View через CREATE TRIGGER ... ON table."
  },
  {
    topic: "🎯 Тест",
    question: "Для чего используется свойство IDENTITY в столбце таблицы?",
    options: [
      "Для указания, что столбец является первичным ключом.",
      "Для автоматического присвоения уникальных строковых значений.",
      "Для шифрования данных в столбце.",
      "Для автоматического присвоения возрастающих числовых значений."
    ],
    correct: 3,
    explanation: "IDENTITY(seed, increment) - автоматический автоинкремент целочисленных значений."
  },
  {
    topic: "🎯 Тест",
    question: "Какое свойство SQL Server задают для автоматического создания автоинкрементных значений в столбце?",
    options: ["IDENTITY", "AUTO_NUMBER", "SEQUENCE", "SERIAL"],
    correct: 0,
    explanation: "IDENTITY - MS SQL Server. AUTO_NUMBER не существует, SEQUENCE - отдельный объект, SERIAL - PostgreSQL."
  },
  {
    topic: "🎯 Тест",
    question: "Что означает INSTEAD OF триггер?",
    options: [
      "Он выполняется после основной операции.",
      "Он выполняется вместо основной операции (INSERT/UPDATE/DELETE).",
      "Он срабатывает только при возникновении ошибки.",
      "Он выполняется до основной операции, но не отменяет её."
    ],
    correct: 1,
    explanation: "INSTEAD OF подменяет операцию: исходный INSERT/UPDATE/DELETE не выполняется, выполняется тело триггера."
  },
  {
    topic: "🎯 Тест",
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
  {
    topic: "🎯 Тест",
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
  {
    topic: "🎯 Тест",
    question: "Какой синтаксис UPDATE является корректным?",
    options: [
      "UPDATE таблица SET столбец = значение WHERE условие",
      "UPDATE таблица (столбец = значение)",
      "UPDATE таблица WHERE условие SET столбец = значение",
      "UPDATE SET столбец = значение FROM таблица WHERE условие отсутствует"
    ],
    correct: 0,
    explanation: "Стандарт: UPDATE <таблица> SET <столбец> = <значение> [WHERE <условие>]."
  },
  {
    topic: "🎯 Тест",
    question: "Как правильно объявить выходной параметр в хранимой процедуре?",
    options: [
      "DECLARE @param OUTPUT",
      "RETURN @param",
      "SET @param OUTPUT",
      "@param DataType OUTPUT в заголовке процедуры."
    ],
    correct: 3,
    explanation: "OUTPUT указывается в сигнатуре процедуры: CREATE PROC p (@x INT OUTPUT) AS ..."
  },
  {
    topic: "🎯 Тест",
    question: "Условие вида Salary > ALL (subquery). Что означает > ALL?",
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
    topic: "🎯 Тест",
    question: "Каков общий синтаксис объявления INLINE-функции, возвращающей таблицу?",
    options: [
      "DEFINE FUNCTION ... RETURN TABLE SELECT ...",
      "CREATE PROCEDURE ... RETURNS TABLE AS SELECT ...",
      "CREATE FUNCTION ... RETURNS TABLE AS RETURN (SELECT ...)",
      "CREATE FUNCTION ... RETURNS INT AS BEGIN ... END"
    ],
    correct: 2,
    explanation: "Inline TVF: CREATE FUNCTION fn() RETURNS TABLE AS RETURN (SELECT ...). Одно выражение в RETURN."
  },
  {
    topic: "🎯 Тест",
    question: "Какой оператор используется для выхода из цикла WHILE до его естественного завершения?",
    options: ["EXIT", "STOP", "RETURN", "BREAK"],
    correct: 3,
    explanation: "BREAK прерывает WHILE. CONTINUE переходит к следующей итерации."
  },
  {
    topic: "🎯 Тест",
    question: "Какой тип триггера срабатывает после выполнения операции DML?",
    options: ["ON триггер", "INSTEAD OF триггер", "BEFORE триггер", "AFTER триггер"],
    correct: 3,
    explanation: "AFTER (или эквивалент FOR) выполняется после успешного DML. INSTEAD OF подменяет операцию."
  },
  {
    topic: "🎯 Тест",
    question: "Каков корректный синтаксис удаления таблицы с именем Employees?",
    options: [
      "TRUNCATE Employees;",
      "DELETE TABLE Employees;",
      "DROP TABLE Employees;",
      "REMOVE TABLE Employees;"
    ],
    correct: 2,
    explanation: "DROP TABLE удаляет таблицу полностью со всеми данными и структурой. TRUNCATE удаляет только строки."
  },
  {
    topic: "🎯 Тест",
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
  {
    topic: "🎯 Тест",
    question: "Какой оператор лучше подходит для проверки существования строк?",
    options: ["EXISTS", "COUNT(*)", "IN", "DISTINCT"],
    correct: 0,
    explanation: "EXISTS останавливается на первой найденной строке - быстрее, чем COUNT(*) > 0."
  },
  {
    topic: "🎯 Тест",
    question: "Можно ли использовать блок BEGIN ... END в многооператорной табличной функции (MULTI-STATEMENT)?",
    options: [
      "Нет, запрещено стандартом",
      "Да, это обязательно",
      "Только внутри триггеров",
      "Только при использовании TRY ... CATCH"
    ],
    correct: 1,
    explanation: "Multi-statement TVF требует тело BEGIN...END между AS и RETURN."
  },
  {
    topic: "🎯 Тест",
    question: "Как объявить переменную в T-SQL?",
    options: [
      "DECLARE @myVariable INT;",
      "VAR myVar INT;",
      "LET @myVariable AS INT;",
      "SET VARIABLE @myVariable INT;"
    ],
    correct: 0,
    explanation: "DECLARE @name TYPE [= value]. Затем SET или SELECT для присваивания."
  },
  {
    topic: "🎯 Тест",
    question: "Можно ли удалить функцию или процедуру из базы данных без использования команды DROP?",
    options: [
      "Да, если она не используется в других запросах.",
      "Да, через команду DELETE в системных таблицах.",
      "Нет, для удаления объектов схемы всегда используется DROP.",
      "Да, просто очистив её код через ALTER."
    ],
    correct: 2,
    explanation: "Объекты схемы (функции, процедуры, таблицы, представления) удаляются только через DROP."
  },
  {
    topic: "🎯 Тест",
    question: "Можно ли использовать INSERT с подзапросом в части SELECT?",
    options: [
      "Да, но только при отсутствии WHERE",
      "Нет, INSERT допускает только VALUES (...);",
      "Да, например: INSERT INTO NewTable SELECT * FROM OldTable WHERE ...;",
      "Да, но только с оператором UNION ALL"
    ],
    correct: 2,
    explanation: "INSERT INTO ... SELECT - стандартная форма для копирования/массовой вставки данных из другого запроса."
  },
  {
    topic: "🎯 Тест",
    question: "Какое из утверждений о представлениях верно?",
    options: [
      "Представления не могут содержать ORDER BY",
      "Представления могут использоваться для ограничения доступа к столбцам или строкам базовых таблиц",
      "Представления всегда могут быть обновлены (INSERT, UPDATE, DELETE)",
      "Представления всегда хранят свои собственные данные"
    ],
    correct: 1,
    explanation: "View - инструмент управления доступом: можно показать только нужные столбцы/строки. Своих данных не хранит."
  },
  {
    topic: "🎯 Тест",
    question: "Где физически хранятся временные таблицы?",
    options: [
      "В базе master",
      "В памяти сервера и не на диске",
      "В системной базе tempdb",
      "В пользовательской базе, где они созданы"
    ],
    correct: 2,
    explanation: "Все временные таблицы (#temp и ##global) физически живут в tempdb."
  },
  {
    topic: "🎯 Тест",
    question: "В чём одно из основных преимуществ хранимых процедур по сравнению с обычными SQL-запросами?",
    options: [
      "Они не могут содержать операторы DML",
      "Они не могут принимать параметры",
      "Они всегда возвращают табличные значения",
      "Они компилируются один раз и хранятся в кеше, что повышает производительность при повторных вызовах"
    ],
    correct: 3,
    explanation: "Кеширование плана выполнения: процедура компилируется при первом вызове, потом план переиспользуется."
  },
  {
    topic: "🎯 Тест",
    question: "Какой командой изменяют структуру существующей таблицы?",
    options: ["UPDATE TABLE", "ALTER TABLE", "CHANGE TABLE", "MODIFY TABLE"],
    correct: 1,
    explanation: "ALTER TABLE - изменение структуры (ADD/DROP/ALTER COLUMN). UPDATE меняет данные."
  },
  {
    topic: "🎯 Тест",
    question: "Какая из следующих функций может возвращать табличное значение?",
    options: [
      "Скалярная функция",
      "Многооператорная табличная функция (Multi-statement Table-Valued Function)",
      "Б и В",
      "Встраиваемая табличная функция (Inline Table-Valued Function)"
    ],
    correct: 2,
    explanation: "Обе табличные функции - Multi-statement TVF и Inline TVF - возвращают таблицу. Скалярная возвращает одно значение."
  },
  {
    topic: "🎯 Тест",
    question: "Какой оператор применяется для пересечения множеств результатов двух запросов?",
    options: ["INNER APPLY", "EXCEPT", "INTERSECT", "CROSS JOIN"],
    correct: 2,
    explanation: "INTERSECT - пересечение (общие строки). EXCEPT - разность. UNION - объединение."
  }
];
