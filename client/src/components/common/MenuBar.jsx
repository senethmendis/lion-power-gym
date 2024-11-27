import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";

export default function MenubarDemo() {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>Option</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<Link to={"/members"}>Members</Link>
					</MenubarItem>
					<MenubarItem>
						<Link to={"/equipments"}>Equipments</Link>
					</MenubarItem>
					<MenubarItem>
						<Link to={"/addMember"}>Add Member</Link>
					</MenubarItem>

					<MenubarSeparator />
					<MenubarItem>Logout</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			{/* second menu equipment */}
			<MenubarMenu>
				<MenubarTrigger>Equipment</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						Undo <MenubarShortcut>⌘Z</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Find</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>Search the web</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Find...</MenubarItem>
							<MenubarItem>Find Next</MenubarItem>
							<MenubarItem>Find Previous</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarItem>Cut</MenubarItem>
					<MenubarItem>Copy</MenubarItem>
					<MenubarItem>Paste</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
