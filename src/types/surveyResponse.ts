export interface SurveyResponse {
  "User ID": number;
  Name: string;
  Email: string;
  "Survey Grade": string;
  "School Name": string;
  "Question 1 Response": string;
  "Question 2 Response": string;
  "Question 3 Response": string;
  "Question 4 Response": string;
  "Question 5 Response": string;
  "Question 6 Response"?: string;
}

export interface IFinalResponse {
  year: string;
  schoolName: string;
  averageAll: number | string;
  averageSchool: number | string;
  weekOneQ5OptionOne : number | string ;
  weekOneQ5OptionTwo : number | string;
  weekOneQ5OptionThree : number | string;
  weekOneQ5OptionFour: number | string;
  weekOneQ5OptionFive : number | string;
  cheerOne: number | string;
  cheerTwo: number | string;
  fearOne: number | string;
  fearTwo: number | string;
  weekTwoQ6OptionOne : number | string ;
  weekTwoQ6OptionTwo : number | string;
  weekTwoQ6OptionThree : number | string;
  weekTwoQ6OptionFour: number | string;
  weekTwoQ6OptionFive : number | string;
  weekFourQ1OptionOne : number | string ;
  weekFourQ1OptionTwo : number | string;
  weekFourQ1OptionThree : number | string;
  weekFourQ1OptionFour: number | string;
  weekFourQ1OptionFive : number | string;
  weekFourQ2OptionOne : number | string ;
  weekFourQ2OptionTwo : number | string;
  weekFourQ2OptionThree : number | string;
  weekFourQ2OptionFour: number | string;
  weekFourQ2OptionFive : number | string;
  weekFourQ5OptionOne : number | string ;
  weekFourQ5OptionTwo : number | string;
  weekFourQ5OptionThree : number | string;
  weekFourQ5OptionFour: number | string;
  weekFourQ5OptionFive : number | string;
  recommendationOne: string;
  recommendationTwo: string;
  recommendationThree: string;
  recommendationFour: string;
  
}
