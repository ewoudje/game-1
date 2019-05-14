extends Node

var ladders = {};

func add_ladder(name: String, ld: Node2D):
	ladders[name] = ld;

func get_ladder(name: String) -> Node2D:
	return ladders[name]