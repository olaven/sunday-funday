using System.Collections;
using System.Collections.Generic;
using UnityEngine;
/*
	applies the given material (public var) to all child elements
*/
public class addTextures : MonoBehaviour {
	//public reference to the material to be applied 
	public Material material; 
	// Use this for initialization
	void Start () {
		foreach(Transform child in transform)
		{
			child.GetComponent<Renderer>().material = material; 
		}
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
