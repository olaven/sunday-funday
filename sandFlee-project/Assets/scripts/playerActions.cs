using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerActions : MonoBehaviour {
	public static void jump(Rigidbody rb, int jumpForce){
		rb.AddForce(Vector3.up * jumpForce); 
	}
}
