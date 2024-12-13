
let selectedLab = null;

//Вибір лабораторної роботи
function selectLab(labNumber) {
    selectedLab = labNumber;
    //console.log(`Лабораторна робота №${labNumber} обрана.`);
    document.querySelector('.output').innerHTML = `<p>Лабораторна робота №${labNumber} обрана.</p>`;

    sidebarButtons(labNumber);
}

function sidebarButtons(labNumber) {
    const sidebar = document.getElementById('sidebar-buttons');
    sidebar.innerHTML = '';

    let buttonsHTML = '';
   
    switch (labNumber) {
        case 1:
            buttonsHTML = `
                <li><button id="btn1">Опис предметного середовища</button></li>
                <li><button id="btn2">Тема, мета, місце розташування лабораторної роботи №1</button></li>
                <li><button id="btn3">Структура документа</button></li>
                <li><button id="btn4">HTML код таблиць</button></li>
                <li><button id="btn5">HTML код форми</button></li>
                <li><button id="btn6">HTML код зображення</button></li>
                <li><button id="btn7">Висновки</button></li>
            `;
            break;
        case 2:
            buttonsHTML = `
                <li><button id="btn1">Тема, мета ЛР№2. Місце розташування сайту, звіту</button></li>
                <li><button id="btn2">Способи підключення стилів</button></li>
                <li><button id="btn3">СЕЛЕКТОРИ</button></li>
                <li><button id="btn4">Селектори тегу</button></li>
                <li><button id="btn5">Селектори класу</button></li>
                <li><button id="btn6">Селектори ідентифікаторів</button></li>
                <li><button id="btn7">Інші селектори</button></li>
                <li><button id="btn8">CSS: Шрифти, текст, таблиці, фон, контур, списки, CSS просунутий</button></li>
                <li><button id="btn9">ВИСНОВКИ до ЛР№2</button></li>
            `;
            break;
        case 3:
            buttonsHTML = `
                <li><button id="btn1">Тема, мета ЛР№3. Місце розташування сайту, звіту</button></li>
                <li><button id="btn2">ЗАВДАННЯ №1. Зовнішній вигляд макету, код макету</button></li>
                <li><button id="btn3">ЗАВДАННЯ №2</button></li>
                <li><button id="btn4">Фіксована таблична верстка</button></li>
                <li><button id="btn5">Гумова таблична верстка</button></li>
                <li><button id="btn6">Фіксована блокова верстка</button></li>
                <li><button id="btn7">Гумова блокова верстка</button></li>
                <li><button id="btn8">ЗАВДАННЯ №3 FLEXBOX</button></li>
                <li><button id="btn9">Скріншот сторінки (Flexbox)</button></li>
                <li><button id="btn10">HTML-код (Flexbox)</button></li>
                <li><button id="btn11">CSS-код (Flexbox)</button></li>
                <li><button id="btn12">ВИСНОВКИ</button></li>
            `;
            break;
        case 4:
            buttonsHTML = `
                <li><button id="btn1">Тема, мета ЛР№4. Місце розташування сайту, звіту</button></li>
                <li><button id="btn2">Десктопна версія</button></li>
                <li><button id="btn3">Планшетна версія</button></li>
                <li><button id="btn4">Мобільна версія</button></li>
                <li><button id="btn5">ВИСНОВКИ</button></li>
            `;
             break;
        case 5:
            buttonsHTML = `
                <li><button id="btn1">Тема, мета ЛР№5. Місце розташування сайту, звіту</button></li>
                <li><button id="btn2">ЗАВДАННЯ №1</button></li>
                <li><button id="btn3">ЗАВДАННЯ №2</button></li>
                <li><button id="btn4">ЗАВДАННЯ №3</button></li>
                <li><button id="btn5">ЗАВДАННЯ №4</button></li>
                <li><button id="btn6">ЗАВДАННЯ №5</button></li>
                <li><button id="btn7">ВИСНОВКИ</button></li>
            `;
            break;
        case 6:
            buttonsHTML = `
                <li><button id="btn1">Тема, мета ЛР№6. Місце розташування сайту, звіту</button></li>
                <li><button id="btn2">ЗАВДАННЯ №2</button></li>
                <li><button id="btn3">ЗАВДАННЯ №4</button></li>
                <li><button id="btn4">ЗАВДАННЯ №6</button></li>
                <li><button id="btn5">ЗАВДАННЯ №8</button></li>
                <li><button id="btn6">ЗАВДАННЯ №9</button></li>
                <li><button id="btn7">ЗАВДАННЯ №10</button></li>
                <li><button id="btn8">ВИСНОВКИ</button></li>
            `;
            break;
        case 7:
            buttonsHTML = `
                <li><button id="btn1">Тема, мета ЛР№7. Місце розташування звіту</button></li>
                <li><button id="btn2">ЗАВДАННЯ №2</button></li>
                <li><button id="btn3">ЗАВДАННЯ №4</button></li>
                <li><button id="btn4">ЗАВДАННЯ №6</button></li>
                <li><button id="btn5">ЗАВДАННЯ №7</button></li>
                <li><button id="btn6">ЗАВДАННЯ №8</button></li>
                <li><button id="btn7">ЗАВДАННЯ №9</button></li>
                <li><button id="btn8">ЗАВДАННЯ №10</button></li>
                <li><button id="btn9">ВИСНОВКИ</button></li>
            `;
            break;
        default:
            buttonsHTML = '<li><p>Немає інформації для цієї лабораторної роботи</p></li>';
    }

    sidebar.innerHTML = buttonsHTML;

    document.querySelectorAll('aside button').forEach(button => {
        button.addEventListener('click', (event) => {
            //console.log(`Кнопка з ідентифікатором ${event.target.id} була натиснута.`);
            content_load(event.target.id);
        });
    });
}

