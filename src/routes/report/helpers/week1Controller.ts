import { SurveyResponse } from "../../../types/surveyResponse";

// Function to count Question 1 responses
export const week1Question1Responses = (
  responses: SurveyResponse[]
): [string, number][] => {
  const options = [
    "a) 0 - 2 Not feeling condient",
    "b) 3 - 4 A little confident",
    "c) 5 - 7 Average confident",
    "d) 8 & 9 Very confident",
    "e) 10  feeling really confident",
  ];

  const counts: { [key: string]: number } = {};

  // Initialize counts to zero
  options.forEach((option) => {
    counts[option] = 0;
  });

  // Count the responses
  responses.forEach((response) => {
    const answer = response["Question 1 Response"];
    if (counts[answer] !== undefined) {
      counts[answer]++;
    }
  });

  // Convert counts to an array of key-value pairs
  console.log(Object.entries(counts) as [string, number][]);

  return Object.entries(counts) as [string, number][];
};

export const calculateAverageConfidence = (
  optionsAndCounts: [string, number][]
): number => {
  // Define the midpoints for each confidence range
  const midpoints = [1, 3.5, 6, 8.5, 10];

  let weightedSum = 0;
  let totalResponses = 0;

  // Calculate weighted sum and total responses
  optionsAndCounts.forEach((option, index) => {
    const count = option[1]; // Get the count of responses for this option
    weightedSum += midpoints[index] * count; // Add the weighted value to the sum
    totalResponses += count; // Add the count to the total number of responses
  });

  // Calculate the average confidence level
  const averageConfidence = weightedSum / totalResponses;

  // Return the average confidence value
  return averageConfidence;
};

export const week1Question5Responses = (
  responses: SurveyResponse[]
): [string, number][] => {
  const options = [
    "a) Not happy with it",
    "b) Somewhat disappointed",
    "c) Neutral/indifferent",
    "d) The experience met my expectations",
    "e) The experience exceeded my expectation",
  ];

  const counts: { [key: string]: number } = {};

  // Initialize counts to zero for each option
  options.forEach((option) => (counts[option] = 0));

  // Count the responses for Question 5
  responses.forEach((response) => {
    const answer = response["Question 5 Response"];
    if (answer && counts.hasOwnProperty(answer)) {
      counts[answer]++;
    }
  });

  // Total number of responses
  const totalResponses = Object.values(counts).reduce(
    (sum, count) => sum + count,
    0
  );

  // Convert counts to an array of key-value pairs with percentages
  return options.map((option) => {
    const count = counts[option];
    const percentage = totalResponses > 0 ? (count / totalResponses) * 100 : 0;
    return [option, Math.round(percentage * 100) / 100]; // Rounds to 2 decimal places
  });
};
