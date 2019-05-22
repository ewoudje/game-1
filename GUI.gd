extends Node

export (Font) var key_font;

onready var dialog_handler = get_node("CanvasLayer/DialogHandler");
onready var world_layer = get_node("WorldLayer");

var keys = {};

func show_key_info(key, pos, id):
	var rect = ColorRect.new()
	rect.color = Color.white;
	rect.rect_position = pos;
	rect.rect_size = Vector2(12, 12);
	var label = Label.new();
	label.text = key;
	label.align = Label.ALIGN_CENTER;
	label.valign = Label.VALIGN_CENTER;
	label.rect_size = Vector2(12, 12);
	label.add_font_override('font', key_font);
	label.add_color_override('font_color', Color.black);
	rect.add_child(label);
	world_layer.add_child(rect);
	keys[id] = rect;

func remove_key_info(id):
	world_layer.remove_child(keys[id]);

func _gui_update(method, params):
	if has_method(method):
		callv(method, params);
