extends CanvasModulate

var time = 1;
var raise = true;

func _process(delta):
	if raise:
		time += delta / 100;
	else:
		time -= delta / 100;
	color = Color(0.3333 * time, 0.3333  * time, 0.3333  * time, 1)
	if time > 3:
		raise = false;
	else:
		if time < 1:
			raise = true;