//Завантаження вмісту
function content_load(buttonId) {
    //console.log(`Натиснута кнопка: ${buttonId}`);

    if (selectedLab === null) {
        document.querySelector('.output').innerHTML = `<p>Спочатку виберіть лабораторну роботу!</p>`;
        return;
    }

    let content = '';

    
    switch (selectedLab) {
        case 1:
            content = loadLab1Content(buttonId);
            break;
        case 2:
            content = loadLab2Content(buttonId);
            break;
        case 3:
            content = loadLab3Content(buttonId);
            break; 
        case 4:
            content = loadLab4Content(buttonId);
            break;
        case 5:
            content = loadLab5Content(buttonId);
            break;
        case 6:
            content = loadLab6Content(buttonId);
            break;
        case 7:
            content = loadLab7Content(buttonId);
            break;
        case 8:
            content = loadLab8Content(buttonId);
            break;
        case 9:
            content = loadLab9Content(buttonId);
            break;       
        default:
            content = `<p>Немає інформації для цієї лабораторної роботи.</p>`;
    }
    
    document.querySelector('.output').innerHTML = content;
}

//Для лабораторної №1
function loadLab1Content(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `<p>Опис предметного середовища для лабораторної роботи №1: <br> Тема: магазин екіпірування для зимових видів спорту. <br> Мета: Веб-сайт допомагатиме користувачу обрати спорядження в залежності від спорту, виробника, якості, ціни та рівня підготовки (для початківців, для середнього рівня, для професіоналів). <br> Сценарії використання: <br> 1. Авторизація на сайті <br> 2. Користувач зможе обрати потрібний йому вид спорту <br> 3. В залежності від обраного спорту, користувач обирає тип речі, ціну, колір та виробника <br> 4. Користувач, що є авторизованим, зможе додавати речі до списку речей, що сподобались <br> 5. Авторизований користувач зможе додавати речі до кошика </p>`;
            break;
        case 'btn2':
            content = `<p>Тема лабораторної роботи №1: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ. <br> Мета: придбати практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт. <br> Місце розташування:https://github.com/hannoveran/Laba1.git <br>  https://hannoveran.github.io/Laba1/</p>`;
            break;
        case 'btn3':
            content = `<p>Структура документа лабораторної роботи №1:</p> <br> <img src="images/main.png" width="700px">`;
            break;
        case 'btn4':
            content = `<p>HTML код таблиць для лабораторної роботи №1:</p> <br> 
            <img src="images/L1/scTable.png"> <br> 
            <pre><code>
            &lt;table class="sportsTable"&gt;
                &lt;tr&gt;
                    &lt;td class="sports"&gt;
                        &lt;img src="images/figureSkating.jpg" alt="figure skating"&gt;
                        &lt;h4&gt;Figure Skating&lt;/h4&gt;
                    &lt;/td&gt;
                    &lt;td class="sports"&gt;
                        &lt;img src="images/skiing.jpg" alt="skiing"&gt;
                        &lt;h4&gt;Skiing&lt;/h4&gt;
                    &lt;/td&gt;
                    &lt;td class="sports"&gt;
                        &lt;img src="images/iceHockey.jpg" alt="ice hockey"&gt;
                        &lt;h4&gt;Ice Hockey&lt;/h4&gt;
                    &lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td class="sports"&gt;
                        &lt;img src="images/snowboarding.jpg" alt="snowboarding"&gt;
                        &lt;h4&gt;Snowboarding&lt;/h4&gt;
                    &lt;/td&gt;
                    &lt;td class="sports"&gt;
                        &lt;img src="images/curling.jpg" alt="curling"&gt;
                        &lt;h4&gt;Curling&lt;/h4&gt;
                    &lt;/td&gt;
                    &lt;td class="sports"&gt;
                        &lt;img src="images/speedSkating.jpg" alt="speed skating"&gt;
                        &lt;h4&gt;Speed Skating&lt;/h4&gt;
                    &lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;
            </code></pre>`;
            break;
        case 'btn5':
            content = `<p>HTML код форми для лабораторної роботи №1:</p> <br> <img src="images/L1/scForm.png"><br>
            <pre><code>
            &lt;div class="formContainer"&gt;
                &lt;div class="form-btn"&gt;
                    &lt;span&gt;Register&lt;/span&gt;
                    &lt;hr id="Indicator"&gt;
                &lt;/div&gt;
                &lt;form id="regForm"&gt;
                    &lt;input type="text" placeholder="Username"&gt;
                    &lt;input type="email" placeholder="Email"&gt;
                    &lt;input type="password" placeholder="password"&gt;
                    &lt;button type="submit" class="btn"&gt;Register&lt;/button&gt;
                &lt;/form&gt;
            &lt;/div&gt;
            </code></pre>`;
            break;
        case 'btn6':
            content = `<p>HTML код зображення для лабораторної роботи №1:</p> <img src="images/L1/curling.jpg" height=300px><img src="images/L1/dudeSkiing.jpg" height=300px><img src="images/L1/figureSkating.jpg" height=300px><img src="images/L1/iceHockey.jpg" height=300px><img src="images/L1/kids.jpg" height=300px><img src="images/L1/men.jpg" height=300px><img src="images/L1/skiing.jpg" height=300px><img src="images/L1/snowboarding.jpg" height=300px><img src="images/L1/speedSkating.jpg" height=300px><img src="images/L1/women.png" height=300px><br>
            <pre><code>
            &lt;img src="images/dudeSkiing.jpg" alt="man on a snowboard"&gt;
            &lt;img src="images/men.jpg" alt="men"&gt;
            &lt;img src="images/women.png" alt="women"&gt;
            &lt;img src="images/kids.jpg" alt="kids"&gt;
            &lt;img src="images/figureSkating.jpg" alt="figure skating"&gt;
            &lt;img src="images/skiing.jpg" alt="skiing"&gt;
            &lt;img src="images/iceHockey.jpg" alt="ice hockey"&gt;
            &lt;img src="images/snowboarding.jpg" alt="snowboarding"&gt;
            &lt;img src="images/curling.jpg" alt="curling"&gt;
            &lt;img src="images/speedSkating.jpg" alt="speed skating"&gt;
            </code></pre>`;
            break;
        case 'btn7':
            content = `<p>Висновки по лабораторній роботі №1: У даній лабораторній роботі було вивчено структуру HTML-документів та вибрано предметну галузь. Також придбано практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. Створено шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.</p>`;
            break;
        default:
            content = '<p>Виберіть тему для відображення інформації.</p>';
    }

    return content;
} 

