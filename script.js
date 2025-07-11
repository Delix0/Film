const movies = [
    {
        "title": "Бешеные псы",
        "genre": "криминал",
        "year": 1992,
        "yearRange": "1990-е",
        "duration": "средние",
        "rating": 8.3,
        "language": "английский",
        "description": "Бешеные псы — криминальный фильм, снятый Квентином Тарантино в 1992 году. История о группе грабителей, чей план ограбления ювелирного магазина рушится, приводя к хаосу, предательству и напряжённым конфликтам.",
        "director": "Квентин Тарантино",
        "related": [
            "Криминальное чтиво",
            "Убить Билла",
            "Омерзительная восьмёрка"
        ]
    },
    {
        "title": "Крестный отец",
        "genre": "драма",
        "year": 1972,
        "yearRange": "1970-е",
        "duration": "длинные",
        "rating": 9.2,
        "language": "английский",
        "description": "Крестный отец — эпическая криминальная драма 1972 года, снятая Фрэнсисом Фордом Копполой. Фильм рассказывает о жизни мафиозной семьи Корлеоне, их борьбе за власть и моральных дилеммах.",
        "director": "Фрэнсис Форд Коппола",
        "related": [
            "Крест ­­­Крестный отец 2",
            "Лицо со шрамом",
            "Славные парни"
        ]
    },
    {
        "title": "Апокалипсис сегодня",
        "genre": "драма",
        "year": 1979,
        "yearRange": "1970-е",
        "duration": "длинные",
        "rating": 8.5,
        "language": "английский",
        "description": "Апокалипсис сегодня — военная драма 1979 года, снятая Фрэнсисом Фордом Копполой. Фильм рассказывает о путешествии капитана Уилларда по реке во Вьетнаме в поисках загадочного полковника Куртца.",
        "director": "Фрэнсис Форд Коппола",
        "related": [
            "Крестный отец",
            "Взвод",
            "Охотник на оленей"
        ]
    },
    {
        "title": "Список Шиндлера",
        "genre": "драма",
        "year": 1993,
        "yearRange": "1990-е",
        "duration": "длинные",
        "rating": 8.9,
        "language": "английский",
        "description": "Список Шиндлера — историческая драма 1993 года, снятая Стивеном Спилбергом. Фильм рассказывает о жизни Оскара Шиндлера, который спас более тысячи евреев во время Холокоста.",
        "director": "Стивен Спилберг",
        "related": [
            "Пианист",
            "Жизнь прекрасна",
            "Мальчик в полосатой пижаме"
        ]
    },
    {
        "title": "Начало",
        "genre": "фантастика",
        "year": 2010,
        "yearRange": "2010-е",
        "duration": "длинные",
        "rating": 8.8,
        "language": "английский",
        "description": "Начало — фантастический триллер 2010 года, снятый Кристофером Ноланом. История о воре, способном проникать в сны и красть секреты, который получает задание внедрить идею в разум человека.",
        "director": "Кристофер Нолан",
        "related": [
            "Темный рыцарь",
            "Престиж",
            "Интерстеллар"
        ]
    },
    {
        "title": "Зелёная миля",
        "genre": "драма",
        "year": 1999,
        "yearRange": "1990-е",
        "duration": "длинные",
        "rating": 8.6,
        "language": "английский",
        "description": "Зелёная миля — драма с элементами фэнтези 1999 года, снятая Фрэнком Дарабонтом. Фильм рассказывает о тюремном охраннике, который сталкивается с заключённым, обладающим сверхъестественными способностями.",
        "director": "Фрэнк Дарабонт",
        "related": [
            "Побег из Шоушенка",
            "Форрест Гамп",
            "Список Шиндлера"
        ]
    },
    {
        "title": "В джазе только девушки",
        "genre": "комедия",
        "year": 1959,
        "yearRange": "1950-е",
        "duration": "средние",
        "rating": 8.2,
        "language": "английский",
        "description": "В джазе только девушки — комедия 1959 года, снятая Билли Уайлдером. Два музыканта, ставшие свидетелями преступления, переодеваются в женщин и присоединяются к женскому оркестру, что приводит к комическим ситуациям.",
        "director": "Билли Уайлдер",
        "related": [
            "Квартира",
            "Сансет Бульвар",
            "Двойная страховка"
        ]
    },
    {
        "title": "Социальная сеть",
        "genre": "драма",
        "year": 2010,
        "yearRange": "2010-е",
        "duration": "средние",
        "rating": 7.7,
        "language": "английский",
        "description": "Социальная сеть — драма 2010 года, снятая Дэвидом Финчером. Фильм рассказывает о создании Facebook Марком Цукербергом и последующих юридических и личных конфликтах.",
        "director": "Дэвид Финчер",
        "related": [
            "Бойцовский клуб",
            "Зодиак",
            "Девушка с татуировкой дракона"
        ]
    },
    {
        "title": "Криминальное чтиво",
        "genre": "криминал",
        "year": 1994,
        "yearRange": "1990-е",
        "duration": "длинные",
        "rating": 8.9,
        "language": "английский",
        "description": "Криминальное чтиво — культовый криминальный фильм 1994 года, снятый Квентином Тарантино. Фильм переплетает несколько историй о гангстерах, боксёрах и криминальном мире Лос-Анджелеса.",
        "director": "Квентин Тарантино",
        "related": [
            "Бешеные псы",
            "Убить Билла",
            "Бесславные ублюдки"
        ]
    },
    {
        "title": "Бегущий по лезвию",
        "genre": "фантастика",
        "year": 1982,
        "yearRange": "1980-е",
        "duration": "средние",
        "rating": 8.1,
        "language": "английский",
        "description": "Бегущий по лезвию — фантастический фильм 1982 года, снятый Ридли Скоттом. История о охотнике за репликантами в антиутопическом будущем, где границы между человеком и машиной стираются.",
        "director": "Ридли Скотт",
        "related": [
            "Чужой",
            "Гладиатор",
            "Марсианин"
        ]
    },
    {
        "title": "Американский психопат",
        "genre": "триллер",
        "year": 2000,
        "yearRange": "2000-е",
        "duration": "средние",
        "rating": 7.6,
        "language": "английский",
        "description": "Американский психопат — сатирический триллер 2000 года, снятый Мэри Хэррон. Фильм рассказывает о богатом банкире Патрике Бэйтмане, скрывающем свои психопатические наклонности.",
        "director": "Мэри Хэррон",
        "related": [
            "Бойцовский клуб",
            "Социальная сеть",
            "Волк с Уолл-стрит"
        ]
    },
    {
        "title": "Побег из Шоушенка",
        "genre": "драма",
        "year": 1994,
        "yearRange": "1990-е",
        "duration": "длинные",
        "rating": 9.3,
        "language": "английский",
        "description": "Побег из Шоушенка — драма 1994 года, снятая Фрэнком Дарабонтом. История о невиновном банкире, приговорённом к пожизненному заключению, и его дружбе с другим заключённым.",
        "director": "Фрэнк Дарабонт",
        "related": [
            "Зелёная миля",
            "Список Шиндлера",
            "Форрест Гамп"
        ]
    },
    {
        "title": "Остров проклятых",
        "genre": "триллер",
        "year": 2010,
        "yearRange": "2010-е",
        "duration": "длинные",
        "rating": 8.2,
        "language": "английский",
        "description": "Остров проклятых — психологический триллер 2010 года, снятый Мартином Скорсезе. Федеральный маршал расследует исчезновение пациентки в психиатрической больнице на изолированном острове.",
        "director": "Мартин Скорсезе",
        "related": [
            "Таксист",
            "Славные парни",
            "Волк с Уолл-стрит"
        ]
    },
    {
        "title": "Американская история X",
        "genre": "драма",
        "year": 1998,
        "yearRange": "1990-е",
        "duration": "средние",
        "rating": 8.5,
        "language": "английский",
        "description": "Американская история X — драма 1998 года, снятая Тони Кэем. Фильм рассказывает о бывшем неонацисте, который пытается предотвратить повторение своих ошибок младшим братом.",
        "director": "Тони Кэй",
        "related": [
            "Список Шиндлера",
            "Зелёная миля",
            "Побег из Шоушенка"
        ]
    },
    {
        "title": "Волк с Уолл-стрит",
        "genre": "драма",
        "year": 2013,
        "yearRange": "2010-е",
        "duration": "длинные",
        "rating": 8.2,
        "language": "английский",
        "description": "Волк с Уолл-стрит — биографическая драма 2013 года, снятая Мартином Скорсезе. История о взлёте и падении биржевого брокера Джордана Белфорта, погрязшего в коррупции и роскоши.",
        "director": "Мартин Скорсезе",
        "related": [
            "Социальная сеть",
            "Большой куш",
            "Американский психопат"
        ]
    },
    {
        "title": "Дюнкерк",
        "genre": "драма",
        "year": 2017,
        "yearRange": "2010-е",
        "duration": "средние",
        "rating": 7.8,
        "language": "английский",
        "description": "Дюнкерк — военная драма 2017 года, снятая Кристофером Ноланом. Фильм рассказывает о спасательной операции союзных войск, окружённых в Дюнкерке во время Второй мировой войны.",
        "director": "Кристофер Нолан",
        "related": [
            "Начало",
            "Интерстеллар",
            "1917"
        ]
    },
    {
        "title": "Джокер",
        "genre": "драма",
        "year": 2019,
        "yearRange": "2010-е",
        "duration": "средние",
        "rating": 8.4,
        "language": "английский",
        "description": "Джокер — психологическая драма 2019 года, снятая Тоддом Филлипсом. История о становлении Артура Флека, комика, превращающегося в культового злодея в мрачном Готэме.",
        "director": "Тодд Филлипс",
        "related": [
            "Темный рыцарь",
            "Таксист",
            "Остров проклятых"
        ]
    },
    {
        "title": "Достучаться до небес",
        "genre": "драма",
        "year": 1997,
        "yearRange": "1990-е",
        "duration": "средние",
        "rating": 8.7,
        "language": "немецкий",
        "description": "Достучаться до небес — немецкая трагикомедия 1997 года, снятая Томасом Яном. Два смертельно больных пациента сбегают из больницы, чтобы исполнить свои последние желания.",
        "director": "Томас Ян",
        "related": [
            "Побег из Шоушенка",
            "Зелёная миля",
            "1+1"
        ]
    },
    {
        "title": "Престиж",
        "genre": "драма",
        "year": 2006,
        "yearRange": "2000-е",
        "duration": "средние",
        "rating": 8.5,
        "language": "английский",
        "description": "Престиж — драматический триллер 2006 года, снятый Кристофером Ноланом. История о соперничестве двух фокусников в конце XIX века, которое приводит к трагическим последствиям.",
        "director": "Кристофер Нолан",
        "related": [
            "Начало",
            "Иллюзионист",
            "Темный рыцарь"
        ]
    },
    {
        "title": "Марсианин",
        "genre": "фантастика",
        "year": 2015,
        "yearRange": "2010-е",
        "duration": "длинные",
        "rating": 8.0,
        "language": "английский",
        "description": "Марсианин — фантастический фильм 2015 года, снятый Ридли Скоттом. Астронавт, оставленный на Марсе, использует свои знания, чтобы выжить и найти способ вернуться на Землю.",
        "director": "Ридли Скотт",
        "related": [
            "Гравитация",
            "Интерстеллар",
            "Бегущий по лезвию"
        ]
    },
    {
        "title": "Матрица",
        "genre": "фантастика",
        "year": 1999,
        "yearRange": "1990-е",
        "duration": "длинные",
        "rating": 8.7,
        "language": "английский",
        "description": "Матрица — фантастический боевик 1999 года, снятый сестрами Вачовски. Программист Нео узнаёт, что реальность — это симуляция, и присоединяется к восстанию против машин.",
        "director": "Лана и Лилли Вачовски",
        "related": [
            "Бегущий по лезвию",
            "Терминатор",
            "Начало"
        ]
    },
    {
        "title": "Король Лев",
        "genre": "анимация",
        "year": 1994,
        "yearRange": "1990-е",
        "duration": "средние",
        "rating": 8.5,
        "language": "английский",
        "description": "Король Лев — анимационный фильм 1994 года, снятый Disney. История о молодом льве Симбе, который должен вернуть своё место короля после предательства дяди Шрама.",
        "director": "Роджер Аллерс, Роб Минкофф",
        "related": [
            "Мулан",
            "Аладдин",
            "Красавица и чудовище"
        ]
    },
    {
        "title": "Гравитация",
        "genre": "фантастика",
        "year": 2013,
        "yearRange": "2010-е",
        "duration": "средние",
        "rating": 7.7,
        "language": "английский",
        "description": "Гравитация — фантастический триллер 2013 года, снятый Альфонсо Куароном. Астронавты борются за выживание после аварии на орбите, сталкиваясь с изоляцией и опасностью космоса.",
        "director": "Альфонсо Куарон",
        "related": [
            "Марсианин",
            "Интерстеллар",
            "Аполлон 13"
        ]
    },
    {
        "title": "Пила",
        "genre": "ужасы",
        "year": 2004,
        "yearRange": "2000-е",
        "duration": "средние",
        "rating": 7.6,
        "language": "английский",
        "description": "Пила — хоррор-триллер 2004 года, снятый Джеймсом Ваном. Два человека оказываются в ловушке маньяка, который заставляет их играть в жестокие психологические игры.",
        "director": "Джеймс Ван",
        "related": [
            "Хостел",
            "Крик",
            "Семь"
        ]
    },
    {
        "title": "Леон",
        "genre": "драма",
        "year": 1994,
        "yearRange": "1990-е",
        "duration": "средние",
        "rating": 8.5,
        "language": "английский",
        "description": "Леон — драматический триллер 1994 года, снятый Люком Бессоном. История о профессиональном киллере, который берёт под защиту юную девочку, чья семья была убита.",
        "director": "Люк Бессон",
        "related": [
            "Таксист",
            "Никита",
            "Пятый элемент"
        ]
    },
    {
        "title": "Паразиты",
        "genre": "драма",
        "year": 2019,
        "yearRange": "2010-е",
        "duration": "средние",
        "rating": 8.5,
        "language": "корейский",
        "description": "Паразиты — сатирическая драма 2019 года, снятая Пон Джун-хо. История о бедной семье, которая хитроумно проникает в жизнь богатого семейства, что приводит к неожиданным последствиям.",
        "director": "Пон Джун-хо",
        "related": [
            "Сквозь снег",
            "Олдбой",
            "Воспоминания об убийстве"
        ]
    },
    {
        "title": "Семь",
        "genre": "триллер",
        "year": 1995,
        "yearRange": "1990-е",
        "duration": "средние",
        "rating": 8.6,
        "language": "английский",
        "description": "Семь — мрачный триллер 1995 года, снятый Дэвидом Финчером. Два детектива расследуют серию убийств, основанных на семи смертных грехах.",
        "director": "Дэвид Финчер",
        "related": [
            "Зодиак",
            "Бойцовский клуб",
            "Игра"
        ]
    },
    {
        "title": "Бойцовский клуб",
        "genre": "драма",
        "year": 1999,
        "yearRange": "1990-е",
        "duration": "длинные",
        "rating": 8.8,
        "language": "английский",
        "description": "Бойцовский клуб — драма 1999 года, снятая Дэвидом Финчером. История о безымянном рассказчике, который создаёт подпольный клуб с харизматичным Тайлером Дёрденом, что выходит из-под контроля.",
        "director": "Дэвид Финчер",
        "related": [
            "Социальная сеть",
            "Семь",
            "Американский психопат"
        ]
    },
    {
        "title": "Жизнь прекрасна",
        "genre": "драма",
        "year": 1997,
        "yearRange": "1990-е",
        "duration": "средние",
        "rating": 8.6,
        "language": "итальянский",
        "description": "Жизнь прекрасна — трагикомедия 1997 года, снятая Роберто Бениньи. Отец использует своё воображение, чтобы защитить сына от ужасов нацистского лагеря.",
        "director": "Роберто Бениньи",
        "related": [
            "Список Шиндлера",
            "Пианист",
            "Поезд на Дарджилинг"
        ]
    },
    {
        "title": "Чужой",
        "genre": "фантастика",
        "year": 1979,
        "yearRange": "1970-е",
        "duration": "средние",
        "rating": 8.5,
        "language": "английский",
        "description": "Чужой — научно-фантастический хоррор 1979 года, снятый Ридли Скоттом. Экипаж космического корабля сталкивается с агрессивным инопланетным существом.",
        "director": "Ридли Скотт",
        "related": [
            "Бегущий по лезвию",
            "Хищник",
            "Прометей"
        ]
    },
    {
        "title": "Титаник",
        "genre": "драма",
        "year": 1997,
        "yearRange": "1990-е",
        "duration": "длинные",
        "rating": 7.9,
        "language": "английский",
        "description": "Титаник — романтическая драма 1997 года, снятая Джеймсом Кэмероном. История любви между Джеком и Роуз на фоне трагической гибели лайнера Титаник.",
        "director": "Джеймс Кэмерон",
        "related": [
            "Аватар",
            "Ромео + Джульетта",
            "Ла-Ла Ленд"
        ]
    },
    {
        "title": "Олдбой",
        "genre": "триллер",
        "year": 2003,
        "yearRange": "2000-е",
        "duration": "средние",
        "rating": 8.4,
        "language": "корейский",
        "description": "Олдбой — корейский триллер 2003 года, снятый Пак Чхан-уком. Мужчина, похищенный и заключённый на 15 лет, ищет ответы и мстит после освобождения.",
        "director": "Пак Чхан-ук",
        "related": [
            "Паразиты",
            "Воспоминания об убийстве",
            "Служанка"
        ]
    },
    {
        "title": "Терминатор",
        "genre": "фантастика",
        "year": 1984,
        "yearRange": "1980-е",
        "duration": "средние",
        "rating": 8.1,
        "language": "английский",
        "description": "Терминатор — фантастический боевик 1984 года, снятый Джеймсом Кэмероном. Киборг из будущего пытается убить Сару Коннор, чтобы предотвратить рождение её сына — лидера сопротивления.",
        "director": "Джеймс Кэмерон",
        "related": [
            "Терминатор 2",
            "Матрица",
            "Чужой"
        ]
    },
    {
        "title": "Властелин колец: Братство кольца",
        "genre": "фэнтези",
        "year": 2001,
        "yearRange": "2000-е",
        "duration": "длинные",
        "rating": 8.8,
        "language": "английский",
        "description": "Властелин колец: Братство кольца — фэнтези 2001 года, снятое Питером Джексоном. Хоббит Фродо отправляется в эпическое путешествие, чтобы уничтожить кольцо власти.",
        "director": "Питер Джексон",
        "related": [
            "Властелин колец: Две крепости",
            "Хоббит",
            "Игра престолов"
        ]
    },
    {
        "title": "Безумный Макс",
        "genre": "боевик",
        "year": 1979,
        "yearRange": "1970-е",
        "duration": "средние",
        "rating": 6.8,
        "language": "английский",
        "description": "Безумный Макс — постапокалиптический боевик 1979 года, снятый Джорджем Миллером. Полицейский Макс Рокатански мстит банде байкеров в мире, где царит хаос.",
        "director": "Джордж Миллер",
        "related": [
            "Безумный Макс: Дорога ярости",
            "Водный мир",
            "Бегущий по лезвию"
        ]
    },
    {
        "title": "Интерстеллар",
        "genre": "фантастика",
        "year": 2014,
        "yearRange": "2010-е",
        "duration": "длинные",
        "rating": 8.7,
        "language": "английский",
        "description": "Интерстеллар — фантастическая драма 2014 года, снятая Кристофером Ноланом. Группа астронавтов отправляется через червоточину в поисках нового дома для человечества.",
        "director": "Кристофер Нолан",
        "related": [
            "Начало",
            "Гравитация",
            "Марсианин"
        ]
    },
    {
        "title": "Сталкер",
        "genre": "фантастика",
        "year": 1979,
        "yearRange": "1970-е",
        "duration": "длинные",
        "rating": 8.2,
        "language": "русский",
        "description": "Сталкер — философская фантастика 1979 года, снятая Андреем Тарковским. Сталкер ведёт двух мужчин в загадочную Зону, где, по слухам, исполняются желания.",
        "director": "Андрей Тарковский",
        "related": [
            "Солярис",
            "Ностальгия",
            "Зеркало"
        ]
    },
    {
        "title": "Шестое чувство",
        "genre": "триллер",
        "year": 1999,
        "yearRange": "1990-е",
        "duration": "средние",
        "rating": 8.2,
        "language": "английский",
        "description": "Шестое чувство — психологический триллер 1999 года, снятый М. Найтом Шьямаланом. Психолог пытается помочь мальчику, который видит мёртвых людей.",
        "director": "М. Найт Шьямалан",
        "related": [
            "Знаки",
            "Сплит",
            "Неуязвимый"
        ]
    },
    {
        "title": "Хищник",
        "genre": "фантастика",
        "year": 1987,
        "yearRange": "1980-е",
        "duration": "средние",
        "rating": 7.8,
        "language": "английский",
        "description": "Хищник — фантастический боевик 1987 года, снятый Джоном МакТирнаном. Элитный отряд сталкивается с инопланетным охотником в джунглях Центральной Америки.",
        "director": "Джон МакТирнан",
        "related": [
            "Чужой",
            "Терминатор",
            "Робокоп"
        ]
    },
    {
        "title": "Сияние",
        "genre": "ужасы",
        "year": 1980,
        "yearRange": "1980-е",
        "duration": "длинные",
        "rating": 8.4,
        "language": "английский",
        "description": "Сияние — хоррор 1980 года, снятый Стэнли Кубриком. Писатель Джек Торранс сходит с ума в изолированном отеле, угрожая своей семье.",
        "director": "Стэнли Кубрик",
        "related": [
            "Заводной апельсин",
            "2001: Космическая одиссея",
            "С широко закрытыми глазами"
        ]
    },
    {
        "title": "Гладиатор",
        "genre": "боевик",
        "year": 2000,
        "yearRange": "2000-е",
        "duration": "длинные",
        "rating": 8.5,
        "language": "английский",
        "description": "Гладиатор — исторический боевик 2000 года, снятый Ридли Скоттом. Римский генерал Максимус становится гладиатором, чтобы отомстить за предательство и гибель своей семьи.",
        "director": "Ридли Скотт",
        "related": [
            "Храброе сердце",
            "Троя",
            "Царство небесное"
        ]
    },
    {
        "title": "Иллюзионист",
        "genre": "драма",
        "year": 2006,
        "yearRange": "2000-е",
        "duration": "средние",
        "rating": 7.6,
        "language": "английский",
        "description": "Иллюзионист — драма 2006 года, снятая Нилом Бёргером. Фокусник в Вене конца XIX века использует свои трюки, чтобы завоевать любовь аристократки.",
        "director": "Нил Бёргер",
        "related": [
            "Престиж",
            "Великий Гэтсби",
            "Начало"
        ]
    },
    {
        "title": "1+1",
        "genre": "драма",
        "year": 2011,
        "yearRange": "2010-е",
        "duration": "средние",
        "rating": 8.5,
        "language": "французский",
        "description": "1+1 — французская комедийная драма 2011 года, снятая Оливье Накашем и Эриком Толедано. История дружбы между парализованным аристократом и его сиделкой из бедного района.",
        "director": "Оливье Накаш, Эрик Толедано",
        "related": [
            "Достучаться до небес",
            "Зелёная миля",
            "Мой друг Тоторо"
        ]
    },
    {
        "title": "Солярис",
        "genre": "фантастика",
        "year": 1972,
        "yearRange": "1970-е",
        "duration": "длинные",
        "rating": 8.1,
        "language": "русский",
        "description": "Солярис — философская фантастика 1972 года, снятая Андреем Тарковским. Учёный на космической станции сталкивается с проявлениями своих воспоминаний, созданных разумным океаном.",
        "director": "Андрей Тарковский",
        "related": [
            "Сталкер",
            "Зеркало",
            "Ностальгия"
        ]
    },
    {
        "title": "Пианист",
        "genre": "драма",
        "year": 2002,
        "yearRange": "2000-е",
        "duration": "длинные",
        "rating": 8.5,
        "language": "английский",
        "description": "Пианист — биографическая драма 2002 года, снятая Романом Полански. История о выживании польского пианиста Владислава Шпильмана во время Холокоста.",
        "director": "Роман Полански",
        "related": [
            "Список Шиндлера",
            "Жизнь прекрасна",
            "Враг у ворот"
        ]
    },
    {
        "title": "Форрест Гамп",
        "genre": "драма",
        "year": 1994,
        "yearRange": "1990-е",
        "duration": "длинные",
        "rating": 8.8,
        "language": "английский",
        "description": "Форрест Гамп — драма 1994 года, снятая Робертом Земекисом. История жизни простодушного человека, который невольно становится участником ключевых событий американской истории.",
        "director": "Роберт Земекис",
        "related": [
            "Побег из Шоушенка",
            "Зелёная миля",
            "Большой"
        ]
    },
    {
        "title": "Блондинка в законе",
        "genre": "комедия",
        "year": 2001,
        "yearRange": "2000-е",
        "duration": "средние",
        "rating": 6.4,
        "language": "английский",
        "description": "Блондинка в законе — комедия 2001 года, снятая Робертом Лукетичем. Эль Вудс, кажущаяся легкомысленной блондинка, поступает в Гарвард, чтобы доказать свою ценность.",
        "director": "Роберт Лукетич",
        "related": [
            "Дьявол носит Прада",
            "Клуэсс",
            "Мисс Конгениальность"
        ]
    },
    {
        "title": "Зодиак",
        "genre": "триллер",
        "year": 2007,
        "yearRange": "2000-е",
        "duration": "длинные",
        "rating": 7.7,
        "language": "английский",
        "description": "Зодиак — триллер 2007 года, снятый Дэвидом Финчером. Журналисты и полиция пытаются раскрыть личность серийного убийцы, известного как Зодиак.",
        "director": "Дэвид Финчер",
        "related": [
            "Семь",
            "Девушка с татуировкой дракона",
            "Пленницы"
        ]
    },
    {
        "title": "Поймай меня, если сможешь",
        "genre": "драма",
        "year": 2002,
        "yearRange": "2000-е",
        "duration": "длинные",
        "rating": 8.1,
        "language": "английский",
        "description": "Поймай меня, если сможешь — биографическая драма 2002 года, снятая Стивеном Спилбергом. История о молодом мошеннике Фрэнке Абигнейле и агенте ФБР, преследующем его.",
        "director": "Стивен Спилберг",
        "related": [
            "Волк с Уолл-стрит",
            "Афера",
            "Игра"
        ]
    },
    {
        "title": "Большой Лебовски",
        "genre": "комедия",
        "year": 1998,
        "yearRange": "1990-е",
        "duration": "средние",
        "rating": 8.1,
        "language": "английский",
        "description": "Большой Лебовски — комедия 1998 года, снятая братьями Коэн. Джеффри Лебовски, по прозвищу Чувак, оказывается втянут в криминальную интригу из-за путаницы с тёзкой.",
        "director": "Джоэл и Итан Коэны",
        "related": [
            "Фарго",
            "Старикам тут не место",
            "Бартон Финк"
        ]
    },
    {
        "title": "Темный рыцарь",
        "genre": "боевик",
        "year": 2008,
        "yearRange": "2000-е",
        "duration": "длинные",
        "rating": 9.0,
        "language": "английский",
        "description": "Темный рыцарь — супергеройский боевик 2008 года, снятый Кристофером Ноланом. Бэтмен сталкивается с хаотичным Джокером, угрожающим разрушить Готэм.",
        "director": "Кристофер Нолан",
        "related": [
            "Начало",
            "Бэтмен: Начало",
            "Джокер"
        ]
    },
    {
        "title": "Таксист",
        "genre": "драма",
        "year": 1976,
        "yearRange": "1970-е",
        "duration": "средние",
        "rating": 8.2,
        "language": "английский",
        "description": "Таксист — драма 1976 года, снятая Мартином Скорсезе. Ветеран Вьетнама Трэвис Бикл, работая таксистом, борется с одиночеством и моральной деградацией Нью-Йорка.",
        "director": "Мартин Скорсезе",
        "related": [
            "Остров проклятых",
            "Славные парни",
            "Бешеные псы"
        ]
    }
]

