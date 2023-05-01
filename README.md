# Prompt Box
Party game based on generative prompting models.

# Table Of Contents
- [Overview](#overview)
- [Development](#development)

# Overview
Web app with API server.

# Development
A Docker stack is used for development.

To run the stack:

```
docker compose up -d --build
```

Network endpoints:

- Frontend: [127.0.0.1:5173](http://127.0.0.1:5173)
- Backend: [127.0.0.1:8888](http://127.0.0.1:8888)

# Ideas
- Publish events to the frontend to update clients
  - Either use a [Kafka -> websocket adapter](https://github.com/b/kafka-websocket)
  - Or write my own event bridge using a websocket ([websocket api for golang](https://github.com/gorilla/websocket/))
- [Publishing events in Golang w schemas](https://github.com/riferrei/srclient/blob/master/EXAMPLES_AVRO.md)
  - [Confluent schema registry](https://github.com/confluentinc/schema-registry)
