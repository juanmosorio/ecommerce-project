<?php

namespace app\Controllers;

class LoginController extends Controller {

	public function loginUser($request, $response) {
		$user = $request->getParsedBody();
		$message = $this->LoginModel->loginUser($user);
		return json_encode($message);
	}

}

?>