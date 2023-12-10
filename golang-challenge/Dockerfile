FROM golang:1.21.5

WORKDIR /usr/src/app

COPY . .

RUN go mod init hello-world

ENTRYPOINT [ "go", "run", "." ]