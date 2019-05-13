extends Control

export (Font) var key_font;

func _ready():
	pass

var keys = {};

func show_key_info(key, pos, id):
	var rect = ColorRect.new()
	rect.color = Color.white;
	rect.rect_position = pos;
	rect.rect_size = Vector2(30, 30);
	var label = Label.new();
	label.text = key;
	label.align = Label.ALIGN_CENTER;
	label.valign = Label.VALIGN_CENTER;
	label.rect_size = Vector2(30, 30);
	label.add_font_override('font', key_font);
	label.add_color_override('font_color', Color.black);
	rect.add_child(label);
	add_child(rect);
	keys[id] = rect;

func remove_key_info(id):
	remove_child(keys[id]);

func _gui_update(method, params):
	if has_method(method):
		callv(method, params);
