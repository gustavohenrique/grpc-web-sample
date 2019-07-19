> An example using gRPC-Web client and Golang Server

## Setup

### Install gRPC tools

#### MacOS

```sh
wget https://github.com/protocolbuffers/protobuf/releases/download/v3.9.0/protoc-3.9.0-osx-x86_64.zip
unzip protoc-3.9.0*.zip
sudo mv bin/protoc /usr/local/bin

wget https://github.com/grpc/grpc-web/releases/download/1.0.5/protoc-gen-grpc-web-1.0.5-darwin-x86_64
chmod +x protoc-gent-grpc-web*
sudo mv protoc-gen-grpc-web* /usr/local/bin/protoc-gen-grpc-web
```

#### Linux

```sh
wget https://github.com/protocolbuffers/protobuf/releases/download/v3.9.0/protoc-3.9.0-linux-x86_64.zip
unzip protoc-3.9.0*.zip
sudo mv bin/protoc /usr/local/bin

wget https://github.com/grpc/grpc-web/releases/download/1.0.5/protoc-gen-grpc-web-1.0.5-linux-x86_64
chmod +x protoc-gent-grpc-web*
sudo mv protoc-gen-grpc-web* /usr/local/bin/protoc-gen-grpc-web
```

### Install Go dependencies

```sh
cd server
make setup
```

### Install Javascript dependencies

```sh
cd web
npm i
```

## Running

```sh
make containers  # docker-compose up -d
```

## Usage

You can serve and point browser to `web/index.html` or use grpcurl:

```sh
grpcurl -proto proto/ecommerce.proto -plaintext -v localhost:8080 ecommerce.ProductService/ReadAll
```

