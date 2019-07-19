package rpc

import (
	"context"

	"google.golang.org/grpc"

	pb "server/ecommerce"
)

type ProductServer struct{}

func NewProductServer(s *grpc.Server) *ProductServer {
	server := &ProductServer{}
	if s != nil {
		pb.RegisterProductServiceServer(s, server)
	}
	return server
}

func (this *ProductServer) ReadOne(ctx context.Context, req *pb.ProductRequest) (*pb.ProductResponse, error) {
	product := req.GetProduct()
	resp := &pb.ProductResponse{
		Product: product,
	}
	return resp, nil
}

func (this *ProductServer) ReadAll(ctx context.Context, req *pb.SearchRequest) (*pb.ProductsResponse, error) {
	products := []*pb.Product{
		&pb.Product{Id: 1, Title: "P1"},
	}
	resp := &pb.ProductsResponse{
		Products: products,
	}
	return resp, nil
}
