
let selectedLab = null;

//Вибір лабораторної роботи
function selectLab(labNumber) {
    selectedLab = labNumber;
    console.log(`Лабораторна робота №${labNumber} обрана.`);
    document.querySelector('.output').innerHTML = `<p>Лабораторна робота №${labNumber} обрана.</p>`;

    sidebarButtons(labNumber);
}

function sidebarButtons(labNumber){
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
        
        default:
            buttonsHTML = '<li><p>Немає інформації для цієї лабораторної роботи</p></li>';
    }

    sidebar.innerHTML = buttonsHTML;

    document.querySelectorAll('aside button').forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(`Кнопка з ідентифікатором ${event.target.id} була натиснута.`);
            content_load(event.target.id);
        });
    });
}

//Завантаження вмісту
function content_load(buttonId) {
    console.log(`Натиснута кнопка: ${buttonId}`);

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
            content = `<p>Способи підключення стилів: <br> <img src="images/L2/стилі.png"> </p>`;
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

// document.querySelectorAll('aside button').forEach(button => {
//     button.addEventListener('click', (event) => {
//         console.log(`Кнопка з ідентифікатором ${event.target.id} була натиснута.`);
//         content_load(event.target.id);
//     });
// });

