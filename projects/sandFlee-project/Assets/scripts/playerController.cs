using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerController : MonoBehaviour {
	public Rigidbody rigidbody; 
	public int speed; 
	public int jumpForce; 

	private Vector3 startPosition; 
	private bool isGrounded; 
	void Start(){
		rigidbody = GetComponent<Rigidbody>(); 

		startPosition = transform.position;  
	}
	void Update(){

		//check for restart: 
		if(transform.position.y < -15){
			gameActions.restart(rigidbody, startPosition); 
		}

		//quit the game 
		if(Input.GetKeyDown("escape")){
			gameActions.quit(); 
		}
	}
	void FixedUpdate(){
		//jump if jumpkeys are pressed 
		if(Input.GetKeyDown("space") && isGrounded){
			playerActions.jump(rigidbody, jumpForce); 
		}
		//move player based on standard controllers: 
		rigidbody.AddForce(new Vector3(Input.GetAxis("Horizontal"), 0.0f, Input.GetAxis("Vertical")) * speed); 
	}

	void OnCollisionStay(Collision collisionInfo){
		isGrounded = true; 
	}
	void OnCollisionExit(Collision collisionInfo){
		isGrounded = false; 
	}	
}
