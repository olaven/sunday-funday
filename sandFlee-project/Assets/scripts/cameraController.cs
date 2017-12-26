using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class cameraController : MonoBehaviour {
	//player som kamera skal stilles i forhold til 
	public GameObject player; 
	//avstand fra player
	private Vector3 offset;
	// Use this for initialization
	void Start () {
		//avstanden er kameraets posisjon minus spillerens posisjon (3dim-vektor)
		offset = transform.position - player.transform.position; 
	}
	
	// Update is called once per frame
	void LateUpdate(){
		transform.position = player.transform.position + offset; 
	}
}
