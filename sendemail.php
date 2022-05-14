<?php 
if(isset($_POST['form__submit'])) {
    $mailto = "arthurfms@yahoo.com"; //my e-mail address
    //getting form data
    $name = $_POST['form__name']; //get name
    $email = $_POST['form__email']; //get email
    $subject = $_POST['form__subject']; //get subject
    $message = $_POST['form__message']; //get message
    

    //Email body
    $email_message = 
    "Name: {$name}\n
    Email: {$email}\n
    Subject: {$subject}
    \n
    \n
    {$message}";

    //Email Headers
    $headers1 = "From: {$form__email}";

    //PHP mail function
    $result = mail($mailto, $subject, $message, $headers1);

    //Final checking
    if($result) {
        $confirmation = "Your message was submited!";
    } else {
        $fail = "Sorry, the message was not sent, please try other contact type or sending e-mail directly from your provider.\nI'm sorry for the inconvenience!";
    }
}









?>