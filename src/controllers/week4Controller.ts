import {SurveyResponse } from "../types/surveyResponse";

//Function to get the  percentage of response for each options.
export const week4Question1Responses = (responses: SurveyResponse[]): [string, string, number][] => {
  const options = [
      "a) Building relationships with the school community (teachers, counselors, classmates etc.)",
      "b) Developing effective study plans",
      "c) Breaking old habits and managing all this new change",
      "d) Becoming or staying organized",
      "e) Identifying and participating in extracurricular activities outside of the classroom"
  ];

  const recommendations = [
      "Create a supportive network program within the school community that helps students build confidence and a sense of belonging during this crucial year",
      "Promote a wide range of extracurricular activities and clubs that cater to different students' interests",
      "Promote a wide range of extracurricular activities and clubs that cater to different students' interests",
      "Regularly assess and track student confidence levels using surveys or interviews. We will use the data to refine and leverage your school's strengths on strategy for student assimilation",
      "Regularly assess and track student confidence levels using surveys or interviews. We will use the data to refine and leverage your school's strengths on strategy for student assimilation"
  ];

  const counts: { [key: string]: number } = {};

  // Initialize counts to zero for each option
  options.forEach(option => (counts[option] = 0));

  // Count the responses for Question 1
  responses.forEach(response => {
      const answer = response["Question 1 Response"];
      if (answer && counts.hasOwnProperty(answer)) {
          counts[answer]++;
      }
  });

  // Total number of responses
  const totalResponses = Object.values(counts).reduce((sum, count) => sum + count, 0);

  // Convert counts to an array of key-value pairs with percentages and recommendations
  return options.map((option, index) => {
      const count = counts[option];
      const percentage = totalResponses > 0 ? (count / totalResponses) * 100 : 0;
      const recommendation = recommendations[index]; // Get the corresponding recommendation
      return [option, recommendation, Math.round(percentage * 100) / 100]; // Return as an array
  });
};

export const week4Question2Responses = (responses: SurveyResponse[]): [string, string, number][] => {
  const options = [
      "a) Getting to know and respect my teachers/counselors?",
      "b) Study planning",
      "c) Changing up bad habits",
      "d) Becoming or staying organized",
      "e) Identifying extracirucular activities that I would be interested in doing"
  ];

  const recommendations = [
      "Organize a teacher-student meet and greet facilitated by LEEP in the beginning or middle of each semester",
      "Introduce study skills workshops to teach effective study techniques ",
      "Encourage self - reflection through journaling to identify and address specific habits that need changing ",
      "Provide guidance on setting short-term and long- term goals to stay motivated and organized",
      "Conduct interest surveys to gauge students' preferences and provide top recommendations post our LEEP High school plugged in workshop session"
  ];

  const counts: { [key: string]: number } = {};

  // Initialize counts to zero for each option
  options.forEach(option => (counts[option] = 0));

  // Count the responses for Question 1
  responses.forEach(response => {
      const answer = response["Question 2 Response"];
      if (answer && counts.hasOwnProperty(answer)) {
          counts[answer]++;
      }
  });

  // Total number of responses
  const totalResponses = Object.values(counts).reduce((sum, count) => sum + count, 0);

  // Convert counts to an array of key-value pairs with percentages and recommendations
  return options.map((option, index) => {
      const count = counts[option];
      const percentage = totalResponses > 0 ? (count / totalResponses) * 100 : 0;
      const recommendation = recommendations[index]; // Get the corresponding recommendation
      return [option, recommendation, Math.round(percentage * 100) / 100]; // Return as an array
  });
};

