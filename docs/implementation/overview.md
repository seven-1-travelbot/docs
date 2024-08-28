---
sidebar_position: 1
description: Backbone of the platform
---

# Overview

Describes main development tools and tech stack.

## Tech stack

- Main transport protocol: [Connect](https://connectrpc.com), combines gRPC with gRPC-web without needing a proxy

- Main data format: [Protobufs](https://protobuf.dev), a versatile **language independent binary** format

## Dev tools

- [Github org](https://github.com/seven-1-travelbot) hosts all travelbot's repos

- [Buf registry](https://buf.build/seven-1/travelbot) hosts protobuf definitions and provide Connect/protobuf SDKs on request

- [Npm registry](https://www.npmjs.com/package/@travelbot/web-frontend) hosts openly web-frontend bundled version.

You can always **learn more** about the actual tech stack of a **specific element** by going to its respective [github](https://github.com/seven-1-travelbot) repo.

## Cloud services (APIs)

- [Open AI](https://platform.openai.com/docs/overview), LLM and Embedding models

- [Pinecone](https://docs.pinecone.io/reference/api/introduction), Vector DB