function loadLab2Content(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `<p>Тема:КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ. <br> Мета: придбати практичні навички роботи з селекторами, ідентифікаторами, списками, різноманітними властивостями кольору і фону, зовнішними та внутрішними відступами, плаваючими елементами, оформленням текстових елементів <br> Місце розташування сайту: https://github.com/hannoveran/Laba2.git <br> Місце розташування звіту: https://github.com/hannoveran/ReportDoc.git</p>`;
            break;
        case 'btn2':
            content = `<p>Способи підключення стилів: <br> <img src="images/L2/стилі.png"> <br> <img src="images/L2/стилі1.png"><br> <img src="images/L2/стилі2.png"></p>`;
            break;
        case 'btn3':
            content = `<p>СЕЛЕКТОРИ: </p>`;
            break;
        case 'btn4':
            content = `<p>Селектори тегу: <br> <img src="images/L2/селекторТегуК.png"> <br> <img src="images/L2/селекторТегуВ.png"> </p>`;
            break;
        case 'btn5':
            content = `<p>Селектори класу: <br> <img src="images/L2/селекторКласуК.png"> <br> <img src="images/L2/селекторКласуВ.png" width=700px> </p>`;
            break;
        case 'btn6':
            content = `<p>Селектори ідентифікаторів: <br> <img src="images/L2/селекторІдентифікатораК.png"> <br> <img src="images/L2/селекторІдентифікатораВ.png" width=700px></p>`;
            break;
        case 'btn7':
            content = `<p>Інші селектори: <br> <img src="images/L2/сусідніСелекториК.png"> <br> <img src="images/L2/сусідніСелекториВ.png"> <br> <img src="images/L2/селекторАтрибутуК.png"> <br> <img src="images/L2/селекторАтрибутуВ.png"> <br> <img src="images/L2/універсальнийСелекторК.png"> </p>`;
            break;
        case 'btn8':
            content = `<p>CSS: Шрифти, текст, таблиці, фон, контур, списки, CSS просунутий: <br> <img src="images/L2/шрифти.png" width=900px> <br> <img src="images/L2/контур.png"> <br> <img src="images/L2/фон.png"> <br> <img src="images/L2/колірТексту.png"> <br> <img src="images/L2/заокругленіКути.png"> <br> <img src="images/L2/анімації.png"> <br> <img src="images/L2/hover.png"> <br> <img src="images/L2/списки.png"></p>`;
            break;
        case 'btn9':
            content = `<p>ВИСНОВКИ до ЛР№2: <br> у даній лабораторній роботі було придбано практичні навички роботи з селекторами, ідентифікаторами, списками, різноманітними властивостями кольору і фону, зовнішними та внутрішними відступами, плаваючими елементами, оформленням текстових елементів </p>`;
            break;
        default:
            content = '<p>Виберіть тему для відображення інформації.</p>';
    }

    return content;
}