export const week4Question3Responses = (responses: SurveyResponse[]): [string, string, number][] => {
  const options = [
      "a) Not at all engaged",
      "b) Not engaged",
      "c) Neutral",
      "d) Engaged",
      "e) Very Engaged"
  ];

  const recommendations = [
      "Explore the option of organizing small group sessions with teacher to identify students' interests and adapt teaching methods accordingly",
      "Partner with your Relationship Coach to explore creating an engaging, project -base initiative that connects with real world application to pique their interest",
      "Explore offering optional workshops on topics of interest to ignite students passions for learning and connection",
      "Foster a sense of ownership by involving your students in smaller decision-making processes within the school community",
      "Conduct regular surveys to gather feedback on areas we are strong that we can leverage and areas not so strong we will dedicate focus to sustaining student engagement"
  ];

  const counts: { [key: string]: number } = {};

  // Initialize counts to zero for each option
  options.forEach(option => (counts[option] = 0));

  // Count the responses for Question 1
  responses.forEach(response => {
      const answer = response["Question 3 Response"];
      if (answer && counts.hasOwnProperty(answer)) {
          counts[answer]++;
      }
  });

  // Total number of responses
  const totalResponses = Object.values(counts).reduce((sum, count) => sum + count, 0);

  // Convert counts to an array of key-value pairs with percentages and recommendations
  return options.map((option, index) => {
      const count = counts[option];
      const percentage = totalResponses > 0 ? (count / totalResponses) * 100 : 0;
      const recommendation = recommendations[index]; // Get the corresponding recommendation
      return [option, recommendation, Math.round(percentage * 100) / 100]; // Return as an array
  });
};

export const week4Question4Responses = (responses: SurveyResponse[]): [string, string, number][] => {
  const options = [
      "a) Strongly Disagree",
      "b) Disagree",
      "c) Neutral",
      "d) Agree",
      "e) Strongly Agree"
  ];

  const recommendations = [
      "Create a designated area in the school where students can privately express their feelings through art, writing, or conversation with a trusted adult",
      "Hold workshops for parents to help them understand the importance of emotional expression and provide tools to support their children ",
      "Establish peer support groups where students can share their feelings and experiences with empathetic peers, fostering a sense of belonging and trust ",
      "Continue to promote your students' comfort of expressing their feelings by implementing an anonymous system for students to share their concerns or feelings with school staff/LEEP without fear of judgement",
      "Continue to promote your students' comfort of expressing their feelings by implementing an anonymous system for students to share their concerns or feelings with school staff/LEEP without fear of judgement "
  ];

  const counts: { [key: string]: number } = {};

  // Initialize counts to zero for each option
  options.forEach(option => (counts[option] = 0));

  // Count the responses for Question 1
  responses.forEach(response => {
      const answer = response["Question 4 Response"];
      if (answer && counts.hasOwnProperty(answer)) {
          counts[answer]++;
      }
  });

  // Total number of responses
  const totalResponses = Object.values(counts).reduce((sum, count) => sum + count, 0);

  // Convert counts to an array of key-value pairs with percentages and recommendations
  return options.map((option, index) => {
      const count = counts[option];
      const percentage = totalResponses > 0 ? (count / totalResponses) * 100 : 0;
      const recommendation = recommendations[index]; // Get the corresponding recommendation
      return [option, recommendation, Math.round(percentage * 100) / 100]; // Return as an array
  });
};

export const week4Question5Responses = (responses: SurveyResponse[]): [string, number][] => {
  const options = [
    "a) Poor",
    "b) Below Average",
    "c) Average",
    "d) Above Average",
    "e) Excellent"
  ];

  const counts: { [key: string]: number } = {};

  // Initialize counts to zero for each option
  options.forEach(option => (counts[option] = 0));

  // Count the responses for Question 5
  responses.forEach(response => {
    const answer = response["Question 5 Response"];
    if (answer && counts.hasOwnProperty(answer)) {
      counts[answer]++;
    }
  });

  // Total number of responses
  const totalResponses = Object.values(counts).reduce((sum, count) => sum + count, 0);

  // Convert counts to an array of key-value pairs with percentages
  return options.map(option => {
    const count = counts[option];
    const percentage = totalResponses > 0 ? (count / totalResponses) * 100 : 0;
    return [option, Math.round(percentage * 100) / 100]; // Rounds to 2 decimal places
  });
};