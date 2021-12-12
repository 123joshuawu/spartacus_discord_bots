export const camelCaseToSnakeCase = (camelCase: string) => {
  let snakeCase = "";

  let index = 0;
  for (const letter of camelCase) {
    if (letter == letter.toUpperCase()) {
      if (index > 0) {
        snakeCase += "_";
      }

      snakeCase += letter.toLowerCase();
    } else {
      snakeCase += letter;
    }

    index++;
  }

  return snakeCase;
};

export const snakeCaseToCamelCase = (snakeCase: string) => {
  let camelCase = "";

  for (let i = 0; i < snakeCase.length; i++) {
    const letter = snakeCase[i];

    if (i === 0) {
      camelCase += letter.toUpperCase();
    } else if (letter === "_") {
      camelCase += snakeCase[i + 1].toUpperCase();
      i++;
    } else {
      camelCase += letter;
    }
  }

  return camelCase;
};
