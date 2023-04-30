FROM golang:1.20.3-alpine3.17

RUN apk update && apk add git

WORKDIR /usr/src/app

# Dev tools
RUN go install github.com/cespare/reflex@v0.3.1

# App deps
COPY ./go.mod ./go.sum ./
RUN go mod download

ENTRYPOINT [ "reflex", "--start-service", "-g", "*.go", "go", "run", "main.go" ]
