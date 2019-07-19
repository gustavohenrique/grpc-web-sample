package main

import (
	"fmt"
	"log"

	"server/rpc"
)

func main() {
	port := ":5000"
	rpcServer := rpc.NewServer(port)
	if rpcServer == nil {
		log.Fatalf("Failed to listen on", port)
	}

	rpc.NewProductServer(rpcServer.Grpc)

	fmt.Println("Listening on", port)
	log.Fatal(rpcServer.Start())
}
