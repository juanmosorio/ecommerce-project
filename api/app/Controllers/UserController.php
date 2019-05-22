<?php

namespace app\Controllers;

class UserController extends Controller {

  function helloUser($request, $respond) {
    return json_encode(array('greetings' => 'Hello from the other side!!'));
  }
}

?>