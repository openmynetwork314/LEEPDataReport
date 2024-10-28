import express, { Request, Response, NextFunction } from "express";
import { connection } from "../../database/connect";
import fs from "fs";
import { week1All, week1Filter } from "../../queries/week1";
import week2 from "../../queries/week2";
import week3 from "../../queries/week3";
import week4 from "../../queries/week4";
import { IFinalResponse, SurveyResponse } from "../../types/surveyResponse";
import {
  week1Question1Responses,
  calculateAverageConfidence,
  week1Question5Responses,
} from "../../controllers/week1Controller";
import { runQuery } from "../../controllers/commonController";
import {
  week2Question1Responses,
  week2Question2Responses,
  week2Question6Responses,
} from "../../controllers/week2Controller";
import {
  week4Question1Responses,
  week4Question2Responses,
  week4Question5Responses,
  week4Question3Responses,
  week4Question4Responses,
} from "../../controllers/week4Controller";
import { pdfGenerate } from "../../infra/pdf/pdfGenerate";
import { chapterOneDocumentGenerator } from "./helpers/ChapterOneDocumentGenerator";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const grade = "Grade 9";
    const schoolName = "School One";

    const [week1QueryAll, week1FilterQuery, week2Query, week4Query] =
      await Promise.all([
        runQuery(week1All, []),
        runQuery(week1Filter, [grade, schoolName]),
        runQuery(week2, [grade, schoolName]),
        runQuery(week4, [grade, schoolName]),
      ]);

    //Calculation of total response for each option for week1 question1 for all schools
    const week1Q1Response = week1Question1Responses(week1QueryAll);

    //Calculation of average response for all schools
    const schoolAverage = calculateAverageConfidence(week1Q1Response);

    //Calculation of total response for each option for week1 question1 for a school
    const week1Q1Response1 = week1Question1Responses(week1FilterQuery);

    //Calculation of average response for a school
    const filterSchoolAverage = calculateAverageConfidence(week1Q1Response1);

    //Calculation of total response for each option for week1 question5 for a school
    const week1Q5Response = week1Question5Responses(week1FilterQuery);
    // Destructuring the array
    const [, weekOneQ5OptionOne] = week1Q5Response[0];
    const [, weekOneQ5OptionTwo] = week1Q5Response[1];
    const [, weekOneQ5OptionThree] = week1Q5Response[2];
    const [, weekOneQ5OptionFour] = week1Q5Response[3];
    const [, weekOneQ5OptionFive] = week1Q5Response[4];

    //Calculation of total response for each option for week2 question1 for a school
    const week2Q1Response = week2Question1Responses(week2Query);

    // Sort the array in descending order based on the response count
    const sortedResponses1 = week2Q1Response.slice().sort((a, b) => b[1] - a[1]);

    // Get the top two options
    const cheerOne = sortedResponses1[0][0].split(") ")[1];
    const cheerTwo = sortedResponses1[1][0].split(") ")[1];

    //Calculation of total response for each option for week2 question2 for a school
    const week2Q2Response = week2Question2Responses(week2Query);

     // Sort the array in descending order based on the response count
    const sortedResponses2 = week2Q2Response.slice().sort((a, b) => b[1] - a[1]);

     // Get the top two options
    const fearOne = sortedResponses2[0][0].split(") ")[1];
    const fearTwo = sortedResponses2[1][0].split(") ")[1];

    //Calculation of total response for each option for week2 question6 for a school
    const week2Q6Response = week2Question6Responses(week2Query);

     // Destructuring the array
     const [, weekTwoQ6OptionOne] = week2Q6Response[0];
     const [, weekTwoQ6OptionTwo] = week2Q6Response[1];
     const [, weekTwoQ6OptionThree] = week2Q6Response[2];
     const [, weekTwoQ6OptionFour] = week2Q6Response[3];
     const [, weekTwoQ6OptionFive] = week2Q6Response[4];

    //Week2 Analysis Query Run to get data of all schools
    const week4Q1Response = week4Question1Responses(week4Query);

    // Destructuring each option into variables
    const [
      [, , weekFourQ1OptionOne],
      [, , weekFourQ1OptionTwo],
      [, , weekFourQ1OptionThree],
      [, , weekFourQ1OptionFour],
      [, , weekFourQ1OptionFive]
    ] = week4Q1Response;

    const week4Q1ResponseSorted = week4Q1Response.slice().sort((a, b) => b[2] - a[2]);

    const [
      [, recommendationOne, ],
      [, , ],
      [, , ],
      [, , ],
      [, , ]
    ] = week4Q1ResponseSorted;

    const week4Q2Response = week4Question2Responses(week4Query);

      // Destructuring each option into variables
    const [
      [, , weekFourQ2OptionOne],
      [, , weekFourQ2OptionTwo],
      [, , weekFourQ2OptionThree],
      [, , weekFourQ2OptionFour],
      [, , weekFourQ2OptionFive]
    ] = week4Q2Response;

    const week4Q2ResponseSorted = week4Q2Response.slice().sort((a, b) => b[2] - a[2]);

    const [
      [, recommendationTwo, ],
      [, , ],
      [, , ],
      [, , ],
      [, , ]
    ] = week4Q2ResponseSorted;

    const week4Q3Response = week4Question3Responses(week4Query);

    const week4Q3ResponseSorted = week4Q3Response.slice().sort((a, b) => b[2] - a[2]);

    const [
      [, recommendationThree, ],
      [, , ],
      [, , ],
      [, , ],
      [, , ]
    ] = week4Q3ResponseSorted;

    const week4Q4Response = week4Question4Responses(week4Query);

    const week4Q4ResponseSorted = week4Q4Response.slice().sort((a, b) => b[2] - a[2]);

    const [
      [, recommendationFour, ],
      [, , ],
      [, , ],
      [, , ],
      [, , ]
    ] = week4Q4ResponseSorted;

    const week4Q5Response = week4Question5Responses(week4Query);
    // Destructuring each option into variables
    const [
      [, weekFourQ5OptionOne],
      [, weekFourQ5OptionTwo],
      [, weekFourQ5OptionThree],
      [, weekFourQ5OptionFour],
      [, weekFourQ5OptionFive]
    ] = week4Q5Response;

    const finalValueObject: IFinalResponse = {
      year: "2024",
      schoolName: schoolName,
      averageAll: schoolAverage,
      averageSchool: filterSchoolAverage ,
      weekOneQ5OptionOne : weekOneQ5OptionOne ,
      weekOneQ5OptionTwo : weekOneQ5OptionTwo,
      weekOneQ5OptionThree : weekOneQ5OptionThree,
      weekOneQ5OptionFour: weekOneQ5OptionFour,
      weekOneQ5OptionFive : weekOneQ5OptionFive,
      cheerOne: cheerOne ,
      cheerTwo: cheerTwo,
      fearOne: fearOne ,
      fearTwo: fearTwo,
      weekTwoQ6OptionOne: weekTwoQ6OptionOne ,
      weekTwoQ6OptionTwo : weekTwoQ6OptionTwo , 
      weekTwoQ6OptionThree: weekTwoQ6OptionThree, 
      weekTwoQ6OptionFour: weekTwoQ6OptionFour, 
      weekTwoQ6OptionFive: weekTwoQ6OptionFive,
      weekFourQ1OptionOne : weekFourQ1OptionOne ,
      weekFourQ1OptionTwo : weekFourQ1OptionTwo ,
      weekFourQ1OptionThree : weekFourQ1OptionThree,
      weekFourQ1OptionFour: weekFourQ1OptionFour,
      weekFourQ1OptionFive : weekFourQ1OptionFive,
      weekFourQ2OptionOne: weekFourQ2OptionOne,
      weekFourQ2OptionTwo: weekFourQ2OptionTwo,
      weekFourQ2OptionThree: weekFourQ2OptionThree,
      weekFourQ2OptionFour: weekFourQ2OptionFour,
      weekFourQ2OptionFive: weekFourQ2OptionFive,
      weekFourQ5OptionOne: weekFourQ5OptionOne,
      weekFourQ5OptionTwo: weekFourQ5OptionTwo,
      weekFourQ5OptionThree: weekFourQ5OptionThree,
      weekFourQ5OptionFour: weekFourQ5OptionFour,
      weekFourQ5OptionFive: weekFourQ5OptionFive,
      recommendationOne: recommendationOne,
      recommendationTwo: recommendationTwo,
      recommendationThree: recommendationThree,
      recommendationFour: recommendationFour,
  
    };

    // temp code , left to manage
    await pdfGenerate({
      htmlContent: chapterOneDocumentGenerator(finalValueObject),
      fileName: "chapter_1",
    });

    const outputFile = fs.readFileSync("output.pdf");
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=output.pdf`);
    res.status(200).send(outputFile);
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
});

export default router;
