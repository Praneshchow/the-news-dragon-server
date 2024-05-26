
## Install and setup the server:

First setup the backend server:     `mkdir the-news-dragon-server`

npm init:       `npm init -y`

npm install express:       `npm install express`

Then create a file 'index.js'. I write my code in 'index.js'. 

Install cors:       `npm install cors`

cors helps to access the server for my project API call. otherwise API call in my project will show 'failed to load'. 

## Vercel Setup:

Install vercel:  `npm i -g vercel`

Vercel login (I login with github):  `vercel`

## Deploy Vercel (cmd)
```
Vercel CLI 34.2.0
> > No existing credentials found. Please log in:
? Log in to Vercel Continue with GitHub
> Success! GitHub authentication complete for .....@gmail.com
? Set up and deploy “~\OneDrive\Desktop\PROJECTS\the-news-dragon-server”? yes
? Which scope do you want to deploy to? Pranesh's projects
? Link to existing project? no
? What’s your project’s name? the-news-dragon-server
? In which directory is your code located? ./
Local settings detected in vercel.json:
No framework detected. Default Project Settings:
- Build Command: `npm run vercel-build` or `npm run build`
- Development Command: None
- Install Command: `yarn install`, `pnpm install`, `npm install`, or `bun install`
- Output Directory: `public` if it exists, or `.`
? Want to modify these settings? no
```

Then create vercel.json file. Again run cmd code `vercel`. Finally sever site deployed in vercel. 

## Run the server:

Run server using nodemon:       `nodemon index.js`

Nodemon helps to update the server real time. 


