'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'This is my first serverless function',
        input: event,
      },
      null,
      2
    ),
  };
};
