<?php

namespace app\Controllers;

class EmployeesController extends Controller {

  function getEmployees($request, $response) {
    // var_dump('controller'); die();
    $message = $this->EmployeesModel->getEmployees();
    return json_encode($message);
  }
  
}

?>