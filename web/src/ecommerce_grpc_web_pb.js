/**
 * @fileoverview gRPC-Web generated client stub for ecommerce
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ecommerce = require('./ecommerce_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ecommerce.ProductServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ecommerce.ProductServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecommerce.ProductRequest,
 *   !proto.ecommerce.ProductResponse>}
 */
const methodDescriptor_ProductService_ReadOne = new grpc.web.MethodDescriptor(
  '/ecommerce.ProductService/ReadOne',
  grpc.web.MethodType.UNARY,
  proto.ecommerce.ProductRequest,
  proto.ecommerce.ProductResponse,
  /** @param {!proto.ecommerce.ProductRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecommerce.ProductResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecommerce.ProductRequest,
 *   !proto.ecommerce.ProductResponse>}
 */
const methodInfo_ProductService_ReadOne = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecommerce.ProductResponse,
  /** @param {!proto.ecommerce.ProductRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecommerce.ProductResponse.deserializeBinary
);


/**
 * @param {!proto.ecommerce.ProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecommerce.ProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecommerce.ProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecommerce.ProductServiceClient.prototype.readOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecommerce.ProductService/ReadOne',
      request,
      metadata || {},
      methodDescriptor_ProductService_ReadOne,
      callback);
};


/**
 * @param {!proto.ecommerce.ProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecommerce.ProductResponse>}
 *     A native promise that resolves to the response
 */
proto.ecommerce.ProductServicePromiseClient.prototype.readOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecommerce.ProductService/ReadOne',
      request,
      metadata || {},
      methodDescriptor_ProductService_ReadOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ecommerce.SearchRequest,
 *   !proto.ecommerce.ProductsResponse>}
 */
const methodDescriptor_ProductService_ReadAll = new grpc.web.MethodDescriptor(
  '/ecommerce.ProductService/ReadAll',
  grpc.web.MethodType.UNARY,
  proto.ecommerce.SearchRequest,
  proto.ecommerce.ProductsResponse,
  /** @param {!proto.ecommerce.SearchRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecommerce.ProductsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ecommerce.SearchRequest,
 *   !proto.ecommerce.ProductsResponse>}
 */
const methodInfo_ProductService_ReadAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ecommerce.ProductsResponse,
  /** @param {!proto.ecommerce.SearchRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ecommerce.ProductsResponse.deserializeBinary
);


/**
 * @param {!proto.ecommerce.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ecommerce.ProductsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ecommerce.ProductsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ecommerce.ProductServiceClient.prototype.readAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ecommerce.ProductService/ReadAll',
      request,
      metadata || {},
      methodDescriptor_ProductService_ReadAll,
      callback);
};


/**
 * @param {!proto.ecommerce.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ecommerce.ProductsResponse>}
 *     A native promise that resolves to the response
 */
proto.ecommerce.ProductServicePromiseClient.prototype.readAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ecommerce.ProductService/ReadAll',
      request,
      metadata || {},
      methodDescriptor_ProductService_ReadAll);
};


module.exports = proto.ecommerce;