let lastFilteredMovies = [];
let currentMovie = null;

function findMovie() {
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;
    const duration = document.getElementById('duration').value;
    const rating = document.getElementById('rating').value;
    const language = document.getElementById('language').value;
    const search = document.getElementById('search').value.toLowerCase();
    const sort = document.getElementById('sort').value;

    let filteredMovies = movies;

    if (search) {
        filteredMovies = filteredMovies.filter(movie => 
            movie.title.toLowerCase().includes(search) || 
            movie.description.toLowerCase().includes(search) ||
            movie.director.toLowerCase().includes(search)
        );
    }

    // Исправленное условие: проверяем значения по умолчанию
    const noFilters =
        !search &&
        (!genre || genre === '') &&
        (!year || year === 'любое') &&
        (!duration || duration === 'любая') &&
        (!rating || rating === 'любое') &&
        (!language || language === 'любой');

    if (noFilters) {
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';
        resultDiv.classList.add('show');
        resultDiv.innerHTML = '<p>Выберите фильтры или введите запрос!</p>';
        document.getElementById('anotherMovie').style.display = 'none';
        return;
    }

    if (genre) {
        filteredMovies = filteredMovies.filter(movie => movie.genre === genre);
    }
    if (year && year !== 'любое') {
        filteredMovies = filteredMovies.filter(movie => movie.yearRange === year);
    }
    if (duration && duration !== 'любая') {
        filteredMovies = filteredMovies.filter(movie => movie.duration === duration);
    }
    if (rating && rating !== 'любое') {
        const minRating = rating === '7+' ? 7 : 8;
        filteredMovies = filteredMovies.filter(movie => movie.rating >= minRating);
    }
    if (language && language !== 'любой') {
        filteredMovies = filteredMovies.filter(movie => movie.language === language);
    }

    if (sort === 'rating') {
        filteredMovies.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'year') {
        filteredMovies.sort((a, b) => b.year - a.year);
    } else if (sort === 'title') {
        filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        filteredMovies.sort(() => Math.random() - 0.5);
    }

    lastFilteredMovies = filteredMovies;

    const resultDiv = document.getElementById('result');
    const anotherMovieBtn = document.getElementById('anotherMovie');
    if (filteredMovies.length === 0) {
        resultDiv.style.display = 'block';
        resultDiv.classList.add('show');
        resultDiv.innerHTML = '<p>Фильмы не найдены. Попробуйте другие фильтры!</p>';
        anotherMovieBtn.style.display = 'none';
        return;
    }

    const selectedMovie = sort === 'random' 
        ? filteredMovies[Math.floor(Math.random() * filteredMovies.length)]
        : filteredMovies[0];
    currentMovie = selectedMovie;
    displayMovie(selectedMovie);
    anotherMovieBtn.style.display = filteredMovies.length > 1 ? 'block' : 'none';
}

