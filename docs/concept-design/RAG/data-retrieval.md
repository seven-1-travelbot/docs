---
sidebar_position: 1
description: First phase of RAG pipeline
---

# Data retrieval

First phase of a standard RAG pipeline

## Data sources

There are **3 sources** for data retrieval:

| Source       | Type of data        | Uses persistent storage | Needs preprocessing |
| ------------ | ------------------- | :---------------------: | :-----------------: |
| Vector DB    | chunks (text/media) |           ✅            |         ❌          |
| Live Search  | realtime html       |           ❌            |         ✅          |
| Integrations | API output(JSON)    |           ❌            |     ✅ **/** ❌     |

### Vector DB

In vector database we save chunks of a static information (information that doesn't change frequently) as vector embeddings to enable similarity search. As data was preprocessed in scraping stage, we don't need to transform it again.

As chunk can include media data as metadata or be itself a media chunk (depends on saving modificators and retrieval settings), these media data is extracted for future hydrating and only text part is used for augmentation.

### Live Search

When data changes frequently, it doesn't make sense to save it in a vector db(it will be outdated soon after saving). So we are making a runtime request to get needed data in realtime and after a little bit of preprocessing (html -> chunk) it can be included.

### Integrations

Integrations are APIs, that can be called by LLM, if needed, with an extracted input. After the result can be fed to LLM.

## Source selection

What source is selected and what data (in case of [Vector DB](#vector-db)) from it is retrieved in runtime depends on the **location** on a [map](../map.md). Learn more by going to the [map page](../map.md).
