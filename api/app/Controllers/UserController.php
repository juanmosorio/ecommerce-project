<?php

namespace app\Controllers;

class UserController extends Controller {

  function helloUser($request, $respond) {
    return json_encode(array('greetings' => 'Hello from the other side!!'));
  }

  function helloUserName($request, $respond) { 
    // var_dump($respond); die();
    $name = $request->getAttribute('name');
    return json_encode(array('Hello' => $name));
  }
}

?>