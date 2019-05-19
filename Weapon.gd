extends Node2D

func _ready():
	pass

var attack: float  = 0.00001;

func _process(delta):
	if Input.is_action_just_pressed('attack') && attack == -1:
		attack = 0;
		get_node("Weapon/Swipe").visible = true;
	
	if attack >= 0:
		attack += delta * 5;
		rotation = PI / 2 * attack - PI / 4;
		if attack > 1:
			attack = -1;
			get_node("Weapon/Swipe").visible = false
