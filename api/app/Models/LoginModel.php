<?php

namespace app\Models;

class LoginModel extends Models {

	public function loginUser($user) {
	  $result = $this->db->select('employees',[
	    'email',
	    'password'
	  ], [
  		'email' => $user['email']
		]);

    if (!is_null($this->db->error()[1])) {
      return array('error' => true,'description' => $this->db->error()[2]);
    } else if (empty($result)) { // sin Datos
      return array(
      	'notFound' => true,
      	'description' => 'Email or Password was wrong'
      );
    }

    if (!password_verify($user['password'], $result[0]['password'])) {
    	return array(
      	'notFound' => true,
      	'description' => 'Email or Password was wrong'
      );
    }

    $token = $this->JWTService->getTokenUser($user['email']);

    return array(
      'success' => true,
      'description' => 'The user was found',
      'user' => $result,
      'token' => $token
    );
	}


}


?>