<?php



if (isset($_POST["name"])) {

    echo $senderName = $_POST['name'];


}else{

}


if( $_REQUEST['name'] ) {

    $name = $_REQUEST['name']();

    echo "Welcome ". $name;
}