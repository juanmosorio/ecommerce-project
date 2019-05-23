<?php

$container['db'] = function($container) {
  return new Medoo\Medoo($container['settings']['db']);
};

?>