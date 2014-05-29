#pragma strict

public var initdirection : float;
public var x : float;
public var y : float;
public var inlock : int = 1;


function Start(){
	 initdirection=1.0;
	 x = GameObject.Find("enemy").transform.position.x;
	 y = GameObject.Find("enemy").transform.position.y;
	 transform.position.x=x;
}

function Update () {
	if(transform.position.y<6.0){
	transform.position.x=transform.position.x+2*Time.deltaTime*initdirection;
	transform.position.y=y-(transform.position.x-x)*(transform.position.x-x);
	
	if(transform.position.x>=5.0 && inlock == 1){
		x=10*initdirection-x;
		initdirection=-initdirection;
		inlock = -1;
	}
	if(transform.position.x<=-5.0 && inlock == -1){
		x=10*initdirection-x;
		initdirection=-initdirection;
		inlock = 1;
	}
	
	
	if(Mathf.Abs(transform.position.y)>5.0){
		x=x+2*Mathf.Sqrt(y+5)*initdirection;
	}
	
	
	var xme : float = Mathf.Abs(GameObject.Find("You").transform.position.x-transform.position.x);
	var yme : float = Mathf.Abs(GameObject.Find("You").transform.position.y-transform.position.y);
	
	
	if(xme<0.14&&yme<0.14){
		Application.LoadLevel (Application.loadedLevel);
		
		if(Scoreb.score>Scoreb.historyscore){
			Scoreb.historyscore=Scoreb.score;
		}
		Scoreb.score=0;
	}
	}
}