function findAnotherMovie() {
    if (lastFilteredMovies.length === 0) return;

    const resultDiv = document.getElementById('result');
    const anotherMovieBtn = document.getElementById('anotherMovie');
    const sort = document.getElementById('sort').value;

    let filteredMovies = [...lastFilteredMovies];
    if (sort === 'rating') {
        filteredMovies.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'year') {
        filteredMovies.sort((a, b) => b.year - a.year);
    } else if (sort === 'title') {
        filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        filteredMovies.sort(() => Math.random() - 0.5);
    }

    const selectedMovie = filteredMovies[0];
    currentMovie = selectedMovie;
    displayMovie(selectedMovie);
    anotherMovieBtn.style.display = filteredMovies.length > 1 ? 'block' : 'none';
}

function surpriseMe() {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    currentMovie = randomMovie;
    displayMovie(randomMovie);
    document.getElementById('anotherMovie').style.display = 'none';
}

function displayMovie(movie) {
    const resultDiv = document.getElementById('result');
    const relatedMovies = movie.related
        .filter(title => movies.some(m => m.title === title))
        .map(title => `<li>${title}</li>`)
        .join('');
    resultDiv.style.display = 'block';
    resultDiv.classList.remove('show');
    setTimeout(() => resultDiv.classList.add('show'), 10);
    resultDiv.innerHTML = `
        <h2>${movie.title}</h2>
        <p><strong>Жанр:</strong> ${movie.genre}</p>
        <p><strong>Год:</strong> ${movie.year}</p>
        <p><strong>Длительность:</strong> ${movie.duration === 'короткие' ? '<90 мин' : movie.duration === 'средние' ? '90–120 мин' : '>120 мин'}</p>
        <p><strong>Рейтинг IMDb:</strong> ${movie.rating}</p>
        <p><strong>Язык:</strong> ${movie.language}</p>
        <p><strong>Режиссёр:</strong> ${movie.director}</p>
        <p><strong>Описание:</strong> ${movie.description}</p>
        ${relatedMovies ? `
            <div class="related-movies">
                <h3>Похожие фильмы или серия:</h3>
                <ul>${relatedMovies}</ul>
            </div>
        ` : ''}
        <textarea id="noteInput" placeholder="Добавьте заметку о фильме"></textarea>
        <button id="addToWatched" onclick="addToWatched('${movie.title}')">Добавить в просмотренные</button>
        <button id="shareBtn" onclick="shareMovie('${movie.title}')">Поделиться</button>
    `;
}

