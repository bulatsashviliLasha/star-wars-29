export const transformErrorsToString = (errors) =>
  errors.reduce((errorString, error) => {
    if (error) {
      return `${errorString} ${error}`;
    }

    return errorString;
  }, "");

export const stripIdFromUrl = (url) => Number(url.match(/\d+/)[0]);
