extends TextureRect

signal on_dialog_end(end);

signal on_dialog_effect(effect);

var dialog;
var end = null;

func dialog_next(ref: String, actor: String, text: String):
	disconnect('gui_input', self, 'on_dialog_click');
	var c = new_dialog_child();
	connect('gui_input', self, 'on_dialog_click', [ -1 ]);
	var acto = Label.new();
	acto.text = actor;
	c.add_child(acto);
	var textl = Label.new();
	textl.text = text;
	c.add_child(textl);
	if ref.ends_with('END'):
		end = ref.substr(0, ref.length() - 3);

func dialog_choice_next(ref, choices):
	disconnect('gui_input', self, 'on_dialog_click');
	var c = new_dialog_child();
	var box = VBoxContainer.new();
	for i in range(choices.size()):
		var choice = choices[i];
		var margin = MarginContainer.new();
		var back = ColorRect.new();
		back.color = Color('#222222AA');
		back.rect_min_size = Vector2(800, 20);
		back.connect('gui_input', self, 'on_dialog_click', [ i ]);
		var l = Label.new();
		l.text = choice.Dialogue;
		margin.add_child(back);
		margin.add_child(l);
		box.add_child(margin);
	c.add_child(box);

func new_dialog_child() -> Control:
	if get_child_count() > 0:
		for child in get_children():
			remove_child(child);
	var container = VBoxContainer.new();
	add_child(container);
	return container;

func connect_dialog():
	dialog.connect('Dialogue_Next', self, 'dialog_next');
	dialog.connect('Choice_Next', self, 'dialog_choice_next');

func disconnect_dialog():
	dialog.disconnect('Dialogue_Next', self, 'dialog_next');
	dialog.disconnect('Choice_Next', self, 'dialog_choice_next');

func end_dialog():
	disconnect_dialog();
	dialog.end_dialogue();
	dialog = null;
	disconnect('gui_input', self, 'on_dialog_click');
	for child in get_children():
		remove_child(child);
	end = null;

func _process(delta):
	if Input.is_action_just_pressed("space"):
		dialog.next_dialogue();

func on_dialog_click(input: InputEvent, index):
	if input.is_action('click'):
		if end:
			emit_signal('on_dialog_end', end);
			end_dialog();
		else:
			dialog.next_dialogue(index);