function addToWatched(title) {
    const note = document.getElementById('noteInput').value;
    let watchedMovies = JSON.parse(localStorage.getItem('watchedMovies') || '[]');
    if (!watchedMovies.some(movie => movie.title === title)) {
        watchedMovies.push({ title, note });
        localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
        updateWatchedList();
    }
}

function removeFromWatched(title) {
    let watchedMovies = JSON.parse(localStorage.getItem('watchedMovies') || '[]');
    watchedMovies = watchedMovies.filter(movie => movie.title !== title);
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
    updateWatchedList();
}

function updateWatchedList() {
    const watchedList = document.getElementById('watchedList');
    const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies') || '[]');
    watchedList.innerHTML = watchedMovies.length === 0
        ? '<p>Список просмотренных пуст</p>'
        : watchedMovies.map(movie => `
            <li>
                ${movie.title}
                ${movie.note ? `<p class="watched-note">${movie.note}</p>` : ''}
                <button onclick="removeFromWatched('${movie.title}')">Удалить</button>
            </li>
        `).join('');
}

function shareMovie(title) {
    const text = `${title}`;
    navigator.clipboard.writeText(text)
        .then(() => alert('Название фильма скопировано в буфер обмена!'))
        .catch(() => alert('Ошибка при копировании.'));
}

function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggle');
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleBtn.textContent = 'Тёмная тема';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleBtn.textContent = 'Светлая тема';
    }
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
    updateWatchedList();
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggle');
    body.classList.remove('dark-theme', 'light-theme');
    body.classList.add(`${savedTheme}-theme`);
    themeToggleBtn.textContent = savedTheme === 'dark' ? 'Светлая тема' : 'Тёмная тема';
});