function loadLab3Content(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `<p>Тема:ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.<br> Мета: придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX <br> Місце розташування сайту: https://github.com/hannoveran/Laba2.git <br> Місце розташування звіту: https://github.com/hannoveran/ReportDoc.git</p>`;
            break;
        case 'btn2':
            content = `<p><img src="images/L3/mainPage.png"> <br> <img src="images/L3/кодГоловна1.png" width=700px> <br> <img src="images/L3/кодГоловна2.png" width=700px> <br> <img src="images/L3/кодГоловна3.png"> <br> <img src="images/L3/кодГоловна4.png"> <br> <img src="images/L3/кодГоловна5.png"></p>`;
            break;
        case 'btn3':
            content = `<p>ЗАВДАННЯ №2</p>`;
            break;
        case 'btn4':
            content = `<p>Фіксована таблична верстка <br> <img src="images/L3/фіксТабл1.png" width=700px> <br> <img src="images/L3/фіксТабл2.png" width=700px></p>`;
            break;
        case 'btn5':
            content = `<p>Гумова таблична верстка <br> <br> <img src="images/L3/гумТабл1.png" width=700px> <br> <img src="images/L3/гумТабл2.png" width=700px></p>`;
            break;
        case 'btn6':
            content = `<p>Фіксована блокова верстка <br> <br> <img src="images/L3/фіксБлок1.png" width=700px> <br> <img src="images/L3/фіксБлок2.png" width=700px></p>`;
            break;
        case 'btn7':
            content = `<p>Гумова блокова верстка <br><br> <img src="images/L3/гумБлок1.png" width=700px> <br> <img src="images/L3/гумБлок2.png" width=700px> </p>`;
            break;
        case 'btn8':
            content = `<p>ЗАВДАННЯ №3</p>`;
            break;
        case 'btn9':
            content = `<p> <img src="images/L3/зав3сайт.png" width=700px></p>`;
            break;
        case 'btn10':
            content = `<p><br> <img src="images/L3/шкод1.png" width=700px><br> <img src="images/L3/шкод2.png" width=700px><br> <img src="images/L3/шкод3.png" width=700px><br> <img src="images/L3/шкод4.png" width=700px><br> <img src="images/L3/шкод5.png" width=700px><br> <img src="images/L3/шкод6.png" width=700px></p>`;
            break;
        case 'btn11':
            content = `<p><br> <img src="images/L3/скод1.png" width=700px> <br> <img src="images/L3/скод2.png" width=700px><br> <img src="images/L3/скод3.png" width=700px><br> <img src="images/L3/скод4.png" width=700px><br> <img src="images/L3/скод5.png" width=700px></p>`;
            break;
        case 'btn12':
            content = `<p>ВИСНОВКИ до ЛР№3: <br> У ході виконання лабораторної роботи було розглянуто два підходи до верстки веб-додатків: верстка за допомогою таблиць та верстка блоками (зокрема плаваючими блоками і Flexbox). Обидва підходи мають свої переваги і недоліки. <br>
            Переваги верстки за допомогою таблиць:<br>
            - Таблиці забезпечують надійне відображення інформації у вигляді сітки, що особливо підходить для даних, які мають строгий табличний формат (наприклад, фінансові звіти або порівняльні таблиці).<br>
            - Легке управління структурою та вирівнюванням вмісту у стовпцях і рядках.<br>
            Недоліки верстки за допомогою таблиць:<br>
            -Таблична верстка не є семантично правильною для побудови макетів сторінок. Вона може ускладнювати підтримку коду та робити його менш доступним для користувачів із обмеженими можливостями або для пошукових систем.<br>
            - Верстка таблицями має низьку гнучкість. Адаптивність до різних розмірів екрану обмежена, що створює проблеми при створенні адаптивного дизайну.<br>
            - У порівнянні з Flexbox та CSS Grid, таблиці значно важче налаштовувати під сучасні вимоги до дизайну.<br>
            Переваги блокової верстки (включаючи плаваючі блоки та Flexbox):<br>
            - Блокова верстка є семантично правильною та зрозумілою для браузерів і пошукових систем. <br>
            - Flexbox дозволяє легко створювати адаптивні макети, що автоматично підлаштовуються під різні розміри екранів, що є важливим для сучасного веб-дизайну. <br>
            - Плаваючі блоки (float) дозволяють організувати елементи на сторінці в різних комбінаціях, забезпечуючи гнучкість при розміщенні вмісту. <br>
            - Flexbox спрощує роботу з вирівнюванням елементів, дозволяючи легко налаштовувати вертикальне та горизонтальне вирівнювання в контейнерах. <br>
            Недоліки блокової верстки:<br>
            - Використання плаваючих блоків (float) може призвести до труднощів у вирівнюванні елементів, особливо при створенні складних макетів. Це часто вимагало додаткових стилів або хаків для очищення потоків.<br>
            - Незважаючи на те, що Flexbox є більш гнучким, у великих проектах може бути складно підтримувати ідеальне вирівнювання між різними секціями без добре продуманої структури CSS.<br>
            - Загалом, блокова верстка, особливо з використанням Flexbox, є сучаснішим і ефективнішим підходом до створення веб-додатків, надаючи більше можливостей для адаптивного дизайну, зручності використання і підтримки в порівнянні з таблицями. </p>`;
            break;
        default:
            content = '<p>Виберіть тему для відображення інформації.</p>';
    }

    return content;
}

