// Тема ЦОК отображается во многих элементах
const themeOfDEC = 'Техническая диагностика изношенного оборудования'
// Номер ФГОС и Тескт ФГОС
const numFgos = '15.02.17'
const numFgosTxt = 'Монтаж, техническое обслуживание, эксплуатация и ремонт промышленного оборудования (по отраслям)'
// Номер МДК и Текст МДК
const numMDK = '03.01'
const numMDKTxt = 'Организация ремонтных работ и техническая диагностика промышленного (технологического) оборудования'
const razdel = 'Организация ремонтных работ и техническая диагностика промышленного (технологического) оборудования'
// Массив с рекомендациями
const textOfMethodMaterials = [
    
    `<p class='pink_subtitle'>Рекомендации для обучающегося</p>
    <p class='none_list'>Просмотрите видеолекцию по теме «Техническая диагностика изношенного оборудования»
    <p class='none_list'>Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся. </p>
    <p class='none_list'>Обратите внимание на основные вопросы лекции:</p>
    Технологическая карта процесса ремонта</p>
    Виды дефектов
    Классификация деталей по степени износа
    Контрольно-измерительные инструменты и приборы. 
    Технические условия
    <p class='none_list'>При необходимости прослушайте/просмотрите материал еще раз.</p>
    <p class='none_list'>Возвращайтесь к наиболее сложным аспектам темы.</p>
    <p class='none_list'>Соблюдайте здоровье-сберегающий режим: чередуйте работу с электронными носителями с отдыхом и гимнастикой для глаз.</p>
    <p class='pink_subtitle'>Рекомендации для преподавателя</p>
    <p class='none_list'>Применение данного ЭОМ  в ходе занятия поможет преподавателю мотивировать обучающихся к усвоению нового материала через визуализацию теоретического материала с помощью различных видов графики и видео и его изложение доступным языком, а так же через возможность организации интерактивной деятельности.</p>
    <p class='none_list'>Преподаватель может организовать изучение обучающимися образовательных материалов ЭОМ через применение различных педагогических технологий, например:</p>
    организовать изучение теоретических материалов  ЭОМ  до начала учебного занятия, а во время учебного занятия провести беседу, отвечая на вопросы обучающихся, уточняя и расширяя первичные знания;
    организовать изучение нового материала с применением материалов ЭОМ непосредственно на занятии, через демонстрацию материалов ЭОМ, в т.ч. иллюстраций (схем, графиков, фото, видео и пр.);
    организовать работу обучающихся в группах непосредственно на занятии с использованием учебных материалов ЭОМ;
    предложить повторное изучение материалов ЭОМ после проведения учебных занятий с целью закрепления материала и подготовки к промежуточной аттестации и пр.
    <p class='none_list'>В ходе занятия преподавателю предлагается, опираясь на материалы данного ЭОМ  раскрыть следующие вопросы: </p>
    Технологическая карта процесса ремонта
    Виды дефектов
    Классификация деталей по степени износа
    Контрольно-измерительные инструменты и приборы. 
    Технические условия`,

    `<p class='pink_subtitle'>Рекомендации для обучающегося</p>
    <p class='none_list'>Запустите виртуальный тренажер по теме «Техническая диагностика изношенного оборудования»</p>
    <p class='none_list'>Ознакомьтесь с предложенными материалами и выполните тренировочные тестовые задания.</p>
    <p class='none_list'>Обратите внимание, что на выполнение всех тестовых заданий предусмотрено 2 попытки.</p>
    <p class='none_list'>Если в процессе изучения материала возникнут вопросы, запишите их для дальнейшего обсуждения с преподавателем и/или с группой обучающихся.</p>
    <p class='none_list'>При неверном ответе на тестовое задание, вернитесь к предыдущему материалу и изучите его повторно.</p>
    <p class='none_list'>Тренировочные тестовые задания предусматривают отображение правильных вариантов ответов после их выполнения.</p>
    <p class='none_list'>Запустить виртуальный тренажер можно неограниченное количество раз.</p>
    <p class='pink_subtitle'>Рекомендации для преподавателя</p>
    <p class='none_list'>В данном ЭОМ размещены материалы для практических работ по темам: </p>
    <p class='none_list'>ПР №1 Определение дефектов зубчатых колёс с помощью измерения и визуально</p>
    <p class='none_list'>ПР №2 Определение дефектов валов с помощью измерения и визуально</p>
    <p class='none_list'>ПР №3 Определение дефектов корпусных деталей с помощью измерения и визуально</p>
    <p class='none_list'>ПР №4 Определение дефектов деталей червячной передачи с помощью измерения и визуально</p>
    <p class='none_list'>ПР №5 Определение дефектов цилиндрических (червячных, конических) редукторов с помощью измерения и визуально</p>
    <p class='none_list'>ПР №6 Определение дефектов агрегатов гидроприводов (пневмоприводов) с помощью измерения и визуально</p>
    <p class='none_list'>ПР №7 Разработка конструкторского чертежа изношенной детали</p>
    <p class='none_list'>Преподаватель может организовать изучение обучающимися образовательных материалов ЭОМ через применение различных педагогических технологий, например:</p>
    организовать изучение практических материалов  ЭОМ  до начала учебного занятия, а во время учебного занятия организовать проведение практической работы на основе материалов ЭОМ;
    организовать изучение материалов ЭОМ непосредственно на занятии, выявить наиболее часто встречающие ошибки при выполнении проверочных тестовых заданий, организовать работу над ошибками;
    предложить повторное изучение материалов ЭОМ после проведения учебных занятий с целью закрепления материала и подготовки к промежуточной аттестации и пр.
    <p class='none_list'>Применение данного ЭОМ на занятии поможет активизировать познавательную деятельность обучающихся, способствует  развитию  логического  мышления,  памяти, внимательности, наблюдательности.</p>`,

    `<p class='pink_subtitle'>Рекомендации для обучающегося</p>
    <p class='none_list'>Запустите интерактивный тренажер по выполнению заданий по теме «Техническая диагностика изношенного оборудования» <br><br> Ознакомьтесь с условиями выполнения тестовых заданий. Обратите внимание на отсутствие подсказок и возможности повторного выполнения заданий.  <br><br> Выполните все тестовые задания. Ознакомьтесь с результатами тестирования. <br> При наличии ошибок по результатам тестирования вернитесь к изучению теоретического материала. <br><br> Запустить интерактивный тренажер по выполнению заданий возможно неограниченное количество раз.</p>
    <p class='pink_subtitle'>Рекомендации для преподавателя</p>
    <p class='none_list'>Применяя данный ЭОМ преподаватель может мотивировать обучающихся для получения максимального количества баллов при выполнении тестовых заданий, предложенных с целью диагностики приобретенных знаний, умений и навыков, учитывая результаты тестирования при выставлении оценки по теме.</p>
    <p class='none_list'>Преподаватель может анализировать результаты тестирования обучающихся с целью выявления наиболее сложных для понимания вопросов темы, с целью последующей организации работы по устранению данных пробелов в знаниях обучающихся.</p>`,
];
// Ключевые слова
const keyWords = `Деталь \n изделие, изготовленное из однородного материала без применения сборочных операций. Например, вал, ось, шпилька, зубчатое колесо и т.п. 
Узел \n сборочная единица, которая может собираться отдельно от других составных частей или двигателя в целом и выполнять в нем определенную функцию. Узел может состоять из двух и более сборочных единиц. Например, подшипник. 
Механизм \n часть системы, служащая для передачи и преобразования движений и скоростей. Например, масляный насос системы смазки, пневматический цилиндр.
Устройством \n называют совокупность частей, представляющую единую конструкцию и служащую для организации какого-либо процесса. Например, смазочное устройство. 
Система \n совокупность правильно расположенных и взаимосвязанных между собой частей, выполняющих в механизме определенную функцию. Например, смазочная система.
Вал \n вращающийся элемент, обычно круглого сечения, который используется для передачи вдоль своей оси энергии от одной части механизма к другой или от машины. 
Ось \n вращающаяся или не вращающаяся деталь, круглого сечения, которая служит опорой для находящихся на ней деталей.
Дефект \n каждое отдельное несоответствие продукции (машины, узла, детали) требованиям, установленным конструкторской (проектной) и/или нормативной документацией.
Дефектация \n контроль деталей с целью обнаружения дефектов.
Редуктор \n механизм для преобразования величины крутящего момента и угловой скорости.
Износ \n изменение размеров, формы, массы или состояния поверхности изделия или инструмента вследствие разрушения (изнашивания) поверхностного слоя изделия при трении.
Смазывание \n процесс нанесения маслянистых или консистентных смазочных материалов, направленный на уменьшение трения и обеспечение плавного скольжения движущихся деталей машины относительно друг друга.`
/* 1) ФГОС СПО
2) ПООП Профессионалитета
3) Профессиональный модуль
4) МДК
5) Раздел
6) Тема*/
const infoContent = 
`${numFgos} ${numFgosTxt}
${numFgos} ${numFgosTxt}
ПМ.03 Организационно-техническое обеспечение ремонта промышленного (технологического) оборудования
${numMDK} ${numMDKTxt}
${razdel}
${themeOfDEC}`
const blockButtonEOM2 = 1; // "Это для разработки и отладки удобно, блокирует кнопки назад и далее в ЭОМ_2 1 true 0 false"
const typeOfEOM3 = 1; // Если 1 то это тест если что то иное то мини \n игра
const typeOfEOM1 = 1; // Если 1 то это video если что то иное то dynamic_info