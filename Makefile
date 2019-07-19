.PHONY: proto

proto:
	protoc proto/ecommerce.proto \
		--proto_path=./proto \
		--go_out=plugins=grpc:${PWD}/server/ecommerce \
		--js_out=import_style=commonjs:${PWD}/web/src \
		--grpc-web_out=import_style=commonjs,mode=grpcweb:${PWD}/web/src

containers:
	docker-compose up -d
