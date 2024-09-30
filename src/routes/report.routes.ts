import express, { Request, Response, NextFunction } from "express";
import { connection } from "../database/connect";
import {week1All, week1Filter } from "../queries/week1"
import week2 from "../queries/week2"
import week3 from "../queries/week3"
import week4 from "../queries/week4"
import {SurveyResponse } from "../types/surveyResponse";
import { week1Question1Responses, calculateAverageConfidence, week1Question5Responses } from "../controllers/week1Controller";
import { runQuery } from "../controllers/commonController";
import {week2Question1Responses,week2Question2Responses,week2Question6Responses} from "../controllers/week2Controller"
import {week4Question1Responses, week4Question2Responses, week4Question5Responses, week4Question3Responses, week4Question4Responses} from "../controllers/week4Controller"

const router = express.Router();


router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const grade = 'Grade 9';
    const schoolName = 'School One';

    const [week1QueryAll, week1FilterQuery, week2Query, week4Query] = await Promise.all([
      runQuery(week1All, []),
      runQuery(week1Filter, [grade, schoolName]),
      runQuery(week2, [grade, schoolName]),
      runQuery(week4, [grade, schoolName])
    ]);

     //Calculation of total response for each option for week1 question1 for all schools
    const week1Q1Response = week1Question1Responses(week1QueryAll);

    //Calculation of average response for all schools
    const schoolAverage = calculateAverageConfidence(week1Q1Response);

    //Calculation of total response for each option for week1 question1 for a school 
    const week1Q1Response1 = week1Question1Responses(week1FilterQuery);
    
    //Calculation of average response for a school
    const filterSchoolAverage = calculateAverageConfidence(week1Q1Response1) ;
    
    //Calculation of total response for each option for week1 question5 for a school 
    const week1Q5Response = week1Question5Responses(week1FilterQuery)

  
    //Calculation of total response for each option for week2 question1 for a school 
    const week2Q1Response = week2Question1Responses(week2Query);  

    const data = week2Q1Response.sort((a,b) => b[1] - a[1]); 

    const [firstOption, secondOption] = data
    .slice(0, 2).map(item => item[0].replace(/^[a-e]\)\s*/, ''));
    
    //Calculation of total response for each option for week2 question2 for a school
    const week2Q2Response = week2Question2Responses(week2Query);  

    const data1 = week2Q2Response.sort((a,b) => b[1] - a[1]); 

    const [firstOption1, secondOption1] = data1
    .slice(0, 2).map(item => item[0].replace(/^[a-e]\)\s*/, ''));

    //Calculation of total response for each option for week2 question6 for a school
    const week2Q6Response = week2Question6Responses(week2Query);


    //Week2 Analysis Query Run to get data of all schools
    const week4Q1Response = week4Question1Responses(week4Query)

    const week4Q2Response = week4Question2Responses(week4Query)

    const week4Q3Response = week4Question3Responses(week4Query)

    const week4Q4Response = week4Question4Responses(week4Query)

    const week4Q5Response = week4Question5Responses(week4Query)



    return res.send(week4Q5Response)

  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
});

export default router;
