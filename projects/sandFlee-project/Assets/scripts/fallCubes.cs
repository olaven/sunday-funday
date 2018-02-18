using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class fallCubes : MonoBehaviour {

	public Rigidbody rb; 

	void Start(){
		rb = GetComponent<Rigidbody>();

		rb.drag = 10; 
		reload(); 
	}

	void FixedUpdate(){
		//if falling off 
		if(transform.position.y < -20.0f){
			reload(); 
		}
	}
	//if collidding 
	void OnCollisionStay(Collision collision){
		if(collision.gameObject.name == "ground" && rb.velocity == new Vector3(0.0f,0.0f,0.0f)){
			StartCoroutine(wait(10.0f));
			reload(); 
		} 
		else if(collision.gameObject.name == "player"){
			gameActions.lost(); 
		}
	}
	private float rr(float min, float max){
		return Random.Range(min, max);
	}
	private void reload(){
		transform.position = new Vector3(rr(-50.0f, 50.0f), rr(10.0f,100.0f), rr(-50.0f, 50.0f)); 
		transform.localScale = new Vector3(20.0f, 20.0f, 20.0f); 
	}
	IEnumerator wait(float duration) {
		yield return new WaitForSeconds(duration);
 	}
}
