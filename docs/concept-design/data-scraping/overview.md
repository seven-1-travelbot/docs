# Overview

As **data** and its **purity** is very important for nice RAG resuts, here's a whole separate section about it.

Firstly, this whole section is **only** about **static** data collection, that needs to be _preprocessed_ and put into **Vector DB**.
This **doesn't** inlcude [Live Fetching](../RAG/data-retrieval.md#live-fetching) or [Integrations](../RAG/data-retrieval.md#integrations).

Main souces of **static** data are:

- Website (html)

- Documents (pdf, doc)

Secondly, our main focus for now is a **website** with documents planned in the future.

## Goals

- Provide a way to configure scraping process

- Extract media and text data

- Chunk document based on structure saving the relationship between media and text

- Save data in a persistent storage and in Vector DB for indexing

## Side-goals

- Build a [tree part of a map](../map.md#data-line)

- Create descriptions for created [Locations](../map.md#location)

- Find broken links on a website
