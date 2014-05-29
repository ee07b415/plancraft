#pragma strict

public var moveSpeed : float = 20f;
public var curdir	:  int = 1;
public var inlock : int = 1;

function Start () {

}

function Update () {

	var h : float = transform.position.x;
	if (h<-4.5 && inlock ==1){
		curdir = - curdir;
		transform.Translate(curdir*Vector2(-1,0) * moveSpeed * Time.deltaTime);
		inlock = -1;
	}else if(h>4.5 && inlock  == -1){
		curdir = - curdir;
		transform.Translate(curdir*Vector2(-1,0) * moveSpeed * Time.deltaTime);
		inlock = 1;
	}else{
		transform.Translate(curdir*Vector2(-1,0) * moveSpeed * Time.deltaTime);
	}
}