import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";

const MenubarDemo = () => {
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
						<Link to={"/add"}>Add Member</Link>
					</MenubarItem>

					<MenubarSeparator />
					<MenubarItem>Logout</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
};
export default MenubarDemo;
