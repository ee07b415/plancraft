#pragma strict

public var bullet : GameObject;

function Update ()
{
    if(Input.GetMouseButtonDown(0))
    {
        var bulletInstance : GameObject;
        bulletInstance = Instantiate(bullet, GameObject.Find("You").transform.position, GameObject.Find("You").transform.rotation);
    }

}