function loadLab4Content(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `<p>Тема:  АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST. <br> Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.  <br> Місце розташування сайту: https://github.com/hannoveran/Laba2.git <br> Місце розташування звіту: https://github.com/hannoveran/ReportDoc.git</p>`;
            break;
        case 'btn2':
            content = `<p><img src="images/L4/desktop.png" width=700px></p>`;
            break;
        case 'btn3':
            content = `<p><img src="images/L4/ipad.png"></p>`;
            break;
        case 'btn4':
            content = `<p><img src="images/L4/phone.png"></p>`;
            break;
        case 'btn5':
            content = `<p>Висновки: <br> 
            У процесі виконання лабораторної роботи було реалізовано адаптивну верстку веб-сторінки за допомогою медіа-запитів, метатегу viewport та стратегії Mobile First. Адаптивна верстка важлива для коректного відображення сторінок на різних пристроях, таких як десктопи, планшети та мобільні телефони. Медіа-запити дозволяють налаштовувати стилі в залежності від розмірів екрана, забезпечуючи зручність використання. <br>

            Пояснення створення різних версій:<br>
            Десктопна версія: Для екранів шириною 1024px і більше контент оптимізовано для повноцінного використання простору. Використано сітку (grid layout) для рівномірного розподілу елементів, що дозволяє створити комфортний інтерфейс з великими кнопками, зображеннями та текстом.<br>

            Планшетна версія: Для екранів шириною від 768px до 1024px змінюється компонування контенту, зменшуючи розміри зображень та текстових блоків. Сітка переходить з 3 колонок на 2, що робить сторінку більш зручною для перегляду.<br>

            Мобільна версія: У версії для екранів шириною до 768px застосовано стратегію Mobile First. Сторінка переходить на одноколонну сітку, елементи розміщуються один під одним, меню стає вертикальним. Шрифти та кнопки зменшуються, що забезпечує комфортне використання на невеликих екранах.</p>`;
            break;
        default:
            content = '<p>Виберіть тему для відображення інформації.</p>';
    }

    return content;
}

