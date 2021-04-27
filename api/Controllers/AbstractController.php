<?php
  
  namespace EeApi\Controllers;
  
  abstract class AbstractController {
    
    abstract public function getAll(): string;
    
    abstract public function getById( int $id ): string;
  }
