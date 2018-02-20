using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement; 

public class menuController : MonoBehaviour {
	// Update is called once per frame
	void Update () {
		//check if enteror esc is pressed 
		if(Input.GetKeyDown(KeyCode.Escape)){
			Debug.Log("quitting");
			gameActions.quit();  
		} 
		if(Input.GetKeyDown(KeyCode.Return)){
			Debug.Log("to game!");
			SceneManager.LoadScene("main");  
		}
	}
}
