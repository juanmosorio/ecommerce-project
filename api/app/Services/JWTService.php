<?php

namespace app\Services;

class JWTService extends Services {

  public function getTokekName($name) {
    $message['name'] = $name;
    $message['encodedName'] = $this->jwt->encode($name, $this->settings['jwt']['key']);
    $message['decodeName'] = $this->jwt->decode(
      $message['encodedName'],
      $this->settings['jwt']['key'],
      $this->settings['jwt']['algorithms']
    );

    return $message;
  }

}

?>