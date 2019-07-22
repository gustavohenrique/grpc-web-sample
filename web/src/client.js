import { SearchRequest, ProductsResponse } from './ecommerce_pb';
import { ProductServiceClient } from './ecommerce_grpc_web_pb';

const url = 'https://mydomain.io:4443';
const client = new ProductServiceClient(url);

new Vue({
  el: '#app',
  data: {
    items: []
  },
  methods: {
    readAll: function() {
      const req = new SearchRequest();
      const metadata = {
        login: 'gustavo',
        password: 'admin',
        'Access-Control-Allow-Origin': '*'
      }
      let self = this;
      client.readAll(req, metadata, (err, res) => {
        if (err) {
          console.log('Something was wrong:', err.code, err.message);
          return
        }
        const products = res.getProductsList();
        const items = products.map(item => {
          return item.toObject();
        });
        console.log('Received', items);
        this.items = items;
      });
    }
  }
});

