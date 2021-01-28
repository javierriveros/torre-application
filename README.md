# Torre application

This is the repository with my application for the Software Developer position at [Torre.co](https://torre.co).

Here, you can find the deployed version of the app: https://torre-application-javier.vercel.app.
It's built in NextJS and deployed to [Vercel](https://vercel.com/).

## Progress log

You can find the progress log [here](progress-log.pdf).

## Features

### Views

You can find here the following views:

- `/` - Home page: Just a simple landing page with the Torre logo and a form for searching jobs or users.
- `/jobs` - Jobs list page: Shows a list of 20 jobs based on the user query if exits, otherwise it will show the first 20 jobs that the API returns. You can filter jobs by organization, type (full time, part time), status (open, closed) and by term.
- `/jobs/[id]` - Job detail page: Shows an individual job. You can find here the information of the job offer.
- `/people` - People list page: Shows a list of 20 people based on the user query if exists, otherwise it will show the first 20 users returned from the API. You can filter users by name.
- `/bio/[username]` - User genome view: Shows info about an individual user such as name, location, strengths, awards, experience, education, languages, projects.

## Local installation

### Requirements

You must have NodeJS and npm/yarn on your machine. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/).
You’ll need Node.js version 10.13 or later.

### Cloning the repository

Run this code in your terminal or else use a Git client.

```bash
git clone https://github.com/javierriveros/torre-application
```

### Running the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
