extends Sprite

var interactive = true;

var ladders;

func init_object(world_data: Node):
	ladders = world_data.get_node('Ladders');
	ladders.add_ladder(get_meta('ConnectID'), self);

func can_interact(character: KinematicBody2D) -> bool:
	return character.level == ((0x3FF << (get_meta('Level') + 1)) ^ 0x3FF) & 0x3FF;

func on_interact(character: KinematicBody2D):
	var ladder = ladders.get_ladder(get_meta('ConnectTo'));
	character.position = ladder.position;
	character.level = ((0x3FF << (ladder.get_meta('Level') + 1)) ^ 0x3FF) & 0x3FF;
	character.entered = [];
	character.update_mask();
