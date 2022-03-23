package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"
	"sync"
)

var counter int
var mutex = &sync.Mutex{}

func echoString(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Golang:Echo from golang")
	fmt.Fprintf(w, "Hello ! I am Golang ! I want to be alive")
}

func incrementCounter(w http.ResponseWriter, r *http.Request) {
	mutex.Lock()
	counter++
	fmt.Println("Golang:Counter has been incremented")
	fmt.Fprintf(w, strconv.Itoa(counter))
	mutex.Unlock()
}

func main() {
	fmt.Println("...........Golang Server...............")
	var port string
	port = os.Getenv("GO_PORT")
	fmt.Println("Golang Internal Port is", port)
	http.HandleFunc("/", echoString)
	http.HandleFunc("/counter", incrementCounter)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
