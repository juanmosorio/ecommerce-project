<?php

namespace app\Models;

class EmployeesModel extends Models {

  public function getEmployees() {

    $result = $this->db->select('employees', [
      'employeeNumber',
      'lastName',
      'firstName',
      'extension',
      'email',
      'officeCode',
      'reportsTo',
      'jobTitle'
    ]);
  //  var_dump('model'); die();


    // !Conexion.
    if (!is_null($this->db->error()[1])) {
      return array('error' => true,'description' => $this->db->error()[2]);
    } else if (empty($result)) { // sin Datos
      return array('notFound' => true, 'description' => 'The result is empty');
    }

    return array(
      'success' => true,
      'description' => 'The employees were found',
      'employees' => $result
    );

  }

}

?>