function loadLab5Content(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `<p>Тема:  ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT
            <br> Мета: придбати практичні навички роботи з конструкціями мови JS, масивами та фугкціями у js-сценаріях.  Реалізація програм засовами мови JAVASCRIPT <br> Посилання на репозиторій власного WEB-застосунку: https://github.com/hannoveran/Laba5.git <br> Посилання на живу сторінку власного WEB-застосунку: https://hannoveran.github.io/Laba5/ <br> Посилання на репозиторій звітного HTML-документу: https://github.com/hannoveran/ReportDoc.git <br> Посилання на живу сторінку звітного HTML-документу: https://hannoveran.github.io/ReportDoc/</p>`;
            break;
        case 'btn2':
            content = `<p> <img src="images/L5/task1_code.png"> <br> <img src="images/L5/task1.png"> </p>`;
            break;
        case 'btn3':
            content = `<p> <img src="images/L5/task2_code.png"> <br> <img src="images/L5/task2.png"> </p>`;
            break;
        case 'btn4':
            content = `<p> <img src="images/L5/task3_code.png"> <br> <img src="images/L5/task3.png"> </p>`;
            break;
        case 'btn5':
            content = `<p> <img src="images/L5/task4.1_code.png"> <br> <img src="images/L5/task4.2_code.png"> <br> <img src="images/L5/task4.png"> </p>`;
            break;
        case 'btn6':
            content = `<p> <img src="images/L5/task5.1_code.png"> <br> <img src="images/L5/task5.2_code.png" width=700px> <br><img src="images/L5/task5.3_code.png"> <br> <img src="images/L5/task5.png"> </p>`;
            break;
        case 'btn7':
            content = `<p> Висновки: <br> У цій лабораторній роботі було досліджено функціональне застосування JavaScript у HTML-документі, зокрема роботу з масивами та взаємодію з елементами сторінки. Під час виконання завдань реалізовано обробку масивів (сортування, об'єднання, пошук), а також створення інтерактивного текстового редактора з можливістю форматування. </p>`;
            break;
        default:
            content = '<p>Виберіть тему для відображення інформації.</p>';
    }

    return content;
}

