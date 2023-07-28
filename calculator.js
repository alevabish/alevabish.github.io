
    //Добавить фичу обратного расчета: сколько у тебя есть времени, какой твой старт-финиш и сколько часов в неделю тебе надо практиковаться

         const MapOfLevels = new Map ([
                     ['starter', 0],
                     ['A1', 100],
                     ['A2', 250],
                     ['B1', 490],
                     ['B2', 750],
                     ['C1', 1050],
                     ['C2', 1450],
                    ]);
                    console.log('The script is ready to process the data. To reach C1 level from starter level you need to learn ' + MapOfLevels.get('C1') + ' hours');

                function handleFormSubmit(event) {

                  let startlvl1 = document.getElementById("current lvl").options[document.getElementById("current lvl").selectedIndex].text;
                       const startlvl = MapOfLevels.get(startlvl1);
                       let targetlvl1 = document.getElementById("target lvl").options[document.getElementById("target lvl").selectedIndex].text;
                       const targetlvl = MapOfLevels.get(targetlvl1);
                       const les_learnt_in_current_lvl = Number(document.getElementById("lessons attended").value);
                       console.log("les_learnt_in_current_lvl: " + les_learnt_in_current_lvl);

                   if (startlvl>=targetlvl){
                                    let warning =`Start level cannot be higher than target level. Try again.`;
                                    document.getElementById(`result`).innerHTML=warning;
                                    }
                   else if(les_learnt_in_current_lvl<0||les_learnt_in_current_lvl>1450){
                   let warning =`The number of attended lessons must be within the range of 0 to 1450. Try again.`;
                                                       document.getElementById(`result`).innerHTML=warning;
                   }
                   else{
                     const times_a_week = Number(document.getElementById("Times a week").options[document.getElementById("Times a week").selectedIndex].text);
                     console.log("Times a week: " + times_a_week);
                     const lesson_length = Number(document.getElementById("Lesson length").options[document.getElementById("Lesson length").selectedIndex].text);
                     console.log("lesson length selected:" + lesson_length);
                     const hwh=Number(document.getElementById("Homework").options[document.getElementById("Homework").selectedIndex].text);
                     console.log("homework volume selected: " + hwh);


                     calculator(startlvl, targetlvl, les_learnt_in_current_lvl, lesson_length, times_a_week, hwh);
         }
         }

                function calculator (startlvl, targetlvl, les_learnt_in_current_lvl, lesson_length, times_a_week, hwh){

                console.log('Processing the result using the following input...\n startlvl: '  + startlvl +
                ',\ntargetlvl: ' + targetlvl + ',\nHours learnt in current lvl ' + les_learnt_in_current_lvl +
                ',\nLesson_length ' + lesson_length + ',\ntimes_a_week ' + times_a_week + ',\nhwh ' + hwh);

                    let hours = targetlvl - startlvl -
                 ((les_learnt_in_current_lvl*lesson_length) + (les_learnt_in_current_lvl*hwh));
                    let result;
                    if(hours<=0){
                    result=`You have already reached your level. Congrats!`;
                    }
                    else{
                    let total_lessons=hours/(lesson_length + hwh);

                    console.log("Total hours to study: " + hours);
                    console.log("Lessons to attend: " + total_lessons);

                    let total_months=total_lessons/times_a_week/4;
                    let total_years=total_months/12;

                    console.log("Total months of studies: " + total_months);
                    console.log("Total years of studies: " + total_years);
                  result =
                  `Total hours to study: ${hours.toFixed(2)},<br>
                  Lessons to attend: ${total_lessons.toFixed(2)},<br>
                  Total months of studies: ${total_months.toFixed(2)},<br>
                  Total years of studies: ${total_years.toFixed(2)}.`;


                    }
                    document.getElementById(`result`).innerHTML=result;
                    }




         let currentPage = 0;
         const pages = document.querySelectorAll(".page");

         function nextPage() {

           if (currentPage == 0) {
           console.log(currentPage);
             pages[0].style.display = "none";

           console.log(currentPage);
             currentPage++;

           console.log(currentPage);
             pages[1].style.display = "block";

           console.log(currentPage);
            handleFormSubmit();
           }
           }

         function prevPage() {
         if (currentPage == 1) {

           console.log(currentPage);
             pages[1].style.display = "none";

           console.log(currentPage);
             currentPage--;

           console.log(currentPage);
             pages[0].style.display = "block";

           console.log(currentPage);
           }
         }
