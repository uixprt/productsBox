<?php

namespace EeApi\Controllers;

abstract class AjaxController implements AjaxInterface
{
  private function fetch(): object
  {
    return json_decode(file_get_contents($this->url));
  }

  public function getAll(): string
  {
    return json_encode($this->fetch());
  }

  public function getById(int $id): string
  {
    return json_encode($this->fetch()->$id);
  }
}
