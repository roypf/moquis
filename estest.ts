
const functions = require('@google-cloud/functions-framework');

/**
 * HTTP function that logs the request body.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
functions.http('helloHttp', (req, res) => {
  // This function will be executed when the function is called.
  res.send('Hello World!');
});

/**
 * Background function that logs a message.
 *
 * @param {Object} context Cloud Function context.
 * @param {Object} event Cloud Function event.
 */
functions.background('helloBackground', (context, event) => {
  // This function will be executed when the function is called.
  console.log('Hello World!');
});

// This function will be called when any error occurs in the function.
functions.logger.onError((err) => {
  console.error(err);
});

