extends Node2D

signal gui_update;

func gui_update(method, params):
	emit_signal('gui_update', method, params);

func _ready():
	pass
