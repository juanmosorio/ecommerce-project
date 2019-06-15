<?php

namespace app\Services;

class JWTService extends Services {

  public function getTokenUser($email) {
    //$token['name'] = $name;
    //$token['encodedEmail'] = $this->jwt->encode($name, $this->settings['jwt']['key']);
   // $token['decodeName'] = $this->jwt->decode(
     // $token['encodedName'],
      //$this->settings['jwt']['key'],
      //$this->settings['jwt']['algorithms']
    //);

    $token = $this->jwt->encode($email, $this->settings['jwt']['key']);

    return $token;
  }

}

?>