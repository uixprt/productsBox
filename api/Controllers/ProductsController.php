<?php

namespace EeApi\Controllers;

class ProductsController extends AbstractController
{
  private string $url = './db/products.json';

  private function fetchProductsDescription(): object
  {
    return json_decode(file_get_contents($this->url));
  }

  public function getAll(): string
  {
    return json_encode($this->fetchProductsDescription());
  }

  public function getById(int $id): string
  {
    $productsDescription = $this->fetchProductsDescription();

    return json_encode($productsDescription->$id);
  }
}
