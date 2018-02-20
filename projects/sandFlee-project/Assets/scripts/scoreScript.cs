using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class scoreScript : MonoBehaviour {
	public Text text; 
	private static float score; 
	// Use this for initialization
	void Start () {
		score = 0.0f; 
		text = GetComponent<Text>(); 
	}
	
	// Update is called once per frame
	void Update () {
		score += Time.deltaTime; 
		text.text = "Score: " + Mathf.RoundToInt(score); 
	}
	public static void reset(){
		score = 0.0f; 
	}
}