function loadLab6Content(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `<p>Тема:  ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ.
            <br> Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки.
            Реалізація програм засовами мови JAVASCRIPT
            <br> Посилання на репозиторій власного WEB-застосунку: https://github.com/hannoveran/Laba5.git <br> Посилання на живу сторінку власного WEB-застосунку: https://hannoveran.github.io/Laba5/ <br> Посилання на репозиторій звітного HTML-документу: https://github.com/hannoveran/ReportDoc.git <br> Посилання на живу сторінку звітного HTML-документу: https://hannoveran.github.io/ReportDoc/</p>`;
            break;
        case 'btn2':
            content = `<p> <img src="images/L6/task2_code.png"> <br> <img src="images/L6/task2.png"> </p>`;
            break;
        case 'btn3':
            content = `<p> <img src="images/L6/task4_code.png"> <br> <img src="images/L6/task4.png"> </p>`;
            break;
        case 'btn4':
            content = `<p> <img src="images/L6/task6_code.png"> <br> <img src="images/L6/task6.png"> </p>`;
            break;
        case 'btn5':
            content = `<p> <img src="images/L6/task8_code.png"> <br> <img src="images/L6/task8.png"> </p>`;
            break;
        case 'btn6':
            content = `<p> <img src="images/L6/task9_code.png"> <br> <img src="images/L6/task9.png"> </p>`;
            break;
        case 'btn7':
            content = `<p> <img src="images/L6/task10_code.png"> <br> <img src="images/L6/task10.png"> </p>`;
            break;
        case 'btn8':
            content = `<p> Висновки: <br> У цій лабораторній роботі було набуте практичне розуміння роботи з об'єктами та їх методами в JavaScript, а також навички маніпуляцій з масивами об'єктів. Особливу увагу було приділено деструктуризації об'єктів та використанню колбек-функцій, зокрема стрілочних функцій. Вивчено, як застосовувати стрілочні функції як колбеки для обробки даних у масивах та об'єктах. Завдання допомогли закріпити основи роботи з об'єктами, методами об'єктів, колбеками та стрілочними функціями, що є важливими аспектами у програмуванні на JavaScript. </p>`;
            break;
        default:
            content = '<p>Виберіть тему для відображення інформації.</p>';
    }

    return content;
}

