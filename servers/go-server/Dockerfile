FROM golang:latest AS Production
MAINTAINER Atul atulanand1996dbg@gmail.com
WORKDIR ./my-go-server
COPY ./servers/go-server ./
RUN pwd && ls -al
CMD ["make","go-start"]