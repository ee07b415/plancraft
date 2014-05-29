#pragma strict

public var moveSpeed : float = 10f;

function Update ()
{
	var x : float = GameObject.Find("You").transform.position.x;
	var y : float = GameObject.Find("You").transform.position.y;

	if(y<5){		
    if(Input.GetKey(KeyCode.UpArrow))
        transform.Translate(Vector3.up * moveSpeed * Time.deltaTime);
    }
    
    if(y>-5){
    if(Input.GetKey(KeyCode.DownArrow))
        transform.Translate(-Vector3.up * moveSpeed * Time.deltaTime);
    }
    
    if(x>-5){
    if(Input.GetKey(KeyCode.LeftArrow))
        transform.Translate(Vector3.left * moveSpeed * Time.deltaTime);
    }
    
    if(x<5){
    if(Input.GetKey(KeyCode.RightArrow))
        transform.Translate(Vector3.right * moveSpeed * Time.deltaTime);
    }
    
}