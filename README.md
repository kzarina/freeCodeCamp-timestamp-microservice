# Timestamp Microservice

This is a simple Node.js microservice that accepts a date string as input and returns both the Unix timestamp and the natural language form of the date. This microservice was built as part of the freeCodeCamp curriculum.

### API Endpoints

---

This microservice has two endpoints:

`GET /api/:date_string`
The date_string parameter specifies the date to convert.

`GET /api`
If no date_string parameter is provided, the current date and time will be used.
The response from the API is a JSON object with two properties:

- unix: The Unix timestamp corresponding to the input date.
- utc: The natural language representation of the input date.

### Usage

---

To use this microservice, you can run it locally by following these steps:

1. Clone this repository to your local machine.
2. Open a terminal window and navigate to the project directory.
3. Install the required dependencies by running the command `npm install`.
4. Start the server by running the command `npm start`.
5. Open a web browser and navigate to `http://localhost:3000/api/`.
6. You can also use this microservice online by visiting the [live demo](https://boilerplate-project-timestamp.zarina-k.repl.co).

### Acknowledgments

This project was built as part of the freeCodeCamp curriculum. Special thanks to the freeCodeCamp community for their support and feedback.
