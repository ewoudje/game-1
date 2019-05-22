extends Node

func init_npc(world_data: Node):
	pass

func on_interact(character: KinematicBody2D):
	if !character.has_dialog():
		character.set_dialog(get_node("Intro"), self, 'on_end_intro');

func on_end_intro(end: String):
	if end == "Good":
		get_tree().change_scene("res://GoodJob.tscn")
	else:
		if end == "Game":
			get_tree().change_scene("res://YouDied.tscn")
