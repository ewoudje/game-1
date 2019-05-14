extends Sprite

var light_texture = preload("res://assets/licht.png");

func init_object(world_data):
	var light = Light2D.new();
	light.color = Color("#f2ae7c");
	light.shadow_enabled = true;
	light.position = Vector2(16, -16);
	light.texture = light_texture;
	light.scale = Vector2(2, 2);
	add_child(light);
