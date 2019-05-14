extends Node2D

export (Shape2D) var interaction_shape;
export (Dictionary) var objects = {};

func _ready():
	var children = get_children();
	for child in children:
		if child.has_meta('ObjectID'):
			var script = objects[child.get_meta('ObjectID')];
			child.set_script(script);
			if child.has_method('init_object'):
				child.init_object(get_node('..').world_data);
			if child.get('interactive'):
				var shape = CollisionShape2D.new();
				shape.shape = interaction_shape;
				var area = Area2D.new();
				area.collision_mask = 0;
				area.collision_layer = 0;
				area.add_child(shape);
				area.set_collision_mask_bit(10, true);
				area.connect('body_entered', self, 'close_to_interactable_in', [ child ]);
				area.connect('body_exited', self, 'close_to_interactable_out', [ child ]);
				area.position = Vector2(16, -16);
				child.add_child(area);

func close_to_interactable_in(body, object):
	get_node('..').gui_update('show_key_info', ['E',  object.position - Vector2(10, 10), object.name]);
	body.current_interactor = object;

func close_to_interactable_out(body, object):
	get_node('..').gui_update('remove_key_info', [object.name]);
	body.current_interactor = null if object == body.current_interactor else body.current_interactor;
