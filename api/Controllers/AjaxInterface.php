<?php

namespace EeApi\Controllers;

interface AjaxInterface
{
  public function getAll(): string;

  public function getById(int $id): string;
}
