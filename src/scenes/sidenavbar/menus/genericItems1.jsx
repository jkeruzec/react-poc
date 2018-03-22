import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';

export const generic1 = (
		<div>
		<ListItem button>
		<ListItemIcon>
		<InboxIcon />
		</ListItemIcon>
		<ListItemText primary="Form 1" />
			</ListItem>
		<ListItem button>
		<ListItemIcon>
		<StarIcon />
		</ListItemIcon>
		<ListItemText primary="Form 2" />
			</ListItem>
		<ListItem button>
		<ListItemIcon>
		<SendIcon />
		</ListItemIcon>
		<ListItemText primary="Form 3" />
			</ListItem>
		<ListItem button>
		<ListItemIcon>
		<DraftsIcon />
		</ListItemIcon>
		<ListItemText primary="Form 4" />
			</ListItem>
		</div>
);
