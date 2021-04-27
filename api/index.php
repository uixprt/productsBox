<?php
  
  namespace EeApi;
  
  use EeApi\Controllers\ProductsController;
  
  include( './Route.php' );
  include( './Controllers/AbstractController.php' );
  include( './Controllers/ProductsController.php' );
  
  header( 'Content-Type: application/json' );

  error_reporting( E_ALL );
  ini_set( "display_errors", 1 );
  
  Route::add( '/', function () {
    echo ( new ProductsController() )->getAll();
  } );
  
  Route::add( "/([0-9]*)", function ( $id ) {
    echo ( new ProductsController() )->getById( $id );
  } );
  
  Route::run( '/api' );
