
# Epsilon3-org: Reworking A Pure React App Into Nextjs/NX Workspace Monorepo
 
I took some time to convert a pure React App into a Nextjs/NX Workspace monorepo.
I wanted to illuminate the pros and cons of each and show where I believe the Nextjs/NX Workspace shines.

You can find the code for the pure React App here: https://github.com/Balance8/appy-react

Live Site (Next.js) - https://epsilon3-org.vercel.app/

Pure React Live Site - https://preview.cruip.com/appy/index.html



## Run Locally

Clone the project: https://github.com/Balance8/epsilon3-org

SSH
```bash
  git clone git@github.com:Balance8/epsilon3-org.git
```

HTTPS
```bash
  git clone https://github.com/Balance8/epsilon3-org.git
```

Go to the project directory

```bash
  cd epsilon3-org
```

Start the project

```bash
  npx nx serve epsilon3-web-app
```

  
## Why Next.js?

![App Screenshot](https://i.imgur.com/UEF1rpc.png)

## Why NX?

![App Screenshot](https://i.imgur.com/cMnjc9M.png)


## Screenshots of Performance


## Next.js/Nx
![App Screenshot](https://i.imgur.com/oTjLQ4P.png)


## Pure React
![App Screenshot](https://i.imgur.com/fmQ7DXa.png)




- Nx helps architect, test, and build at any scale: integrations with modern frameworks, distributed task execution, computation caching, smart rebuilds of affected projects, powerful code generators, editor support, GitHub apps, and more.





## Analysis

- As you can see, we gain all of the organization and utility from the tech stack without sacrificing performance
- We gain first-class support for monorepo architecture and built-in typescript error handling
- We can reuse code throughout any project easily (I would imagine this would be very important)
- We gain integrated testing on both unit and end to end scaffolded entirely from generators
- Finally, NX fully integrates with Storybook to allow for easy design iteration in an isolated environment

![App Screenshot](https://i.imgur.com/MciKfak.png)


## Running end-to-end tests

Run `npx nx run epsilon3-web-app-e2e:e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `npx nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace
Run `npx nx dep-graph` to see a diagram of the dependencies of your projects.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.


## Further Reading

- I would highly recommend a deep dive into this blog series to gleen the full impact of Next.js/NX

https://blog.nrwl.io/create-a-next-js-web-app-with-nx-bcf2ab54613
