extends Node2D

export (NodePath) var world_data setget, get_world_data;

func get_world_data():
	return get_node(world_data);

signal gui_update;

func gui_update(method, params):
	emit_signal('gui_update', method, params);

func _ready():
	pass
