# Frontend

Frontend is detachable part of the platform, whose main goals are:

- Talking to a Connect travelbot's gateway (as a client)

- Visualize an answer, including [hydration](/docs/concept-design/hydration.md)

- Setting up visual travelbot's appearance

- Provide local extra features specific to frontend

## Notable frontends

1. ### [web-frontend](https://github.com/seven-1-travelbot/web-frontend)

   Main frontend for the platform. A standalone bootstrap script, that runs in a browser.
   We are controlling full _stack_ using this frontend, so it can be seen as a _source of truth_.

2. ### [tg-frontend](https://github.com/seven-1-travelbot/tg-frontend)

   Proof of a concept frontend, used mainly for fast iterative development by the core team.
