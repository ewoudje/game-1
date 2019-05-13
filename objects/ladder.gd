extends Sprite

var interactive = true;

func init_object():
	pass

func on_interact(character: KinematicBody2D):
	character.position = Vector2(0,0);
