<?php
  
  namespace EeApi;
  
  use EeApi\Controllers\ProductsController;
  
  include( './Route.php' );
  include('./Controllers/AjaxInterface.php');
  include('./Controllers/AjaxController.php');
  include( './Controllers/ProductsController.php' );

  header( 'Content-Type: application/json' );

  $origin = $_SERVER['HTTP_ORIGIN'];
  $allowed_domains = [
      'https://v2.elemexam.xyz',
      'https://uixprt.github.io',
      'https://v2.elem.uixprt.com'
  ];

  if (in_array($origin, $allowed_domains)) {
      header('Access-Control-Allow-Origin: ' . $origin);
  }

  error_reporting( E_ALL );
  ini_set( "display_errors", 1 );
  
  Route::add( '/', function () {
    echo ( new ProductsController() )->getAll();
  } );
  
  Route::add( "/([0-9]*)", function ( $id ) {
    echo ( new ProductsController() )->getById( $id );
  } );
  
  Route::run( '/api' );
