#pragma strict

// level control
public static var levelcont	: int = 1;
//  for level one initial direction
public var initx	:  int = 1;
public var inity	:  int = 1;

//level two initial direction
public var initdirection : int = 1;
//level two enemy finder for 2nd order line use
public var x : float;
public var y : float;
public var slope : float = 1.0;
public var inlock : int = 1; // in case of fly away, direction change can only happen once on each wall

function Start(){
	 x = GameObject.Find("enemy").transform.position.x;
	 y = GameObject.Find("enemy").transform.position.y;
	 transform.position.x=x;
}

function Update () {

	if(transform.position.y<6){
	switch(levelcont){
	case 1://straight line
			transform.Translate(Vector2(initx,inity) * 2 * Time.deltaTime);		
			inity = inity-2*inity*Mathf.Floor(Mathf.Abs(transform.position.y)/5);
			initx = initx-2*initx*Mathf.Floor(Mathf.Abs(transform.position.x)/5);
	break;
	case 2://Parabola
		transform.position.x=transform.position.x+2*Time.deltaTime*initdirection;
		transform.position.y=y-(slope*transform.position.x-x)*(slope*transform.position.x-x);
	
		// edge detection on x
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
		// edge detection on y
		if(Mathf.Abs(transform.position.y)>5.0){
			x=x+2*Mathf.Sqrt(y+5)*initdirection;
		}
	break;	
	}
	}
	
	var x : float = Mathf.Abs(GameObject.Find("You").transform.position.x-transform.position.x);
	var y : float = Mathf.Abs(GameObject.Find("You").transform.position.y-transform.position.y);
	
	
	if(x<0.14&&y<0.14){
		Application.LoadLevel (Application.loadedLevel);
		
		if(Scoreb.score>Scoreb.historyscore){
			Scoreb.historyscore=Scoreb.score;
		}
		Scoreb.score=0;
	}
}