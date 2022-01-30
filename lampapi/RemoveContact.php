<?php

	$inData = getRequestInfo();
   	$userId = $inData["userId"];
	$firstName = $inData["firstName"];
	$lastName = $inData["lastName"];

	$conn = new mysqli("localhost", "TheBeast", "WeLoveCOP4331", "COP4331");
	if ($conn->connect_error) 
	{
		returnWithError( $conn->connect_error);
	} 
	else
	{
        	// check if item in database
		$stmt = $conn->prepare("SELECT userId, firstName, lastName FROM Contacts WHERE (userId='$userId' AND firstName='$firstName' AND lastName='$lastName')");
		$stmt->execute();

		$result = $stmt->get_result();
		
        	// delete from database
		if ($row = $result->fetch_assoc())
		{
			$conn->query("DELETE FROM Contacts WHERE (userId='$userId' AND firstName='$firstName' AND lastName='$lastName')");
		}
        else 
        {
            returnWithError( "No Records Found" );
        }
		
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
		$retValue = '{"error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}
	
?>
