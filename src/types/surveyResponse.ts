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
  monthlyAverage: number | string;
}