function loadLab7Content(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `<p>Тема:  КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ. 
            <br> Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки.
            Реалізація програм засовами мови JAVASCRIPT

            <br> Посилання на репозиторій звітного HTML-документу: https://github.com/hannoveran/ReportDoc.git <br> Посилання на живу сторінку звітного HTML-документу: https://hannoveran.github.io/ReportDoc/</p>`;
            break;
        case 'btn2':
            content = `<div>
                <p>Завдання №2: </p>
                <input type="text" id="input1" placeholder="Перше поле">
                <input type="text" id="input2" placeholder="Друге поле">
                <button onclick="swapValues()">SWAP</button>
            </div>
            <br> <img src="images/L7/lab7_task2.png">`;
            break;
        case 'btn3':
            content = `<div>
                <p>Завдання №4: </p>
                <div id="resizableBox" style="width: 100px; height: 100px; background: lightblue;"></div>
                <button onclick="increaseSize()">Збільшити</button>
                <button onclick="decreaseSize()">Зменшити</button>
            </div>
            <br> <img src="images/L7/lab7_task4.png">`;
            break;
        case 'btn4':
            content = `<p>Завдання №6: </p>
                <ul id="numbersList">
                    <li>1</li>
                    <li>4</li>
                    <li>8</li>
                    <li>16</li>
                    <li>20</li>
                    <li>30</li>
                </ul>
                <button onclick="doubleValues()">Подвоїти</button>
                <br> <img src="images/L7/lab7_task6.png">`;
            break;
        case 'btn5':
            content = `<p>Завдання №7: </p>
                <ul id="categories">
                    <li class="item">
                        <h2>Animals</h2>
                        <ul>
                        <li>Cat</li>
                        <li>Hamster</li>
                        <li>Horse</li>
                        <li>Parrot</li>
                        </ul>
                    </li>
                    <li class="item">
                        <h2>Products</h2>
                        <ul>
                        <li>Bread</li>
                        <li>Prasley</li>
                        <li>Cheese</li>
                        </ul>
                    </li>
                    <li class="item">
                        <h2>Technologies</h2>
                        <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        </ul>
                    </li>
                </ul>
                <button onclick="showInformation()">Вивести інформацію</button>
                <br> <img src="images/L7/lab7_task7.png">`;
            break;
        case 'btn6':
            content = `
                <p>Завдання №8: </p>
                <form class="login-form">
                    <label>
                        Email
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" />
                    </label>
                    <button type="submit">Log in</button>
                </form>
            <br> <img src="images/L7/lab7_task8.png">`;
            setTimeout(loginFormCheck, 0); 
            break;
        case 'btn7':
            content = `<p>Завдання №9: </p>
                <div id="colorBox" style="width: 100px; height: 100px; background-color: grey;"></div>
                <button onclick="changeColor()">Change Color</button>
                <br> <img src="images/L7/lab7_task9.png">`;
            break;
        case 'btn8':
            content = `<p>Завдання №10: </p>
                <a href="lab7_task10.html">Task 10</a>
                <br> <img src="images/L7/lab7_task10.png">`;
            break;
        case 'btn9':
            content = `<p> Висновки: <br> У цій лабораторній роботі були набуті практичні навички роботи з об'єктами, методами об'єкта, Callback, стрілочними функціями, стрілочними функціями як колбеками. А також з реалізації програм засовами мови JAVASCRIPT </p>`;
            break;
        default:
            content = '<p>Виберіть тему для відображення інформації.</p>';
    }

    return content;
}


// lab7

//task2
function swapValues() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');

    [input1.value, input2.value] = [input2.value, input1.value];
}


//task4
function increaseSize() {
    const box = document.getElementById('resizableBox');
    const currentWidth = parseInt(box.style.width);
    box.style.width = (currentWidth + 15) + 'px';
    box.style.height = (currentWidth + 15) + 'px';
}

function decreaseSize() {
    const box = document.getElementById('resizableBox');
    const currentWidth = parseInt(box.style.width);
    if (currentWidth > 15) {
        box.style.width = (currentWidth - 15) + 'px';
        box.style.height = (currentWidth - 15) + 'px';
    }
}

//task6
function doubleValues() {
    const list = document.getElementById('numbersList');
    const items = list.querySelectorAll('li');
    items.forEach(item => {
        item.textContent = parseInt(item.textContent) * 2;
    });
}

//task7
function showInformation() {
    let categories = document.querySelectorAll('#categories .item');
    console.log(`Number of categories: ${categories.length}`);

    let categoriesContent = [...categories];
    categoriesContent.forEach((category) =>{
        console.log(`Category: ${category.querySelector('h2').innerText}`);
        console.log(`Elements: ${category.querySelectorAll('li').length}`);
    });
}

//task8
function loginFormCheck() {
    const loginForm = document.querySelector('.login-form'); 

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const email = loginForm.elements['email'].value.trim();
        const password = loginForm.elements['password'].value.trim();

        if (email === '' || password === '') {
            alert('All form fields must be filled in'); 
            return; 
        }

        const formData = {
            email: email,
            password: password,
        };

        console.log(formData);

        loginForm.reset();
    });
}

//task9
function changeColor() {
    const box = document.getElementById('colorBox');
    box.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

//task10



