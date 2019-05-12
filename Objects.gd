extends Node2D

export (Dictionary) var objects = {};

func _ready():
	var children = get_children();
	for child in children:
		if child.has_meta('ObjectID'):
			var script = objects[child.get_meta('ObjectID')];
			child.set_script(script);
			child.init_object();
