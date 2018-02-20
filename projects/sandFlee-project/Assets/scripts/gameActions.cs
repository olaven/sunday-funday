using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement; 

public class gameActions : MonoBehaviour {
	public static void restart(Rigidbody rb, Vector3 startPos){
		rb.position = startPos; 
	}
	public static void quit(){
		Application.Quit(); 
	}
	public static void lost(){
		scoreScript.reset(); 
		SceneManager.LoadScene("menu");  
	}
}
