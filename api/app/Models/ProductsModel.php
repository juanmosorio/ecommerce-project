<?php

namespace app\Models;

class ProductsModel extends Models {

  public function getProducts() {
    $result = $this->db->select('products',[
      'productCode',
      'productName',
      'productLine',
      'productScale',
      'productVendor',
      'productDescription',
      'quantityInStock',
      'buyPrice',
      'MSRP'
    ]);

    // !Conexion.
    if (!is_null($this->db->error()[1])) {
      return array('error' => true,'description' => $this->db->error()[2]);
    } else if (empty($result)) { // sin Datos
      return array('notFound' => true, 'description' => 'The result is empty');
    }

    return array(
      'success' => true,
      'description' => 'The products were found',
      'employees' => $result
    );
  }

  public function insertProducts($products) {
    $result = $this->db->insert('products', [
      'productCode' => $products['productCode'],
      'productName' => $products['productName'],
      'productLine' => $products['productLine'],
      'productScale' => $products['productScale'],
      'productVendor' => $products['productVendor'],
      'productDescription' => $products['productDescription'],
      'quantityInStock' => $products['quantityInStock'],
      'buyPrice' => $products['buyPrice'],
      'MSRP' => $products['MSRP']
    ]);

    if (!is_null($this->db->error()[1])) {
      return array(
        'success' => false,
        'description' => $this->db->error()[2]
      );
    }

    return array(
      'success' => true,
      'description' => 'The product was inserted'
    );
  }

  public function updateProduct($productCode, $product) {
    $result = $this->db->update('products', [
      'productName' => $product['productName'],
      // 'productLine' => $product['productLine'],
      'productScale' => $product['productScale'],
      'productVendor' => $product['productVendor'],
      'productDescription' => $product['productDescription'],
      'quantityInStock' => $product['quantityInStock'],
      'buyPrice' => $product['buyPrice'],
      'MSRP' => $product['MSRP']
    ], ['productCode'  => $productCode]);

    if (!is_null($this->db->error()[1])) {
      return array(
        'success' => false,
        'description' => $this->db->error()[2]
      );
    }
    
    return array(
      'success' => true, 
      'description' => 'The product was updated'
    );
  }

}

?>