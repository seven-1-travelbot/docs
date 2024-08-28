# MAP protocol RFC

MAP protocol version 1

## Index separation

Index **must** use local to the vector db separation mechanism (ex. namespaces) to divide _scraped data_ based on data **format**.

Supported data formats and their corresponding namespace names are listed below:

- txt (plain text, markdown)
- img (img html tag supported formats)
- custom (custom widgets)

## Data scoping

Index records are **scoped** and data retrieval processes **should** use cascading mechanism. Top level nodes have access to the data of subnodes, while subnodes doesn't have access to the top level data.
