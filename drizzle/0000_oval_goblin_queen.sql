CREATE TABLE `categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`icon_id` integer NOT NULL,
	FOREIGN KEY (`icon_id`) REFERENCES `icons`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `icons` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`set_name` text NOT NULL,
	`color` text NOT NULL,
	`type` text NOT NULL
);
