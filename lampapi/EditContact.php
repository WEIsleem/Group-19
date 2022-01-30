<?php

	$inData = getRequestInfo();
	
	$firstName = $inData["firstName"];
	$lastName = $inData["lastName"];
	$phoneNumber = $inData["Phone"];
	$email = $inData["Email"];
	$userId = $inData["userId"];

	$conn = new mysqli("localhost", "TheBeast", "WeLoveCOP4331", "COP4331");
	if ($conn->connect_error) 
	{
		returnWithError( $conn->connect_error );
	} 
	else
	{

		$stmt = $conn->prepare("SELECT userId FROM Contacts WHERE userId = $userId");
		$stmt->execute();

		

		$stmt = $conn->prepare("UPDATE Contacts SET firstName = $firstName, lastName = $lastName, Email = $email, Phone = $phone WHERE userId = $userId");
        $stmt->bind_param("ssss", $firstName, $lastName, $email, $phoneNumber);
		$stmt->execute();
		
		//$result = $stmt->get_result();
		
		$stmt->close();
		$conn->close();
	}

	function getRequestInfo()
	{
		return json_decode(file_get_contents('php://input'), true);
	}

	function sendResultInfoAsJson( $obj )
	{
		header('Content-type: application/json');
		echo $obj;
	}
	
	function returnWithError( $err )
	{
		$retValue = '{"id":0,"firstName":"","lastName":"","error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}
	
	function returnWithInfo( $searchResults )
	{
		$retValue = '{"results":[' . $searchResults . '],"error":""}';
		sendResultInfoAsJson( $retValue );
	}
	
?>