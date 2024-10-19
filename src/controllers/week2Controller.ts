import {SurveyResponse } from "../types/surveyResponse";


// Function to count Question 1 responses
export const week2Question1Responses = (responses: SurveyResponse[]): [string, number][] => {
  const options = [
    "a) Meeting new people / Exposure to new things",
    "b) One step closer to future success / Independence and freedom",
    "c) Starting over and fresh / new activities",
    "d) Personal Growth",
    "e) Not excited or for other reasons"
  ];

  const counts: { [key: string]: number } = {};
  
  // Initialize counts to zero
  options.forEach(option => {
    counts[option] = 0;
  });

  // Count the responses
  responses.forEach(response => {
    const answer = response["Question 1 Response"];
    if (counts[answer] !== undefined) {
      counts[answer]++;
    }
  });

  // Convert counts to an array of key-value pairs
  return Object.entries(counts) as [string, number][];
};

// Function to count Question 2 responses
export const week2Question2Responses = (responses: SurveyResponse[]): [string, number][] => {
    const options = [
      "a) Work is harder / Failing",
      "b) New and larger environment / Meeting new people",
      "c) Bullying or peer pressure / Fighting and getting suspended",
      "d) New teachers and expectations / closer to being an adult",
      "e) No fear at all"
    ];
  
    const counts: { [key: string]: number } = {};
    
    // Initialize counts to zero
    options.forEach(option => {
      counts[option] = 0;
    });
  
    // Count the responses
    responses.forEach(response => {
      const answer = response["Question 2 Response"];
      if (counts[answer] !== undefined) {
        counts[answer]++;
      }
    });
  
    // Convert counts to an array of key-value pairs
    return Object.entries(counts) as [string, number][];
  };

//Function to get the  percentage of response for each options.
  export const week2Question6Responses = (responses: SurveyResponse[]): [string, number][] => {
    const options = [
        "a) Family members or guardians",
        "b) Friends or peers attending the same school",
        "c) Inspirational teachers, mentors, school staff",
        "d) Personal goals and aspirations",
        "e) personal experiences or challenges"
      ];
  
    const counts: { [key: string]: number } = {};
  
    // Initialize counts to zero for each option
    options.forEach(option => (counts[option] = 0));
  
    // Count the responses for Question 5
    responses.forEach(response => {
      const answer = response["Question 6 Response"];
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