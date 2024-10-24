import { IFinalResponse } from "../../../types/surveyResponse";

export const chapterOneDocumentGenerator = ({
  year,
  schoolName,
}: IFinalResponse): string => {
  const globalImagePath = `${process.env.BASE_URL}/src/lib/resources/chapter1/images`;

  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PPT to PDF</title>
</head>
<style>
    /* 
@page {
  size: A4 landscape;
  margin: 20mm;
}
 */
    body {
        height: 80vh !important;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* No width or height set on body */
    }

    .page {
        width: 297mm;
        height: 180mm;
        display: flex;
        justify-content: center;
        align-items: center;
        page-break-after: always;
        /* Ensure each "slide" starts on a new page in PDF */
        padding: 1rem;
    }

    .page:last-child {
        page-break-after: auto;
        /* No break after the last page */
    }

    /* First Page CSS*/

    .pageWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        page-break-after: always;
        /* Ensure each "slide" starts on a new page in PDF */
    }

    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .page_div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 530px;

    }

    .data_div {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .data_div_top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .data_div_bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    /* First Page CSS ends here*/

    /* Second Page CSS*/
    .secondPageFlex {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .secondPageData {
        padding-left: 1rem;
    }

    .dataItems {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
    }

    #textSection {
        padding-left: 10rem;
    }

    .footer {
        padding-top: 1rem;
        display: flex;
        flex-direction: row;
        /* background-color: red; */
        align-items: center;
        width: 100%;
        justify-content: flex-end !important;
    }

    .footerText {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-end;
    }

    #footerImage {
        padding-left: 17rem !important;
    }

    /* Second Page CSS Ends Here*/


    /* Third Page CSS*/
    .thirdPageFlex {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        /* background-color: green; */
    }

    .page3Items {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

    }

    .workshops {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* background-color: red; */
        justify-content: space-between;
        width: 33.33%;
        height: 61vh;
        padding-top: 3rem;
    }

    .titleWorkshop {
        width: 100%;
    }

    .unitWorkshop {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        /* background-color: green; */
    }

    .workDescription {
        width: 100%;
        text-align: left;
    }

    .workshopTitle {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        /* background-color: bisque; */
    }

    .mainFooter {
        padding-top: 3rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    /* Third Page CSS Ends Here*/


    /*Fourth Page CSS */

    .fourthPageFlex {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 5rem;
        width: 100%;
    }

    .centralFlex {
        display: flex;
        flex-direction: row;
        width: 100%;
        column-gap: 1rem;
    }

    .centralItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* background-color: red; */
        row-gap: 0.5rem;
        width: 33.33%;
    }

    .fourthPageHeader {
        display: flex;
        flex-direction: column;
        align-items: center !important;
        justify-content: center !important;
    }

    /*Fourth Page CSS ends here*/

    /*Fifth Page CSS Starts Here */
    .fifthPageFlex {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center !important;
        justify-content: center !important;
        /* background-color: red; */
        row-gap: 2rem;
    }

    .studentReview {
        display: flex;
        flex-direction: row;
        column-gap: 4rem;
    }

    .eachReview {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /*Fifth Page CSS ends here*/


    /*Sixth Page CSS Stars Here*/
    .sixthPageFlex {
        display: flex;
        flex-direction: row;
        justify-content: center;
        /* background-color: red; */
        align-items: center;
    }

    .sixthText {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        /* background-color: green; */
        row-gap: 9.5rem;

    }

    .textFlex {
        display: flex;
        flex-direction: row;
        column-gap: 10rem;
        font-weight: bold;
    }

    .mainSixthText {
        display: flex;
        flex-direction: column;
        /* background-color: aliceblue; */
        justify-content: center;
        align-items: center;
    }

    /*Sixth Page CSS ends here*/


    /*Seventh Page CSS starts here*/
    .seventhPageFlex {
        display: flex;
        flex-direction: column;
        row-gap: 5rem;
        justify-content: center;
        align-items: center;
    }

    .seventhMiddleImage {
        display: flex;
        flex-direction: row;
        column-gap: 2rem;
        justify-content: center;
        align-items: center;
    }

    #seventhPercentage {
        padding-top: 3rem;
    }

    .seventhImageAndText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        row-gap: 1rem;
    }

    /* Page 7 and 8 CSS ends here */

    .ninthPage {
        display: block;
        position: absolute;
    }

    .ninthPageText {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
        color: white;
    }


    /* Page 9 CSS ends here */


    /* Page 10 CSS begins here */
    .tenthPageFlex {
        /* background-color: red; */
        display: flex;
        flex-direction: column;
        row-gap: 4rem;
        align-items: center;
        justify-content: center;
    }

    .tenthMiddleItems {
        display: flex;
        flex-direction: row;
        column-gap: 2rem;
        justify-content: center;
        align-items: center;
    }

    .tenthTexts {
        display: flex;
        flex-direction: column;
        row-gap: 3rem;
        width: 33.33%;
    }

    .tenthText {
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
        width: 100%;
        text-align: justify;
    }

    #tenthImage {
        width: 400px;
        height: 400px;
        border-radius: 50%;

    }

    .topText {
        /* background-color: green; */
        font-size: 2rem;
    }

    #tenthBoldText {
        font-weight: bold;
    }


    /*CSS similar to 7th Page for 11th */

    /*CSS similar to 5th Page for 12th */

    /*CSS similar to 10th Page for 17th */
    #seventeenth {
        row-gap: 10rem;
    }
