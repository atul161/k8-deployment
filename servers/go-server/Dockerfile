FROM golang:latest AS Production
MAINTAINER Atul atulanand1996dbg@gmail.com
WORKDIR ./my-go-server
COPY ./ ./
RUN pwd && ls -al
CMD ["make","go-start"]