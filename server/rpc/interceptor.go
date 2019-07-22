package rpc

import (
	"context"
	"fmt"
	"log"
	"strings"

	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

//func UnaryInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
// func UnaryInterceptor(ctx context.Context, method string, req, reply interface{}, cc *grpc.ClientConn, invoker grpc.UnaryInvoker, opts ...grpc.CallOption) error {
func UnaryInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (resp interface{}, err error) {
	log.Println("I am in UnaryInterceptor")
	clientID, err := authenticateClient(ctx)
	if err != nil {
		return nil, err
	}
	fmt.Println("clientID", clientID)

	ctx = context.WithValue(ctx, "clientID", clientID)
	return handler(ctx, req) //invoker(ctx, method, req, reply, cc)
}

func authenticateClient(ctx context.Context) (string, error) {
	if md, ok := metadata.FromIncomingContext(ctx); ok {
		clientLogin := strings.Join(md["login"], "")
		clientPassword := strings.Join(md["password"], "")

		if clientLogin != "gustavo" {
			log.Println("unknown user", clientLogin)
			return "", fmt.Errorf("unknown user %s", clientLogin)
		}
		if clientPassword != "admin" {
			log.Println("bad password", clientPassword)
			return "", fmt.Errorf("bad password %s", clientPassword)
		}

		log.Printf("authenticated client: %s", clientLogin)
		return "42", nil
	}
	log.Println("missing credentials")
	return "", fmt.Errorf("missing credentials")
}