</style>

<body>
    <!--Page 1-->
    <div class="pageWrapper">
        <div class="page"> <!--Page-->
            <div class="page_div">
            
                <img src="${globalImagePath}/image.png" width="50%">

                <div class="data_div">

                    <div class="data_div_top">
                        <h1>CHAPTER X REPORT</h1>
                        <h3>LEEP XTH GRADE</h3>
                    </div>

                    <div class="data_div_bottom">
                        <h1>SCHOOL NAME</h1>
                        <h1>SCHOOL YEAR ${year}|${year}</h1>
                    </div>

                </div>
            </div>
            <!-- <div class="footer">
        <h3>School Name</h3>
        <h3>Graphics</h3>
    </div>
     -->
        </div>
    </div> <!--PageEnd-->

    <!--Page 2-->

    <div class="pageWrapper">
        <div class="page">
            <div class="secondPageFlex">
                <img src="${globalImagePath}/image2.png" width="50%">

                <div class="secondPageData">
                    <h2> STUDENT LEEP EXPERIENCE BY GRADE </h2>

                    <div class="dataItems">
                        <h3>9<sup>TH</sup></h3>
                        <h3>ASSIMILATION PHASE & THEME</h3>
                    </div>

                    <span class="dataItems" id="textSection">
                        Designed to helps students create a plan to make their transition from middle school to high
                        school smooth and successful, giving them the support and skills they need to start their
                        journey confidence!
                    </span>

                    <div class="dataItems">
                        <h3>10<sup>TH</sup></h3>
                        <h3>EXPLORATION PHASE & THEME</h3>
                    </div>

                    <span class="dataItems" id="textSection">
                        Designed to introduce, teach, and explore different types of post-secondary options for
                        students, helping them discover the best paths for their future after high school.
                    </span>

                    <div class="dataItems">
                        <h3>11<sup>TH</sup></h3>
                        <h3>INTERACTION PHASE & THEME</h3>
                    </div>

                    <span class="dataItems" id="textSection">
                        Designed to boost students' preparation, engagement, and confidence when interacting with
                        colleges and employers, ensuring they feel ready and self-assured as they explore future
                        opportunities.
                    </span>

                    <div class="dataItems">
                        <h3>12<sup>TH</sup></h3>
                        <h3>PREPARATION PHASE & THEME</h3>
                    </div>

                    <span class="dataItems" id="textSection">
                        Designed to help students create a clear plan of action for a smooth transition from high school
                        to their chosen post-secondary options, ensuring they are well-prepared for the next chapter of
                        their journey.
                    </span>

                    <div class="dataItems">
                        <div class="footer">
                            <div>
                                <img id="footerImage" src="${globalImagePath}/footerImg.png" alt="Leep" width="40%">
                            </div>
                            <div class="footerText">
                                <span>POWERED BY</span>
                                <span>OPEN MY NETWORK</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>

    <!--Page3-->
    <div class="pageWrapper">
        <div class="page">
            <div class="thirdPageFlex">
                <div>9<sup>TH</sup> GRADE DATA REPORT</div>
                <div> Chapter1 - INTRODUCTION TOWARDS GREATNESS</div>

                <div class="page3Items">
                    <img src="${globalImagePath}/qmark.png" width="33.33%">

                    <div class="workshops">

                        <div class="unitWorkshop">
                            <div class="workshopTitle">
                                <img src="${globalImagePath}/diamond.png">
                                <span>Workshop 01</span>
                            </div>
                            <div class="titleWorkshop">
                                TITLE OF THE WORKSHOP
                            </div>
                            <div class="workDescription">
                                Description
                            </div>
                        </div>

                        <div class="unitWorkshop">
                            <div class="workshopTitle">
                                <img src="${globalImagePath}/diamond.png">
                                <span>Workshop 02</span>
                            </div>
                            <div class="titleWorkshop">
                                TITLE OF THE WORKSHOP
                            </div>
                            <div class="workDescription">
                                Description
                            </div>
                        </div>

                        <div class="unitWorkshop">
                            <div class="workshopTitle">
                                <img src="${globalImagePath}/diamond.png">
                                <span>Workshop 03</span>
                            </div>
                            <div class="titleWorkshop">
                                TITLE OF THE WORKSHOP
                            </div>
                            <div class="workDescription">
                                Description
                            </div>
                        </div>

                    </div>

                    <div class="workshops">

                        <div class="unitWorkshop">
                            <div class="workshopTitle">
                                <img src="${globalImagePath}/diamond.png">
                                <span>Workshop 01</span>
                            </div>
                            <div class="titleWorkshop">
                                TITLE OF THE WORKSHOP
                            </div>
                            <div class="workDescription">
                                Description
                            </div>
                        </div>

                        <div class="unitWorkshop">
                            <div class="workshopTitle">
                                <img src="${globalImagePath}/diamond.png">
                                <span>Workshop 02</span>
                            </div>
                            <div class="titleWorkshop">
                                TITLE OF THE WORKSHOP
                            </div>
                            <div class="workDescription">
                                Description
                            </div>
                        </div>

                        <div class="unitWorkshop">
                            <div class="workshopTitle">
                                <img src="${globalImagePath}/diamond.png">
                                <span>Workshop 03</span>
                            </div>
                            <div class="titleWorkshop">
                                TITLE OF THE WORKSHOP
                            </div>
                            <div class="workDescription">
                                Description
                            </div>
                        </div>

                    </div>

                </div>
                <div class="mainFooter">

                    <div class="name">
                        SCHOOL NAME
                    </div>

                    <div class="photoText"
                        style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                        <img src="${globalImagePath}/footerImg.png" width="30%">
                        <div style="display: flex; flex-direction: column;">
                            <div>POWERED BY</div>
                            <div>OPEN MY NETWORK</div>
                        </div>
                    </div>
                </div>


            </div>

        </div>

    </div>
    <!--Page 3 Ends Here-->

    <div class="pageWrapper">
        <div class="page">

            <div class="fourthPageFlex">
                <div class="fourthPageHeader">
                    <div>
                        <h1>9<sup>TH</sup> GRADE LEVEL OF SUPPORT FOR TRANSISITON</h1>
                    </div>
                    <div style="text-align: center; font-size: large;">
                        We asked students to rate their confidence and support level when transitioning to high school
                        on a scale from 1 to 10, with 1 being the lowest level of support and 10 being the highest
                    </div>
                </div>

                <div class="centralFlex">

                    <div class="centralItem">
                        <img src="${globalImagePath}/p3_1.png" width="50%">

                        <div style="font-weight: bold;">LEEP SCHOOLS THIS YEAR</div>
                        <div style="font-weight: bold;">(20XX)</div>

                        <div style="text-align: center;">
                            On average, students across LEEP schools rated their confidence and support level
                        </div>

                        <div style="font-weight: bold;">X</div>

                    </div>

                    <div class="centralItem">
                        <img src="${globalImagePath}/p3_2.png" width="50%">

                        <div style="font-weight: bold;">FEELING FROM YOUR STUDENTS </div>
                        <div style="font-weight: bold;">(20XX)</div>

                        <div style="text-align: center;">
                            On average, your students rated their confidence and support level
                        </div>

                        <div style="font-weight: bold;">X</div>

                    </div>

                    <div class="centralItem">
                        <img src="${globalImagePath}/p3_3.png" width="50%">

                        <div style="font-weight: bold;">PERCENTAGE OF STUDENTS </div>

                        <div style="text-align: center;">
                            At your school, X% of students participated in the survey, giving us valuable insights into
                            their experiences transitioning to high school
                        </div>
                    </div>

                </div>

                <div class="mainFooter">

                    <div class="name">
                        SCHOOL NAME
                    </div>

                    <div class="photoText"
                        style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                        <img src="${globalImagePath}/footerImg.png" width="30%">
                        <div style="display: flex; flex-direction: column;">
                            <div>POWERED BY</div>
                            <div>OPEN MY NETWORK</div>
                        </div>
                    </div>
                </div>


            </div>


        </div>

    </div>

    <!--Page 4 Ends Here-->

    <div class="pageWrapper">
        <div class="page">

            <div class="fifthPageFlex">

                <div style="font-size: x-large; font-weight: bold;"> HOW YOUR STUDENTS ASSESSED THEIR NEW HIGH SCHOOL
                    EXPERIENCE</div>


                <div style="text-align: center;">
                    THE FOCUS WAS ON ORIENTATION & FIRST WEEK OF HIGH SCHOOL EXPERIENCE WHERE STUDENTS REFLECTED ON
                    THEIR INITIAL EXPERIENCES AND FIRST IMPRESSION
                </div>


                <img src="${globalImagePath}/p4.png" width="100%">

                <div class="studentReview">
                    <div class="eachReview">
                        <div> NOT HAPPY WITH IT</div>
                        <div>X</div>
                    </div>

                    <div class="eachReview">
                        <div> SOMEWHAT DISAPPOINTED</div>
                        <div>X</div>
                    </div>

                    <div class="eachReview">
                        <div> NEUTRAL </div>
                        <div>X</div>
                    </div>

                    <div class="eachReview">
                        <div> MET MY EXPECTATION </div>
                        <div>X</div>
                    </div>

                    <div class="eachReview">
                        <div> EXCEEDED MY EXPECTATION</div>
                        <div>X</div>
                    </div>


                </div>



                <div class="mainFooter">

                    <div class="name">
                        SCHOOL NAME
                    </div>

                    <div class="photoText"
                        style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                        <img src="${globalImagePath}/footerImg.png" width="30%">
                        <div style="display: flex; flex-direction: column;">
                            <div>POWERED BY</div>
                            <div>OPEN MY NETWORK</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>


    <!--Page 5 Ends Here-->

    <div class="pageWrapper">
        <div class="page">

            <div class="sixthPageFlex">

                <img src="${globalImagePath}/p6.png" width="90%">

                <div class="sixthText">
                    <div style="text-align: left; font-weight: bold; font-size: large;">
                        Here are the top two things that excite your students, the "Cheers," and the top two things that
                        concern them, the "Fears," when leaving middle school and entering high school
                    </div>


                    <div class="textFlex">
                        <div class="mainSixthText">
                            <div>
                                CHEER #1
                            </div>
                            <div>
                                xxxxxxx
                            </div>
                        </div>

                        <div class="mainSixthText">
                            <div>
                                CHEER #2
                            </div>
                            <div>
                                xxxxxxx
                            </div>
                        </div>

                    </div>


                    <div class="textFlex">
                        <div class="mainSixthText">
                            <div>
                                CHEER #1
                            </div>
                            <div>
                                xxxxxxx
                            </div>
                        </div>

                        <div class="mainSixthText">
                            <div>
                                CHEER #2
                            </div>
                            <div>
                                xxxxxxx
                            </div>
                        </div>

                    </div>
                    <div style="padding-left: 10rem; font-size: x-small;">
                        SCHOOL NAME|TEACHER NAME
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!--Page 6 Ends Here-->


    <div class="pageWrapper">
        <div class="page">

            <div class="seventhPageFlex">
                <div style="font-size: large; font-weight: bold;">
                    Here’s who or what influenced your students' decision to choose your school or to attend high school
                    in general, based on the percentage of students who responded:
                </div>

                <div class="seventhMiddleImage">

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p7_1.png" width="100%">
                        <div>FAMILY MEMBERS OR GUARDIANS </div>
                        <div id="seventhPercentage">X%</div>
                    </div>

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p7_2.png" width="100%">
                        <div>FRIENDS OR PEERS ATTENDING THE SAME SCHOOL </div>
                        <div id="seventhPercentage">X%</div>
                    </div>

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p7_3.png" width="100%">
                        <div>INSPIRATIONAL TEACHERS, MENTORS, SCHOOL STAFF </div>
                        <div id="seventhPercentage">X%</div>
                    </div>

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p7_4.png" width="100%">
                        <div>PERSONAL GOALS AND ASPIRATIONS </div>
                        <div id="seventhPercentage">X%</div>
                    </div>

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p7_5.png" width="100%">
                        <div>PERSONAL EXPERIENCES OR CHALLENGES </div>
                        <div id="seventhPercentage">X%</div>
                    </div>

                </div>

                <div class="mainFooter">

                    <div class="name">
                        SCHOOL NAME | TEACHER NAME
                    </div>

                    <div class="photoText"
                        style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                        <img src="${globalImagePath}/footerImg.png" width="30%">
                        <div style="display: flex; flex-direction: column;">
                            <div>POWERED BY</div>
                            <div>OPEN MY NETWORK</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!--Page 7 Ends Here-->

    <div class="pageWrapper">
        <div class="page">

            <div class="seventhPageFlex">
                <div style="font-size: large; font-weight: bold;">
                    Here’s who or what your students think will help them finish high school, based on the percentage of
                    students who responded: </div>

                <div class="seventhMiddleImage">

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p7_1.png" width="100%">
                        <div>FAMILY MEMBERS OR GUARDIANS </div>
                        <div id="seventhPercentage">X%</div>
                    </div>

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p7_2.png" width="100%">
                        <div>FRIENDS OR PEERS ATTENDING THE SAME SCHOOL </div>
                        <div id="seventhPercentage">X%</div>
                    </div>

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p7_3.png" width="100%">
                        <div>INSPIRATIONAL TEACHERS, MENTORS, SCHOOL STAFF </div>
                        <div id="seventhPercentage">X%</div>
                    </div>

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p7_4.png" width="100%">
                        <div>PERSONAL GOALS AND ASPIRATIONS </div>
                        <div id="seventhPercentage">X%</div>
                    </div>

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p7_5.png" width="100%">
                        <div>PERSONAL EXPERIENCES OR CHALLENGES </div>
                        <div id="seventhPercentage">X%</div>
                    </div>

                </div>

                <div class="mainFooter">
                    <div class="name">
                        SCHOOL NAME | TEACHER NAME
                    </div>

                    <div class="photoText"
                        style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                        <img src="${globalImagePath}/footerImg.png" width="30%">
                        <div style="display: flex; flex-direction: column;">
                            <div>POWERED BY</div>
                            <div>OPEN MY NETWORK</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!--Page 8 Ends Here-->

    <div class="pageWrapper">
        <div class="page">
            <div class="ninthPage">
                <img src="${globalImagePath}/p9.png">
            </div>
            <div class="ninthPageText">
                <h1>
                    HOW YOUR 9<sup>TH</sup> GRADERS PLAN TO SPEND THEIR TIME
                </h1>
                <h3>
                    Student shared how they plan to spend most their time to be successful in high school
                </h3>

            </div>
        </div>
    </div>


    <!--Page 9 Ends Here-->

    <div class="pageWrapper">
        <div class="page">

            <div class="tenthPageFlex">
                <div class="topText">
                    Here’s how your 9th graders plan to spend their time this year
                </div>

                <div class="tenthMiddleItems">

                    <div class="tenthTexts">

                        <div class="tenthText">
                            <div id="tenthBoldText">
                                % of Students
                            </div>
                            <div>
                                plan to get to know teachers and counselors better to help them succeed in high school
                            </div>
                        </div>

                        <div class="tenthText">
                            <div id="tenthBoldText">
                                % of Students
                            </div>
                            <div>
                                Identifying habits, they think they need to change or improve to help them succeed in
                                high school </div>
                        </div>

                        <div class="tenthText">
                            <div id="tenthBoldText">
                                % of Students
                            </div>
                            <div>
                                Exploring extracurricular activities outside the classroom they are you interested in,
                                and think will help them succeed in high school? </div>
                        </div>

                    </div>


                    <img src="${globalImagePath}/p9.png" id="tenthImage">

                    <div class="tenthTexts">

                        <div class="tenthText">
                            <div id="tenthBoldText">
                                % of Students
                            </div>
                            <div>
                                Plan to organize and focus on study plan that will help them succeed in high school
                            </div>
                        </div>

                        <div class="tenthText">
                            <div id="tenthBoldText">
                                % of Students
                            </div>
                            <div>
                                Not certain or haven't thought seriously about their plans for high school success yet
                            </div>
                        </div>


                    </div>


                </div>
                <div class="mainFooter">
                    <div class="name">
                        SCHOOL NAME | TEACHER NAME
                    </div>

                    <div class="photoText"
                        style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                        <img src="${globalImagePath}/footerImg.png" width="30%">
                        <div style="display: flex; flex-direction: column;">
                            <div>POWERED BY</div>
                            <div>OPEN MY NETWORK</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>


    <!--Page 10 Ends Here-->

    <div class="pageWrapper">
        <div class="page">

            <div class="seventhPageFlex">
                <div style="font-size: 1.5rem; font-weight: bold;">
                    Here’s the aspect your students anticipate needing the most support in to be successful in high
                    school: </div>

                <div class="seventhMiddleImage">

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p11_1.png" width="100%">
                        <div>RELATIONSHIPS </div>
                        <div>Building relationships with the school community (teachers, counselors, classmates etc.)
                        </div>
                        <div id="seventhPercentage">X% of Students</div>
                    </div>

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p11_2.png" width="100%">
                        <div> PLANNING </div>
                        <div>Developing effective study and time management plans </div>
                        <div id="seventhPercentage">X% of Students</div>
                    </div>

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p11_3.png" width="100%">
                        <div>CHANGE</div>
                        <div>Breaking old habits and managing all this new change </div>
                        <div id="seventhPercentage">X% of Students</div>
                    </div>

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p11_4.png" width="100%">
                        <div>FOCUS</div>
                        <div>Becoming or staying organized and focus on success in each grade </div>
                        <div id="seventhPercentage">X% of Students</div>
                    </div>

                    <div class="seventhImageAndText">
                        <img src="${globalImagePath}/p11_5.png" width="100%">
                        <div>AWARENESS</div>
                        <div>Identifying and participating in extracurricular activities outside of the classroom </div>
                        <div id="seventhPercentage">X% of Students</div>
                    </div>

                </div>

                <div class="mainFooter">

                    <div class="name">
                        SCHOOL NAME | TEACHER NAME
                    </div>

                    <div class="photoText"
                        style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                        <img src="${globalImagePath}/footerImg.png" width="30%">
                        <div style="display: flex; flex-direction: column;">
                            <div>POWERED BY</div>
                            <div>OPEN MY NETWORK</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!--Page 11 Ends Here-->
    <div class="pageWrapper">
        <div class="page">

            <div class="fifthPageFlex">

                <div style="font-size: x-large; font-weight: bold;"> Here’s how your students rate their overall
                    experience within their first <span style="color: green;">30</span> days in high school:</div>


                <img src="${globalImagePath}/p4.png" width="100%">

                <div class="studentReview">
                    <div class="eachReview">
                        <div>POOR</div>
                        <div>% FOR ANSWER A</div>
                    </div>

                    <div class="eachReview">
                        <div>BELOW AVERAGE</div>
                        <div>% FOR ANSWER B</div>
                    </div>

                    <div class="eachReview">
                        <div> AVERAGE </div>
                        <div>% FOR ANSWER C</div>
                    </div>

                    <div class="eachReview">
                        <div> ABOVE AVERAGE </div>
                        <div>% FOR ANSWER D</div>
                    </div>

                    <div class="eachReview">
                        <div> EXCELLENT</div>
                        <div>% FOR ANSWER E</div>
                    </div>


                </div>
            </div>
        </div>
    </div>

    <!--Page 12 Ends Here-->


    <!--Page 17 Starts Here-->

    <div class="pageWrapper">
        <div class="page">

            <div class="tenthPageFlex">
                <div class="topText" style="display: flex; align-items: center; flex-direction: column;">
                    <div>LEEP CHAPTER RECOMMENDATIONS </div>
                    <div style="font-size: 1rem;">9TH GRADE CHAPTER #1 </div>
                </div>

                <div class="tenthMiddleItems">

                    <div class="tenthTexts" id="seventeenth">

                        <div class="tenthText">
                            <div id="tenthBoldText">
                                RECOMMENDATION 1
                            </div>
                            <div>
                                Green marketing is a practice whereby companies seek to go above.
                            </div>
                        </div>


                        <div class="tenthText">
                            <div id="tenthBoldText">
                                RECOMMENDATION 3
                            </div>
                            <div>
                                Green marketing is a practice whereby companies seek to go above. </div>
                        </div>

                    </div>



                    <div class="tenthTexts" id="seventeenth">

                        <div class="tenthText">
                            <div id="tenthBoldText">
                                RECOMMENDATION 2 </div>
                            <div>
                                Green marketing is a practice whereby companies seek to go above. </div>
                        </div>

                        <div class="tenthText">
                            <div id="tenthBoldText">
                                RECOMMENDATION 4
                            </div>
                            <div>
                                Green marketing is a practice whereby companies seek to go above. </div>
                        </div>


                    </div>

                    <img src="${globalImagePath}/p17.png" id="tenthImage">

                </div>
                <div class="mainFooter">
                    <div class="name">
                        SCHOOL NAME | TEACHER NAME
                    </div>

                    <div class="photoText"
                        style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                        <img src="${globalImagePath}/footerImg.png" width="30%">
                        <div style="display: flex; flex-direction: column;">
                            <div>POWERED BY</div>
                            <div>OPEN MY NETWORK</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>





</body>

</html>
  `;
};
